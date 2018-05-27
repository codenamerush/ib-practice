var input = [[0, 0], [1, 0], [1,1], [1, 2], [1,1]];
var x = input[0][0];
var y = input[0][1];
var moves = [[x+1, y], [x - 1, y], [x, y+1], [x, y-1], [x-1, y-1], [x+1,y+1], [x-1,y+1], [x+1,y-1]];
var start = input[0];
var i=1;
var count = 0;
while(input[i]) {
    var j=0;
    while(moves[j]) {
        if((start[0]+moves[j][0] == input[i][0]) && (start[1]+moves[j][1] == input[i][1])) {
            start = input[i];
            count++;
        }
        else j++;
    }
    i++;
}

console.log(count);