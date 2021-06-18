var Person = function(name, yob){
    this.name = name;
    this.yob = yob;
    this.calcAge = function(){
        return ((new Date()).getFullYear() - this.yob)
    }
}



var p1 = new Person("arpita", 1997)
console.log(p1)
console.log(p1.calcAge())



class Student{
    constructor(name, courseName){
        this.name = name;
        this.courseName = courseName
    }
    getFeeStruct(){
        console.log("we are inside fee struct method")
    }
}



var std1 = new Student("yash", "mern")

std1.getFeeStruct()


console.log(typeof(Person))
console.log(typeof(Student))

//babel  => modern js => vanilla js


//dravid shaili => model



class House{
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    colorHouse(){
        console.log(`we are coloring on House at ${this.address}`)
    }
}

var h1 = new House("yash", "123 abc xyz street")

var h2 = new House("Priyanka", "567 mno street")


h1.colorHouse()




