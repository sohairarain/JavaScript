document.getElementsByTagName('body')[0].style.background='gray'

// let tryOpe = false ?"if is true" : "else is true"
 //This condaation  // same if    // same else 
// console.log(tryOpe)

//  let marks = 100

// let grade = (marks >= 350 ) ? 'A Grade': // this work like if
            // (marks >= 250 ) ? 'B Grade': // this work like else if
            // 'fail'                       // this else
             
// console.log(grade)             


// let promise = new Promise((resolve , reject)=>{

//     let data = true

//     let result = (data)? resolve('success fully load data '):
//                  reject ('not data found')
    
// })
// .then((results)=>console.log(results))
// .catch((reslut)=>console.log(reslut))

// let totalBill = 1200

// new Promise((resolve , reject) => {
//     (totalBill >= 1000)?resolve('your free delivery')  :reject("so baad news only free on 1000 RS shoping ")
// })
// .then(result => console.log(result))
// .catch(badNews => console.log(badNews))

// let usersData = {
//     UserName : 'sohair' ,
//     role : 'web developer',
//     age : 18
// }
// let status = 200

// let multiTimeuseGetdata = new Promise((resolve , reject) => {
//     (status == 200)? resolve(usersData):reject("profile not found 404 error")
// })
// .then( ({UserName}) => console.log(UserName))
// .catch(error => console.log(error))