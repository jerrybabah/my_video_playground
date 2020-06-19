// import BaseComponent from './BaseComponent';

type videoEvent = 'abort' | 'canplay' | 'canplaythrough' | 'durationchange' | 'emptied' | 'ended' |
'error' | 'loadddata' | 'loadedmetadata' | 'loadstart' | 'pause' | 'play' | 'playing' | 'progress' |
'ratechange' | 'seeked' | 'seeking' | 'stalled' | 'suspend' | 'timeupdate' | 'volumnchange' | 'waiting';

export default class EventStack{
  private $target: HTMLElement;

  private events: Array<{
    name: videoEvent;
    link: string;
}>;

  private element: HTMLElement | null;

  constructor($target: HTMLElement) {
    this.element = null;
    this.events = [];

    this.$target = $target;

    this.render();
  }

  // public appendEvent(name: videoEvent, link: string) {
    
  // }

  public render(): void {
    const eventStackSection = document.createElement('section');
    eventStackSection.classList.add('event-stack-section', 'column');

      const title = document.createElement('h2');
      title.innerText = 'event stack';

      const eventStack = document.createElement('div');
      eventStack.classList.add('event-stack');

      // for (const event of this.events) {
      //   const eventEl = document.createElement('a');
      //   eventEl.innerText = event.name;
      //   eventEl.href = event.link;


      // }
      
    eventStackSection.append(title, eventStack);

    this.element = eventStackSection;
    this.$target.appendChild(eventStackSection);
  }
}