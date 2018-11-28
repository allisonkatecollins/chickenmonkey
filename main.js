//Write a program that prints the numbers from 1 to 100.

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    
    if (currentNumber % 5 != 0 && currentNumber % 7 != 0) {
        console.log(currentNumber)
    }

//For numbers which are multiples of both five and seven print "ChickenMonkey".
    else if(currentNumber % 5 === 0 && currentNumber % 7 ===0) {
        console.log("ChickenMonkey")
    }

//for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number. 
    else if (currentNumber % 5 === 0) {
        console.log("Chicken")
    }
//and for the multiples of seven (7, 14, 21, etc.) print "Monkey". 
    else if (currentNumber % 7 === 0) {
        console.log("Monkey")
    }
}
