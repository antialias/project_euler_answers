// a^2 + b^2 = c^2
// c = 1000 - a - b
// a^2 + b^2 = (1000 - a - b)^2 // solve for b
// b = 1000(a-500) / (a-1000);
var a, b, c, n, d;
for(a = 1; a < 999; ++a) {
	var n = 1000 * (a - 500), d = (a - 1000);
	if (0 === n % d) {
		b = n / d;
		c = 1000 - a - b;
		console.log(a, b, c);
		console.log("product: " + a*b*c);
		return;
	}
}
