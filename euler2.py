fib_limit = 4000000
fnn = 1
fnnn = 1
tot = 0
while fnnn < fib_limit :
	fn = fnnn
	fnnn = fnnn + fnn
	fnn = fn
	if (0 == fnnn % 2) :
		tot += fnnn
print tot
