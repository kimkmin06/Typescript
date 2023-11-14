// Literal Types(리터럴타입)
// - 변수에 뭐가 들어올지 더 엄격하게 관리 가능

// nameType에는 'kim'만 들어올 수 있음
let nameType1: 'kim';

// nameType에는 123만 들어올 수 있음
let nameType2: 123;

let me: '단발' | '김경민';
me = '김경민';

const func = (a: 'hello'): (1 | 0) => {
  return 1;
}
func('hello');

const game = (a : '가위'|'바위'|'보') :('가위'|'바위'|'보')[] => {
  return ['가위','보'] 
}
game('보');

// literal type 문제점
// 솔루션1. object 만들 때, 타입 지정 확실히
var data = {
  name: 'kim'
} as const
//솔루션3. as const 키워드 사용: 이 object는 literal type 지정 알아서 함
// as const 효과1. object value 값 그대로 타입 지정
// as const 효과2. object 속성들에 모두 readonly 붙혀줌
const myFunc = (a: 'kim') => {
  // 'kim'이라는 타입만 들어올 수 있다
}
// 솔루션2. as문법으로 타입 지정
myFunc(data.name);
