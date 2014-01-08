// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// 
// What is the 10 001st prime number?

var max = 1000000;
var s = new Array(max);
s[0] = 0;
s[1] = 0;
var i = 1;
while(i < max) {
	++i;
	if (0 === s[i]) {
		continue;
	}
	for(j = i*2; j < max; j += i) {
		s[j] = 0;
	}
}
var c = 0;
for (i=0; i < s.length; ++i) {
	if (undefined === s[i]) {
		++c;
		// console.log(i);
		if (c >= 10001) {
			break;
		}
	}
}
console.log("" + i + "'s prime position is " + c);