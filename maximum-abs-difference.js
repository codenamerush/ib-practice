function f(A, i, j) {
    return Math.abs(A[i] - A[j]) + Math.abs(i - j);
}

function val(A, i, j) {
    return Math.abs(A[i] - A[j]);
}

function dist(A, i, j) {
    return  Math.abs(i - j);
}

module.exports = { 
 //param A : array of integers
 //return an integer
	maxArr : function(A){
	    maxA = -Infinity;
	    minA = Infinity;
	    maxB = -Infinity;
	    minB = Infinity;
	    for(var i = 0; i < A.length; i++) {
	        maxA = Math.max(maxA, A[i] + i);
	        minA = Math.min(minA, A[i] + i);
	        
	        maxB = Math.max(maxB, A[i] - i);
	        minB = Math.min(minB, A[i] - i);
	    }
	    return Math.max(maxA - minA, maxB - minB);
	}
};
