
"use strict";
window.onload = ()=> {

/* 1 */
const max =  (num1,num2) => { 
    const max = num1 > num2? num1: num2 ;
    //document.getElementById("lblValue").innerText = max;
    return max;
};
/* 2 */
function maxOfThree(...numbers){
    const maxNum = numbers[0];
    for(let i of numbers){
         if(i>maxNum){
            maxNum = i;
         }
    }
    return maxNum;
}
/* 3 */
const isVowel = (str) => {
    switch (str){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default: 
            return false;
    }      
};

/* 4 */
const sum = (arr) =>{
    let total=arr[0];
    for(let i of arr){
        total+=i;
    }
    return total;
};

const multiply = (arr) =>{
    let multiplicity=arr[0];
    for(let i of arr){
        multiplicity*=i;
    }
    return multiplicity;
};

/* 5 */
const reverseStr = (str) =>{
    return str.split("").reverse().join("");
}

/* 6 */
const longestWordLength = (arr) => {
    let maxLength = arr[0].length;
    for(let i in arr){
        if(arr[i].length> maxLength){
            maxLength = arr[i].length;
        }
    }
    return maxLength;
};

/* 7 */
const filterLongWords = (arr,i) =>{
    return arr.filter(item => item.length>i);
};

/* 8 */
const computeSumOfSquares = (arr) => {
    return arr.map(data => (data*data)).reduce((a,b)=> a +b);
}

/* 9 */
const printOddNumbers = (arr) => {
    return arr.filter(item=> item%2!=0);
}

/* 10 */
const computeSumOfSquaresOfEvensOnly =(arr) => {
    return arr.filter(item => item%2==0).map(data => (data*data)).reduce((a,b)=> a +b);
}

/* 11 */
const sumFunctional = (arr) => {
    return arr.reduce((a,b) => a+b);
}

const multiplyFunctional = (arr) => {
    return arr.reduce((a,b) => a*b);
}

/* 12 */
const printFibo = (n,a,b) => {
    let sum = [a,b];
    for(let i=2; i <n; i++){
        sum[i] = sum[sum.length - 1]  + sum[sum.length-2];
    }
    return sum;
}

let arr = [1,2,3,4];

/*1*/
console.log(max(2,3));
/*2*/
console.log(maxOfThree((1,2,3)));

/*3*/
console.log(isVowel('j'));
console.log(isVowel('a'));
/*4*/
console.log(sum(arr));
console.log(multiply(arr));
/*5*/
console.log(reverseStr("jag testar"));
/*6*/
console.log(longestWordLength(["abc","bcdefg","kkkkkkkkkk"]));
/*7*/
console.log(filterLongWords(["abc","bcdefg","kkkkkkkkkk"],6));
/*8*/
console.log(computeSumOfSquares([1,2,3,4]));
/*9*/
console.log(printOddNumbers([1,2,3,4]));
/*10*/
console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4]));
/*11*/
console.log(sumFunctional([1,2,3,4]));
console.log(multiplyFunctional([1,2,3,4]));
/*12*/
console.log(printFibo(6,0,1));
};

