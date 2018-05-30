var A = [-1,-2,1,3,4,2,0];
var n=A.length;
for(var i=0;i<n;i++){
    if(A[i]>0 && A[i]<=n){
        if(A[i]-1!=i && A[A[i]-1]!=A[i]){
            var temp=A[A[i]-1];
            A[A[i]-1]=A[i];
            A[i]=temp;
            i--;
        }
    }
}
for(var i=0;i<n;i++)
  if(A[i]!=i+1) {
    console.log (i+1);
    break;
}
