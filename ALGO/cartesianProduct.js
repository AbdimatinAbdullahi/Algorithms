function cartesian(){
    let arrA = [1,2];
    let arrB = [3,4,5,6];
    let product = [];

    for(let i = 0; i < arrA.length; i++){
        for(let j = 0; j < arrB.length; j++){
            product.push([arrA[i], arrB[j]])
        }
    }
    return product;
}

const cartesian1 = cartesian();
console.log(cartesian1)