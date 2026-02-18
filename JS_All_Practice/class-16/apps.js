// ya method days btata hai kitny rah gay
var today = new Date()
var before = new Date("feburay 18,2026")
var calu = before - today
var days = calu / (1000 * 60 * 60 * 24) 

document.write(Math.floor(days)+" days have passed since 1st Ramdan , 2015")

// kitna time guzar gaya din 
var today = new Date()
var before = new Date("feburay 18,2026")
var calu = today - before  
var days = calu / (1000 * 60 * 60 * 24) 

document.write(Math.floor(days)+" days have passed since 1st Ramdan , 2015")

function bggreen(){
var element =document.getElementById('green')
element.style.backgroundColor ='green'
}
function bgred(){
    document.body.style.backgroundColor ='red'  //ya poray boday kay bg ka color chnage kar dyta hia
}

function userinput(){
   var userData = document.getElementById('userInput')
   userData.value = userData.value.toUpperCase()
}

// task 3

function error(){

    var data = document.getElementById('userInput')
    
    if(data.value !== ""){
        data.style.border='3px solid green'
    }
    else{
        data.style.border='5px solid red'
    }
    data.value =""

}

function pass(type){
     document.getElementById('password').type += type
}
function back(){
document.getElementById('password').type ='password'
}