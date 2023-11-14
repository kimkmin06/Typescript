// "Javascript와 다른 점"

// 타입 지정된 파라미터는 필수
const func1 = (x: number): number => {
  return x * 2;
};
func1(30);

const func2 = (x: number): void => {
  1 + 1;
};

// 파라미터가 옵션일 경우엔 파라미터변수?:타입
const func3 = (x?: number): void => {
  1 + 2;
};

// 변수?:number는 변수:number|undefined와 같음
const func4 = (x: number | undefined): void => {
  console.log(x); //undefined
};

// Narrowing: string+number(o), number+number(o), 이외는 불가능
// 애매한 타입들은 미리 타입 검사 필요
// const func5(x: number | string): void => {
//   console.log(x + 3);
// };
// func5(2);