export default class Mute {
  private components: {
    mute: HTMLDivElement;
    muteImg: HTMLImageElement;
  };

  private state: {
    mute: boolean;
  }

  constructor(props: { mute: boolean }) {
    // init state
    this.state = {
      mute: props.mute,
    };

    // init view components
    this.components = {
      mute: document.createElement('div'),
      muteImg: document.createElement('img'),
    };
  }

  public render($target: HTMLElement): void {
    // <div.mute>
    this.components.mute.classList.add('mute');
    
      // <img>
      if (this.state.mute) {
        this.components.muteImg.src = '/image/video/mute/mute_24.png';
        this.components.muteImg.alt = '음소거';
      } else {
        this.components.muteImg.src = '/image/video/unmute/unmute_24.png';
        this.components.muteImg.alt = '음소거 해제';
      }

      this.components.mute.append(this.components.muteImg);

    $target.appendChild(this.components.mute);
  }
}

/**
 * <div.mute>
 *  <img>
 */