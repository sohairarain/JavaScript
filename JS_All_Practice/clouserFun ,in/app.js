class Car{
    constructor(Brand , Model , Engine , Hpower , Torque , Type){
        this.Brand  = Brand
        this.Model  = Model
        this.Engine = Engine 
        this.Hpower = Hpower
        this.Torque = Torque
        this.Type   = Type
    }
}const car = new Car('BMW' , 'M5E39' , 1367 , 478 , 300 , 'sedan')
 document.getElementsByTagName('body')[0].style.backgroundColor ='gray'
 console.log('Brands'in car)  // check the this key is exist in object Retrun value in (true & false)


for(let elements in car){    // (elements is show key for example array on runing a for loop array[index] )
                             // same work in object on run for loop use (for in loop) 
    console.log(car)
}car.twire='panther'          //this trick to add new key and value assign 


function bmw(){
    let hp = 3000

    function NM(){
        console.log(hp)
    }

    return NM
}

const check = bmw()

check()