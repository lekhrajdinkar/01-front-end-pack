// Classes are syntactical sugar over CF (Constructor function)

// 2 ways of creating Object
// 1. By Object.create(<object-1>) ::> It will create new object with prototype of object-1.
// 2. new constructor function.

function Person(){
    this.name = 'Person_name_feild';
    this.age = "Person_age_feild";
}
Person.prototype.type = 'PARENT'
Person.prototype.print = function(){console.log('Person.prototype.print');}


function Student(){
    this.university = "California University" ; 
    Person.call(this) //inheritance Step-1 : Make member of parent avilable on child
}
//inheritance Step-2 : inherit child protype from prototype of parent 
Student.prototype = Object.create(Person.prototype);

Student.prototype.country="USA";
// Student.prototype.print = function(){console.log('Person.prototype.print');}
Student.prototype.printChild = function(){console.log('Student.prototype.printUniversity')}



export const classes = {
    parent: Person,
    child: Student
}