import BaseComponent from '../BaseComponent';

export default class VideoOptions extends BaseComponent {
  private urlInputHandler: (url: string) => void;

  constructor($target: HTMLElement, urlInputHandler: (url: string) => void) {
    super($target);
    this.urlInputHandler = urlInputHandler;

  }

  public render(): void {
    const videoOptions = document.createElement('div');
    videoOptions.classList.add('video-options');

      /**
       * video source 입력 폼 생성
       */
      const videoSource = document.createElement('div');
      videoSource.classList.add('video-source');

        const videoSourceLabel = document.createElement('label');
        videoSourceLabel.htmlFor = 'source';
        videoSourceLabel.innerText = 'video url:';

        const videoSourceInput = document.createElement('input');
        videoSourceInput.type = 'text';
        videoSourceInput.name = 'source';
        videoSourceInput.onkeyup = (event: KeyboardEvent) => {
          if (event.code === 'Enter') {
            const urlInput = event.target as HTMLInputElement | null;

            if (urlInput === null) {
              return;
            }

            this.urlInputHandler(urlInput.value);
          }
        };

      videoSource.append(videoSourceLabel, videoSourceInput);

      /**
       * video 자동재생 여부 설정 폼 생성
       */
      const videoAutoplay = document.createElement('div');
      videoAutoplay.classList.add('video-autoplay');

        const videoAutoplayLabel = document.createElement('label');
        videoAutoplayLabel.htmlFor = 'autoplay';
        videoAutoplayLabel.innerText = '자동재생';

        const videoAutoplayCheckbox = document.createElement('input');
        videoAutoplayCheckbox.type = 'checkbox';
        videoAutoplayCheckbox.name = 'autoplay';

      videoAutoplay.append(videoAutoplayLabel, videoAutoplayCheckbox);

      /**
       * video 무한반복 여부 설정 폼 생성
       */
      const videoReplay = document.createElement('div');
      videoReplay.classList.add('video-replay');

        const videoReplayLabel = document.createElement('label');
        videoReplayLabel.htmlFor = 'replay';
        videoReplayLabel.innerText = '무한반복';

        const videoReplayCheckbox = document.createElement('input');
        videoReplayCheckbox.type = 'checkbox';
        videoReplayCheckbox.name = 'replay';

      videoReplay.append(videoReplayLabel, videoReplayCheckbox);

    videoOptions.append(videoSource, videoAutoplay, videoReplay);

    this.$target.appendChild(videoOptions);
  }
}

/**
 * <div.video-options>
 *  <div.video-source>
 *    <label>
 *    <input>
 *  <div.video-autoplay>
 *    <label>
 *    <input>
 *  <div.video-replay>
 *    <label>
 *    <input>
 */