console.log("- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б")
function areaRectangle(a,b){
    return a*b;
}
console.log(areaRectangle(2, 5));
console.log("- створити функцію яка обчислює та повертає площу кола з радіусом r")
function areaCircle(radius){
    return radius*radius*3.14
}
console.log(areaCircle(4))
console.log("- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r")
function areaCylinder(h,r){
   return ((2*3.14*r*h)+(2*3.14*r*r))
}
console.log(areaCylinder(20, 5));
console.log("- створити функцію яка приймає масив та виводить кожен його елемент")
function receiveArray(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i])
    }
}
let someArray=[12312,'ff',true,22.1,45,false,2,'string']
receiveArray(someArray)
console.log("- створити функцію яка створює параграф з текстом. Текст задати через аргумент")
function articleText(text){
    document.write(`<div><p>${text}</p></div>`)
}
articleText('dsfdfdfs')
console.log("- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий")
function ulFunc(ul){
    document.write(`<ul><li>${ul}</li><li>${ul}</li><li>${ul}</li></ul>`)
}
ulFunc(2)
console.log("- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. " + 
    "Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)")
function ulWithLoopsFunction(text,numOfIl){
   for(let i=0;i<numOfIl;i++){
       document.write(`<ul><li>${text}</li></ul>`)
   }
}
ulWithLoopsFunction('dfdfd',9)
console.log("- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список")
document.write(`**********************************`)
let differArray=['string','word',1,5,90,true,false];
function receiveDifferArray(array){
    for (let i=0;i<array.length;i++){
        document.write(`<ul><li>${array[i]}</li></ul>`)
    }
}
receiveDifferArray(differArray)
console.log("- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , " +
    "та виводить їх в документ. Для кожного об'єкту окремий блок.")
let objectArray=[
    {
        id:1,
        name:'Vasya',
        age:40
    },
    {
        id:2,
        name: 'Bodya',
        age:29
    },
    {
        i:3,
        name:'Karen',
        age: 17
    }]
function data(array){
    for(let i=0;i<objectArray.length;i++){
        document.write(`<div>
          <ul>
             <li>${array[i].id}</li>
             <li>${array[i].name}</li>
             <li>${array[i].age}</li>
          </ul>
    </div>`)
    }
}
data(objectArray)
console.log("- створити функцію яка повертає найменьше число з масиву")
let numbers=[13,3,5,3,23,132,15,1,505];
     function minArray(minArray){
let min;
for(let number of minArray){                    ///// console.log(Math.min.apply(null,numbers)) МОЖНА ЩЕ ТАК
    for(let i=0;i<minArray.length;i++) {
        if (number < minArray[i]) {
          min=number
        }
    }
}
  console.log(min)
}
minArray(numbers)
console.log("- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. " +
    "Приклад [1,2,10]->13")
let arrayNumbersSum=[100,200,100,200];
     function addingElementsOfArray(array){
         let total=0;
         for(let addNumber of arrayNumbersSum){
             total+=addNumber
         }
         console.log(total)
     }
     addingElementsOfArray(arrayNumbersSum)
     
