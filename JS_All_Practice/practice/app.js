document.getElementsByTagName('body')[0].style.background="gray"

// let userAccountNum =[]

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// for (let index = 0; index < array.length; index++) {
//     let number = Math.random()* 10 +1
//     userAccountNum.push(array[Math.floor(number)])

// }
// let chekDuplicateNum = new Set(userAccountNum)
// console.log(chekDuplicateNum)


let checkUnique = new Set()
let array = []
const userData = []
let accountNumber ;

class user{
    constructor(firstName , lastName , phoneNum , gmail , cnic ){

        this.firstName = firstName
        this.lastName  = lastName
        this.phoneNum  = phoneNum
        this.gmail     = gmail
        this.cnicNum   = cnic
        // this.Password  = Password
        // this.accNum    = accNum
    }
}



 let finalInputsValue ;

function createAcc() {

    let fName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phone = document.getElementById("phoneNum").value;
    let email = document.getElementById("gmail").value;
    let cnic = document.getElementById("cnicNum").value;

    finalInputsValue = new user(fName , lastName , phone , email ,cnic) 
    
// console.log(finalInputsValues)
// let inputs = document.querySelector('.auth-form')
// let readAble = new FormData(inputs)
// let finalInputsValue = Object.fromEntries(readAble)

   let isFromValid = true 
    for(key in finalInputsValue){
           console.log(key)        
        if (finalInputsValue[key] !== '') {
            document.getElementById(key).style.border='1px solid #222227'        
        }else{
            document.getElementById(key).style.border='1px solid red'
            isFromValid = false
        }
    }

    if(isFromValid){

function newAccountNumGenrator() {

    let newNumber ;
    let isunique = false
    while (!isunique) {
        newNumber = Math.floor(1000000000000 + Math.random() * 9000000000000)
       
        if(!checkUnique.has(newNumber)){
            
            isunique = true
            checkUnique.add(newNumber)
            array.push(newNumber)
            accountNumber = newNumber
            user.accountNum = accountNumber 

        }
    }
}
newAccountNumGenrator()

        document.getElementById('detailsForm').style.display='none'
        let showAccNum = document.getElementById('passwordForm')
        document.getElementById('step-desc').innerText='Step 2 of 2: Personal details'        
        showAccNum.innerHTML=`<div class="account-success-box">

        <span>Account Generated Successfully</span>
        <div class="account-number" id="displayAccountNumber">${accountNumber}</div>
        <p>Please note down this number. It will be required for your future logins.</p>
      </div>
      <div class="input-field">
        <label for="finalPassword">Create Secure Password</label>
        <input type="password" id="finalPassword" required placeholder="••••••••">
      </div>
      <button type="button" class="primary-btn success" onclick="setPassword()">Complete Registration</button>
      `
      console.log(finalInputsValue)
}   
}

function setPassword() {
let passValue = document.getElementById('finalPassword').value
user.password = passValue
user.accountNum = accountNumber 

userData.push(finalInputsValue)

}

