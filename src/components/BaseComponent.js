export default class BaseComponent {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    throw new Error('BaseComponent를 상속받는 클래스는 render를 구현해야 합니다.');
  }
}