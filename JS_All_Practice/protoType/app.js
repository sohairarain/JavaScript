// let userData = {
//     name : 'sohair',
//     age : '17',
//     num : '123123213123',
//     nationality : 'pakistani',

//     greeting : function() {

//         console.log('hello world')
//     }
// }

// // console.log(userData.FatherName.age) // ya nested objects ki key check kartay wqat use hota hai ager koye property nahi milay tou error ata hai or baki sara code break ho jata hai (?) ya codde ko break hony say bachata hai or undefined retrun karta hai 
// // console.log(userData?.FatherName?.age)
// // console.log(userData.name)

// // console.log(userData?.greeting()?.greeting) // ya method hai function ko object kay ander rakh kar call karna or check karny kay error hai ya nahi 

// class Car{
//     constructor(model , brand , engine , power){
//         this.model = model
//         this.brand = brand
//         this.engine = engine
//         this.power = power
//     }
// }

// const car = new Car(1968 , 'doge' , '2jz' , '1500HP' )

// Car.prototype.twire='panther'

// let num = null

// console.log(car.twire)

// (

            // is pooray case mein ya seen hai kay .KEY kary kay value nahi get kar sakty kabi ya bhi hota hai . sy value get nahi ho sakti 
            // is kay liya hum use karty hai ya [''] ab iskay ander key pass kary value get ho jay ge 
    
    let obj = [cars = { 
        key : 'go',
        words : 'runing'
    }]
    
    console.log(car.key)


            // ya prototype wala kaam hai is mein hum aik new key add kar sakty hain har function mein 
            // jasi ab mary pass kafi sary user hai hain muja har student ko salam karnahai mein             
            // function bna kar prototype say usko student kay walay fun mein add kar kay ya kaam asani say 
            // kar sakta hoon or muja salam ka fun bar bar nahi bana parhay ga

function Student(name){
  this.name = name
}

Student.prototype.sayHello = function(){
  console.log("Hello " + this.name)
}

var s1 = new Student("Ali")
var s2 = new Student("Ahmed")

console.log(s1.sayHello())



//: Prototype wale functions hamesha Variable Name + Dot + Function Name se call
//  kiye jate hain taake computer ko pata chale ke kis bande ka data (name) dikhana hai.

function userData(name , fatherName , age ,identity , dob) {
    this.name = name
    this.fatherName = fatherName 
    this.age = age
    this.identity = identity  
    this.dob = dob 
}

userData.prototype.addtimelogin = function(){
    console.log(this.name)
}

let s1 = new userData('Sohair' , 'Muhammad Nasir Iqbal', 17 , 'pakistani' , '16 dec 2010')

// console.log(s1.addtimelogin()) // ya prototype say data get karnay ka tarika hai 

