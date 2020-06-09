import BaseComponent from './BaseComponent';

export default class VideoControls extends BaseComponent {
  constructor($target: HTMLElement) {
    super($target);
  }

  public render(): void {
    const videoControls = document.createElement('div');
    videoControls.classList.add('video-controls');

      const start = document.createElement('div');
      start.classList.add('start');
      start.innerText = '시작';

    videoControls.append(start);

    this.$target.appendChild(videoControls);
  }
}

/**
 * <div.video-controls>
 *  <div.start>
 */