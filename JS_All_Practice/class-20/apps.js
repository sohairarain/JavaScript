var userName = prompt("enter your Name");
if (userName == "") {
  alert("Fill the input");
}
var caseChange = userName.slice(0, 1);
var result = caseChange.toLocaleUpperCase() + userName.slice(1);

let toDay = new Date();
var toDin = toDay.getDay();
var toDate = toDay.getDate();
var toMonth = toDay.getMonth();
var toYear = toDay.getFullYear();
var toHour = toDay.getUTCHours();

var arr_month = [
  "january",
  "february",
  "march",
  "april",
  "May",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "December",
];

for (i = 0; i < arr_month.length; i++) {
  var month = arr_month[toMonth];
}

var caseUP = month.slice(0, 1);
var readyMonth = caseUP.toUpperCase() + month.slice(1);
alert(result + "\n" + toDate + "/" + readyMonth + "/" + toYear);

var userPass = prompt("Enetr your pass ");
if (userPass == "") {
  alert("Fill the passName");
}
var arrPasses = [
  "silver",
  "gold",
  "dimaond",
  "bronze",
  "master",
  "GrandMaster",
];
var passPrice = ["300", "450", "1000", "200", "1500", "5000"];

var userTime = prompt("Ap kitna time game khalna chaty hoo");
var days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thrusday",
  "friday",
  "saturday",
];

for (d = 0; d < days.length; d++) {
  var cruntDay = days[toDin];
}

var UStime_set = parseInt(userTime); // ya paisay calulate karny kay liya

switch (true) {
  case userPass != "":
    var match = false;
    for (p = 0; p < arrPasses.length; p++) {
      if (userPass.toLocaleLowerCase() == arrPasses[p].toLocaleLowerCase()) {
        var showPass = arrPasses[p];
        var showPrice = passPrice[p];
        match = true;
      }
    }
    if (match == false) {
      alert("Can you write correct Pass Name");
    }

  case match == true:
    if ((cruntDay == "wednusday" || cruntDay == "saturday") && toHour < 8) {
      alert(
        `Your pass conform ${showPass} without discount price ${showPrice} Early moring discount and weakend charges ${+showPrice + 500 - 150}`,
      );
    } else if (cruntDay == "wednusday" || cruntDay == "saturday") {
      alert(
        `Your pass conform ${showPass} without discount price ${showPrice} Early moring discount and weakend charges ${+showPrice + 500}`,
      );
    } else {
      alert(
        `Your pass conform ${showPass} without discount price ${showPrice} Early moring discount and weakend charges ${+showPrice + 150}`,
      );
    }
    break;
}

var bill = false;
function luckydrow(userInput) {
  var userNum = +prompt("gusse number 1 to 5 and Bill win great reword");
  var random = Math.random();
  var num = Math.floor(random * 5) + 1;
  if (userNum == num) {
    alert(userName + " YOU WIN \n Your bill is RS 0");
  } else {
    alert("your guess in wrong " + num + " This is real num try again");
  }
  bill = true;
}

//  if(userPass !==""){
//             for(p = 0 ; p < arrPasses.length ; p++){
//             if(userPass.toLocaleLowerCase() != arrPasses[p].toLocaleLowerCase()){
//             alert("Can you write correct Pass Name")
//             break;
//         }
//         if(userPass.toLocaleLowerCase() == arrPasses[p].toLocaleLowerCase()){

//             var showPass  = arrPasses[p]
//             var showPrice = passPrice[p]
//         }

// }

//         if(cruntDay == "saturday" || cruntDay == "saturday" && toHour < 5){

//         for(p = 0 ; p < arrPasses.length ; p++){
//         if(userPass.toLocaleLowerCase() == arrPasses[p].toLocaleLowerCase()){
//                 alert(`yor ${showPass.toLocaleUpperCase()} pass confirm ${Number(showPrice) + 500 - 150}`)
//         }
//  }}  }

//         else if(toHour < 5){

//              alert(`yor ${arrPasses[p].toLocaleUpperCase()} pass confirm And RS150 off for early Brid ${Number(passPrice[p]) - 150}`)

//         }
//     else{
//             alert("fill pass name")}
