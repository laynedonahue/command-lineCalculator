num1 = process.argv[3]
num2 = process.argv[4]
intNum1 = parseInt(num1)
intNum2 = parseInt(num2)

if(process.argv[2]==="add"){
    let sum = intNum1 + intNum2
    console.log(sum)
} 