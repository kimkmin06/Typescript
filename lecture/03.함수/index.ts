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
const func5 = (x: number | string) => {
  if (typeof x === 'string') {
    return x + '1';
  } else {
    return x + 1;
  }
};
func5(2);

// Narrowing 판정 함수: typeof 변수, 속성명 in 오브젝트자료, 인스턴스 instanceof 부모
const func6 = (x: number | string) => {
  let array: number[] = [];
  if (typeof x === 'number') {
    array[0] = x;    
  }
}

// Assertion 문법 (타입 덮어쓰기) 용도
// 1. narrowing 할 때
// 2. 무슨 타입이 들어올지 100% 확실할 때
const func7 = (x: number | string) => {
  let array: number[] = [];
  array[0] = x as number;
}