
var userName = prompt("Enter your name")
var age = +prompt("your age")
var day = prompt("how day watch darama")

if(day.toLocaleLowerCase() !== "saturday" && day.toLocaleLowerCase() !== "sunday"){

    if(age < 12 && age !== 0 ){
       
        var child = 500
        var category = "Child"

        alert(userName.toLocaleUpperCase() +"\n"+ "Category "+ category +"\n"+ "TOTAL BILL " +"RS "+ child)
    }
    else if(age <= 60){

        var adultTicket = 1000
        category = "Adult"

        alert(userName.toLocaleUpperCase() +"\n"+ "Category "+ category +"\n"+ "TOTAL BILL " +"RS "+ adultTicket)

    }
    else{

        var SeniorCitizen = 500
        category = "Senior Citizen "

        alert(userName.toLocaleUpperCase() +"\n"+ "Category "+ category +"\n"+ "TOTAL BILL " +"RS "+ SeniorCitizen)

    }

}
else{
    if(age < 12 && age !== 0 ){
       
        var child = 500
        var category = "Child"

        alert(userName.toLocaleUpperCase() +"\n"+ "Category "+ category +"\n"+ "TOTAL BILL " +"RS "+( child + 200))
    }
    else if(age <= 60){

        var adultTicket = 1000
        category = "Adult"

        alert(userName.toLocaleUpperCase() +"\n"+ "Category "+ category +"\n"+ "TOTAL BILL " +"RS "+ (adultTicket+ 200))

    }
    else{

        var SeniorCitizen = 500
        category = "Senior Citizen "

        alert(userName.toLocaleUpperCase() +"\n"+ "Category "+ category +"\n"+ "TOTAL BILL " +"RS "+ (SeniorCitizen + 200)) 

    }


}
var items = ["bread","milk","eggs","butter","cheese",]
var price = [ 100 , 200 , 50 , 150 , 300]

var userName = prompt("Enter your Name")
var buyItems = prompt("Item name")
var quantity = +prompt("Enter item quantity")
if(buyItems !== items){

        alert("this "+ buyItems + " not avalibale"  )

    }
else if(userName !== "" && buyItems !== ""  && quantity !== ""){

        
    var match = false
    for( i = 0; i < items.length ; i++ ){
        if(items[i] == buyItems.toLocaleLowerCase()){
        
        var Getitem = items[i] 
        var GetPrice = price[i]
        console.log(GetPrice)
        var match = true
        break;
    } }
    }
     

   var NameCase = userName.slice(0,1)
   var result = NameCase.toLocaleUpperCase()
   result += userName.slice(1,)
   var finalBill = GetPrice * quantity
   
   alert(result +"\n" + Getitem +"\n"+Math.round(finalBill) +"\n")
   
   
   
   if(finalBill > 2000 ){
       
       var percentage = finalBill * 0.85
       
       alert(result +"\n" + Getitem +"\n"+ percentage +"\n")
       alert(Math.floor(percentage))
}

else{
    alert("fill the inputs")
}
    
var usernum = prompt("guess a lucky number between 1 to 5")

var num = Math.random() * 5 -1
if(parseInt(usernum) == Math.ceil(num)){
    alert("congratulation yore guess is ture your bill is free ")
}

var b = ["5","",""]
b[5] = 10

var y = 5
var result = ++y + y++ + y

var x ="5"
var y = +x + 5

console.log( y)

var usernum ="guess a lucky number between 1 to 5"
