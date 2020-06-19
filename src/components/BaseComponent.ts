export default abstract class BaseComponent {
  public $target: HTMLElement;

  constructor($target: HTMLElement) {
    this.$target = $target;
    this.render();
  }

  // public abstract setState(state: {[key: string]: any}): void;

  public abstract render(): void;
}