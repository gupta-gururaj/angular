function valid (str){
    let step = 0;
    for (char of str){
        if (char=='('){
            step++;
        }else {
            step--;
        }
    }
    if (step==0){
        console.log("Valid")
    }else {
        console.log("Invalid")
    }
}

valid("()()(")

