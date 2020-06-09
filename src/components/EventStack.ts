import BaseComponent from './BaseComponent';

export default class EventStack extends BaseComponent {
  constructor($target: HTMLElement) {
    super($target);
  }

  public render(): void {
    const eventStackSection = document.createElement('section');
    eventStackSection.classList.add('event-stack-section');

      const title = document.createElement('h2');
      title.innerText = 'event stack';

      const eventStack = document.createElement('div');
      eventStack.classList.add('event-stack');

    eventStackSection.append(title, eventStack);

    this.$target.appendChild(eventStackSection);
  }
}