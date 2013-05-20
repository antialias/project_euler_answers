def euler2(fib_limit) :
    fnn = 1
    fnnn = 1
    tot = 0
    while fnnn < fib_limit :
        fn = fnnn
        fnnn = fnnn + fnn
        fnn = fn
        if (0 == fnnn % 2) :
            tot += fnnn
    return tot
print euler2(4000000)