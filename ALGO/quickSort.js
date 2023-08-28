function quickSort(arr){

    if(arr.length  < 2){
        return arr
    }

    let left = [];
    let right = [];
    let pivot = arr[arr.length - 1];
    
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > pivot){
            right.push(arr[i])
        }
        else{
            left.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [6,4,12,10,9];
const sortedArr = quickSort(arr);
console.log(sortedArr)