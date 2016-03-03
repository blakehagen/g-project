var express = require('express'),
    request = require('request'),
    app     = express(),
    server;

app.get('/representatives/:state',
  findRepresentativesByState,
  jsonResponse
);

app.get('/senators/:state',
  findSenatorsByState,
  jsonResponse
);

function findRepresentativesByState(req, res, next) {
  var url = 'http://whoismyrepresentative.com/getall_reps_bystate.php?state={0}&output=json'.replace('{0}', req.params.state);
  request(url, handleApiResponse(res, next));
}

function findSenatorsByState(req, res, next) {
  var url = 'http://whoismyrepresentative.com/getall_sens_bystate.php?state={0}&output=json'.replace('{0}', req.params.state);
  request(url, handleApiResponse(res, next));
}

function handleApiResponse(res, next) {
  return function(err, response, body){
    if (err || body[0] === "<") {
      res.locals = {
        success: false,
        error: err || 'Invalid request. Please check your state variable.'
      };
      return next();
    }
    res.locals = {
      success: true,
      results: JSON.parse(body).results
    }
    return next();
  };
}

function jsonResponse(req, res, next) {
  return res.json(res.locals);
}

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 4400;

app.listen(port, function () {
    console.log('Listening on port ' + port);
});
