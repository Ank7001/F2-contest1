/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    var marksarr =  arr.map(function(item){
        if(item.marks >= 50){
        return item.name 
     }}); 
    
      console.log(marksarr);
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
  }
  
  function addData() {
    //Write your code here, just console.log
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
  }