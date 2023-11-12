.task1
const newArrey=[]
const cem=function (myFunc,parametr){
    for(let i=0;i<parametr;i++) {
        newArrey.push(myFunc[i]);
    }
    return newArrey;
}
console.log(cem([5,6,7,10,12],4));

.task2
const newArrey=[]
const findMultiples=function(number,limit){
    for (let z=number; z<limit; z*2){
        newArrey.push(a);
    }
    return newArrey;
}
console.log(findMultiples(7,40));

.task3
const newArrey=[]
const count=function(say){
    for(let z=1; z<say; z++){
        newArrey.push(z)
    }
    return newArrey;
}
console.log(count(16));