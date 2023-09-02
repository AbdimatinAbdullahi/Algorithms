function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }

    let mid = Math.floor((arr.length) / 2);

    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}


function merge(leftArr, rightArr){
    const sortedArr = []; //Where the all sorted array will be pushed

    while(leftArr && rightArr){ //While the number in the leftarr and rightarr is true, continue the code in while

        if(leftArr[0] <= rightArr[0]){ //If the the number in left arr is smaller, pushed it to sorted arr and shift the number from right arr
            sortedArr.push(leftArr.shift());
        }
        else{ //if the number in right arr is smaller, pushed to sorted arr and shift it from the right arr
            sortedArr.push(rightArr.shift());
        }
      
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

const arr = [6,4,12,10,9];
const sortedArr = mergeSort(arr);
console.log(sortedArr);