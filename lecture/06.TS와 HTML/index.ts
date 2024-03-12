// HTML 조작시 narrowing 방법
let title = document.querySelector('#title');

// 1. narrowing
if (title != null) {
  title.innerHTML = '반가워요';
}

// 2. instaceof 연산자
if (title instanceof Element) {
  title.innerHTML = '반가워요';
}

// 3. assertion 사용
let title2 = document.querySelector('#title') as Element;
title2.innerHTML = '반가워요';

// 4. optional chaining 연산자: 오브젝트에 ?.
let title3 = document.querySelector('#title');
if (title3?.innerHTML != undefined) {
  // 제목에 innerHTML이 있으면 출력, 없으면 undefined
  title3.innerHTML = '반가워요';
}

let link1 = document.querySelector('.link');
if (link1 instanceof HTMLAnchorElement) {
  link1.href = 'https://kakao.com';
}

let button = document.querySelector('#button');
button?.addEventListener('click', () => {
  // 버튼에 addEventLister 가능하면 실행, 아니면 undefined
})

let image = document.querySelector('#image');
if (image instanceof HTMLImageElement){
  image.src = 'change.jpg';
}

let link2 = document.querySelectorAll('.naver');
link2.forEach((a)=>{
  if (a instanceof HTMLAnchorElement){
    a.href = 'https://kakao.com'
  }
})