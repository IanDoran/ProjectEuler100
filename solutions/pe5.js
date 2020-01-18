//This function will find the smallest number divisible by consecutive whole numbers from 1 to n.

function smallestMult(n) {
  var i = 0,
  j = 0,
  smallest = 0,
  counter = 0;
  var start = new Date().getTime();//TIMER

  for (i = 0; i < 1000000000;) {
    counter = 0;
    i += n;
    dividendloop:
    for (j = 1; j < n + 1; j++) {
      if (i % j === 0) {
        counter++;
        if (counter === (n)) {
          smallest = i;
          console.log(smallest);
          var end = new Date().getTime();//TIMER
          var time = end - start;//TIMER
          console.log('Execution time: ' + time);//TIMER
          return smallest;
        }
      }
      else {
      break dividendloop;
      }
    }
  }

}

smallestMult(20);
