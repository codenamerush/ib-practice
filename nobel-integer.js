var A = [1,2,4,5,5,1,0]
A.sort();
// console.log(A);
var flag = 0;
for(var i=0; i<A.length; i++) {
  if(A[i]==0 && i!=(A.length-1))
    continue;
  var j = i+1;
  var count = 0;
  while(A[i] < A[j]) {
    count++;
    j++;
  }
//  console.log(i,count);
  if (count==A[i]) {
    flag = 1;
    break;
  }
}

if(flag==1) {
  console.log (1);
}
else console.log (-1);