// function First(){
//     console.log("learn first JS");
// }
// First();
// function Second(para){
//     console.log(para);
// }
// Second(10999);

// const arrowSum = (x,y) => {
//     console.log(x*y);
//  }
//  arrowSum(5,60000);

function countVowel(str){
    let count = 0;
    for(const char of str){
        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ){
            count++
        }

    }
    console.log(count);
}

countVowel("naju love jusi")

const countVowels = str => {
    let count = 0;
    for(char of str){
        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ){
            count++
        }
    }
    console.log(count);
}
countVowels("naju love jusiiiii")
