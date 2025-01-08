const students = ['minh', 'son', 'thang'];
// console.log(students[0]);
// console.log(students.length);
// students[4] = "vinh";
// console.log(students);

// for(let i =0; i<students.length; i++){
//     console.log(students[i]);
// }
// let content = "";
// for(value of students){
//     console.log(value);
//     content = content + value;
// }
// console.log(content);
let result = students.unshift("vinh" , "cong");
console.log(students);
console.log(result);
/**
 * unshift 
 * -thêm phần tử vào đầu mảng
 * -trả về độ dài mới cửa mảng
 * -thay đổi mảng gốc
 * shift 
 * -xóa một phần tử đầu mảng
 * -thay đổi mảng gốc
 * -trả về phần tử bị xóa
 * push
 * -thêm phần tử vào cuối mảng
 * thay đổi mảng gốc
 * -trả về độ dài mới sau khi thêm
 * pop()
 * 
 */
console.log(students.shift())
console.log(students);
console.log(students.push("dung", "kien", "truong"));
console.log(students)
students.pop();
console.log(students);
