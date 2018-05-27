var arr = [-2,1,-3,4,-1,2,1,-5,4];
var sz = arr.length;
var total = 0;
var max = 0;
for(var i=0; i<sz; i++) {
    for(var j=0; j<sz; j++) {
        total = 0;
        k=sz-i;
        while(k){
            total+=arr[j];
        }
        if(total>max) {
            max = total;
        }
    }
}