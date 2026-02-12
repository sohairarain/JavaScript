function userInfor(){
    var name = document.getElementById('userName')
    var number =  document.getElementById('userNum')

     console.log(name.value + number.value) // ya (.value ya input ki value show karwa ta hai)

     name.value=''
     number.value=''   //ya input ko refresh karta hai
}

function changeText(){
    var element =document.getElementById('submit')
    element.style.color='green'
    element.style.border='none'
    element.style.background='none'  // ya method hai style change karny ka js say
}

var addparah = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nisi deserunt expedita magni soluta neque impedit, unde consectetur dicta corporis ad iusto voluptatibus doloremque nostrum quisquam fugit dolor laborum facilis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nisi deserunt expedita magni soluta neque impedit, unde consectetur dicta corporis ad iusto voluptatibus doloremque nostrum quisquam fugit dolor laborum facilisLorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nisi deserunt expedita magni soluta neque impedit, unde consectetur dicta corporis ad iusto voluptatibus doloremque nostrum quisquam fugit dolor laborum facilis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nisi deserunt expedita magni soluta neque impedit, unde consectetur dicta corporis ad iusto voluptatibus doloremque nostrum quisquam fugit dolor laborum facilis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nisi deserunt expedita magni soluta neque impedit, unde consectetur dicta corporis ad iusto voluptatibus doloremque nostrum quisquam fugit dolor laborum facilis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nisi deserunt expedita magni soluta neque impedit, unde consectetur dicta corporis ad iusto voluptatibus doloremque nostrum quisquam fugit dolor laborum facilis.."

function expandparah(){
    
    var para = document.getElementById('parah')
    var add =para.innerHTML += addparah +"<a href='javascript:void(0)' >seeless</a>"  // ya method hai phaly wali value mein new value add karny ka

}
