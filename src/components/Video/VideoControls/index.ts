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
    currentTime: string;
    totalTime: string;
    playbackRate: number;
  };

  public setState(state: { play?: boolean, mute?: boolean, volumn?: number, 
                           currentTime?: string, totalTime?: string, playbackRate?: number }): void {
    if (state.play !== undefined) {
      this.state.play = state.play;
      this.components.start.setState({ play: state.play });
    }

    if (state.mute !== undefined) {
      this.state.mute = state.mute;
      this.components.volume.setState( { mute: state.mute });
    }
  }

  constructor(props: { play: boolean; mute: boolean; volume: number; currentTime: string; totalTime: string, playbackRate: number }) {
    // init state
    this.state = {
      play: props.play,
      mute: props.mute,
      volume: props.volume,
      currentTime: props.currentTime,
      totalTime: props.totalTime,
      playbackRate: props.playbackRate,
    };

    // init view component
    this.components = {
      videoControlWrapper: document.createElement('div'),
      playSlider: new PlaySlider(),
      videoControls: document.createElement('div'),
      leftSide: document.createElement('div'),
      start: new Start(this.state),
      volume: new Volume(this.state),
      time: new Time(this.state),
      rightSide: document.createElement('div'),
      playbackRate: new PlaybackRate(this.state),
      fullScreen: new FullScreen(),
    };
  }

  public render($target: HTMLElement): void {
    // <div.video-control-wrapper>
    this.components.videoControlWrapper.classList.add('video-control-wrapper');

      // <play-slider>
      this.components.playSlider.render(this.components.videoControlWrapper);

      // <div.video-controls>
      this.components.videoControls.classList.add('video-controls');

        // <div.left-side>
        this.components.leftSide.classList.add('left-side');

          // <start>
          this.components.start.render(this.components.leftSide);

          // <volume>
          this.components.volume.render(this.components.leftSide);

          // <time>
          this.components.time.render(this.components.leftSide);
        
        // <div.right-side>
        this.components.rightSide.classList.add('right-side');

          // <playback-rate>
          this.components.playbackRate.render(this.components.rightSide);

          // <full-screen>
          this.components.fullScreen.render(this.components.rightSide);
        
        this.components.videoControls.append(this.components.leftSide, this.components.rightSide);

      this.components.videoControlWrapper.append(this.components.videoControls);

    $target.appendChild(this.components.videoControlWrapper);
  }
}

/**
 * <div.video-control-wrapper>
 *  <play-slider>
 *  <div.video-controls>
 *    <div.left-side>
 *      <start>
 *      <volume>
 *      <time>
 *    <div.right-side>
 *      <playback-rate>
 *      <full-screen>
 */