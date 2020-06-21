export default class Loop {
  private components: {
    loop: HTMLDivElement;
    loopLabel: HTMLLabelElement;
    loopInput: HTMLInputElement;
  };

  private state: {
    loop: boolean;
  }

  constructor(props: { loop: boolean }) {
    // init state
    this.state = {
      loop: props.loop,
    };

    // init view components
    this.components = {
      loop: document.createElement('div'),
      loopLabel: document.createElement('label'),
      loopInput: document.createElement('input'),
    };
  }

  public setState(state: { loop?: boolean }): void {
    this.setLoopState(state.loop);
  }

  private setLoopState(loop?: boolean) {
    if (loop !== undefined) {
      this.state.loop = loop;
      this.components.loopInput.checked = this.state.loop;
    }
  }

  public render($target: HTMLElement): void {
    // <div.video-loop
    this.components.loop.classList.add('video-loop');

      // <label>
      this.components.loopLabel.htmlFor = 'loop';
      this.components.loopLabel.innerText = '무한반복';

      // <input>
      this.components.loopInput.classList.add('video-control-checkbox');
      this.components.loopInput.type = 'checkbox';
      this.components.loopInput.name = 'loop';
      this.components.loopInput.checked = this.state.loop;

      this.components.loop.append(this.components.loopLabel, this.components.loopInput);

    $target.appendChild(this.components.loop);
  }
}

/**
 * <div.video-loop>
 *  <label>
 *  <input>
 */