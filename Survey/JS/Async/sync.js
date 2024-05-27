// function hello(){
//     console.log("hello");
// }
// setTimeout(hello, 4000); 

// setTimeout(() => {
//     console.log("heklo");
// },2000);

//callback

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b, sumCallback){
//     sumCallback(a,b);
// }
// calculator(10,2,sum);

//arrow function

const fn = function(val){
    console.log("Hello World , " ,val);
}

const fn2 = (val) => {
    console.log("hello love", val);
}
fn(2);
fn2(3);
