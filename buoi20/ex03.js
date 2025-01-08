const users = [
  { id: 1, username: "Minh", address: "NgheAn" },
  { id: 2, username: "Tue", address: "VinhPhuc" },
  { id: 3, username: "Son", address: "HaNoi" },
  { id: 4, username: "Cong", address: "HaNoi" },
  { id: 5, username: "Toan", address: "HaNam" },
  { id: 6, username: "Giang", address: "HaNoi" },
];
const usersGroupByAddress = {
  NgheAn: [{ id: 1, username: "Minh", address: "NgheAn" }],
  VinhPhuc: [{ id: 2, username: "Tue", address: "VinhPhuc" }],
  HaNoi: [
    { id: 3, username: "Son", address: "HaNoi" },
    { id: 4, username: "Cong", address: "HaNoi" },
    { id: 6, username: "Giang", address: "HaNoi" },
  ],
  HaNam: [{ id: 5, username: "Toan", address: "HaNam" }],
};
const userReversce = {};
for(value of users){
    if(!usersGroupByAddress[value.address]){
        usersGroupByAddress[value.address]=[];
    }
    usersGroupByAddress[value.address].push(value);
}
console.log(usersGroupByAddress);

const students = [
    {id: 1, username: "son", score:8},
    {id:2, username: "dung", score:9},
    {id:3, username: "minh", score:10},
    ];
    let diemtb = students[0];
    let Minstudents = students[0];
    let Maxstudents = students[0];
    for(let i =0; i<students.length; i++){
        if(students[i].score > Maxstudents.score){
         Maxstudents = students[i];
        }
        if(students[i].score < Minstudents.score){
            Minstudents = students[i];
        }
    } 
    let avgScore = diemtb / students.length;
    console.log(Minstudents);
    console.log(Maxstudents);
    console.log(diemtb);
    