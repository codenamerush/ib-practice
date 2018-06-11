// Task: rewrite this function so that it uses a loop rather than recursion

function joinElements(array, joinString) {

    // function recurse(index, resultSoFar) {
    //   resultSoFar += array[index];
  
    //   if(index === array.length - 1) {
    //     return resultSoFar;
    //   } else {
    //     return recurse(index + 1, resultSoFar + joinString);
    //   }
    // }
  
    // return recurse(0, '');
    var result='';
    var i = 0;
    for(i=0; i<array.length; i++) {
      result+=array[i];
      if(i===array.length-1)
        return result;
      else 
        result+=joinString;
    }
  }
  
  joinElements(['s','cr','t cod', ' :) :)'], 'e');