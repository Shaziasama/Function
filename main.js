//Basic function
//function myfun(){
//  console.log("Hello world!");
//}
//myfun();
// Normal parameters
//function add(value1:number,value2:number){
//const result: number = value1+value2
//console.log(result);
//}
//add(10,5);/// arrugment
//function myName(name1:string):string{
//return name1;
//}
//const name1: string = myName("shazia zohaib")
//console.log(name1);
//function oddOrEven(num:number):string{
//const result:string= num % 2 === 0? "Even": "odd";
//return result
//}
//const myAnswer:string = oddOrEven(15)
//
//console.log(myAnswer);
//function myName(firstName:string,lastName:string):string{
//const myFullName:string = firstName +  "  "+ lastName;
//return myFullName;
//}
//const result: string=myName("Abdul"  ,"Ahad");
//console.log(result);
/////by using normal function//////
//function myName(name:string): string{
//return name;
//}
//const value:string = ("abdul ahad")
//console.log(value);
///////Arrow function////
//const myName2 =(name:string) => name
//const value2:string = myName2("salman shahid");
//console.log(value2);
//////Anonymouse function/////
//const myfunc = function(){
//console.log('Hello world');
//}
//myfunc()
///////IIEF/////
//function myName(name:string){
//   console.log(name)
//}
//myName("shazia");
//////////Default parameter////////
function myName(name) {
    if (name === void 0) { name = "hashir"; }
    return name;
}
var result = myName("shahid");
console.log(result);
