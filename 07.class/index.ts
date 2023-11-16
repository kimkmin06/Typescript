class Person {
  name: string;
  constructor(a: string) {
    this.name = a;
  }
  Func(a: string) {
    console.log('hello ' + a);
  }
};
let person1 = new Person('kim');
let person2 = new Person('min');
person1.Func('hi');