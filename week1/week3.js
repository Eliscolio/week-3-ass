//1
//a
let ages = [3,9,23,64,2,8,28,93]; // variable called ages
console.log(ages[ages.length-1]-ages[0]);// return 90
//b
let newAge = ages.push(50);
console.log(ages[ages.length-1]-ages[0]);// return 47
//c
let sum=0;
for (let i=0;i<ages.length;i++){
    sum += ages[i];// for loop to add up all of the element.
}
console.log(sum);
console.log(sum/ages.length);//this the average.
//2
let names = ['Sam','Tommy', 'Tim','Sally','Buck','Bob'];
//a
let sum1 = 0;
for(let i=0;i<names.length;i++){
    sum1 += names[i].length; //
}
console.log(sum1/names.length);
//let name = 'Sam';
//console.log(name.length);
//let namesLength = names.map(name => name.length);
//let sum1 = namesLength.reduce((acc,cur) => acc + cur);
//console.log(sum1/namesLength);
//b
let concatNames='';
for(let i = 0;i < names.length;i++){
    concatNames = concatNames + ' ';

    concatNames = concatNames + names[i];
}
console.log(concatNames);
//3
//to access the last element of an array, we can console.log(array.length-1)
//4
//the first can be found by console.log(array[0])
//5

let name1 = 'Sam'
console.log(name1.length);
let NamesLength = names.map(name1 => name1.length)
console.log(NamesLength);

//6

let summ = 0;
for(let i = 0;i < NamesLength.length;i++){
    summ += NamesLength[i]
}
console.log(summ);

//7
function someWords(word,n){
   let final = '';
    for(let i=0;i<n;i++){
   final += word;
 }
    return final;
}
console.log(someWords('morning',4));
//8
function fullName(firstName,lastName){
    
    return firstName +' '+ lastName
}
console.log(fullName("Kossi","Vigniavo"));

//9

let arrayOfNumber = [4,6,2,8,4,7,9,10];
function arrayNum(arrayOfNumber){
    sum = 0
    for(let i=0;i<arrayOfNumber.length;i++);
    sum += arrayOfNumber;
// }
//     if(sum > 100){
//         return true;
// }
//     else{
//         return false;
//     }
    return sum > 100;
}

console.log(arrayNum(arrayOfNumber));

//10

function findAvg(avgArray){
    return avgArray.reduce((x,y) => x + y)/avgArray.length;
}

console.log(findAvg([21,30,12,2]));

//11

function arraysNum(array1,array2){
    let sum1 = 0;
    for(let i=0;i<array1.length;i++){
    sum1 += array1[i];
    }
    let sum2 = 0;
    for(let i=0;i<array2.length;i++){
    sum2 += array2[i];
    }
    let av1 = sum1/array1.length;
    let av2 = sum2/array2.length;
    if (av1 > av2){
        return true
    } else {
        return false
    }
}
console.log(arraysNum([8,6,5,3,5],[4,9,6,2,5]));



// console.log(array1And2Avg([20, 21, 22],[1, 2, 3]));

//12
function willBuyDrink(isHotOutside,moneyInPocket){
    if (isHotOutside && moneyInPocket >= 10.50){
        return true;
    } 
    else {
        return false;
    }
}
console.log(willBuyDrink(true,12));



// edit


//Kossi