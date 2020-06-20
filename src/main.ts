import App from './App';
import './css/style';

const app = new App();
const $target = document.getElementById('app');

if ($target) {
  app.render($target);
} else {
  throw new Error('초기 진입 html(index.html)에서 id가 "app"인 element를 찾지 못했습니다.');
}
