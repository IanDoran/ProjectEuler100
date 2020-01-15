//This attempt at the palindrome problem takes the approach of multiplying all n length numbers together and looking for palindromes
function largestPalindromeProduct(n) {

    var i = 0,
    j = 0,
    k = 0,
    l = 0;
    var num = new Array(n);
    for (i = 0; i < n; ++i) {
        num[i] = 9;
    }
    var numb = num.join('');
    var number = parseInt(numb, 10); //this is the largest 'n' digit number
    console.log(number);
    var protopal;
    var palint = 9009;
    var pal = palint.toString();
    var factor = [];

    //for (i = number; i > 0; i--) {
        //for (j = number; i > 0; j--){
            //protopal = i* j; // potential palindrome
            //var pal = protopal.toString(); // convert to string

            //palindrome check
            for (k = 0; k < n; k++) {
                if (pal[k] == pal[(2*n) - k - 1]) {
                    console.log(pal[k]);
                    console.log(pal[(2*n) - k - 1]);
                    factor[l] = [i, j];
                    console.log(factor[l]);
                    l++;

                    
                }

                else {
                pass = false;
                }
            }

        //}
    //}



    //create array of all three digit factors for the given number.
    //for (i = 0; i <= number; i++) {
    //    if (Number.isInteger(number/i) && i > 99 && i < 1000) {
    //        factor[j] = i;
    //        j++;
    //    }
    //}
    console.log(factor);
}

largestPalindromeProduct(2);
