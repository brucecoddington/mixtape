var locomotive = require('locomotive');

locomotive.boot('./', process.env.NODE_ENV, function (err, app) {
    if (err){
        throw err;
    }

    console.log('process env : ' + process.env.NODE_ENV);
    console.log('locomotive : ' + locomotive);
    console.log('app.settings.port: ' + app.settings.port);
    console.log('app.settings.env: ' + app.settings.env);

    var keys = Object.keys(app.settings);
    console.log('keys : ' + keys);
    for (var a = 0; a < keys.length; a++) {
      var key = keys[a];
      console.log(key + ": " + app.settings[key]);
    }


    var server = app.listen(app.settings.port, function () {
        console.log("Ready for requests on port %d in %s mode.", app.settings.port, app.settings.env);
    });

    //global.socketio = require('./config/bootstrap/socket')(server);

});