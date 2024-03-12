// public 붙으면 모든 자식들이 사용 가능
class UserClass1 {
  public name = 'kim';
  constructor(a) {
    this.name = a
  }
  public func = () => {

  }
}
let user1 = new UserClass1('park');
user1.name = 'hi';


// private 붙으면 class 안에서만 수정 및 사용 가능
class UserClass2 {
  private name = 'kim';
  constructor(a) {
    this.name = a
  }
}
let user2 = new UserClass2('park');
// user2.name = 'hi'; //error

class UserClass3 {
  name: string;
  private familyName: string = 'kim';
  constructor(a) {
    this.name = a + this.familyName;
  }
  changeName() {
    this.familyName = 'park';
  }
}
let user3 = new UserClass3('minsu');
user3.changeName();


class PersonClass {
  constructor(public name: string) {
  
  }
}
let son = new PersonClass('kim');
console.log(son);