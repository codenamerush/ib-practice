// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.
function makeChangex(n) {
    var res = [];
    while(n>=5) {
      if((n-25)>=0) {
          console.log("Pushing 25");
          n = (n-25);
          res.push(25);
      }
      else if((n-10)>=0) {
          console.log("Pushing 10");
          n -= 10;
          res.push(10);
      }
      else {
          console.log("Pushing 5");
          n -= 5;
          res.push(5);
      }
    }
  
    console.log(res);
  }
  
  makeChangex(40);
  makeChangex(35);
  //makeChange(35);
  // coin values: 5, 10, 25
  
  
  
  // input amount: 40 , output # of coins: 3 (25, 10, 5)
  
  // input amount: 35, output # of coins: 2 (25, 10) 
  //---------------------------------
  // Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.


// coin values: 5, 10, 25

const makeChange = (coins, amount) => {
    coins.sort((a, b) => b - a);
    let coinTotal = 0;
    let i = 0;
    while (amount > 0) {
      if (coins[i] <= amount) {
        amount -= coins[i];
        coinTotal++;
      } else {
        i++;
      }
    }
    return coinTotal;
  };
  
  makeChange([5, 10, 25], 50);
  
  
  
  // input amount: 40 , output # of coins: 3 (25, 10, 5)
  
  
  // input amount: 35, output # of coins: 2 (25, 10) 