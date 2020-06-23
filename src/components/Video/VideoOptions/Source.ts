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

  public setState(state: { videoUrl?: string }): void {
    this.setVideoUrlState(state.videoUrl);
  }

  private setVideoUrlState(videoUrl?: string) {
    if (videoUrl !== undefined && videoUrl !== this.state.videoUrl) {
      this.state.videoUrl = videoUrl;
      this.components.videoSourceInput.value = this.state.videoUrl;
    }
  }

  public render($target: HTMLElement): void {
    // <div.video-source>
    this.components.videoSource.classList.add('video-source');

      // <label>
      this.components.videoSourceLabel.htmlFor = 'source';
      this.components.videoSourceLabel.innerText = 'video url: ';

      // <input>
      this.components.videoSourceInput.type = 'text';
      this.components.videoSourceInput.name = 'source';
      this.components.videoSourceInput.value = this.state.videoUrl;
      this.components.videoSourceInput.placeholder = '입력 후 엔터';

      this.components.videoSourceInput.oninput = (event: Event) => {
        event.stopPropagation();
      };

      this.components.videoSourceInput.onchange = (event: Event) => {
        event.stopPropagation();
      };

      this.components.videoSourceInput.onkeyup = (event: KeyboardEvent) => {
        if (event.key !== 'Enter') {
          event.stopPropagation();
        }
      };

      this.components.videoSource.append(this.components.videoSourceLabel, this.components.videoSourceInput);

    $target.appendChild(this.components.videoSource);
  }
}

/**
 * <div.video-source>
 *  <label>
 *  <input>
 */