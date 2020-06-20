export interface ILoop {
  loop: boolean;
}

export interface IAutoplay {
  autoplay: boolean;
}

export interface ISource {
  videoUrl: string;
}

export interface IVideoOptions extends ILoop, IAutoplay, ISource {}

export interface IPlay {
  play: boolean;
}

export interface IMute {
  mute: boolean;
}

export interface IVolume {
  volume: number;
}

export interface IVol extends IMute, IVolume {}

export interface ITime {
  currentTime: string;
  totalTime: string;
}

export interface IPlaybackRate {
  playbackRate: number;
}

export interface IVideoControls extends IPlay, IVol, ITime, IPlaybackRate {}

export interface IVideo extends IVideoControls, IVideoOptions {}