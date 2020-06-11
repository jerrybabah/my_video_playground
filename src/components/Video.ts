import BaseComponent from './BaseComponent';
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
        video.src = 'https://hanyang2.commonscdn.com/contents/hanyang101/5ed9e7da6d373/contents/media_files/mobile/ssmovie.mp4';

      videoWrapper.append(video);
      new VideoControls(videoWrapper);

    videoSection.append(videoWrapper);
    new VideoOptions(videoSection);

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