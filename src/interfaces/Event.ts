export interface VideoEvent{
  name: 'abort' | 'canplay' | 'canplaythrough' | 'durationchange' | 'emptied' | 'ended' |
  'error' | 'loadddata' | 'loadedmetadata' | 'loadstart' | 'pause' | 'play' | 'playing' | 'progress' |
  'ratechange' | 'seeked' | 'seeking' | 'stalled' | 'suspend' | 'timeupdate' | 'volumnchange' | 'waiting';
  link: string;
}