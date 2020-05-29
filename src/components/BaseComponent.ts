export default abstract class BaseComponent {
  public $target: HTMLElement;

  constructor($target: HTMLElement) {
    this.$target = $target;
    this.render();
  }

  public abstract render(): void;
}