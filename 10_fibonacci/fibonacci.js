const fibonacci = (n) => {
    if (typeof(n) === 'string')
        n = Number.parseInt(n);
    if (n < 0)
        return 'OOPS';
    n--;
    return fib(n);

    function fib(n){
        if (n === 0 || n == 1)
            return 1;
        return fib(n - 1) + fib(n - 2);
    }
}

// Do not edit below this line
module.exports = fibonacci;
