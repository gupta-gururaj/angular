function chunkArrayInGroups (arr,n){
    var result = [];
    while(arr.length>0){
        result.push(arr.splice(0,n));
    }
    console.log(result)
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)

