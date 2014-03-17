var sys = require('sys')
var exec = require('child_process').exec;
// process.argv.forEach(function (val, index, array) {
//   if( index === 2 ) console.log(index + ': ' + val);
// });
switch(process.argv[2]) {
  case '1':
    console.log('|   Launching Excercise 1');
    console.log('|   takes an optional string');
    var command = 'node minmax.js '
    if( process.argv[3] != undefined ) {
       command = command + process.argv[3];
    }
    console.log( command );
    exec( command, function (error, stdout, stderr) { console.log(stdout) });
    break;
  case '2':
    console.log('|   Launching Excercise 2 @ localhost:8080');
    var command = 'export PORT=8080;node person-status.js'
    console.log( command );
    exec( command, function (error, stdout, stderr) { console.log(stdout) });
    console.log('|   Success');
    console.log('|   Listening to http://localhost:8080');
    break;
  case '3':
    var port = 8080;
    var command = 'node node_modules/http-server/bin/http-server starbound_today_erm/'
    console.log('|   Launching Excercise 3 @ localhost:8080');
    console.log( command );
    exec( command, function (error, stdout, stderr) { console.log(stdout) });
    console.log('|   Success');
    console.log('|   Listening to http://localhost:8080');
    break;
  default:
    console.log(
      '|   Welcome to Taylor\'s OrgSync Dev Excercise\n'+
      '|   You can launch each excercise by passing it\'s number to this app\n'+
      '|   Excercise one can take an optional string\n'+
      '|   node app.js 1 \'string\'\n'+
      '|   node app.js 2\n'+
      '|   node app.js 3'
    );
}