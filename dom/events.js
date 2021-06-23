//1) select the element
//2) attach an listeners on it for perticular event
//3) pass a callback function for that event



//selection 
//1) by Id  => return single element

var btn = document.getElementById('btn1')


//2) by tag name => return collection of html element
var btns = document.getElementsByTagName('button')
console.log(btns)

Array.from(btns).forEach(function(node){
    console.log(node)
})


//3) by class name => 
var btnsCls = document.getElementsByClassName('btn')
console.log(btnsCls)


//4) query selector => returns first matched element
var btnQry = document.querySelector('.btn')
console.log(btnQry)


//5) query selector all
var btnQryAll = document.querySelectorAll('.btn')
console.log(btnQryAll)

btnQryAll.forEach((el)=>{
    console.log(el)
})


//6)by name
var inp = document.getElementsByName('inp')
console.log(inp)




// document.getElementById('btn1').addEventListener('click', function(){
//     alert('hello')
// })



Array.from(document.getElementsByTagName('button')).forEach(function(el){
    el.addEventListener('click', function(e){
       console.log(e.target)
       console.log(e.target.innerText)
       console.log(e.x)
       console.log(e.y)
    })
})


document.addEventListener('click', function(e){
    console.log(e)
    console.log(e.x, e.y, e.pageX, e.pageY)
    console.log(e.offsetX, e.offsetY)
})

document.addEventListener('keyup', function(e){
    console.log(e)
    var pressedKey = String.fromCharCode(e.which)
    console.log(pressedKey)
})




//attributes
// console.log(btn.attributes)
// console.log(btn.classList)
// console.log(btn.className)


btn.addEventListener('click', function(e){
    var classes = e.target.className.split(' ')
    if(classes.includes('success')){
        classes.splice(classes.indexOf('success'), 1, "error")   
    }else{
        classes.splice(classes.indexOf('error'), 1, "success")
    }
    e.target.className = classes.join(' ')
})


document.getElementById('inp').addEventListener('keyup', function(e){
    console.log(e.target.value)
})


//innerHTML
//innerText
