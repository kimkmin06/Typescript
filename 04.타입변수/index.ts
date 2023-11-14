// type alias(타입변수)
// : 같은 이름의 type 변수 재정의 불가능

type AnimalType1 = string | number | undefined;
let animal1: AnimalType1 = 123;

type AnimalType2 = { name: string, age: number };
let animal2: AnimalType2 = { name: 'kim', age: 20 };

// readonly: const 변수의 object 자료 수정 막을 수 있음
type FriendType = {
  readonly name: string,
};
const freind1: FriendType = {
  name: 'Ember',
};

type FriendType2 = {
  // name: string | undefined, 와 같음
  name?: string,
};
const freind2: FriendType2 = {
  name: 'Ember',
};

// type 변수는 union type으로 합치기 가능
type NameType = string;
type AgeType = number;
type PersonType = NameType | AgeType;

// extend: & 연산자로 object 타입 합치기
type PostionX = { x: number };
type PostionY = { y: number };
type NewType = PostionX & PostionY;
let postion: NewType = { x: 10, y: 20 };
