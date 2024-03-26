console.log('Hello');

//변수 선언: 변수의 이름 뒤에 :타입 형태로 표시
let myName: string = "Alice";

//매개변수: 매개변수 이름 뒤에 타입 작성
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

//반환 타입: 매개변수 목록 뒤에 표시
function getFavoriteNumber(): number {
  return 26;
}

function add(number1: number, number2: number): number {
  return number1 + number2;
}

//원시타입 - Primitive Types
const msg: string = "Hello, World!";
const num: number = 123;
const bool: boolean = true;
function add2(num1: number, num2: number): number {
  return num1 + num2;
}
const plus = (num1: number, num2: number): number => num1 + num2;

const arr: readonly [number, string] = [1, 'user1']; //push를 막는 튜플
//arr.push(1); //error

//가변 길이 튜플
const arr2: [number, ...string[]] = [1, 'user1'];
arr2.push('user2');
arr2.push('user3');
console.log(arr2[2]);
console.log(arr2[3]);


//function test(num: number):void; //선언부만 외부에서 보임
//function test(): void; //구현부는 외부에서 알 수 없음
//구현부 함수는 호출할 수 없음
//test(1); //error
// 선언부 함수를 통해서만 호출 가능
//test();

//클래스 멤버
class Point{
  x: number;
  y: number;
  constructor(x: number=0, y: number=0){
    this.x = x;
    this.y = y;
  } 
}
const p1: Point = new Point();
const p2: Point = new Point(0, 0);