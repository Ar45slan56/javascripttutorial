// singeton
// make from literal

// object literal
// symbol

const sym = Symbol("Key1")
// used symbol as key 

const JSUsr = {
    name: "Arslan",
    location : "Pakistan",
    Lasstlogin : ["monday","tuesday"],
    [sym] : "mykey12",
}

// console.log(JSUsr.name);
// console.log(JSUsr["name"]);
// console.log(JSUsr[sym]);

// JSUsr.name = "sharjeel"
// Object.freeze(JSUsr);
// JSUsr.name = "arslna"
// console.log(JSUsr);


JSUsr.greeting = function helo() {
    console.log("hello");
}

console.log(JSUsr.greeting);

JSUsr.gt2 = function hi(){
    console.log('Hi JsUser, ${this.name}');
}

console.log(JSUsr.gt2());