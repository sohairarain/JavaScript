// //          Chapter"17"

// var fruits = ["Banana" , "Peach" ,"Orange"]

// // Add a Pineapple

// fruits.unshift("Pineapple")
// console.log(fruits)

// // Output ["Pineapple" , "Banana" , "Peach" ,"Orange"]

// var city = ["Karachi" , "Lahore" , "Multan" , "Sukkar"]

// // First index remove

// city.shift()
// console.log(city)

// // Output ["Lahore" , "Multan" , "Sukkar"]

// var city = ["Karachi" , "Lahore" , "Multan" , "Sukkar"]

// // Add text in start of array

// // city.splice(0,0,"0000")
// // console.log(city)

// // Add text in center fo array

// // city.splice(2,0,"0000")
// // console.log(city)


// // Add text in last of array

// city.splice(-1,0,"0000")
// console.log(city)

// // Delete text for Splice


// var city = ["Karachi" , "Lahore" , "Multan" , "Sukkar"]


// city.splice(0,1,)
// console.log(city)

// // output = ["Lahore" , "Multan" , "Sukkar"]

// // Delete last string

// var city = ["Karachi" , "Lahore" , "Multan" , "Sukkar"]


// city.splice(-4,3,)
// console.log(city)

// // output =["sukkar"]


//    SPLICE use for copy element

var city = ["Karachi" , "Lahore" , "Multan" , "Sukkar"]

console.log(city.slice(0,1))

// output = ["Karachi"]

// CHAPTER 18 LOOP

// var city = ["Karachi" , "Lahore" , "Multan" , "Sukkar"]

// var InputCity = prompt("Enter youre city name")

// for(i = 0; i <= 100 ; i++){

//     if(InputCity === city[i]){
//         alert(InputCity +" so cleanest city")
//     }

//     else(
//         alert("this city not in list")
//     )
// }


// CHAPTER 19 LOOP

//     Break method & Boolean

// var city = ["Karachi" , "Lahore" , "Multan" , "Sukkar"]

// var InputCity = prompt("Enter youre city ")


// var boolean = false

// for(i = 0; i <= 4   ; i++){
//    if(InputCity === city[i]){
       
//     boolean = true
//     alert(InputCity +" so cleanest city")

// }

// if(boolean === false){
//             alert("city no Enter in list") 
// } 
// break;}


//  .Length method

// var parh ="World War II changed the world forever sohair. During World War II, many countries fought together and against each other. World War II affected soldiers, families, and cities. After World War II ended, people tried to rebuild their homes. Books about World War II teach us history lessons. Movies about World War II show bravery and sacrifice. Teachers talk about World War II in class. Museums remember World War II heroes. Even today, World War II stories are shared by grandparents. World War II remains one of the most important events in world history."

// for(i = 0; i <= parh.length ;i++){
//     console.log(parh)
// }

// Output id 559 Words in parah 

// CHAPTER 20

// for loops nested


// var Fname = ["Sohair","Ali","Abdullah","Arkam","Ayan","Hamza"]
// var LastName =[" Nasir","Shah","Yousuf","Ayan","Tariq" ]

// for(i= 0; i <= Fname.length; i++ ){
//     for(j= 0; j <= LastName.length; j++){
    
//         console.log(Fname[i] + LastName[j])
//     }

// }

// CHAPTER 21

    //   CHANGING CASE

// var Input = prompt("Enter youre Name")

// var Chancase = Input.toLowerCase()

// console.log(Chancase)

// out =(prompt value is convert lowercase)

    // Uparcase

// var Fname = ["Sohair","Ali","Abdullah","Arkam","Ayan","Hamza"]

// var Upercase = Fname.map(Fname => Fname.toUpperCase())

// console.log(Upercase)


// CHAPTER 22

// var UserName = prompt("Can you check youre name index num \n Enter youre name")

// console.log(UserName.length)

// var fruits = ["apple","banana","mango","strawtberry","peach","pineapple"]

// var copy = fruits.slice(0,1)
// console.log(copy)

// output is =["apple"]

// CHAPTER 23

//       Strings Finding segments

