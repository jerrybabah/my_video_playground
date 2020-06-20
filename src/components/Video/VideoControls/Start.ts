export default class Start {
  private components: {
    start: HTMLDivElement;
    startImg: HTMLImageElement;
  };

  private state: {
    play: boolean;
  }

  constructor(props: { play: boolean }) {
    // init state
    this.state = {
      play: props.play,
    };

    // init view components
    this.components = {
      start: document.createElement('div'),
      startImg: document.createElement('img'),
    };
  }

  public setState(state: { play?: boolean }): void {
    if (state.play !== undefined) {

      if (state.play) {
        this.components.startImg.src = '/image/video/stop/stop_24.png';
        this.components.startImg.alt = '정지';
      } else {
        this.components.startImg.src = '/image/video/start/start_24.png';
        this.components.startImg.alt = '시작';
      }
    }
  }

  public render($target: HTMLElement): void {
    // <div.start>
    this.components.start.classList.add('start');

      // <img>
      this.components.startImg.classList.add('video-control-btn');
      this.components.startImg.name = 'play';

      if (this.state.play) {
        this.components.startImg.src = '/image/video/stop/stop_24.png';
        this.components.startImg.alt = '정지';
      } else {
        this.components.startImg.src = '/image/video/start/start_24.png';
        this.components.startImg.alt = '시작';
      }

      this.components.start.append(this.components.startImg);

    $target.appendChild(this.components.start);
  }
}

/**
 * <div.start>
 *  <img>
 */