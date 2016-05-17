/**
 * Created by Samllg on 2016/5/17.
 */
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}

var person1 = createPerson('Nicholas', 29, 'Software Enginner');
var person2 = createPerson('Smallg', 30, 'FEE');

// Method 2
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    };
}

var person3 = new Person('Nicholas', 29, 'Software Enginner');
var person4 = new Person('Smallg', 30, 'FEE');

// Prototype mode
function Person2(){

}
Person2.prototype.name = 'Nicholas';
Person2.prototype.age = 29;
Person2.prototype.job = 'Software Engineer';
Person2.prototype.sayName = function(){
    console.log(this.name);
};
var person5 = new Person2();
person5.sayName();
var person6 = new Person2();
person6.sayName();