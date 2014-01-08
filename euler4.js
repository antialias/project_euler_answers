function lp() {
	var i, j, k, s, low = 100 * 100;
	for (i=999*990; i >= low; i -= 1) {
		for (j = 999; j >= 100; --j) {
			if (0 === i % j) {
				k = i / j;
				if (k >= 100 && k < 1000) {
					s = i.toString();
					if (s.split('').reverse().join('') === s) {
						console.log(i + " = " + j + " * " + k);
						return i;
					}
				}
			}
		}
	}
}
console.log(lp());