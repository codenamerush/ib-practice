module.exports = { 
    //param A : integer
    //return a array of integers
       primesum : function(A){
           var x = A;
           var a,b;
           var result = [];
           if(x<=2) {
             return ("Invalid input: Only even numbers allowed, greater than 2");
           }
           for (var i=2; i<x; i++) {
             a = i;
             b = x-a;
             if (isPrime(a) && isPrime(b)) {
               result.push(a);
               result.push(b);
               return (result);
             }
           }
           
           function isPrime(n) {
              if(n == 2) return true;
                   if(n % 2 == 0)
                       return false;
                   for(var i = 2; i < n; i++){
                       if(n % i == 0)
                           return false;
                   }
                   return true;
           }
       }
   };