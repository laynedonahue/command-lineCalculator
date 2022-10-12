num1 = process.argv[3]
num2 = process.argv[4]
intNum1 = parseInt(num1)
intNum2 = parseInt(num2)

if(process.argv[2]==="add"){
    let sum = intNum1 + intNum2
    console.log(sum)
} else if(process.argv[2]==="subtract"){
    let sum = intNum1 - intNum2
    console.log(sum)
} else if(process.argv[2]==="multiply"){
    let sum = intNum1 * intNum2
    console.log(sum)
} else if(process.argv[2]==="divide"){
    let sum = intNum1 / intNum2
    console.log(sum)
} else{console.log("Please enter add, subtract, multiply, or divide and then your two numbers")}