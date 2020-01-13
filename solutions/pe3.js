//This program is intended to find the largest factor that is a prime for a given input.

function largestPrimeFactor(number) {
    var i = 0,
    j = 0,
    k = 0;
    var factor = [];
    var prime = [];

    //create array of all factors for the given number.
    for (i = 0; i < number; i++) {

        if (Number.isInteger(number/i)) {
            factor[j] = i;
            j++;
        }
    }

    var len = factor.length;
    if (len == 1) {
        prime[0] = number;
    }

    //to determine if any of the factors are prime.
    for (i = 0; i < len; i++){
        var temp = factor[i]
        for(j = 2; j < temp; j++) {
            if(temp % j === 0) {
                break;
            }
            else if ((j + 1) % temp == 0) {
                prime[k] = temp;
                k++;
            }
        }

    }

    var primelen = prime.length;
    var bigprime = prime[(primelen-1)];

    //console.log(primelen);
    console.log(bigprime);

    return bigprime;

}

largestPrimeFactor(7)
