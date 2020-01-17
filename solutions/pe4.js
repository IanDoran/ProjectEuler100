//This attempt at the palindrome problem takes the approach of multiplying all n length numbers together and looking for palindromes
function largestPalindromeProduct(n) {

    var i = 0,
    j = 0,
    k = 0,
    l = 0,
    counter = 0;
    var num = new Array(n);
    var protopal;
    var palindromes = [];

    for (i = 0; i < n; ++i) { //creates an integer with "n" 9s
        num[i] = 9;
    }

    var numb = num.join('');
    var number = parseInt(numb, 10); //this is the largest 'n' digit number

    factor_loop:
    for (i = number; i > 0; i--) {
        for (j = number; j > 0; j--){
            protopal = i* j; // potential palindrome
            var pal = protopal.toString(); // convert to string to check if it's a palindrome

            palindrome_check:
            for (k = 0, counter = 0; k < n; k++) {
                if (pal[k] == pal[(2*n) - k - 1]) {
                    counter++

                    if ( counter == n) {
                        palindromes[l] = protopal;  //if number is a palindrome save it to palindromes array
                        l++
                    }

                }

                else {
                break palindrome_check;
                }
            }

        }
    }
    console.log(Math.max(...palindromes));
    var largestpal = Math.max(...palindromes); //find largest palindrome in palindromes array
    return largestpal;
}

largestPalindromeProduct(4);
