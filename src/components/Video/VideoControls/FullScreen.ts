export default class FullScreen {
  private components: {
    fullScreen: HTMLDivElement;
    fullScreenImg: HTMLImageElement;
  };

  constructor() {
    this.components = {
      fullScreen: document.createElement('div'),
      fullScreenImg: document.createElement('img'),
    };
  }

  public render($target: HTMLElement): void {
    // <div.full-screen>
    this.components.fullScreen.classList.add('full-screen');

      // <img>
      this.components.fullScreenImg.src = '/image/video/full/full_24.png';
      this.components.fullScreenImg.alt = '전체화면';

      this.components.fullScreen.append(this.components.fullScreenImg);

    $target.appendChild(this.components.fullScreen);
  }
}

/**
 * <div.full-scrren>
 *  <img>
 */