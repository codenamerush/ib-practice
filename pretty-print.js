module.exports = { 
//param A : integer
//return a array of array of integers
    prettyPrint : function(A){
        var size = 2*A-1;
        var limit = size;
        var temp = 0;
        var mat = [];
        var i,j;
        for(i = 0; i<size; i++) {
            mat[i] = [];
        }
        
        while(A > 0){
            for(i = temp; i < limit; i++){
                for(j = temp; j < limit; j++){
                    mat[i][j] = A;
                }
            }
            A--;
            limit--;
            temp++;
        }
        return(mat);
    }
};
