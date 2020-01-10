function fiboEvenSum(n) {

    var fib = [];
    fib[0] = 1;
    fib[1] = 2;
	var even = 0;
	var j = 0;
	var i = 0;

	for (i = 2, j = 0; i < n; i++)
	{
	    {
		fib[i] = fib[i - 1] + fib[i - 2];
	    }
	}
	for (i = 0; i < n; i++)
	{
	    if ((fib[i] % 2) == 0)
	    {
	        even = even + fib[i];
	    }
	}
	console.log(even);
    return even;
}

fiboEvenSum(10);

