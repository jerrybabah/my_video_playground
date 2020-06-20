export default class PlaybackRate {
  private components: {
    playbackRate: HTMLDivElement;
    currentPlaybackRate: HTMLDivElement;
    playbackRateList: HTMLUListElement;
    playbackRateValues: HTMLLIElement[];
  };

  private state: {
    currentPlaybackRate: number;
    accessiblePlaybacks: number[];
  }

  constructor(props: { playbackRate: number }) {
    // init state
    this.state = {
      currentPlaybackRate: props.playbackRate,
      accessiblePlaybacks: [0.5, 1.0, 2.0],
    };

    // init view components
    this.components = {
      playbackRate: document.createElement('div'),
      currentPlaybackRate: document.createElement('div'),
      playbackRateList: document.createElement('ul'),
      playbackRateValues: this.state.accessiblePlaybacks.map((playback) => {
        const playbackRateValue = document.createElement('li');
        playbackRateValue.classList.add('playback-rate-value');
        playbackRateValue.innerText = playback.toFixed(1);

        return playbackRateValue;
      }),
    };
  }

  public render($target: HTMLElement): void {
    // <div.playback-rate>
    this.components.playbackRate.classList.add('playback-rate');

      // <div.current-playback-rate>
      this.components.currentPlaybackRate.classList.add('current-playback-rate');
      this.components.currentPlaybackRate.innerText = this.state.currentPlaybackRate.toFixed(1);

      // <ul.playback-rate-list>
      this.components.playbackRateList.classList.add('playback-rate-list', 'hide');

        // <li.playback-rate-value>
        this.components.playbackRateList.append(...this.components.playbackRateValues);
      
      this.components.playbackRate.append(this.components.currentPlaybackRate, this.components.playbackRateList);

    $target.appendChild(this.components.playbackRate);
  }
}

/**
 * <div.playback-rate>
 *  <div.current-playback-rate>
 *  <ul.playback-rate-list>
 *    <li.playback-rate-value>
 */