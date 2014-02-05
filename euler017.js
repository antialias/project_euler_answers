var numbers_a = ["zero","one","two","three","four",
"five","six","seven","eight","nine",
"ten","eleven","twelve","thirteen","fourteen",
"fifteen","sixteen","seventeen","eighteen","nineteen",
"twenty"];
var numbers = {};
numbers_a.forEach(function (en,n) {
	numbers[n] = en;
});
numbers[30] = "thirty";
numbers[40] = "forty";
numbers[50] = "fifty";
numbers[60] = "sixty";
numbers[70] = "seventy";
numbers[80] = "eighty";
numbers[90] = "ninety";
numbers[100] = "hundred";
numbers[1000] = "thousand";
numbers[1000000] = "million";
var engnum = function (n) {
	if (n < 100 && numbers[n] && numbers[n] !== "") {
		return numbers[n];
	}
	var p, lp, pp, pn;
	for (p in numbers) {
		if (numbers.hasOwnProperty(p)) {
			pn = parseInt(p, 10);
			if (pn > n && lp <= n) {
				pp = lp;
				break;
			}
			lp = pn;
		}
	}
	if (!pp) {
		return;
	}
	if (pp < 100) {
		return "" + numbers[pp] + " " + engnum(n - pp);
	}
	var remainder = n % pp;
	return "" + engnum(Math.floor(n / pp)) + " " + numbers[pp] + (remainder > 0 ? " and " + engnum(n % pp) : "");
}
var en,n,c = 0;
for (n=1; n <= 1000; ++n) {
	en = engnum(n);
	c += en.replace(/ /g, "").length;
	console.log(en);
}
console.log(c);