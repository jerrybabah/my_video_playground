import { VideoEvent } from '../interfaces/Event';

export default class EventStack{
  private components: {
    eventStackSection: HTMLElement;
    eventStackTitle: HTMLHeadingElement;
    eventStack: HTMLDivElement;
  }

  private state: {
    events: VideoEvent[];
  }

  constructor(props: { events: VideoEvent[] }) {
    this.state = {
      events: props.events,
    };

    this.components = {
      eventStackSection: document.createElement('section'),
      eventStackTitle: document.createElement('h2'),
      eventStack: document.createElement('div'),
    };
  }

  public render($target: HTMLElement): void {
    this.components.eventStackSection.classList.add('event-stack-section', 'column');

      this.components.eventStackTitle.innerText = 'event stack';

      this.components.eventStack.classList.add('event-stack');
      
    this.components.eventStackSection.append(this.components.eventStackTitle, this.components.eventStack);

    $target.appendChild(this.components.eventStackSection);
  }
}
