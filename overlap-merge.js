function mergeIntervals(intervals) {
    if(intervals.length <= 1)
      return intervals;
  
    var stack = [];
    var top   = null;
  
    intervals = intervals.sort();
  
    stack.push(intervals[0]);
  
    for (var i = 1; i < intervals.length; i++) {
      top = stack[stack.length - 1];
      if (top[1] < intervals[i][0]) {
        stack.push(intervals[i]);
      }
      else if (top[1] < intervals[i][1])
      {
        top[1] = intervals[i][1];
        stack.pop();
        stack.push(top);
      }
    }
  
    return stack;
  }
  
  var x = [[1,4],[3,5],[2,4],[7,10]];
  console.log(mergeIntervals(x));