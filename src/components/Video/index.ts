// import BaseComponent from '../BaseComponent';
import VideoOptions from './VideoOptions';
import VideoControls from './VideoControls';

export default class Video{
  private $target: HTMLElement;
  private state: {
    play: boolean;
    mute: boolean;
    volume: number;
    videoUrl: string;
    autoplay: boolean;
    loop: boolean;
  }

  constructor($target: HTMLElement) {
    // init state
    this.state = {
      play: false,
      mute: false,
      volume: 0,
      videoUrl: '',
      // TODO: localStorage에 저장된 것 확인 후 정하기
      autoplay: false,
      loop: false,
    };

    this.$target = $target;

    this.render();
  }

  public setState(setted: {videoUrl?: string, play?: boolean, mute?: boolean, volumn?: number}): void {
    if (setted.videoUrl !== undefined) {
      this.state.videoUrl = setted.videoUrl;
    }

    if (setted.play !== undefined) {
      this.state.play = setted.play;
    }

    if (setted.mute !== undefined) {
      this.state.mute = setted.mute;
    }

    if (setted.volumn !== undefined) {
      this.state.volume = setted.volumn;
    }
  }

  public render(): void {
    const videoSection = document.createElement('section');
    videoSection.classList.add('video-section', 'column');

    videoSection.onclick = (event: MouseEvent) => {
      const target = event.target as HTMLInputElement | null;

      if (!target) {
        return;
      }

      if (target.classList.contains('video-control-btn')) {
        console.log('click', event.target, event.currentTarget);
      }
    };

    videoSection.onchange = (event: Event) => {
      // const target = event.target as HTMLInput

      console.log('change', event.target, event.currentTarget);
    };

    videoSection.oninput = (event: Event) => {
      console.log('input', event.target, event.currentTarget);
    };

      const videoWrapper = document.createElement('div');
      videoWrapper.classList.add('video-wrapper', 'column');

        const video = document.createElement('video');
        video.poster = '/image/poster.jpg';
        video.src = this.state.videoUrl;

      videoWrapper.append(video);
      new VideoControls(videoWrapper, this.state);

    videoSection.append(videoWrapper);
    new VideoOptions(videoSection, this.state);

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