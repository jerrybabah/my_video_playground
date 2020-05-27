import BaseComponent from './components/BaseComponent.js';

export default class App extends BaseComponent {
  constructor($target) {
    super($target);
  }

  render() {
    const app = document.createElement('h1');
    app.innerText = 'my video playground';

    this.$target.appendChild(app);
  }
}