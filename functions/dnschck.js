const dns = require('dns');

exports.handler = function (evt, cont, callb) {
  if(evt.httpMethod=='GET' && ('s' in evt.queryStringParameters)){
    dns.lookup(evt.queryStringParameters.s, function onLookup(err, address, family) {
      if(err){
        callb(null, {
          statusCode: 404,
          body: err.errno
        });
      } else {
        callb(null, {
          statusCode: 200,
          body: "exists"
        });
      }
    });  
  } else {
    callb(null, {
      statusCode: 404,
      body: 'failed'
    })
  }
}
