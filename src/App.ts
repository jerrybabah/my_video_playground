import Video from './components/Video';
import EventStack from './components/EventStack';
import { VideoEvent } from './interfaces/Event';

export default class App{
  private components: {
    container: HTMLDivElement,
    head: HTMLHeadingElement,
    main: HTMLElement,
    video: Video,
    eventStack: EventStack,
  }

  private state: {
    events: VideoEvent[];
  }

  constructor() {
    // init state
    this.state = {
      events: [],
    };

    // init view component
    this.components = {
      container: document.createElement('div'),
      head: document.createElement('h1'),
      main: document.createElement('main'),
      video: new Video(),
      eventStack: new EventStack(this.state),
    };
  }

  public addVideoEvent(videoEvent: VideoEvent): void {
    this.state.events.push(videoEvent);
    this.components.eventStack.addVideoEvent(videoEvent);
  }

  public setState(): void {
    return;
  }

  public render($target: HTMLElement): void {
    // <div.container>
    this.components.container.classList.add('container', 'center-column');

      // <h1>
      this.components.head.innerText = 'my video playground';

      // <main>
      this.components.main.classList.add('video-playground');

      // TODO: event의 타입을 어떻게 잡으면 될까?
      this.components.main.addEventListener('videoEvent', (event: any) => {
        this.addVideoEvent({ name: event.detail.name });
      });

        // <div.video-section>
        this.components.video.render(this.components.main);
        // <div.event-stack-section>
        this.components.eventStack.render(this.components.main);
    
      this.components.container.append(this.components.head, this.components.main);

    $target.appendChild(this.components.container);
  }
}

/**
 * <div.container>
 *  <h1>
 *  <main>
 *    <video-section>
 *    <event-stack-section>
 */