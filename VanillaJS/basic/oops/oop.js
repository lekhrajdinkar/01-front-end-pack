// obj_parent = { nam: 'lekhraj', greet(){console.log("hello")}}
Object.prototype.new_function = function(){console.log("Iam new function")}
Object.new_function();
//Object.new_function_by_parent();
console.log("Object.prototype : ",Object.prototype)

obj_parent = Object.create(Object); 
obj_parent.new_function()
obj_parent.prototype.new_function_by_parent = function(){console.log("Iam new Parent function")}
obj_parent.new_function_by_parent();

child_parent = Object.create(obj_parent); 
child_parent.new_function()
child_parent.new_function_by_parent();
Object.new_function_by_parent();


function Student(nam,age){ this.nam = nam; this.age = age ;  }
s1 = new Student('Lekhraj',20);
s1.__proto__.study = function study(){console.log('studing...')}

s2 = new Student('Anna',30)
s3 = Object.create(s1); s3.study()
console.log(s1,s2);
console.log(s1.__proto__,s2, s3);