function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }

    let mid = Math.floor((arr.length - 1) / 2);

    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}


function merge(leftArr, rightArr){
    const sortedArr = []; //Where the all sorted array will be pushed

    while(leftArr && rightArr){

        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift());
        }
        else{
            sortedArr.push(rightArr.shift());
        }
       return [...sortedArr, ...leftArr, ...rightArr]
    }
}

const arr = [6,4,12,10,9];
const sortedArr = mergeSort(arr);
console.log(sortedArr);