document.getElementsByTagName('body')[0].style.background='gray'
// let numArr = [1,2,10,44,21,13,45,56,67,85,43,12,44,58]
// let check = 0

// for (let index = 0; index <= numArr.length; index++) {
    
//     if (numArr[index] >= check) {
//        check = numArr[index]
//     }
    
// }
// console.log(check)

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// for (let index = 0; index < array.length; index++) {
    
//     if (array[index] % 2 == 0) {
//         console.log(array[index] +"ya even hai")
//     }   
//     else{
//         console.log(array[index]+'ya odd hai')
//     }
//  } //even ho gaya odd logic
//let parah = 'World War II changed the world forever. During World War II, many countries fought together and against each other. World War II affected soldiers, families, and cities. After World War II ended, people tried to rebuild their homes. Books about World War II teach us history lessons. Movies about World War II show bravery and sacrifice. Teachers talk about World War II in class. Museums remember World War II heroes. Even today, World War II stories are shared by grandparents. World War II remains one of the most important events in world history.'

// for (let index = 0; index < parah.length; index++) {
    
//     if(parah.slice(index,index +12)=='World War II'){
//         parah = parah.slice(0,index) + "the second word war" + parah.slice(index+12)
//     }
// }
// console.log(parah)

// let newWord = parah.replace('World War II','the second world war') // aik new string retrun karta hai is liya isay kisi variable mein save karna lazme hai or ya sirf first mein jo value hoge yani jasy aik parah mein bhout sary same word hau jasy 'war'jo phlay war hoga bus usko change kary ga
//let newWord = parah.replace('World War II','the second world war') // ya bhi same hai replace ki trha bus ya pooray parh mein say sari value replace karta hai
//console.log(newWord)
    
// let student = [400,700,760]

// switch (true) {
//     case (student[0] >= 300):
//         console.log('pass')
//         break;
//     case (student[0] >= 200):
//         console.log('very nice result')
//         break;
//     case (student[0] <= 100):
//         console.log('A1 grade')
//         break;        
    
// }

let data = []
let userInput = document.getElementById("userInput")

function userInputGet() {

    data.push(userInput.value)
    localStorage.setItem('List',JSON.stringify(data))
    userInput.value=''
    showList()
}function showList() {

   let listCon = document.getElementById('list-container')
   listCon.innerHTML=''

   for (let i = 0; i < data.length; i++) {
       listCon.innerHTML+=`<li>${data[i]}<button onclick="remove(${i})">remove</button><button onclick="edit('${i}')">edit</button></li>`
   }
}function remove(index) {
    data.splice(index,1)
    console.log(index)
    showList()
}function edit(index) {
    userInput.value = data.splice(index,1)   
    document.getElementById('btn-sub').innerText='update'
}
