let temp = [1,2,3,4,5] 

//m1-S
// var a1 = temp
// a1.push(6)
// console.log(a1)
// console.log(temp)

//m2-D
// var a2 = [...temp]
// a2.push(6)
// console.log(a2)
// console.log(temp)

//m3
// var a3 = [];
// for (el of temp){
//     a3.push(el);
// }
// a3.push(6)
// console.log(a3)
// console.log(temp)

// m4-D
var a4 = temp.slice()
a4.push(6)
console.log(a4)
console.log(temp)

//m5-D
// var a5 = temp.map(function(ele){return ele})
// a5.push(6)
// console.log(a5)
// console.log(temp)

//m6-D
// var a6 = JSON.parse(JSON.stringify(temp));
// a6.push(6)
// console.log(a6)
// console.log(temp)