let StringName: string = 'kim';
let ArrName: string[] = ['kim', 'park'];
let ObjName: { name?: string } = { name: 'kim' };

type MyType = string | number;
// let UnionName: string | number = 123;
let UnionName: MyType = 123;

// x 파라미터로 number, return값으로 number
const hello = (x:number):number => {
  return x * 2;
}

// tuple type
type Member = [number, boolean];
let john: Member = [123, true];

type ObjMember = {
  // string으로 된 모든 object 속성 타입은 :string
  [key: string] : string
}
let john2: ObjMember = { name: 'kim' };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
