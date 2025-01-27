// Objects =>  An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.
let object = {
  name: "Travis Scott",
  profession: "Singer",
};
/*
Working with objects :
*/
/* 1. Object.keys() => Returns an array of an object's own property names (keys).*/
let keys = Object.keys(object);
// console.log(keys);

/*
2. Object.values() => Returns an array of an object's own enumerable property values.
*/
let value = Object.values(object);
// console.log(object);
/*
3. Object.entries() => Returns an array of key-value pairs from an object.
*/
let entries = Object.entries(object);
// console.log(entries);
/*
4. Object.assign() => Copies properties from one or more source objects to a target object.
*/
let num = {
  a: 4,
  b: 4,
  c: 3,
};
let num1 = {
  a: 1,
  b: 2,
};
let assign = Object.assign(num, num1);
// console.log(assign);
/*
5. Object.freeze() => Prevents modification (adding, updating, deleting) of properties.
*/
let freeze = Object.freeze(object);
object.name = "Kendric Lamar";
// console.log(object);
/*
6. Object.seal() – Allows modification of existing properties but prevents adding/removing properties.
*/
let seal = Object.seal(object);
object.name = "The Weekend";
delete object.name;
// console.log(object);
/*
7. Object.create() => Creates a new object with a specified prototype object.
*/
let animal = {
  sound: "Roar",
};
let lion = Object.create(animal);
lion.name = "Lion";
// console.log(lion.name);
// console.log(lion.sound);  //Inherited from animal object .
/*
8. Object.fromEntries() => Converts an array of key-value pairs into an object.
*/
let music = [
  ["name", "Blinding by Lights"],
  ["singer", "The Weekend"],
];
let conversion = Object.fromEntries(music);
// console.log(conversion);
/*
9. Object.hasOwn() => Checks if an object has a specified property as its own (not inherited).
*/
let check = Object.hasOwn(object, "name");
let check1 = Object.hasOwn(lion, "sound"); //It has inherited property
// console.log(check);
// console.log(check1);
/*
10. Object.getOwnPropertyNames() => Returns an array of all properties (including non-enumerable ones) of an object.
*/
let propertyName = Object.getOwnPropertyNames(object);
// console.log(propertyName);
/*
11. Object.getOwnPropertyDescriptor() => Returns an object describing the configuration of a specific property.
*/
let propertyDescriptor = Object.getOwnPropertyDescriptor(object, "name");
// console.log(propertyDescriptor);
/*
12. Object.defineProperty() => Defines a new property directly on an object with specific attributes.
*/
let defineProperty = Object.defineProperty(object, "name", propertyDescriptor);
// console.log(defineProperty);
/*
13. Object.defineProperties() => Defines multiple properties directly on an object.
*/
let obj = {};

Object.defineProperties(obj, {
  prop1: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  prop2: {
    value: "Hello",
    writable: false,
    enumerable: true,
    configurable: false,
  },
});

// console.log(obj.prop1);
// console.log(obj.prop2);
/*
14. Object.getPrototypeOf() => Returns the prototype of an object.
*/
let protoType = Object.getPrototypeOf(object);
// console.log(protoType);
/*
15. Object.setPrototypeOf() => Sets the prototype of an object.
*/

let animals = { type: "Mammal", sound: "Some generic animal sound" };
let dog = { breed: "Labrador", color: "Brown" };
Object.setPrototypeOf(dog, animals);

// console.log(dog.type);
// console.log(dog.sound);
// console.log(dog.breed);
// console.log(dog.color);
/*
16. Object.is() => Compares if two values are the same (better than === for some cases).
*/
let obj1 = {};
// console.log(Object.is(obj1, obj1));
// console.log(Object.is(25, 25));
// console.log(Object.is(25, "25"));

/*
17. Object.isFrozen() => Checks if an object is frozen (i.e., Object.freeze() applied).
*/
let checkFrozen = Object.isFrozen(object);
// console.log(checkFrozen);
/*
18. Object.isSealed() => Checks if an object is sealed (i.e., Object.seal() applied).
*/

let isSealed = Object.isSealed(object);
// console.log(isSealed);

/*
19. Object.isExtensible() => Checks if an object can have new properties added.
*/
let isExtensible = Object.isExtensible(object);
// console.log(isExtensible);
/*
20. Object.preventExtensions() => Prevents an object from adding new properties but allows modifications to existing ones.
*/
let preventExtensions = Object.preventExtensions(object);
// console.log(preventExtensions);

