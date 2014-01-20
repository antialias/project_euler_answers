var stn, d, i = 0, nd = 0, tn = 0;
while (nd < 500) {
	++i;
	tn += i;
	nd = 0;
	stn = Math.sqrt(tn);
	for(d = 1; d <= stn; ++d) {
		if (0 === tn % d) {
			var dr = tn / d;
			// console.log("" + d + " and " + dr + " divides " + tn + ": " + (tn / d));
			++nd;
			if (dr != d) {
				++nd;
			}
		}
	}
}
console.log("total divisors for " + tn + ": " + nd);
