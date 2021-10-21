// Learn about JavaScript Variables
// Learn about JavaScript Loops
// Discuss T-charts

var a = 25;
a = a - 13;
// a = 12
console.log(a/2);
//12/2 = 6
    
a = "hello";
console.log(a + " hello");
//hello hello

for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);

// console.log("outside of the loop " + 11);

function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];
      
    for(var i=0; i<arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
      console.log("the current sum is: " + sum); 
      //the current sum is: 2
      //the current sum is: 3
      //the current sum is: 5
    }
      
    console.log("the total is: " + sum);
    //he total is: 5
      
  }
      
  getTotal([1, 3, 5]);
  