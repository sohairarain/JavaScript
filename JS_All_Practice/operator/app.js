document.getElementsByTagName('body')[0].style.background='gray'
// rest operator

let array = [
    {name : "Sohair", agr : 18 },
    {name :"Ali", agr :21 },    
    {name :"Ayan", agr : 24},
    {name :"Ahmed", agr : 30},
]
// .map kay () mein user mein array[i]wali value or i mein index of loop 
array.map( (user ,i) => {
    console.log(user,i)
})
let [user1 , ...otheruser] = array // user1 mein first array of object wala user aya or baki teen ottheruser mein save ya (rest) operatir hai


function mercades() {

    console.log('g63')
}
function bmw(callback){
     console.log('50 50 weight distribution')
     callback()
}
bmw(mercades)

let array = null

array?.forEach(element => {
    console.log(element.name)
});
console.log('code runing ')