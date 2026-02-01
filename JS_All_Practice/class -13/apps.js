var now = new Date()
var day = now.getDay()
var days = ["sunday","Monday","Tuesday","Wednesday","thursday","Friday","Saturday"]
var result = days[day]
console.log(result)

//               AGE method BY MY PATTERN

var toDay = new Date()
var Mydob = new Date("december 16 ,2010")
var convert = Number(Mydob.getTime()) - (toDay.getTime()) 
var caltuation  = convert / (1000 * 60 * 60 *24)
var result = caltuation / 365
console.log(Math.floor(result))

            // BOOK PATTREN

var toDay = new Date()
var myDoob = new Date("december 16, 2010")
var msToday = toDay.getTime()
var Mstime = myDoob.getTime()
var calu = Mstime - msToday
var dDiff = calu /  (1000 * 60 * 60 * 24)
dDiff = Math.floor(dDiff)
var age = dDiff / 365
console.log(Math.floor(age))
