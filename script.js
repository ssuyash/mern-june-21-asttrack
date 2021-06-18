var date = "2021-06-16"
var m = moment(date, 'YYYY-MM-DD')
m.add(-1, 'day')
console.log(m.format('llll'))
console.log(m)



//parsing date 
//format date (formatting interntionationalization)
// add any time (day hour)


var t1 = moment("2000-01-10", "YYYY-MM-DD").unix()
console.log(t1)


var t2 = moment("2002-01-10", "YYYY-MM-DD").unix()
console.log(t2)

var diff = t2-t1

console.log(diff)
console.log(moment(t1).format("YYYY-MM-DD"))
// console.log(t1.from(t2))
// console.log(t2.diff(t1, "days"))


console.log(moment()._d)
console.log(moment().format())
console.log(moment().format("dddd YYYY-MM-DD hh:mm:ss a"))


console.log(moment(15678909876546).format())
console.log(moment("11-06-2021", "DD-MM-YYYY").format())

console.log(moment().utc().format())

console.log(moment("17-06-2021 09-43", "DD-MM-YYYY hh-mm").fromNow())

// fromNow()
// toNow()


// t1.from(t2)
// t1.to(t2)


// a.diff(b, "unit")
// console.log(moment().calendar())

// console.log(moment().daysInMonth())

// t1.isAfter(t2)
// t1.isBefore(t2)
// t1.isBetween(t2, t3)


console.log(moment().daysInMonth())
//console.log(moment().daysInYear())
console.log(moment().startOf('month').format())
console.log(moment().endOf('days').format())









