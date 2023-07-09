"use strict";

function Student(name, age, city, street) {
  this.name = name;
  this.age = age;
  this.address = {
    city,
    street,
  };
}

const student1 = new Student("Ahmed", 8, "Ranya", "Karokh");
alert(student1.address.street);
//address is optional, so what if does not exist?
const student2 = new Student("Arina", 8);
delete student2?.address; //if student2 exists, delete address property
alert(student2.address?.street); //if address exists, then get street value, else return undefined (without using opitional chaining we will get error)
