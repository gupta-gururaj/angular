let flag = 1;  // X turn to play

function hit(id) {
    // console.log(id)
    document.getElementById(id).value = flag ? "X" : "0"
    checkWin(id)
    flag = !flag
}

function boxValue(id){
    return document.getElementById(id).value
}

function checkWin(id){
    let val = flag ? "X" : "0"
    if (id=="b1"){
        if ((boxValue("b1")==val && boxValue("b2")==val && boxValue("b3")==val) ||  (boxValue("b1")==val && boxValue("b4")==val && boxValue("b7")==val) ||  (boxValue("b1")==val && boxValue("b5")==val && boxValue("b9")==val) ){
            alert("Player "+val+" won")
        }
    } else if (id=="b2"){
        if ((boxValue("b1")==val && boxValue("b2")==val && boxValue("b3")==val) ||  (boxValue("b2")==val && boxValue("b5")==val && boxValue("b8")==val) ){
            alert("Player "+val+" won")
        }
    }  else if (id=="b3"){
        if ((boxValue("b1")==val && boxValue("b2")==val && boxValue("b3")==val) ||  (boxValue("b3")==val && boxValue("b5")==val && boxValue("b7")==val) ||  (boxValue("b3")==val && boxValue("b6")==val && boxValue("b9")==val) ){
            alert("Player "+val+" won")
        }
    }  else if (id=="b4"){
        if ((boxValue("b4")==val && boxValue("b5")==val && boxValue("b6")==val) ||  (boxValue("b1")==val && boxValue("b4")==val && boxValue("b7")==val) ){
            alert("Player "+val+" won")
        }
    }  else if (id=="b5"){
        if ((boxValue("b4")==val && boxValue("b5")==val && boxValue("b6")==val) ||  (boxValue("b2")==val && boxValue("b5")==val && boxValue("b8")==val) ||  (boxValue("b1")==val && boxValue("b5")==val && boxValue("b9")==val) ||  (boxValue("b3")==val && boxValue("b5")==val && boxValue("b7")==val) ){
            alert("Player "+val+" won")
        }
    }  else if (id=="b6"){
        if ((boxValue("b4")==val && boxValue("b5")==val && boxValue("b6")==val) ||  (boxValue("b1")==val && boxValue("b4")==val && boxValue("b7")==val) ||  (boxValue("b3")==val && boxValue("b6")==val && boxValue("b9")==val) ){
            alert("Player "+val+" won")
        }
    }  else if (id=="b7"){
        if ((boxValue("b1")==val && boxValue("b4")==val && boxValue("b7")==val) ||  (boxValue("b7")==val && boxValue("b5")==val && boxValue("b3")==val) ||  (boxValue("b7")==val && boxValue("b8")==val && boxValue("b9")==val) ){
            alert("Player "+val+" won")
        }
    }  else if (id=="b8"){
        if ((boxValue("b7")==val && boxValue("b8")==val && boxValue("b9")==val) ||  (boxValue("b8")==val && boxValue("b5")==val && boxValue("b2")==val) ){
            alert("Player "+val+" won")
        }
    }  else if (id=="b9"){
        if ((boxValue("b7")==val && boxValue("b8")==val && boxValue("b9")==val) ||  (boxValue("b1")==val && boxValue("b5")==val && boxValue("b9")==val) ||  (boxValue("b9")==val && boxValue("b6")==val && boxValue("b3")==val) ){
            alert("Player "+val+" won")
        }
    }   
}