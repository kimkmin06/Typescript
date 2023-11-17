// never type: 끝나지 않는 함수 타입(endpoint가 없는 함수)
const func16 = (): never => {
  throw new Error();
}

const func17 = (): never => {
  while (true) {
    
  }
}

// never타입 등장하는 경우1: 뭔가 이상한 narrowing
const func18 = (parameter: string) => {
  if (typeof parameter == 'string') {
    console.log(parameter);
  } else {
    console.log(parameter);
  }
}

// never타입 등장하는 경우2: 어떤 함수표현식은 return 타입이 자동으로 never
let func19 = () => {
  throw new Error();
}

// never은 쓸 필요 없음 !!