// let arrSum = 0;
// const sumArr = (arrList) => {
//     if (arrList.length < 1) {
//         console.log('total sum of arr: ',arrSum);
//         return;
//     }
//     console.log(arrList[arrList.length-1]);
//     arrSum += arrList[arrList.length-1];
//     arrList.pop();
//     sumArr(arrList);
// }

// sumArr([5,5,5,5,5]);
// sumArr([1,2,3,4,5,6,7,8,9,10]);

const sumArrKeepOriginalArray = (arrList, idx = 0, arrSum = 0) => {
    if (idx === arrList.length) {
        return arrSum;
    }
    // console.log('idx ', idx);
    // console.log('arrList[idx] ', arrList[idx]);
    arrSum += arrList[idx];
    return sumArrKeepOriginalArray(arrList, idx + 1, arrSum);
}

console.log('total sum of arr: ', sumArrKeepOriginalArray([5, 5, 5, 5, 5]));
console.log('total sum of arr: ', sumArrKeepOriginalArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// //Shan's solution
// Array.prototype.sum = function (index = 0) {
//     return index >= this.length ? 0 : this[index] + this.sum(index + 1);
// }

// console.log([1, 2, 3].sum());
// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sum());