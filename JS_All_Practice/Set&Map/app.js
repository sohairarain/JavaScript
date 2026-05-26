// //      first topic is set 
// document.getElementsByTagName('body')[0].style.background ='gray'

// let array = new Set()

// array.add('sohair')
// array.add('nasir')
// // array.clear() all data Clean
// // let getvalue = array.has('sohair') // this method is return true on value find if not found this var in false return

// console.log(array.size)

// let users ={
//     personName : 'sohair',
//     personFname : 'nasir',
//     personplayGame : 'circket',
//     personshoq : 'animals',
// }
// let getKeys = Object.keys(users) // this method is get object keys and return form is array 

// console.log()
// console.log(Object.keys(users).length)// this methdo to get object length


// let student = new Map()

// student.set('user',"ali")
// console.log(student)


// let smitStudent = new Set()
// smitStudent.add("Sohair")
// smitStudent.add('ali')
// smitStudent.add('Sohair')
// console.log(smitStudent.size)
// console.log(smitStudent.has('ali'))


// let products = new Map()
// let productsprice = new Set()

//     products.set('laptop',5000)
//     products.set('mobile',3000)

// console.log(products.get('laptop'),products.size)

// products.forEach((value , key) =>{
//     console.log(value , key)
// })


//




let rawAttendance = [101,102,103,104,105,106,107,108,101,102,103]
let studentname =["sohair","ali","Ahmed","raza","hamza","mobeen","mudasir","muzamil"] 
let cleanAttendance = new Set(rawAttendance)
let murch = [...cleanAttendance]

let dataBase = new Map()

murch.forEach((value,index) => {
    dataBase.set(value ,studentname[index] )
let present = dataBase.get(value)
console.log(present + ' '+ value +" this student is present") 
})