import VideoOptions from './VideoOptions';
import VideoControls from './VideoControls';

export default class Video{
  private components: {
    videoSection: HTMLElement,
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
      videoSection: document.createElement('section'),
      videoWrapper: document.createElement('div'),
      videoOptions: new VideoOptions(this.state),
      video: document.createElement('video'),
      videoControls: new VideoControls(this.state),
    };
  }

  public setState(state: { play?: boolean, mute?: boolean, volumn?: number,
                           currentTime?: string, totalTime?: string, playbackRate?: number,
                           videoUrl?: string, autoplay?: boolean, loop?: boolean }): void {

    this.setPlayState(state.play);
    this.setMuteState(state.mute);
    this.setVideoUrlState(state.videoUrl);
    this.setAutoplayState(state.autoplay);
    this.setLoopState(state.loop);

    // TODO: ...더 구현

    this.components.videoControls.setState(state);
    this.components.videoOptions.setState(state);
  }

  private setPlayState(play?: boolean) {
    if (play !== undefined) {
      this.state.play = play;

      if (this.state.play) {
        this.components.video.play(); // 비동기임 
      } else {
        this.components.video.pause();
      }
    }
  }

  private setMuteState(mute?: boolean) {
    if (mute !== undefined) {
      this.state.mute = mute;
      this.components.video.muted = this.state.mute;
    }
  }

  private setVideoUrlState(videoUrl?: string) {
    if (videoUrl !== undefined && videoUrl !== this.state.videoUrl) {
      this.state.videoUrl = videoUrl;
      this.components.video.src = this.state.videoUrl;
    }
  }

  private setAutoplayState(autoplay?: boolean) {
    if (autoplay !== undefined) {
      this.state.autoplay = autoplay;
      this.components.video.autoplay = this.state.autoplay;
    }
  }

  private setLoopState(loop?: boolean) {
    if (loop !== undefined) {
      this.state.loop = loop;
      this.components.video.loop = this.state.loop;
    }
  }

  public render($target: HTMLElement): void {
    // <div.video-section>
    this.components.videoSection.classList.add('video-section', 'column');

    this.components.videoSection.onclick = (event: MouseEvent) => {
      const target = event.target as HTMLImageElement | null;

      if (!target || !target.classList.contains('video-control-btn')) {
        return;
      }

      if (target.name === 'play') {
        this.setState({ play: (target.alt === '시작') });

      } else if (target.name === 'mute') {
        this.setState({ mute: !(target.alt === '음소거') });

      } else if (target.name === 'full') {
        this.components.video.requestFullscreen(); // 비동기
        
      } else {
        return;
      }
    };

    this.components.videoSection.onkeyup = (event: KeyboardEvent) => {
      if (event.code !== 'Enter') {
        return;
      }

      const target = event.target as HTMLInputElement | null;

      if (!target || !target.parentElement?.classList.contains('video-source')) {
        return;
      }

      this.setState({ videoUrl: target.value });
    };

    this.components.videoSection.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement | null;

      if (!target || !target.classList.contains('video-control-checkbox')) {
        return;
      }

      if (target.name === 'autoplay') {
        this.setState({ autoplay: target.checked });

      } else if (target.name === 'loop') {
        this.setState({ loop: target.checked });

      } else {
        return;
      }

      console.log('change', event.target, event.currentTarget);
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