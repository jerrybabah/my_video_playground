import BaseComponent from './components/BaseComponent';
import Video from './components/Video';
import EventStack from './components/EventStack';

export default class App extends BaseComponent {
  private video?: Video;
  private eventStack?: EventStack;

  constructor($target: HTMLElement) {
    super($target);
  }

  public setState(): void {
    return;
  }

  public render(): void {
    // <div.container>
    const appContainer = document.createElement('div');
    appContainer.classList.add('container', 'center-column');

      // <h1>
      const title = document.createElement('h1');
      title.innerText = 'my video playground';

      // <main>
      const mainContents = document.createElement('main');
      mainContents.classList.add('video-playground');

        // <div.video-section>
        this.video = new Video(mainContents);
        // <div.event-stack-section>
        this.eventStack = new EventStack(mainContents);
    
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