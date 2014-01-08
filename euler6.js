var i, sqs = 0, ssq = 0;
for(i=1; i <= 100; ++i) {
	ssq += i * i;
	sqs += i;
}
sqs = Math.pow(sqs,2);
console.log("" + sqs + " - " + ssq + " = " + (sqs - ssq));
// 
// wolfram alpha gives: sum(x^2) + sum(x) ^ 2 from x=1 .. n = 1/12 n (n+1) (3 n+2) (n-1)