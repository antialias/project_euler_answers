import math
b1 = 3.0
b2 = 5.0
n = 10000.0

# print ((n-1) / b1)*(((n-1)/b1)-1)/2 * b1 + ((n-1) / b2)*(((n-1)/b2)-1)/2 * b2
print "smart: {smart}".format(smart=math.floor((n-1)/b2)*((math.floor((n-1)/b2) + 1))/2 * b2 + math.floor((n-1)/b1)*((math.floor((n-1)/b1) + 1))/2 * b1 - math.floor((n-1)/(b1*b2))*((math.floor((n-1)/(b1*b2)) + 1))/2 * b1*b2)

total = 0
for i in range(int(n)) :
	if (0 == i % b1) :
		total += i
print "test:  {total}".format(total=total)
total = 0
for i in range(int(n)) :
	if (0 == i % 5 or 0 == i % 3) :
		total += i
print "brute:  {total}".format(total=total)
