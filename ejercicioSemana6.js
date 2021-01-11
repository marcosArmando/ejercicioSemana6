
//ForEach

function myForEach(array, fn){
    for(let i=0; i < array.length; i++){
        fn(array[i], i, array);
    }
}

//Filter

function myFilter(array, fn) {
    const data = [];
    for(let i = 0; i < array.length; i++) {
        if(fn(array[i])) {
            data.push(array[i])
        }
    }
    return data;
}

//Map

function myMap(array, fn){
    const newData = [];
    for(let i = 0; i < array.length; i++) {
        newData.push(fn(array[i]));
    }
    return newData;
}

//Find

function myFind(array, fn){
    for(let i=0; i < array.length; i++){
        if(fn(array[i])){
            return array[i]
        }
    }
}

//FindIndex

function myFindIndex(array, fn){
    for(let i=0; i < array.length; i++){
        if(fn(array[i])){
            return i;
        }
    }
}

//Contains

function myContains(array, value, fromIndex){
    
    if (!((fromIndex+1) > array.length)){

        for(let i = fromIndex; fromIndex < array.length; fromIndex++){
            if(array[fromIndex] === value){
                return true;
            }
        }
    }    

    return false
}

//Pluck

function myPluck(array, propertyName){
    var data = [];
    for(let i = 0; i < array.length; i++){
        if (typeof array[i][propertyName] !== 'undefined') {
            data.push(array[i][propertyName]);
        }
    }
    return data;


}

//Without

function myWithout(...arguments){
    //Tomando en cuenta que el primer elemento es array y que no sabemos cuántos elementos se desean eliminar
    var mainArray = arguments[0];
    var dataToRemove = [];

    for(let i = 1; i < arguments[0].length; i++){
        dataToRemove.push(arguments[i]);
    }

    for(let j = 0; j < dataToRemove.length; j++){
        mainArray = arrayWithoutItem(mainArray, dataToRemove[j]);
    }

    return mainArray;
}

function arrayWithoutItem(array, item){

    var data = []

    for(let i = 0; i < array.length; i++){
        if(!(array[i] === item)){
            data.push(array[i]);
        }
    }

    return data;
}

//pruebas

const numbers = [4,5,3,1,8,19,25];
const students = [{name: 'Marcos', age: 34}, {name: 'Maria', age: 30}, {name: 'Juan', age: 32}, {name: 'Moises', age: 5}, {name: 'Emma', age: 1}]

var total = 0;
function suma(variable) {
    total += variable;
}

function olderEnough(age) {
    if (age >= 18){
        return true;
    }
}

function sixTimes(number){
    return number * 6;
}

//myForEachTest
myForEach(numbers, suma);
console.log(total);

//myFilterTest
const newData = myFilter(numbers, olderEnough);
console.log(newData);

//myMapTest
const newData1 = myMap(numbers, sixTimes);
console.log(newData1);

//myFindTest
console.log(myFind(numbers, olderEnough));

//myFindIndexTest
console.log(myFindIndex(numbers, olderEnough));

//myContainsTest
const isItThere = myContains(numbers, 8, 5);
console.log(isItThere);

//myPluckTest
const newData2 = myPluck(students, 'age');
console.log(newData2);

//myWithoutTest
const numbers2 = [1,2,3,4,5,6,7,8,9,1,2,3,8,9];
const newData3 = myWithout(numbers2, 4, 1, 9);
console.log(newData3);