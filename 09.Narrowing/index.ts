// null & undefined 타입체크하는 경우
// 1. && 연산자
const func13 = (a: string | undefined) => {
  if (a && typeof a === 'string') {
    
  }
}

// 2. in 키워드로 object narrowing 가능 (속성명 in 오브젝트 자료)
type FishType = { swim: string };
type BirdType = { fly: string };
const func14 = (animal: FishType | BirdType) => {
  if ('swim' in animal) {
    animal.swim;
  }
}

// 3. instanceof 연산자로 object narrowing 가능 (오브젝트 instanceof 부모클래스)
let date = new Date();
if (date instanceof Date) {

}

// 4. object타입마다 literal type
type CarType = {
  model: 4;
  wheel: '4개',
  color: String
}
type BikeType = {
  wheel: '2개',
  color: String
}
const func15 = (x: CarType | BikeType) => {
  if (x.wheel === '4개'){
    console.log('the car is ' + x.color)
  } else {
    console.log('the bike is ' + x.color)
  }
}