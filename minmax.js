var string = "supercalifragilisticexpialidocious";
// var string = "ddddddsupercalifragilisticexpialidocious";
var _ = require('underscore');

if( process.argv[2] != undefined ) {
  string = process.argv[2];
}

var getKeyByValue = function( object, value ) {
  for( var prop in object ) {
    if( object.hasOwnProperty( prop ) ) {
       if( object[ prop ] === value )
         return prop;
    }
  }
}

var getLowestCharCode = function( object, extract ) {
  var charCodes = {};
  _.filter(object, function(obj, index) {
    if( obj === extract ){
      charCodes[index] = index.charCodeAt(0);
    }
    return false;
  });
  return charCodes;
}

var displayLowest = function(obj){
  var arr = Object.keys( obj ).map(function ( key ) { return obj[key]; });
  var min = Math.min.apply( null, arr );
  return getKeyByValue( obj, min )
}

var sploded = string.split('');

var string_counts = _.reduce(string,function(counts,key){ counts[key]++; return counts },
    _.object( _.map( _.uniq(string), function(key) { return [key, 0] })));

console.log( 'min-maxing', string );
console.log( 'letter_counts', string_counts );
console.log( 'min count tie freq:', _.min(string_counts), getLowestCharCode( string_counts, _.min(string_counts) ) );
console.log( 'max count tie freq:', _.max(string_counts), getLowestCharCode( string_counts, _.max(string_counts) ) );
console.log( 'min value:', _.min(string_counts), displayLowest( getLowestCharCode( string_counts, _.min(string_counts) ) ) );
console.log( 'max value:', _.max(string_counts), displayLowest( getLowestCharCode( string_counts, _.max(string_counts) ) ) );
