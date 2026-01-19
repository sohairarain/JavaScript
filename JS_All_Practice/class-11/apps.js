    //  FIRST STEP OFF REPLACING


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

var Name ="World War II changed the world forever sohair."

var index = Name.replace("World War II","The second world war")

console.log(index)  

// Output is = "(The second world war) changed the world forever sohair"