// var parah = "Coffee is the best way to start the morning. Many people feel that Coffee gives them energy for the day. I love the smell of fresh Coffee when I wake up. Some people like black Coffee, while others prefer Coffee with milk and sugar. My friend owns a small Coffee shop in the city. He says that making the perfect Coffee is an art. Every afternoon, we meet to drink Coffee together. If I don't drink my Coffee, I feel very sleepy. There are so many types of Coffee beans available today. Truly, Coffee is the most popular drink in the world"

// for( p = 0; p <= parah.length; p++){
//     if(parah.slice(p ,p + 6) ==="Coffee"){
        
//         parah = parah.slice(0,p) + "Tea" + parah.slice( p+6)
        
//     }
// }

// console.log(parah)

// output 11 corffe words replace into tea

// CHAPTER 24

             // Finding a character at a location

var passInput = prompt("make new password \n use 8 characters must sue #@!")

    if(passInput.length >= 8){
        alert("go")
    }
    
passInput=passInput.indexOf("#")

console.log(passInput)

// output find # of index num

//        CHAPTER 25 

        // REPLACING

            //  FIRST STEP OFF REPLACING

// var Name ="World War II changed the world forever sohair. During World War II, many countries fought together and against each other. World War II affected soldiers, families, and cities. After World War II ended, people tried to rebuild their homes. Books about World War II teach us history lessons. Movies about World War II show bravery and sacrifice. Teachers talk about World War II in class. Museums remember World War II heroes. Even today, World War II stories are shared by grandparents. World War II remains one of the most important events in world history."

// for(i = 0; i < Name.length; i++ ){
      
//     if(Name.slice(i,i+2)==="II"){
//         Name = Name.slice(0,i) + "2" + Name.slice(i+2)
        
//     }
    
// }
// console.log(Name)



// for( i = 0; i<= text.length; i++){

//     if(text.slice(i , i+12)==="World War II"){
//         text = text.slice(0,i) + "The second world war" + text.slice(i+12)
        
//     }
// }
//         console.log(text)


    //    SECOND METHOD OFF " INDEXOF "

// var Name ="World War II changed the world forever sohair. During World War II, many countries fought together and against each other. World War II affected soldiers, families, and cities. After World War II ended, people tried to rebuild their homes. Books about World War II teach us history lessons. Movies about World War II show bravery and sacrifice. Teachers talk about World War II in class. Museums remember World War II heroes. Even today, World War II stories are shared by grandparents. World War II remains one of the most important events in world history."

// var index = Name.indexOf("c")

// console.log(index)  

//      // output = 13

        //  3rd Method OFF "charAt"

// var Name ="World War II changed the world forever sohair. During World War II, many countries fought together and against each other. World War II affected soldiers, families, and cities. After World War II ended, people tried to rebuild their homes. Books about World War II teach us history lessons. Movies about World War II show bravery and sacrifice. Teachers talk about World War II in class. Museums remember World War II heroes. Even today, World War II stories are shared by grandparents. World War II remains one of the most important events in world history."

// var index = Name.charAt("11")

// console.log(index)  

         //Output =I 

        //  4th Method OFF "replace"

// var Name ="World War II changed the world forever."

// var index = Name.replace("World War II","The second world war")

// console.log(index)  

// output is "The second world war changed the world forever"

        //   5th Method OFF "replaceAll"

// var Name ="World War II changed the world forever sohair. During World War II, many countries fought together and against each other. World War II affected soldiers, families, and cities. After World War II ended, people tried to rebuild their homes. Books about World War II teach us history lessons. Movies about World War II show bravery and sacrifice. Teachers talk about World War II in class. Museums remember World War II heroes. Even today, World War II stories are shared by grandparents. World War II remains one of the most important events in world history."

// var repALL = Name.replaceAll("World War II","The second world war")
// console.log(repALL)

// output replace all world war II into the second world war


// CHAPTER 26  
//    Rounding numbers

// var num = 71.4

// console.log(Math.round(num))

// // output is 71

// var num = 71.6

// console.log(Math.round(num))

// // output is 72

var myNumber = 71.1;

var floorVal = Math.floor(myNumber) 
console.log(floorVal)
 // Output: 71

 var myNumber = 71.1;

var ceilVal = Math.ceil(myNumber);

console.log(ceilVal)
// Output: 72
