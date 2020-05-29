import App from './App';

const target = document.getElementById('app');

if (target) {
  new App(target);
} else {
  throw new Error('index.html에 app id를 갖는 element를 가지고 있지 않습니다.');
}
