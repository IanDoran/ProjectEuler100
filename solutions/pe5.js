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

  function is_int(value){
  if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
      return true;
  } else {
      return false;
  }
}

  func:
  for (i = 1; i < 1000000000; i++) {
    counter = 0;
    dividendloop:
    for (j = 1; j < n + 1; j++) {
      div = i / j;
      if (is_int(div)) {
        counter++;
        if (counter === (n)) {
          smallest = i;
          break func;
        }
      }
      else {
      break dividendloop;
      }
    }
  }
  console.log(smallest);
  return smallest;

}

smallestMult(20);
