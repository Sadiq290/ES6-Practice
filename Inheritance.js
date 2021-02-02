class Parent {
    constructor(){
    this.Father_Name = "BM Motiar Rahman";
    this.Mather_Name = "Salma Rahman";
    }    
}
class Child extends Parent{
     constructor(name){
         super()
         this.Name = name;
      
     }
}
const Child1 = new Child("Sadiq Ur Rahman");
const Child2 = new Child("Ifat Jahan Mumu");

console.log(Child1,Child2);