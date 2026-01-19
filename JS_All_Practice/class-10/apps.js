var parah = "World War II changed the world forever. During World War II, many countries fought together and against each other. World War II affected soldiers, families, and cities. After World War II ended, people tried to rebuild their homes. Books about World War II teach us history lessons. Movies about World War II show bravery and sacrifice. Teachers talk about World War II in class. Museums remember World War II heroes. Even today, World War II stories are shared by grandparents. World War II remains one of the most important events in world history."

for(i = 0; i <= parah.length ;i++){
    if( parah.slice(i,i+12) + "World War II"){

        parah = parah.slice(0,i)+"the second world war"

    }
        console.log(parah)

}
