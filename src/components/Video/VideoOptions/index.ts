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