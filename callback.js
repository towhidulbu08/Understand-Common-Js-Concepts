function greetings(person,name) {
person(name);
}
// const name=['Halim mama','mama']
// const laptop = { price: 4500, brand: "lenovo" };
function handler(name){
    console.log("good morning",name);
}
function evening(name){
    console.log("Good evening",name);
}
function Night(name){
    console.log("Good Night",name);
}
greetings(handler,'Tamim');
greetings(handler,'Tom dajjal');
greetings(evening,'Tom Sukhon');
greetings(evening,'Tom khon');
greetings(Night,'Tom jayed khan');

