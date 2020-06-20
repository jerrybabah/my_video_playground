import PlaySlider from './PlaySlider';
import Start from './Start';
import Volume from './Volume';
import Time from './Time';
import PlaybackRate from './PlaybackRate';
import FullScreen from './FullScreen';

export default class VideoControls{
  private components: {
    videoControlWrapper: HTMLDivElement,
    playSlider: PlaySlider,
    videoControls: HTMLDivElement,
    leftSide: HTMLDivElement,
    start: Start,
    volume: Volume,
    time: Time,
    rightSide: HTMLDivElement,
    playbackRate: PlaybackRate,
    fullScreen: FullScreen,
  }

  private state: {
    play: boolean;
    mute: boolean;
    volume: number;
  };

  constructor(props: {play: boolean, mute: boolean, volume: number}) {
    // init state
    this.state = {
      play: props.play,
      mute: props.mute,
      volume: props.volume,
    };

    // init view component
    this.components = {
      videoControlWrapper: document.createElement('div'),
      playSlider: new PlaySlider(),
      videoControls: document.createElement('div'),
      leftSide: document.createElement('div'),
      start: new Start(),
      volume: new Volume(),
      time: new Time(),
      rightSide: document.createElement('div'),
      playbackRate: new PlaybackRate(),
      fullScreen: new FullScreen(),
    };
  }

  public render($target: HTMLElement): void {
    // <div.video-control-wrapper>
    this.components.videoControlWrapper.classList.add('video-control-wrapper');

      // <div.play-slider>
      this.components.playSlider.render(this.components.videoControlWrapper);

      // <div.video-controls>
      this.components.videoControls.classList.add('video-controls');

        // <div.left-side>
        this.components.leftSide.classList.add('left-side');

          // <div.start>
          this.components.start.render(this.components.leftSide);

          // <div.volume>
          this.components.volume.render(this.components.leftSide);
        
        // <div.right-side>
        this.components.rightSide.classList.add('right-side');

          // <div.playback-rate>
          this.components.playbackRate.render(this.components.rightSide);

          // <div.full-screen>
          this.components.fullScreen.render(this.components.rightSide);
        
        this.components.videoControls.append(this.components.leftSide, this.components.rightSide);

      this.components.videoControlWrapper.append(this.components.videoControls);

    $target.appendChild(this.components.videoControlWrapper);
  }
}

/**
 * <div.video-control-wrapper>
 *  <div.play-slider>
 *  <div.video-controls>
 *    <div.left-side>
 *      <div.start>
 *      <div.volume>
 *        <div.mute>
 *        <div.volume-slider>
 *      <div.time>
 *    <div.right-side>
 *      <div.playback-rate>
 *      <div.full-screen>
 */