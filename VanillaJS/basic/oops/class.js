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
Student.prototype.printChild = function(){console.log('Student.prototype.printChild')}

// static function
Student.static_fn = () => console.log('Student.static_fn');
Student.static_prop = 'Student.static_prop'


export const classes = {
    parent: Person,
    child: Student
}

// =================================

export class PersonCL
{
    name;
    age;
    constructor(){
        this.name = 'Person_name_feild';
        this.age = "Person_age_feild";
    }

    //prototype
    type = 'PARENT'; //behaving same as this.type
    print(){console.log('Person.prototype.print');}

    static static_fn = () => console.log('Student.static_fn');
    static static_prop = 'Student.static_prop'
    // must be called with class name
}

export class StudentCL extends PersonCL{
    constructor(){
        super();
        this.university = "California University" ; 
    }

    //prototype
    country="USA";
    printChild(){console.log('Student.prototype.printChild')}
}

// ================== Another Class Example =================
// Set and get
export class Dummy{
    _a; //protected feild
    _b;
    #privareF1 = 'Dummy.privareF1';
    #private_method = () => console.log('Dummy.private_method');

    set a(_){ console.log('set a(_)'); this._a = _}
    set b(_){ console.log('set b(_)'); this._b = _}

    get a(){ console.log('get a()'); return this._a; }
    get b(){ console.log('get a()'); return this._b; }
}