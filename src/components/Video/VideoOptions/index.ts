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
      source: new Source(),
      autopaly: new Autoplay(),
      loop: new Loop(),
    };
  }

  public render($target: HTMLElement): void {
    this.components.videoOptions.classList.add('video-options');

      /**
       * video source 입력 폼 생성
       */
      this.components.source.render(this.components.videoOptions);
      // const videoSource = document.createElement('div');
      // videoSource.classList.add('video-source');

      //   const videoSourceLabel = document.createElement('label');
      //   videoSourceLabel.htmlFor = 'source';
      //   videoSourceLabel.innerText = 'video url:';

      //   const videoSourceInput = document.createElement('input');
      //   videoSourceInput.type = 'text';
      //   videoSourceInput.name = 'source';
      //   videoSourceInput.value = this.state.videoUrl;
        
      // videoSource.append(videoSourceLabel, videoSourceInput);

      /**
       * video 자동재생 여부 설정 폼 생성
       */
      this.components.autopaly.render(this.components.videoOptions);
      // const videoAutoplay = document.createElement('div');
      // videoAutoplay.classList.add('video-autoplay');

      //   const videoAutoplayLabel = document.createElement('label');
      //   videoAutoplayLabel.htmlFor = 'autoplay';
      //   videoAutoplayLabel.innerText = '자동재생';

      //   const videoAutoplayCheckbox = document.createElement('input');
      //   videoAutoplayCheckbox.type = 'checkbox';
      //   videoAutoplayCheckbox.name = 'autoplay';
      //   videoAutoplayCheckbox.checked = this.state.autoplay;

      // videoAutoplay.append(videoAutoplayLabel, videoAutoplayCheckbox);

      /**
       * video 무한반복 여부 설정 폼 생성
       */
      this.components.loop.render(this.components.videoOptions);
      // const videoReplay = document.createElement('div');
      // videoReplay.classList.add('video-replay');

      //   const videoReplayLabel = document.createElement('label');
      //   videoReplayLabel.htmlFor = 'replay';
      //   videoReplayLabel.innerText = '무한반복';

      //   const videoReplayCheckbox = document.createElement('input');
      //   videoReplayCheckbox.type = 'checkbox';
      //   videoReplayCheckbox.name = 'replay';
      //   videoReplayCheckbox.checked = this.state.loop;

      // videoReplay.append(videoReplayLabel, videoReplayCheckbox);

    $target.appendChild(this.components.videoOptions);
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