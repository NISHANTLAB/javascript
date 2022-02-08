// Hence, any change made to either of them changes the attributes for both. To overcome this problem, deep
//  copy is used. 
//SHALLOW COPY:-
// var employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }
  
  
// console.log("Employee=> ", employee);
// var newEmployee = employee;    // Shallow copy
// console.log("New Employee=> ", newEmployee);
  
// console.log("---------After modification----------");
// newEmployee.ename = "Beck";
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);
// // Name of the employee as well as 
// // newEmployee is changed.



//DEEP COPY:-
var employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
var newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);