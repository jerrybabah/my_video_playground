export default class Source {
  private components: {
    videoSource: HTMLDivElement;
    videoSourceLabel: HTMLLabelElement;
    videoSourceInput: HTMLInputElement;
  };

  private state: {
    videoUrl: string;
  }

  constructor(props: { videoUrl: string }) {
    // init state
    this.state = {
      videoUrl: props.videoUrl,
    };

    // init view components
    this.components = {
      videoSource: document.createElement('div'),
      videoSourceLabel: document.createElement('label'),
      videoSourceInput: document.createElement('input'),
    };
  }

  public render($target: HTMLElement): void {
    // <div.video-source>
    this.components.videoSource.classList.add('video-source');

      // <label>
      this.components.videoSourceLabel.htmlFor = 'source';
      this.components.videoSourceLabel.innerText = 'video url';

      // <input>
      this.components.videoSourceInput.type = 'text';
      this.components.videoSourceInput.name = 'source';
      this.components.videoSourceInput.value = this.state.videoUrl;

      this.components.videoSource.append(this.components.videoSourceLabel, this.components.videoSourceInput);

    $target.appendChild(this.components.videoSource);
  }
}

/**
 * <div.video-source>
 *  <label>
 *  <input>
 */