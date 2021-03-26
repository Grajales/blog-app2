console.log("Get plate, knife, bread, peanut butter")
let car1 ={
  make: "honda",
  model:"Civic",
  drive: function(){
    console.log("vroom")
  }
}
let car2 ={
  make: "Ford",
  model:"Mustang",
  drive: function(){
    console.log("vroom")
  }
}
//encapsulation (complexity is hidden), modularity (easy to exchange), inheritance (parent, child)

class Car {
  constructor(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
  }
  drive() {
    console.log("vroom")
  }
}
let car3 = new Car("BMW","i5","Red");
//car3
class Food1 {
  constructor(type, calories,carbs){
    this.type=type;
    this.calories=calories;
    this.carbs = carbs;
  }
  grow(){
    console.log("I am growing")
  }
  rot(){
    console.log("Don't eat me");
  }
}
let rice = new Food1("starch",100,40);
//rice
//rice.grow()
//rice.type;
class Food2 {
  constructor(type, calories,carbs){
    this.typeOfFood=type; //not recommended
    this.calories=calories;
    this.carbs = carbs;
  }
}
let coffee = new Food2("drink",0,0)
coffee.typeOfFood;

class Dinner {
  constructor(people,foods,drinks){
    this.people = people;
    this.foods= foods;
    this.drinks=drinks;
  }
}
class Person{
  constructor(familyMembers, name, meal, allergies){
    this.familyMembers = familyMembers;
    this.name = name;
    this.meal=meal;
    this.allergies=allergies;
  }
  newMeal(){
    let foods=[
      new Food("pizza", 600,400),
      new Food("Steak",700,300)
    ];
    this.meal= new Meal(foods,"Coke");
  }
}
class Meal {
  constructor(foods,drink) {
    this.foods=foods;
    this.drink=drink;
  }
}
class Food {
  constructor(name,calories,carbs){
    this.name=name;
    this.calories=calories;
    this.carbs=carbs;
  }
}
let jack = new Person("Jack");
let jill = new Person("Jill");
jack.newMeal(); //we added more objects into an object
jill.newMeal();
let people =[jack,jill];
let breakfast = new Dinner(people);
breakfast.people[0].meal.foods[1].name;



