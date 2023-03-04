import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

const onPlay = function (currentTime) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(currentTime.seconds)
  );
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
