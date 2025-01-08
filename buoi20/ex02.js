const user = ["cong", "thang", "manh", "tue", "son", "dung", "hoang"];
const userReversce = [];
for(let i = user.length-1; i>=0;i-- ){
    userReversce.push(user[i]);
}
console.log(userReversce);

const userReversce1 = [];
for(let i =0; i< user.length; i++){
    userReversce1.unshift(user[i])

}
console.log(userReversce1);


