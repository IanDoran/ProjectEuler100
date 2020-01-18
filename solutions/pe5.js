//This function will find the smallest number divisible by consecutive whole numbers from 1 to n.
//Pseudocode: 
//For a given number from 1 to x divide by nunbers 1 thru n.
//If the quotient after dividing by all numbers n are whole numbers the number x is the solution.


function smallestMult(n) {
  var x = 0,
  i = 0,
  j = 0,
  div = 0,
  smallest = 0,
  counter = 0;
  
  
  for (i = 1; i > 0; i++) {
    dividendloop:  
    for (j = 1; j < n; j++) {
      div = i / j;
      if (Number.isInteger(div)) {
        counter++;
        if (counter == n - 1) {
        smallest = i;
        break;
        }
      }
      else {
      break dividendloop;
      }
    }
  }
  return smallest;
  console.log(smallest);
}

smallestMult(5);
