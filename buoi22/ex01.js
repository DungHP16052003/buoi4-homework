const obj1 = {
    username : 'hoangdung'
}
const userInfor = {
    fullName : "hoang anh dung",
    address : "Ha Noi",
    learn : function(lesson, time){
        console.log(`toi hoc ${lesson} vao luc ${time}`)
    }
}
console.log(userInfor.fullName);
userInfor.learn("JS", "vào lúc 12h");

const obj2 = new Object();
const obj3 = new Object({title : "f8"});
console.log(obj3);

userInfor.age = 33 ;
console.log(userInfor);

const newkey = "email";
userInfor[newkey] = "hoangdungvt.nq@gmail.com";

userInfor["Sở thích"] = ["coding", 'badminton'];
console.log(userInfor);

/**
 * sử dụng dấu [] để khai báo key là chuỗi đặc biệt hoặc tham chiếu đến một biến.   
 */

 let title = "Tivi samsung"
 let price = 20000;
 let year = 2021;
  const product = {title, price, year};

  // shorthand property : enhance object literal
  console.log(product);