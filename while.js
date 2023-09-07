 function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    person.rollNo=07;
  }
  
  Person.prototype.nationality ="English";
  
var person1=new Person("msd","mandati",20,"black")
var person2=new Person("mahi","valluru",21,"white");
console.log(person1)
console.log(person2)
console.log(person1.nationality);
console.log(person2.lastName);
console.log(person1.eyeColor);
console.log(person.rollNo); //set//