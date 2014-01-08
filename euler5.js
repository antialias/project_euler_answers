// http://projecteuler.net/problem=5
// 
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// 
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var j, i = 2520;
while (true) {
	for(j = 20; j >= 2; --j) {
		if (0 !== i % j) {
			break;
		}
	}
	if (j === 1) {
		break
	}
	i += 2;
}
console.log(i);