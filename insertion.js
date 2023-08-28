function insertionSort(arr){

    for( let i = 1; i < arr.length; i++){  
      let numberToInsert = arr[i]; // IN 4,6,12,12,9; 
      let j = i - 1;
  
      while(j >= 0 && arr[j] > numberToInsert){ // since 6 is greater than 4, 4 will be assigned to position of 6
        arr[j + 1]  = arr[j];
        j = j -1; 
        }
  
      arr[j + 1] = numberToInsert;
    }
  
  }
  
  let arr = [6,4,12,10,9];
  insertionSort(arr)
  console.log(arr);