module.exports = { 
       isPalindrome : function(A){
           if(A<0)
               return 0;
           var divisor = 1;
           while (A / divisor >= 10)
             divisor *= 10;
           
           while (A != 0)
           {
             var leading = parseInt(A / divisor); 
             var trailing = A % 10;
             if (leading != trailing)  
                 return (0);
             A = parseInt((A % divisor) / 10);
             divisor = divisor / 100;
           }
        return (1);
       }
   };
   