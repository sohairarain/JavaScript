document.getElementsByTagName('body')[0].style.backgroundColor='gray'
// console.log('runing')

// let userData = []

// function signUp(event) {
//     event.preventDefault()
    
//     const userForm = document.getElementById('userForm') 
//     const {value : fullname} = document.getElementById('fullName')
//     const {value : email} = document.getElementById('email')
//     const {value : password} = document.getElementById('password')
//     userData.push({fullname , password , email })    
//     localStorage.setItem('user', JSON.stringify(userData))

//     userForm.reset()
// }

// export default userData

function MyName(){
    return("sohair")
}function FatherName() {
    return('Muhammad Nasir Iqbal')
}function age() {
    return(12)
}

export{
    MyName,
    FatherName,
    age
}
