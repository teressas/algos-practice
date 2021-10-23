function howMany(i, j, element) {
    console.log({i, j});
        var topLeft = theDojo[i-1][j-1];
        var topCenter = theDojo[i-1][j-0];
        var topRight = theDojo[i-1][j+1];
        var centerLeft = theDojo[i-0][j-1];
        var centerRight = theDojo[i-0][j+1];
        var bottomLeft = theDojo[i+1][j-1];
        var bottomCenter = theDojo[i+1][j-0];
        var bottomRight = theDojo[i+1][j+1];
        var ninjas=topLeft+topCenter+topRight+centerLeft+centerRight+bottomLeft+bottomCenter+bottomRight
    alert( ninjas + " ninjas are hiding in adjacent squares");
    }


//Wei
// temp to store the total
var sum = 0;
// iterate the first layer of dojo using index a 3 times
for (var a = -1; a <= 1; a++) {
    // iterate the second layer of dojo using index b 3 times
    for (var b = -1; b <= 1; b++) {
        // each time we check if we NOT face undefined 
        if (theDojo[i-a] !== undefined && theDojo[j-b] !== undefined) {
            // add the total
            sum +=theDojo[i - a][j-b]
        }

    }
}
// return the result subtract the middle of ninjas
console.log(sum - theDojo[i][j]);