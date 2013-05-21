import math
n = 600851475143
c = 2
s = [1] * int(math.sqrt(n)) # our sieve
while c < len(s) : # populate the sieve
	si = c
	while si < len(s) and 0 == s[si] : # find the next possible cantidate in the sieve
		# print "we don't need to check {}".format(si)
		si = si + 1
	possible_factor = n / si
	if (n == si) :
		print n
		break;
	elif 0 == n % si :
		possible_factor = n / si
		print "{} is a prime factor of {}, now we need to check if the recip, {} is prime as well".format(si, n, possible_factor)
		n = possible_factor
	c = si
	# print "sieving {}".format(c)
	while si < len(s) - c :
		si += c
		s[si] = 0
	lpfc = n / c
	c += 1