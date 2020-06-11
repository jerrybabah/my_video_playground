import BaseComponent from './BaseComponent';

export default class VideoControls extends BaseComponent {
  public startBtnHandler: () => void;

  constructor($target: HTMLElement, startBtnHandler: () => void) {
    super($target);
    this.startBtnHandler = startBtnHandler;
  }

  public render(): void {
    const videoControls = document.createElement('div');
    videoControls.classList.add('video-controls');

      const start = document.createElement('button');
      start.classList.add('start');
      start.innerText = '시작';

      start.onclick = (event: MouseEvent) => {
        this.startBtnHandler();
      };

    videoControls.append(start);

    this.$target.appendChild(videoControls);
  }
}

/**
 * <div.video-controls>
 *  <div.start>
 */