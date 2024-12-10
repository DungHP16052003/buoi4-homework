//bài 1
function salary(luong){
    if(luong <= 0 || isNaN(luong)){
        return "dữ liệu không hợp lệ";
    }
    if (luong <= 11) {
        return "Không tính thuế";
    } else if (luong <= 25) {
        return `Tiền thuế phải đóng: ${(luong * 0.05).toFixed(2)} triệu đồng`;
    } else if (luong <= 50) {
        return `Tiền thuế phải đóng: ${(luong * 0.1).toFixed(2)} triệu đồng`;
    } else if (luong <= 80) {
        return `Tiền thuế phải đóng: ${(luong * 0.2).toFixed(2)} triệu đồng`;
    } else {
        return `Tiền thuế phải đóng: ${(luong * 0.3).toFixed(2)} triệu đồng`;
    }
}

const luong = parseFloat(window.prompt("nhập số tiền lương( triệu) :"));
const answer = salary(luong);
alert(answer);
//bài 2
function electricityBill(kWh) {
    
    if (kWh <= 0 || isNaN(kWh)) {
        return "Dữ liệu không hợp lệ";
    }

    let total = 0;

    
    if (kWh > 400) {
        total += (kWh - 400) * 2.927;
        kWh = 400;
    }
    if (kWh > 300) {
        total += (kWh - 300) * 2.834;
        kWh = 300;
    }
    if (kWh > 200) {
        total += (kWh - 200) * 2.536;
        kWh = 200;
    }
    if (kWh > 100) {
        total += (kWh - 100) * 2.014;
        kWh = 100;
    }
    if (kWh > 50) {
        total += (kWh - 50) * 1.734;
        kWh = 50;
    }
    if (kWh > 0) {
        total += kWh * 1.678;
    }

    
    return `Tổng tiền điện: ${total.toFixed(2)} đồng`;
}


const kWh = parseFloat(prompt("Nhập số kWh đã sử dụng:"));
const result = electricityBill(kWh);
alert(result);
//bài 3
function triangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    return "Dữ liệu không hợp lệ";
  }
  if (a + b > c && b + c > a && c + a > b) {
    console.log("Đây là ba cạnh của hình tam giác");
  } else {
    console.log("Đây không phải là 3 cạnh của hình tam giác");
  }
  if (a == b && b == c && c == a) {
    console.log("Đây là tam giác đều");
  } else {
    console.log("Đây không phải tam giác đều");
  }
  if (
    a * a + b * b === c * c ||
    b * b + c * c === a * a ||
    c * c + a * a === b * b
  ) {
    console.log("Đây là một tam giác vuông");
  } else {
    console.log("Đây không phải là một tam giác vuông");
  }
}
let a = Number(window.prompt("Nhập vào cạnh a"));
let b = Number(window.prompt("Nhập vào cạnh b"));
let c = Number(window.prompt("Nhập vào cạnh c"));
console.log(triangle(a, b, c));
// bài 4
function calculatorBMI(weight, height) {
  if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
    return "Dữ liệu không hợp lệ";
  }
  const BMI = weight / (height * height);
  if (BMI < 18.5) {
    return "thiếu cân";
  } else if (BMI >= 18.5 && BMI <= 23) {
    return "bình thường";
  } else if (BMI >= 23 && BMI < 25) {
    return "thừa cân";
  } else if (BMI >= 25) {
    return "béo phì";
  }
}
const weight = parseFloat(window.prompt("moi nhap can nang:"));
const height = parseFloat(window.prompt("moi nhap chieu cao:"));
console.log(calculatorBMI(weight, height));
calculatorBMI();
