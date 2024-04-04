import inquirer from 'inquirer';


// number 타입의 아이디와 string 타입의 title을 가진 객체를 저장하도록
// Todo 타입을 선언한다.

// any[] 타입이 되지 않도록 수정
const todoList = [];
let id = 0;

// 할 일 추가: 추가된 항목을 반환.
function addTodo(todo) {
}

// 할 일 목록 출력
function getTodoList(){
}

// 배열 가장 앞의 항목을 삭제
// 삭제한 항목을 반환
function deleteTodo(){
}

function doOperation(operation:string){
  switch(operation){
    case '할 일 조회': return getTodoList();
    case '할 일 추가':
      // 위에서 정의한 타입에 맞는 객체 생성
      const todo = {};
      return addTodo(todo);
    case '할 일 삭제': 
      return deleteTodo();
  }
}

const  getOperation  = ():Promise<string> => {
  return new Promise<string>(
    (resolve:(value:string)=>void, reject:(err:any)=>void)=>{
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'operation',
            message: '원하는 동작을 선택하세요.',
            default: '할 일 조회',
            choices:['할 일 조회', '할 일 추가', '할 일 삭제', '나가기']
          },
        ])
        .then(answers => {
          resolve(answers.operation);
        });
    }
  );
}

async function run(){
  let operation = '';
  while(operation!='나가기'){
    operation = await getOperation();
    const result = doOperation(operation);
    console.log(result);
  }
}

run();
