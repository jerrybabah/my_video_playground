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

  public setState(state: { mute?: boolean }): void {
    if (state.mute !== undefined) {
      this.state.mute = state.mute;

      if (this.state.mute) {
        this.components.muteImg.src = '/image/video/mute/mute_24.png';
        this.components.muteImg.alt = '음소거';
      } else {
        this.components.muteImg.src = '/image/video/unmute/unmute_24.png';
        this.components.muteImg.alt = '음소거 해제';
      }
    }
  }

  public render($target: HTMLElement): void {
    // <div.mute>
    this.components.mute.classList.add('mute');
    
      // <img>
      this.components.muteImg.classList.add('video-control-btn');
      this.components.muteImg.name = 'mute';

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