var matrix = [
       [1,  2,  3,  4],
       [5,  6,  7,  8],
       [9,  10, 11, 12],
       [13, 14, 15, 16]
      ];
    var length = A.length-1;
       
      for (var i = 0; i <= (length)/2; i++) {
          for (var j = i; j < length-i; j++) {
            
           
           var p1 = A[i][j];
            
           
           var p2 = A[j][length-i];
            
           
           var p3 = A[length-i][length-j];
            
           
           var p4 = A[length-j][i];
            
           A[j][length-i] = p1;
           A[length-i][length-j] = p2;
           A[length-j][i] = p3;
           A[i][j] = p4;
          }
      }
     
     
    return A;