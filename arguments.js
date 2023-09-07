function sum(a,b,c,q,w){
    const args=[...arguments]
    console.log(args);
    const result=a+b+c;
    return result;
}
const total=sum(45,89,12,34,53,53);
console.log(total);
console.log(sum.length);
// arguments is  a array like object