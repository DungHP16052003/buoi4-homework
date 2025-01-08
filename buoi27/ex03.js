console.log(Math);
console.log(Math.max(1,2,3,4,5,6,7));
console.log(Math.min(-1,5,2,4));

console.log(Math.pow(2,4));

let myNumber = 1234.567;
console.log(Math.ceil(myNumber)); // lam tron len
console.log(Math.floor(myNumber)); // lm tron xuong
console.log(Math.round(myNumber)); // lm tron den so nguyen gan nhat


console.log(Math.random());
// tao ham random 1 thang ngau nhien (1-12) voi xac suat bang nhau
function randomMonth(){
  const random = Math.ceil(Math.random() * 12);
  return random;
}
console.log(randomMonth())


// Tao ham random tra ve dap an A,B,C,D ngau nhien voi xac suat bang nhau
function randomoForQuizz(){
 const arrTemplate = ["A", "B", "C","D"];
 return arrTemplate[Math.ceil(Math.random() * 4)];
}
console.log(randomoForQuizz());

function generatorId(prefix,n){
    let templateString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
     const arr1 = "";
     for(let i = 0; i < n; i++){
        const index = Math.floor(Math.random()* templateString)
        arr1 += templateString[index]; 
     }
     return prefix + arr1;
}
console.log(generatorId())