export default class Time {
  private components: {
    time: HTMLDivElement;
    currentTime: HTMLSpanElement;
    totalTime: HTMLSpanElement;
  };

  private state: {
    currentTime: string;
    totalTime: string;
  }

  constructor(props: { currentTime: string; totalTime: string }) {
    // init state
    this.state = {
      currentTime: props.currentTime,
      totalTime: props.totalTime,
    };

    // init view components
    this.components = {
      time: document.createElement('div'),
      currentTime: document.createElement('span'),
      totalTime: document.createElement('span'),
    };
  }

  public setState(state: { currentTime?: string; totalTime?: string }): void {
    if (state.currentTime !== undefined) {
      this.state.currentTime = state.currentTime;
      this.components.currentTime.innerText = this.state.currentTime;
    }

    if (state.totalTime !== undefined) {
      this.state.totalTime = state.totalTime;
      this.components.totalTime.innerText = this.state.totalTime;
    }
  }

  public render($target: HTMLElement): void {
    // <div.time>
    this.components.time.classList.add('time');

      // <span.current-time>
      this.components.currentTime.classList.add('current-time');
      this.components.currentTime.innerText = this.state.currentTime;

      const slash = document.createTextNode('/');

      // <span.total-time>
      this.components.totalTime.classList.add('total-time');
      this.components.totalTime.innerText = this.state.totalTime;

      this.components.time.append(this.components.currentTime, slash, this.components.totalTime);

    $target.appendChild(this.components.time);
  }
}

/**
 * <div.time>
 *  <span.current-time>
 *  /
 *  <span.total-time>
 */