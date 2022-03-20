var duplicateZeros = function(arr) {

    for (var i = 0; i < arr.length; i++) {
        //for loop runs through the array 
        if (arr[i] === 0) {
        arr.splice(i, 0, 0);
        // adds another zero 
        arr.pop();
        i++;
    }
    }
    return arr;
};
console.log(duplicateZeros([12,3425,0,12313,4234,0,0,56]));