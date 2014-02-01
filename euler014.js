// Longest Collatz sequence
// Problem 14
// The following iterative sequence is defined for the set of positive integers:
// 
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
// 
// Using the rule above and starting with 13, we generate the following sequence:
// 
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
// 
// Which starting number, under one million, produces the longest chain?
// 
// NOTE: Once the chain starts the terms are allowed to go above one million.
// 
console.time("collatz");
var m = {};
var cl = {};


var mn, mc = 0, op = 0, tc = 0;
var on, n;
var c = 0;
for(on = 2; on <= 1000000; ++on) {
	var n = on;
	c = 0;
	while (n !== 1) {
		++c;
		++tc;
		var r;
		if (undefined !== m[n]) {
			n = m[n];
		} else {
			if (n % 2) {
				r = 3 * n + 1;
			} else {
				r = n / 2;
			}
			m[n] = r;
			n = r;
		}
		// console.log(n);
		if (undefined !== cl[n]) {
			c += cl[n];
			op += cl[n];
			tc += cl[n];
			// console.log("leveraged an existing count, " + on + " : " + c + " -> " + n + " : " + cl[n]);
			break;
			n = 1;
		}
	}
	cl[on] = c;
	if (c > mc) {
		mc = c;
		mn = on;
		console.log("new max count: " + mc + " for " + mn);
	}
}
// console.log("max count: " + mc + " for " + mn);
console.log("total counts: " + tc);
console.log("skipped counts: " + op);
console.log("actual counts: " + (tc - op));
console.log("speedup: " + op / tc);

console.timeEnd("collatz");
