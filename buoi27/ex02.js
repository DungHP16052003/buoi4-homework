console.log(Number.isNaN("123"));
console.log(Number.isNaN("abc"));
console.log(Number.isNaN("123"));
//Number.isNaN(number) kiem tra xem gia tri truyen vao co phai NaN hay khong

console.log(isNaN("123"));
console.log(isNaN("abc"));

let num1 = 1234.56;
console.log(num1.toExponential(2))
console.log(num1.toExponential(100))
console.log(typeof num1.toExponential(100))

// tra ve chuoi bieu dien so dang toan hoc. Tra ve dang chuoi

console.log(num1.toFixed(2))
console.log(typeof num1.toFixed(2))

console.log(num1.toPrecision(5)) // tra ve dang chuoi 

console.log(num1.toString());
console.log((0).toString());
console.log((14).toString(16));

console.log(Number.MAX_SAFE_INTEGER);
console.log(2**53-1);

console.log((9007199254740991n + 100n));
console.log( typeof (9007199254740991n + 100n));

let a = 123;
console.log(Number.isFinite(123.45)); 
console.log(Number.isFinite(Math.sqrt(2))); 
console.log(Number.isFinite(Math.PI)); 

console.log(Number.isInteger(1237)); 
