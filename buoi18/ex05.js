if(10 % 3 === 0){
    console.log("khong chia het cho 3");
  } else{
        console.log("chia het cho 3");
    }



function calculatorBMI(weight,height){
  if(weight <= 0 || height <=0 || isNaN(weight) || isNaN(height)){
    return "Dữ liệu không hợp lệ";
  }
   const BMI =  weight / (height * height);
   if(BMI < 18.5){
    return "thiếu cân";
   }else if(BMI >= 18.5 && BMI <=23){
      return "bình thường"
   }else if(BMI >= 23 && BMI < 25){
    return "thừa cân";
   }else if(BMI >= 25){
     return "béo phì";
   }
    
}
const weight = parseFloat(window.prompt("moi nhap can nang:"));
const height = parseFloat(window.prompt("moi nhap chieu cao:"));
console.log(calculatorBMI(weight, height));
calculatorBMI();
