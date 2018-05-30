var arr = [1,3,2,4,5,2];
var size = arr.length;
var flag = 0;
// console.log("The repeating element is: ");
     
for(var i=0; i<size; i++) {
      
    if (arr[Math.abs(arr[i])] >= 0)
          arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
    else  if (arr[Math.abs(arr[i])] < 0){
        console.log (Math.abs(arr[i]));
        flag = 1;
        break;
    }
}
if (flag==0)
      console.log (-1);