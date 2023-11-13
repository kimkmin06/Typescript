let TypeName: string = 'kim';
let TypeAge: number = 50;
let MarryYn: boolean = true;
let ArrMember: string[] = ['kim', 'park'];
let UnionName: { member1: string, member2: string } = { member1: 'kim', member2: 'park' };

const MyName: string = 'Kim KyeongMin';
let MyAge: number = 18;
const MyBirth: string = 'Daegu';

let MyFavorite: { song: string, singer: string } = { song: "in the stars", singer: "benson boone" };

let project: { member: string[], days: number, started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};

let Member1: (number | string)[] = [1, '2', 3];
let Obj1: { a: string | number } = { a: '123' };

// Union Type: 타입 2개 이상 합친 타입
let UnionTypeMember: number | string = 123;
UnionTypeMember = 'kim';

// Any Type: 모든 자료형 허용 => 타입실드 해제
let AnyTypeMember: any;
AnyTypeMember = 123;
AnyTypeMember = [];

// Unknown Type: 모든 자료형 허용 => any보다 안정성 높음, 엄격함(수학연산...->unknown은 number 아님)
let UnknownTypeName: unknown;
UnknownTypeName = 123;
UnknownTypeName = {};
