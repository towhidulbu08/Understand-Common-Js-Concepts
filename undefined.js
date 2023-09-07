/*
8 ways to get Undefined

1. if you don't initialized a variable
2. function with no return will give undefined as output
3. if we don't pass any value as parameter will provide undefined output 
4. if return has nothing to   its next side will return undefined
5. property does't exit in an object will give undefined
6. accessing array elements outside of the index range will give undefined
7.removing an array element by delete keyword will give Undefined
8. set undefined directly as a value to a variable will provide undefined
*/
let first;
function second(a,b){
    const total=a+b;
}
const result=second();
//console.log(result);
function third(a,b,c){
    const total=a+b+c;
    ///console.log(a,b,c);

}
third(2,3)

function nonNegative(a,b){
    if(a<0||b<0){
        return;
    }
    return a+b;
}
const total=nonNegative(2,-5)
//console.log(total);

const fifth={
    id:2, name:'Kahlie',age:40
}
//console.log(fifth.id,fifth.salary);
const sixth=[3,4,5,6,7,8,9]
//you should not use delete keyword to remove array element instead use splice method
delete sixth[1]
// console.log(sixth[1],sixth[2],sixth[7]);
// console.log(sixth);
const eighth=undefined;
const ninth=null;
const data={results:[],updated:null};
console.log(typeof undefined,typeof null);
