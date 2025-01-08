const product = {
    title : "san pham A",
    price : 20000, 
    description : ""
};
 for (key in product){
    console.log(key);
    console.log(`gia tri cua ${key} la mot ${product[key]}`);
 }

 // for ... of chỉ áp dụng với array 
//  console.log(Object.length);

console.log(Object.keys(product));
console.log(Object.values(product).length);
console.log(Object.entries(product));


const arrayInfo = [
    ['fullname', "hoangNm"], 
     ["age", 32],
     ["address","Hn"],
]
const obj = {};
for (let item of arrayInfo){
   console.log(item);
   obj[item[0]] =item[1] ;
}

// obj['name'] = 'f8';

console.log(obj);

const cart = {
	products: [
		{ id: 1, title: "san pham A", price: 200, quantity: 2 },
		{ id: 2, title: "san pham B", price: 300, quantity: 4 },
		{ id: 3, title: "san pham C", price: 230, quantity: 1 },
	],

  getTotal: function(){
    console.log(this.products);
    let total = 0;
    for ( let values of this.products) {
        console.log(values);
        total += values.price * values.quantity; 

    }
    return total;
  }
};
console.log("tổng đơn hàng", cart.getTotal());
