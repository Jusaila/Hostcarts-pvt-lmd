// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log('button was clicked');
//    console.log(evt.type);
// };
// let div = document.querySelector("#box");
// div.onmouseover = () => {
//     console.log("inside box");
// };

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("event listener 1");
// });
// btn1.addEventListener("click", () => {
//     console.log("event listener 2");
// });

//mode

let changeMode = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

changeMode.addEventListener("click", () => {
    if (currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        document.querySelector("body").classList.remove("light");

    }
    else{
        currMode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");

    }
    console.log(currMode);
});