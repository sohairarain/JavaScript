var arry = []
function userinput(){
    var data = document.getElementById('userinput') 
    
    if(data.value !== ""){

    arry.push(data.value + "  rs 10")
    data.value=''
    console.log(arry)
    print()
}
else{
    alert("fill the bakery item")}    
}
function print(){
    var conPrint = document.getElementById('listContainer');
    conPrint.innerHTML=""
    for(i = 0 ; i < arry.length ; i++){

        conPrint.innerHTML += `<li class='list'>${arry[i]} <button class='delete-Button' onclick ="remove(${i})">delete</button></li>`
        console.log(conPrint)
    }
}
function remove(index){
    arry.splice(index , 1)
    print()
}