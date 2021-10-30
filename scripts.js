console.log('------------------#5');

let a = 4;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log('------------------#6');

for (let i = 1; i < 6; i++) {
console.log(i);
}

console.log('------------------#7');

for (let i = 5; i > 0; i--) {
    console.log(i);
}

console.log('-------------------#8');

function getMarkInfo(condition) {

   if (condition !== 10) {
       console.log('У вас средний балл');
   } else {
       console.log('У вас максимальный балл');

   }
}
getMarkInfo(10)
getMarkInfo(1)

console.log('---------------------#9');

function getDayInfo(position) {
    switch (position) {
        case 0 :
            console.log('Sunday');
            break;
        case 1 :
            console.log('Monday');
            break;
        case 2 :
            console.log('Tuesday');
            break;
        case 3 :
            console.log('Wednesday');
            break;
        case 4 :
            console.log('Thursday');
            break;
        case 5 :
            console.log('Friday');
            break;
        case 6 :
            console.log('Saturday');
            break;
        default:
            console.log('Wrong data');
            break;
    }
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)

console.log('---------------------#10');

let arr = ['a','b','c']
arr.push ('1', '2', '3');
console.log(arr);

console.log('---------------------#11');

let arrOne = [1,2,3];
let arrTwo = [4,5,6];
let arrNew = arrOne.concat(arrTwo);
console.log(arrNew);

console.log('---------------------#12');

function countNumber(number) {
    let sum = 0;
    if (Number.isInteger(number) === true && number > 0) {
        for (let i = 0; i <= number; i++) {

            sum += i;
        }
    }

    console.log(sum);


}

countNumber(3);
countNumber(5);

