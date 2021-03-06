// this is a benchmark of number conversion methods and applications of negative or positibe
console.log( "ES Number Conversion Benchmark" )

function test() 
{

var negative = true

const val = { string : "1234", negative : false };

console.log( "typeof:", typeof +val.string );

start = Date.now();
for( var m = 0; m < 5000; m++ ) {val.negative = m&1;
for( var n = 0; n < 100000; n++ )
	//negative?-Number( "1234" ):Number("1234");
	val.negative?-(+val.string):(+val.string);
}
console.log( "took:", Date.now() - start );

var start = Date.now();

for( var m = 0; m < 5000; m++ ) { val.negative = m&1;
for( var n = 0; n < 100000; n++ )
	(val.negative?-1:1) * (+val.string);
	//Number("1234") * (negative?-1:1);
}
console.log( "took:", Date.now() - start );



var start = Date.now();

for( var m = 0; m < 5000; m++ ) { val.negative = m&1;
for( var n = 0; n < 100000; n++ )
	(+val.string) * (val.negative?-1:1);
	//Number("1234") * (negative?-1:1);
}
console.log( "took:", Date.now() - start );




start = Date.now();
for( var m = 0; m < 5000; m++ ) {negative = m&1;
for( var n = 0; n < 100000; n++ )
	//negative?-Number( "1234" ):Number("1234");
	negative?-(+val.string):(+val.string);
}
console.log( "took:", Date.now() - start );


var start = Date.now();

for( var m = 0; m < 5000; m++ ) { negative = m&1;
for( var n = 0; n < 100000; n++ )
	(+val.string) * (negative?-1:1);
	//Number("1234") * (negative?-1:1);
}
console.log( "took:", Date.now() - start );


var start = Date.now();

for( var m = 0; m < 5000; m++ ) { negative = m&1;
for( var n = 0; n < 100000; n++ )
	(negative?-1:1) * Number(+val.string);
	//Number("1234") * (negative?-1:1);
}
console.log( "took:", Date.now() - start );
}

test();