function calc(a,b,op){
    
    const isNum = /^[0-9]+$/g;
    const isOperand = /^[*,/,+,-]{1}$/g;
 
    if (!isNum.test(a) && !isNum.test(b)){
        console.log("atleast one invalid number")
        return
    }
    if (!isOperand.test(op)){
        console.log("invalid operand")
        return
    }
    let result = -1
    switch (op){
    case "+":
        result = a+b;
        break;
    case "-":
        result = a-b;
        break;
    case "/":
        if (b==0){
            console.log("division not possible, divisor zero")
            return
        }
        result = a/b;
        break;
    case "*":
        result = a*b
        break;
    }
    console.log(result)
}

calc("a",10,"/")