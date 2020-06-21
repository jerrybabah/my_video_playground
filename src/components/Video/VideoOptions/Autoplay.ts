export default class Autoplay {
  private components: {
    autoplay: HTMLDivElement;
    autoplayLabel: HTMLLabelElement;
    autoplayInput: HTMLInputElement;
  };

  private state: {
    autoplay: boolean;
  }

  constructor(props: { autoplay: boolean }) {
    // init state
    this.state = {
      autoplay: props.autoplay,
    };

    // init view components
    this.components = {
      autoplay: document.createElement('div'),
      autoplayLabel: document.createElement('label'),
      autoplayInput: document.createElement('input'),
    };
  }

  public setState(state: { autoplay?: boolean }): void {
    this.setAutoplayState(state.autoplay);
  }

  private setAutoplayState(autoplay?: boolean) {
    if (autoplay !== undefined) {
      this.state.autoplay = autoplay;
      this.components.autoplayInput.checked = this.state.autoplay;
    }
  }

  public render($target: HTMLElement): void {
    // <div.video-autoplay>
    this.components.autoplay.classList.add('video-autoplay');

      // <label>
      this.components.autoplayLabel.htmlFor = 'autoplay';
      this.components.autoplayLabel.innerText = '자동재생';

      // <input>
      this.components.autoplayInput.classList.add('video-control-checkbox');
      this.components.autoplayInput.type = 'checkbox';
      this.components.autoplayInput.name = 'autoplay';
      this.components.autoplayInput.checked = this.state.autoplay;

      this.components.autoplay.append(this.components.autoplayLabel, this.components.autoplayInput);

    $target.appendChild(this.components.autoplay);
  }
}

/**
 * <div.video-autoplay>
 *  <label>
 *  <input>
 */