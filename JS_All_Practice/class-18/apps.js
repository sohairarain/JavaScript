//                   //TOOL PLAZA
         
// var carName = prompt("Enter your car Name")
// var fuelAvg = +prompt("Enter car FUELAvrerage")
// var distance = +prompt("who travel distance")
// var age = prompt("Enter your age ")
// var drivingLicense = prompt("AP kay pass driving license hai yes ya no")

// var calu = distance / fuelAvg 
// var fuelprice = ( 780 * Math.ceil(calu)) 
// // alert("TOTAL COAST " + " travel in "+ carName +" RS "+ fuelprice)

// var tollTex ;

// if(carName.toLocaleLowerCase() == "mehran"){
//     tollTex = 100
// }
// else if(carName.toLocaleLowerCase() == "civic"){
//     tollTex = 500
//     // alert("TOTAL COAST ALLOVER "+ outPut)

// }   
// else{
//     tollTex = 300
//     // alert("TOTAL COAST ALLOVER "+ outPut)

// }

// var outPut = fuelprice + tollTex

    
    
//     if(age >= 18 && drivingLicense == "yes"){

//     alert("are you eligbale for car driving")
    
//     alert("TOTAL COAST ALLOVER "+ outPut)
// }


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