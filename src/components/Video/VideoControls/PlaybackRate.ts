export default class PlaybackRate {
  private components: {
    playbackRate: HTMLDivElement;
    currentPlaybackRate: HTMLDivElement;
    playbackRateList: HTMLUListElement;
    playbackRateValues: HTMLLIElement[];
  };

  private state: {
    playbackRate: number;
    accessiblePlaybacks: number[];
  }

  constructor(props: { playbackRate: number }) {
    // init state
    this.state = {
      playbackRate: props.playbackRate,
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
        playbackRateValue.value = playback;

        return playbackRateValue;
      }),
    };
  }

  public setState(state: { playbackRate?: number }): void {
    if (state.playbackRate !== undefined) {
      this.state.playbackRate = state.playbackRate;
      this.components.currentPlaybackRate.innerText = this.state.playbackRate.toFixed(1);
    }
  }

  public render($target: HTMLElement): void {
    // <div.playback-rate>
    this.components.playbackRate.classList.add('playback-rate');

      // <div.current-playback-rate>
      this.components.currentPlaybackRate.classList.add('current-playback-rate');
      this.components.currentPlaybackRate.innerText = this.state.playbackRate.toFixed(1);

      this.components.currentPlaybackRate.onclick = (event: MouseEvent) => {
        if (this.components.playbackRateList.classList.contains('hide')) {
          this.components.playbackRateList.classList.remove('hide');
        } else {
          this.components.playbackRateList.classList.add('hide');
        }
      };

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