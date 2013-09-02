var fs = require('fs')
  , locomotive = require('locomotive')
  , https = require('https') 
  , privateKey = fs.readFileSync(__dirname + '/config/cert/privatekey.pem').toString()
  , certificate = fs.readFileSync(__dirname + '/config/cert/certificate.pem').toString()
  , credentials = {key: privateKey, cert: certificate};

var sendReady = function sendReady() {
    //If this process was forked, send the ready message to whoever spawned it
    if (process.send) {
      process.send({ status: 'ready' });
    }
  };

  locomotive.boot('./', process.env.NODE_ENV, function (err, app) {
    if (err){
      throw err;
    }

    console.log('process env : ' + process.env.NODE_ENV);
    console.log('app.settings.port: ' + app.settings.port);
    console.log('app.settings.securePort: ' + app.settings.securePort);
    console.log('app.settings.env: ' + app.settings.env);

    var keys = Object.keys(app.settings);
    console.log('keys : ' + keys);
    for (var a = 0; a < keys.length; a++) {
      var key = keys[a];
      console.log(key + ": " + app.settings[key]);
    }

    var server = app.listen(app.settings.port, function () {
      console.log("Ready for requests on port %d in %s mode.", app.settings.port, app.settings.env);
      sendReady();
    });

    var secureServer = https.createServer(credentials, app);
    secureServer.listen(app.settings.securePort, function () {
      console.log("Ready for requests on port %d in %s mode.", app.settings.securePort, app.settings.env);
      sendReady();
    });

  });