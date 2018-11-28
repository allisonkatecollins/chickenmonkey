//Write a program that prints the numbers from 1 to 100.
//But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number. 
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0, currentNumber = "Chicken") {
        console.log(currentNumber)
    }
}

//and for the multiples of seven (7, 14, 21, etc.) print "Monkey". 
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if(currentNumber % 7 === 0, currentNumber = "Monkey") {
        console.log(currentNumber)
    }
}

//For numbers which are multiples of both five and seven print "ChickenMonkey".
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if(currentNumber % 35 === 0, currentNumber = "ChickenMonkey") {
        console.log(currentNumber)
    }
}