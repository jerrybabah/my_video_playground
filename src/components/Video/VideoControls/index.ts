import BaseComponent from '../../BaseComponent';
import PlaySlider from './PlaySlider';
import VolumeSlider from './VolumeSlider';
import { VideoControl } from '../../../interfaces/eventHandlers';

export default class VideoControls extends BaseComponent {
  public startBtnHandler: VideoControl;
  public muteBtnHandler: VideoControl;

  constructor($target: HTMLElement, startBtnHandler: VideoControl, muteBtnHandler: VideoControl) {
    super($target);
    this.startBtnHandler = startBtnHandler;
    this.muteBtnHandler = muteBtnHandler;
  }

  public render(): void {
    // <div.video-control-wrapper>
    const videoControlWrapper = document.createElement('div');
    videoControlWrapper.classList.add('video-control-wrapper');

      // <div.play-slider>
      new PlaySlider(videoControlWrapper);

      // <div.video-controls>
      const videoControls = document.createElement('div');
      videoControls.classList.add('video-controls');

        // <div.left-side>
        const leftSide = document.createElement('div');
        leftSide.classList.add('left-side');

          // <div.start>
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

          // <div.volume>
          const volume = document.createElement('div');
          volume.classList.add('volume');

            // <div.mute>
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

            volume.append(mute);

            // <div.volume-slider>
            new VolumeSlider(volume);

          leftSide.append(start, volume);
        
        // <div.right-side>
        const rightSide = document.createElement('div');
        rightSide.classList.add('right-side');

          // <div.playback-rate>
          const playbackRate = document.createElement('div');
          playbackRate.classList.add('playback-rate');

          // <div.full-screen>
          const fullScreen = document.createElement('div');
          fullScreen.classList.add('full-screen');

          rightSide.append(playbackRate, fullScreen);

        
        videoControls.append(leftSide, rightSide);

      videoControlWrapper.append(videoControls);

    this.$target.appendChild(videoControlWrapper);
  }
}

/**
 * <div.video-control-wrapper>
 *  <div.play-slider>
 *  <div.video-controls>
 *    <div.left-side>
 *      <div.start>
 *      <div.volume>
 *        <div.mute>
 *        <div.volume-slider>
 *      <div.time>
 *    <div.right-side>
 *      <div.playback-rate>
 *      <div.full-screen>
 */