import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// console.dir(player)

const localStorageKey = "videoplayer-current-time";

player.on('timeupdate', throttle((data) => {
    const currentTime = data.seconds;
    // console.log(currentTime);
    localStorage.setItem(localStorageKey, JSON.stringify(currentTime))
    
    
}, 1000))
function currentTime(key) {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? '0' : JSON.parse(serializedState);
}

console.log(currentTime(localStorageKey))

    player.setCurrentTime(currentTime(localStorageKey)).then((seconds) => {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});