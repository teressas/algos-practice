//swap variable
var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);

//while loops
var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

//Reversing an array
var result = "";
for(var i=0; i<0; i++){
    result += "**";
    console.log(result);
}

//defining function
function reverse(arr){
    //iterate through the array until the halfway point
    for(var i = 0; i < arr.length/2; i++){
        //using variable i and arr.length - 1 - i, swap values
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}

//calling the function
console.log(reverse(["a","b","c","d","e"]))
