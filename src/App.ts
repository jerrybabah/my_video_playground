import BaseComponent from './components/BaseComponent';

export default class App extends BaseComponent {
  constructor($target: HTMLElement) {
    super($target);
  }

  public render(): void {
    const app = document.createElement('h1');
    app.innerText = 'my video playground';

    this.$target.appendChild(app);
  }
}