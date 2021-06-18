

console.log("in open space : ", this)  //global object  => browser=>Window, nodejs=>global


function test(){
    console.log("in regular function : ", this)
}


// var test1 = ()=>{
//     console.log(this)
// }
//function call
test() //=> global object


//methods  => owner object
window.firstName = "suyash"

//arrow function => takes this of current scope

var person = {
    firstName:"Yash",
    lastName:"Hardiya",
    hobbies:["tech", 'gym'],
    getHobbies : function(){
        this.hobbies.forEach((hobby)=>{
            console.log(`${this.firstName} have hobby of ${hobby}`)
        })
    }
}

person.getHobbies()



var obj1 = {
    name:"Pankaj",
    showName:function(greetText){
        console.log(`${greetText} my object has a name prop with ${this.name} value`)
    }
}

obj1.showName()


var obj2 = {
    name:"Arpita"
}


var binded = obj1.showName.bind(obj2)



binded("hi")

obj1.showName.call(obj2, "hi")
obj1.showName.apply(obj2, ["hi apply"])



// obj2.showName()
//call apply bind


