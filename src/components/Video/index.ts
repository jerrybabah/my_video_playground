import VideoOptions from './VideoOptions';
import VideoControls from './VideoControls';
import { VideoEventName } from '../../interfaces/Event';

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
      currentTime: '0:00',
      totalTime: '0:00',
      playbackRate: 1.0,
      videoUrl: '',
      autoplay: localStorage.getItem('autoplay') === 'true',
      loop: localStorage.getItem('loop') === 'true',
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
    this.setTotalTimeState(state.totalTime);
    this.setPlaybackRateState(state.playbackRate);
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

  private setTotalTimeState(totalTime?: string) {
    if (totalTime !== undefined) {
      this.state.totalTime = totalTime;
    }
  }

  private setPlaybackRateState(playbackRate?: number) {
    if (playbackRate !== undefined) {
      this.state.playbackRate = playbackRate;
      this.components.video.playbackRate = this.state.playbackRate;
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
      localStorage.setItem('autoplay', String(this.state.autoplay));
    }
  }

  private setLoopState(loop?: boolean) {
    if (loop !== undefined) {
      this.state.loop = loop;
      this.components.video.loop = this.state.loop;
      localStorage.setItem('loop', String(this.state.loop));
    }
  }

  public render($target: HTMLElement): void {
    // <div.video-section>
    this.components.videoSection.classList.add('video-section', 'column');

    this.components.videoSection.onclick = (event: MouseEvent) => {
      let target: HTMLLIElement | HTMLImageElement;

      if (!event.target) {
        return;
      }

      if ((event.target as HTMLElement).classList.contains('video-control-btn')) {
        target = event.target as HTMLImageElement;

        if (target.name === 'play') {
          this.setState({ play: (target.alt === '시작') });
  
        } else if (target.name === 'mute') {
          this.setState({ mute: !(target.alt === '음소거') });
  
        } else if (target.name === 'full') {
          this.components.video.requestFullscreen(); // 비동기
          
        } else {
          return;
        }


      } else if ((event.target as HTMLElement).classList.contains('playback-rate-value')) {
        target = event.target as HTMLLIElement;

        this.setState({ playbackRate: Number(target.innerText) });

      } else {
        return;
      }
    };

    this.components.videoSection.onkeyup = (event: KeyboardEvent) => {
      if (event.key !== 'Enter') {
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
    };

      // <div.video-wrapper>
      this.components.videoWrapper.classList.add('video-wrapper', 'column');

        // <video>
        this.components.video.poster = '/image/poster.jpg';
        this.components.video.src = this.state.videoUrl;
        this.components.video.autoplay = this.state.autoplay;
        this.components.video.loop = this.state.loop;

        const videoEventStrs: VideoEventName[] = ['abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 
                             'error', 'loadddata', 'loadedmetadata', 'loadstart', 'pause', 'play', 'playing', 'progress',
                             'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumnchange', 'waiting'];

        videoEventStrs.forEach((videoEventStr) => {
          this.components.video.addEventListener(videoEventStr, (event: Event) => {
            const videoEvent = new CustomEvent('videoEvent', {
              bubbles: true,
              detail: {
                name: videoEventStr,
              },
            });

            event.target?.dispatchEvent(videoEvent);
          });
        });

        this.components.video.addEventListener('durationchange', (event: Event) => {
          const video = event.target as HTMLVideoElement | null;

          if (!video || video !== this.components.video) {
            return;
          }

          const miniute = Math.floor(video.duration / 60);
          const second = Math.round(video.duration % 60);

          this.setState({ totalTime: `${miniute.toFixed(0)}:${second.toFixed(0).padStart(2, '0')}` });
        });

        this.components.video.addEventListener('timeupdate', (event: Event) => {
          const video = event.target as HTMLVideoElement | null;

          if (!video || video !== this.components.video) {
            return;
          }

          const miniute = Math.floor(video.currentTime / 60);
          const second = Math.round(video.currentTime % 60);

          this.setState( { currentTime: `${miniute.toFixed(0)}:${second.toFixed(0).padStart(2, '0')}` });
        });

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