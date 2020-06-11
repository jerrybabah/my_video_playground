import BaseComponent from './BaseComponent';
import { VideoControl } from '../interfaces/eventHandlers';

export default class VideoControls extends BaseComponent {
  public startBtnHandler: VideoControl;
  public muteBtnHandler: VideoControl;

  constructor($target: HTMLElement, startBtnHandler: VideoControl, muteBtnHandler: VideoControl) {
    super($target);
    this.startBtnHandler = startBtnHandler;
    this.muteBtnHandler = muteBtnHandler;
  }

  public render(): void {
    const videoControls = document.createElement('div');
    videoControls.classList.add('video-controls');

      const start = document.createElement('button');
      start.classList.add('start');
      start.innerText = '시작';

      start.onclick = (event: MouseEvent) => {
        const startBtn = event.target as HTMLButtonElement | null;

        if (startBtn === null) {
          return;
        }

        this.startBtnHandler(startBtn.innerText);

        if (startBtn.innerText === '시작') {
          startBtn.innerText = '정지';
        } else if (startBtn.innerText === '정지') {
          startBtn.innerText = '시작';
        } else {
          return;
        }
      };

      const mute = document.createElement('button');
      mute.classList.add('mute');
      mute.innerText = '음소거';

      mute.onclick = (event: MouseEvent) => {
        const muteBtn = event.currentTarget as HTMLButtonElement | null;

        if (muteBtn === null) {
          return;
        }

        this.muteBtnHandler(muteBtn.innerHTML);

        if (muteBtn.innerHTML === '음소거') {
          muteBtn.innerHTML = '<del>음소거</del>';
        } else if (muteBtn.innerHTML === '<del>음소거</del>') {
          muteBtn.innerHTML = '음소거';
        } else {
          return;
        }
      };

    videoControls.append(start, mute);

    this.$target.appendChild(videoControls);
  }
}

/**
 * <div.video-controls>
 *  <div.start>
 */