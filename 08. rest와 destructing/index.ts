// rest parameter
const func9 = (...a: number[]) => {
  console.log(a);
};
// rest parameter 자리에 들어온 데이터는 전부 []에 담아줌
func9(1, 2, 1, 2, 4, 5, 6);


let arr1 = [1, 2, 3];
let arr2 = [4, 5];
// ...spread operator: 괄호 없애는 문법
let arr3 = [...arr1, ...arr2]; //


// destructuring
let [arr4, arr5] = ['hi', 100];
console.log(arr4);

let { student1, age1 } = { student1: true, age1: 20 };
let person = { student : true, age : 20 }
const func10 = ({ student, age }: { student: boolean, age: number }) => {
  console.log(student, age)
};
func10({ student: true, age: 20 });

type UserType = {
  user: string,
  comment: number[],
  admin: boolean
};
const func11 = ({user, comment, admin} :UserType) :void => {
  console.log(user, comment, admin)
};
func11({ user: 'kim', comment: [3, 5, 4], admin: false });

type ArrayType = (number | string | boolean)[];
const func12 = ([a, b, c]: ArrayType) => {
  console.log(a, b, c)
};
func12([40, 'wine', false]);
