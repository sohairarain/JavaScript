                //  Relacing Mehod 

//  FIRST STEP OFF REPLACING

for( i = 0; i<= text.length; i++){

    if(text.slice(i , i+12)==="World War II"){
        text = text.slice(0,i) + "The second world war" + text.slice(i+12)
        
    }
}
        console.log(text)


    //    SECOND METHOD OFF " INDEXOF "

var Name ="World War II changed the world forever sohair. During World War II, many countries fought together and against each other. World War II affected soldiers, families, and cities. After World War II ended, people tried to rebuild their homes. Books about World War II teach us history lessons. Movies about World War II show bravery and sacrifice. Teachers talk about World War II in class. Museums remember World War II heroes. Even today, World War II stories are shared by grandparents. World War II remains one of the most important events in world history."

var index = Name.indexOf("sohair")

console.log(index)  

//      // output = 13

// Ya method string ki index number show karwa ta hai



        //  3rd Method OFF "charAt"

var Name ="World War II changed the world forever sohair. During World War II, many countries fought together and against each other. World War II affected soldiers, families, and cities. After World War II ended, people tried to rebuild their homes. Books about World War II teach us history lessons. Movies about World War II show bravery and sacrifice. Teachers talk about World War II in class. Museums remember World War II heroes. Even today, World War II stories are shared by grandparents. World War II remains one of the most important events in world history."

var index = Name.charAt("11")

console.log(index)  

//          Output =I 

// Ya method Index num ky throw string ki value deka ta hai 


        //  4th Method OFF "replace"

var Name = "World War II changed the world forever sohair"

var index = Name.replace("World War II","The second world war")

console.log(index)  

// Output is = (The second world war) changed the world forever sohair

// Ya first value ko replce karta hai baki ko nahi
   
         // 5th method is "replaceALL" 

var Name = "World War II changed the world forever sohair. During World War II, many countries fought together and against each other. World War II affected soldiers, families, and cities. After World War II ended, people tried to rebuild their homes. Books about World War II teach us history lessons. Movies about World War II show bravery and sacrifice. Teachers talk about World War II in class. Museums remember World War II heroes. Even today, World War II stories are shared by grandparents. World War II remains one of the most important events in world history."

var outPut = Name.replaceAll("World War II","The Second World war")

console.log(outPut)

// ya method sab World War II ko replace kar ky "The Second World war" main sab jaga replace kar dy ga



