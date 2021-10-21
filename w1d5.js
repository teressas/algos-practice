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
