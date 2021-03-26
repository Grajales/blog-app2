let x =function(){
  console.log(this)
}
let y = {
  z: x
}
y.z()
let user1 = {
    firstName: "liliana",
    lastName: "asfas",
  sayHello: function(){
    console.log("Hello "+ this.firstName)
  }
}
user1.sayHello();
let user2 = {
    firstName: "joe",
    lastName: "asfas",
    sayHello: user1.sayHello
  }

user2.sayHello();
let user3 = {
    firstName: "tyler",
    lastName: "asfas",
    sHello: user1.sayHello
  }

user3.sHello();
let counter = {
  total: 0,
  increment: function(){
    counter.total++
  }
}
counter.increment()
counter.increment()
console.log(counter.total)

let increment = function(){
    this.total++
  console.log("Click", 
              this.name,
              this.total)
  }


let counter1 = {
  total: 0,
  name: "A",
  increment: increment
  }

let counter2 = {
  total: 0,
  name: "B",
  increment: increment
  }

counter1.increment()
counter2.increment()
counter2.increment()
console.log(counter2.total)
//https://git.generalassemb.ly/john-deere-sei-7/context