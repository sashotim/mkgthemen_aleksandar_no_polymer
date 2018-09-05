var Extrator = require("html-extractor");
var myExtrator = new Extrator();

var html = `

`

myExtrator.extract( html, function( err, data ){
    if( err ){
        throw( err )
    } else {
        console.log( data );
    }
});
