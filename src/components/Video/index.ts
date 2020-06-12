import BaseComponent from '../BaseComponent';
import VideoOptions from './VideoOptions';
import VideoControls from './VideoControls';

export default class Video extends BaseComponent {
  constructor($target: HTMLElement) {
    super($target);
  }

  public render(): void {
    const videoSection = document.createElement('section');
    videoSection.classList.add('video-section', 'column');

      const videoWrapper = document.createElement('div');
      videoWrapper.classList.add('video-wrapper', 'column');

        const video = document.createElement('video');
        video.poster = '/image/poster.jpg';
        video.src = '';

      videoWrapper.append(video);
      new VideoControls(videoWrapper,

        // 시작 버튼 핸들러
        (operator: string) => {
          if (operator === '시작') {
            video.play(); // TODO: 비동기 작업
          } else if (operator === '정지') {
            video.pause();
          } else {
            return;
          }
        },

        // 음소거 버튼 핸들러
        (operator: string) => {
          if (operator === '음소거') {
            video.muted = true;
          } else if (operator === '<del>음소거</del>') {
            video.muted = false;
          } else {
            return;
          }
        }
      );

    videoSection.append(videoWrapper);
    new VideoOptions(videoSection, (url) => {
      video.src = url;
    });

    this.$target.appendChild(videoSection);
  }
}

/**
 * <section.video-section>
 *  <div.video-wrapper>
 *    <video>
 *    <div.video-controls>
 *  <div.video-options>
 */