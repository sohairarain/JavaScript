function welCome(){
    alert('welcome')
}

setTimeout( welCome,1000) //1st method old version

// how add new code without create new function 

setTimeout(function(){

    alert('runing')
    //etc...
},5000)

// old function in add new code without create new funtion

setTimeout(function(){
    welCome();
    const name = 'Ali' 
},5000)

// arrow function
var name = () => {} 