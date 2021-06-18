class A{
  

    car(){
        console.log("parent car")
    }

    home(){
        console.log("parent home")
    }

    marriage(){
        console.log("parrent marriage")
    }
}


class B extends A{
    marriage(){
        console.log("child marriage")
    }
}


var b = new B();
b.marriage()

