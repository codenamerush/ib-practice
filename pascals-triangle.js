module.exports = { 
    //param A : integer
    //return a array of array of integers
       generate : function(A){
           var arr = [];
   var n = A;
   if ( n<1) {
       return arr;
   }
   for (var i=0; i<n; i++) {
     arr[i] = [];
   }
   arr[0] = [1];
   for (var i=1; i<n; i++) {
     for(var j=0; j<i+1; j++) {
       
       if(!arr[i-1][j-1] || !arr[i-1][j]) {
         arr[i][j] = arr[i-1][j-1] || arr[i-1][j];
       }
       else
       arr[i][j]=arr[i-1][j]+arr[i-1][j-1];
     }
   }
   
   return(arr);
       }
   };
   