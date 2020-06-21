import Source from './Source';
import Autoplay from './Autoplay';
import Loop from './Loop';

export default class VideoOptions{
  private components: {
    videoOptions: HTMLDivElement;
    source: Source;
    autopaly: Autoplay;
    loop: Loop;
  }

  private state: {
    videoUrl: string;
    autoplay: boolean;
    loop: boolean;
  }

  constructor(props: {videoUrl: string, autoplay: boolean, loop: boolean}) {
    this.state = {
      videoUrl: props.videoUrl,
      autoplay: props.autoplay,
      loop: props.loop,
    };

    this.components = {
      videoOptions: document.createElement('div'),
      source: new Source(this.state),
      autopaly: new Autoplay(this.state),
      loop: new Loop(this.state),
    };
  }

  public setState(state: { videoUrl?: string; autoplay?: boolean; loop?: boolean }): void {
    this.setVideoUrlState(state.videoUrl);
    this.setAutoplayState(state.autoplay);
    this.setLoopState(state.loop);

    this.components.source.setState(state);
    this.components.autopaly.setState(state);
    this.components.loop.setState(state);
  }

  private setVideoUrlState(videoUrl?: string) {
    if (videoUrl !== undefined && videoUrl !== this.state.videoUrl ) {
      this.state.videoUrl = videoUrl;
    }
  }

  private setAutoplayState(autoplay?: boolean) {
    if (autoplay !== undefined) {
      this.state.autoplay = autoplay;
    }
  }

  private setLoopState(loop?: boolean) {
    if (loop !== undefined) {
      this.state.loop = loop;
    }
  }

  public render($target: HTMLElement): void {
    // <div.video-options>
    this.components.videoOptions.classList.add('video-options');

      // <video-source>
      this.components.source.render(this.components.videoOptions);

      // <video-autoplay>
      this.components.autopaly.render(this.components.videoOptions);

      // <video-loop>
      this.components.loop.render(this.components.videoOptions);

    $target.appendChild(this.components.videoOptions);
  }
}

/**
 * <div.video-options>
 *  <video-source>
 *  <video-autoplay>
 *  <video-loop>
 */