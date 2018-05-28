var arr = [[11,21], [5,12], [1,4], [0,3]];
var b = [];

for(var i=0; i<arr.length; i++) {
    for(var j=0; j<arr.length-i; j++) {
        if(j<arr.length-1) {
          if (arr[j][0]>arr[j+1][0]) {
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
          }
        }
    }
}

for(i=0; i<arr.length; i++) {
    if((arr[i][1] > arr[i+1][0]) && (arr[i][1] < arr[i+1][1])) {
        b.push([arr[i][0],arr[i+1][1]]);
        i++;
    }
    else {
      b.push(arr[i]);
    }
}

console.log(b);