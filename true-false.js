/*
Truthy:
1.true;
2.any number except zero will be truthy
3. any string is truthy except empty string
4.'0','false'
5.empty object
6.empty array
Falsy:
1.false
2. 0
3.empty string
4.undefined
5.null
*/
let x=[];

if(x){
    console.log("value of x is truthy");
}
else{
    console.log("falsy");
}
// optional
// check falsy
const y=null;
if(!y){
    console.log('value is falsy');
}
// check truthy
const z='0';
if(!!z){
    console.log('truthy');
}