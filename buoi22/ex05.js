const product = {
    title : "san pham A ", 
    price : 2000,
    description : "Mô tả sản phẩm",
   stock : 2000,
   size: "XL"
}
//  destructoring áp dụng với object và array 

// rest parameter : là phần còn lại của object(array) 
//rest luôn xuất hiện ở cuối khai báo trong cấu trúc Destructoring
const {title, price, description, ...other} = product ;
    console.log(title);
     console.log(other);

     /**
      * spread
      * 
      *- dùng để trải các phần tử của obj(arr) cũ ra một vùng(khai báo) của obj(arr) mới
      -spread có thể dùng để shallow copy, gom(gộp) obj(arr)
      */
     const productCoby = {
        ...product,
        color: "yellow"
     };
     console.log(productCoby);
const infor1 ={a:1, b:2}
const infor2 = {c:3, d:4};
const infor3 ={...infor1, ...infor2};
console.log(infor3);