#!/usr/bin/env node
var prime = new Array(),
x = 2,
fs = require('fs'),
outfile = "prime.txt",
out = prime;

// function to test if n is a prime number
function pTest(n) {
	var res ="p"
	for (var i=2;i<=Math.floor(Math.sqrt(n));i++){
		var r = n%i;
		if (r == 0){
			res = "np";
			return res;
		};
	};
	return res;
};


while (prime.length<100) {
	if (pTest(x) == "p") {
		prime.push(x);
		};
	x++;
	};

fs.writeFileSync(outfile, out); 	
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

// for testing confirmation
// document.write(prime);
