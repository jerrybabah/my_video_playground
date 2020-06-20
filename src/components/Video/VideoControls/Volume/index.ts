import Mute from './Mute';
import VolumeSlider from './VolumeSlider';

export default class Volume {
  private components: {
    volume: HTMLDivElement;
    mute: Mute;
    volumeSlider: VolumeSlider;
  };

  private state: {
    volume: number;
    mute: boolean;
  }

  public setState(state: { volume?: number, mute?: boolean }): void {
    if (state.mute !== undefined) {
      this.state.mute = state.mute;
      this.components.mute.setState({ mute: state.mute });
    }
  }

  constructor(props: { volume: number; mute: boolean }) {
    // init state
    this.state = {
      volume: props.volume,
      mute: props.mute,
    };

    // init view components
    this.components = {
      volume: document.createElement('div'),
      mute: new Mute(this.state),
      volumeSlider: new VolumeSlider(),
    };
  }

  public render($target: HTMLElement): void {
    // <div.volume>
    this.components.volume.classList.add('volume');

      // <mute>
      this.components.mute.render(this.components.volume);

      // <volume-slider>
      this.components.volumeSlider.render(this.components.volume);

    $target.appendChild(this.components.volume);
  }
}

/**
 * <div.volume>
 *  <mute>
 *  <volume-slider>
 */