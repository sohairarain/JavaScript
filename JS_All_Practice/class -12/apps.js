                //  PETROL PUMP BILL PRACTICE

// var userInput = prompt("Enter youre city for special discount")
// var converter = userInput.toLocaleLowerCase()
// var outputPetrol = prompt("apko kitna fuel dalwana hai ")
// var num =parseInt(outputPetrol) 
// var fuelRate = 280 

// if(converter === "karachi" ){
//     var discount = fuelRate - 50
//     var result = num * discount
//     // document.write(result)
//         document.write("your total bill for " + num + " liters in city " + userInput + " is" + result +" PKR")
// } 
//     var bill = num * fuelRate
//     document.write("your total bill for " + num + " liters in city " + userInput + " is" + bill +" PKR")


var shop = ["apple","banana","mango","orange","strawberry","pineapple","waterMlaon","peach","leachi"]
var userRequrid = prompt("what do you fruits buy")
var owder = userRequrid.toLowerCase()
var matchFoung = false
for(i = 0 ; i <= shop.length ; i++){
    if(shop[i] == owder){
        matchFoung = true
    }
    
    matchFoung = false
}
if(matchFoung == true){
    
        alert("yes " + userRequrid)
}
else{
    
    alert("sorry we don,t have that")

}