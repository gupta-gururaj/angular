Array.prototype.double = function(){
    const arr = this.map(doEle)
    return arr
}

function doEle(value) {
    return value * 2;
}

let temp = [1,2,3,4,5]
console.log(temp.double());