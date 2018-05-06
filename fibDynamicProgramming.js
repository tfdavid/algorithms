let cache = { 1: 1, 2: 1 };

function fib(n) {
    if (cache[n]) {
        return cache[n];
    }
    cache[n] = fib(n - 1) + fib(n - 2)
    return cache[n];
}

fib(50);