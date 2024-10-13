let num = 1;

while (num <= 10) {
    console.log(num);
    num++;
}


for(let i = 2; i<=20; i++){
    if (i % 2 == 0){
        continue;
    }
    console.log(i)
}


let mnoczhnik = 7;

for(let i = 1; i<=10; i++ ){
    console.log(`${mnoczhnik} * ${i} = ${mnoczhnik * i}`)
}


let numbers = [1, 2, 3, 4, 5];
let i = 0;

while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}


let arr1 = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i<arr1.length; i++){
    if (arr1[i]===7){
        break;
    }
    console.log(arr1[i]);
}


let n = 10;
let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13];

for (let i = 0; i < arr2.length; i++){
    if (arr2[i] >= n){
        break;
    }
    console.log(arr2[i]);
}


let arr3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (let i= 0; i < arr3.length; i++){
    if (arr3[i] % 3 == 0){
        continue;
    }
    console.log(arr3[i]);
}