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

type SquareType1 = {
  color: string,
  width: number,
};
let square1: SquareType1 = {
  color: 'red',
  width: 100,
};

// interface
interface SquareType2 {
  color: string,
  width: number,
};
let square2: SquareType2 = {
  color: 'red',
  width: 100,
};

// interface 장점: extends
interface StudentType1 {
  name: string,
};
interface TeacherType extends StudentType1 {
  age: number,
};
let student: StudentType1 = {
  name: 'kim',
};
let teacher: TeacherType = {
  name: 'kim',
  age: 30
};

// & 기호 (intersection type): 두 타입을 전부 만족하는 타입
// & 사용할 때 중복 속상 발생 => 미리 에러 안 남
type AnimalType = {
  name: string,
};
type CatType = {
  age: number,
} & AnimalType;
let cat: CatType = {
  name: 'cat',
  age: 5,
};

// type vs interface
// interface는 중복 선언 가능(합쳐짐), type은 중복 선언 불가능
interface StudentType2 {
  name: string,
};
interface StudentType2 {
  score: number,
};


interface ProductType {
  brand : string, 
  serialNumber : number, 
  model : string[]
}
let product: ProductType = {
  brand: 'Samsung',
  serialNumber: 1360,
  model: ['TV', 'phone']
};

interface CartType {
  product : string,
  price : number
}

interface NewCartType extends CartType {
  card: boolean
}

let cart: CartType[] = [
  {
  product: '청소기',
  price: 7000
  },
  {
  product: '삼다수',
  price: 800
  }
];


interface MathObjType {
  plus : (a: number, b: number) => number,
  minus : (a: number, b: number) => number
};

let mathObj: MathObjType = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  }
};
