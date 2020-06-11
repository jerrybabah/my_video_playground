import BaseComponent from './components/BaseComponent';
import Video from './components/Video';
import EventStack from './components/EventStack';

export default class App extends BaseComponent {
  constructor($target: HTMLElement) {
    super($target);
  }

  public render(): void {
    const appContainer = document.createElement('div');
    appContainer.classList.add('container', 'center-column');

      const title = document.createElement('h1');
      title.innerText = 'my video playground';

      const mainContents = document.createElement('main');
      mainContents.classList.add('video-playground');

      new Video(mainContents);
      new EventStack(mainContents);
    
    appContainer.append(title, mainContents);

    this.$target.appendChild(appContainer);
  }
}

/**
 * <div.container>
 *  <h1>
 *  <main>
 *    <div.video-section>
 *    <div.event-stack-section>
 */