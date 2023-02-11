/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(a => {
    if (a.marks > 50) {
     console.log(a);
    }
  });

}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(a => {
    if (a.marks > 50) {
      console.log(a);
    }
  });

}

function addData() {
  //Write your code here, just console.log
  let newArr = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newArr);
  console.log(arr);

}

function removeFailedStudent() {
  //Write your code here, just console.log
  let filteredArr = arr.filter(a => a.marks >= 50);
  console.log(filteredArr);

}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 7, name: "komal", age: "20", marks: 85 },
    { id: 9, name: "Aman-Tiwari", age: "20", marks: 85 },
    { id: 11, name: "Sonam Meena", age: "20", marks: 85 },
  ];
  let all = arr.concat(arr1);
console.log(all);

  
}
