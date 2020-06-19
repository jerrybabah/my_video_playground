// import BaseComponent from '../../BaseComponent';
import PlaySlider from './PlaySlider';
import VolumeSlider from './VolumeSlider';

export default class VideoControls{
  private $target: HTMLElement;

  private state: {
    play: boolean;
    mute: boolean;
    volume: number;
  };

  constructor($target: HTMLElement, props: {play: boolean, mute: boolean, volume: number}) {
    this.state = {
      play: props.play,
      mute: props.mute,
      volume: props.volume,
    };

    this.$target = $target;

    this.render();
  }

  public render(): void {
    // <div.video-control-wrapper>
    const videoControlWrapper = document.createElement('div');
    videoControlWrapper.classList.add('video-control-wrapper');

      // <div.play-slider>
      new PlaySlider(videoControlWrapper);

      // <div.video-controls>
      const videoControls = document.createElement('div');
      videoControls.classList.add('video-controls');

        // <div.left-side>
        const leftSide = document.createElement('div');
        leftSide.classList.add('left-side');

          // <div.start>
          const start = document.createElement('input');
          start.type = 'button';
          start.value = this.state.play? '정지': '시작';
          start.classList.add('start');

          // <div.volume>
          const volume = document.createElement('div');
          volume.classList.add('volume');

            // <div.mute>
            const mute = document.createElement('input');
            mute.type = 'button';
            mute.value = this.state.mute? 'unmute': 'mute';
            mute.classList.add('mute');

            volume.append(mute);

            // <div.volume-slider>
            new VolumeSlider(volume);

          leftSide.append(start, volume);
        
        // <div.right-side>
        const rightSide = document.createElement('div');
        rightSide.classList.add('right-side');

          // <div.playback-rate>
          const playbackRate = document.createElement('div');
          playbackRate.classList.add('playback-rate');

          // <div.full-screen>
          const fullScreen = document.createElement('div');
          fullScreen.classList.add('full-screen');

          rightSide.append(playbackRate, fullScreen);

        
        videoControls.append(leftSide, rightSide);

      videoControlWrapper.append(videoControls);

    this.$target.appendChild(videoControlWrapper);
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