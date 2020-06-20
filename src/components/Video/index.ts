import VideoOptions from './VideoOptions';
import VideoControls from './VideoControls';

export default class Video{
  private components: {
    videoSection: HTMLDivElement,
    videoWrapper: HTMLDivElement,
    videoOptions: VideoOptions,
    video: HTMLVideoElement,
    videoControls: VideoControls,
  }

  private state: {
    play: boolean;
    mute: boolean;
    volume: number;
    currentTime: string;
    totalTime: string;
    playbackRate: number;
    videoUrl: string;
    autoplay: boolean;
    loop: boolean;
  }

  constructor() {
    // init state
    this.state = {
      play: false,
      mute: false,
      volume: 0,
      currentTime: '00:00',
      totalTime: '00:00',
      playbackRate: 1.0,
      videoUrl: '',
      // TODO: localStorage에 저장된 것 확인 후 정하기
      autoplay: false,
      loop: false,
    };

    // init view component
    this.components = {
      videoSection: document.createElement('div'),
      videoWrapper: document.createElement('div'),
      videoOptions: new VideoOptions(this.state),
      video: document.createElement('video'),
      videoControls: new VideoControls(this.state),
    };
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

  public render($target: HTMLElement): void {
    // <div.video-section>
    this.components.videoSection.classList.add('video-section', 'column');

    this.components.videoSection.onclick = (event: MouseEvent) => {
      const target = event.target as HTMLInputElement | null;

      if (!target) {
        return;
      }

      if (target.classList.contains('video-control-btn')) {
        console.log('click', event.target, event.currentTarget);
      }
    };

    this.components.videoSection.onchange = (event: Event) => {
      // const target = event.target as HTMLInput

      console.log('change', event.target, event.currentTarget);
    };

    this.components.videoSection.oninput = (event: Event) => {
      console.log('input', event.target, event.currentTarget);
    };

      // <div.video-wrapper>
      this.components.videoWrapper.classList.add('video-wrapper', 'column');

        // <video>
        this.components.video.poster = '/image/poster.jpg';
        this.components.video.src = this.state.videoUrl;

        this.components.videoWrapper.append(this.components.video);

        // <video-controls>
        this.components.videoControls.render(this.components.videoWrapper);

      this.components.videoSection.append(this.components.videoWrapper);
      // <video-options>
      this.components.videoOptions.render(this.components.videoSection);

    $target.appendChild(this.components.videoSection);
  }
}

/**
 * <section.video-section>
 *  <div.video-wrapper>
 *    <video>
 *    <video-controls>
 *  <video-options>
 */