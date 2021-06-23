//document => dom

console.log(document.title)
console.log(document.URL)//read only
console.log(document.location)
console.log(document.location.href)
//document.location = "http://google.com"
console.log(document.domain)
console.log(document.lastModified)
console.log(document.readyState)
console.log(document.body) // returns body node 
console.log(document.characterSet)
console.log(document.links)
console.log(document.cookie)
console.log(document.referer)


setTimeout(function(){
    console.log(document.readyState)
}, 1000)

document.title = "dynamic from js"


let sqr = num => num*num

window.name = "suyash"
var person = {
    name: "yash",
    hobbies:['tech', 'gym'],
    printHobbies : function(){
        this.hobbies.forEach((hobbyName)=>{
            console.log(`${this.name} has hobby of ${hobbyName}`)
        })
    }
}


person.printHobbies()




