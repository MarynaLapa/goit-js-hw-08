import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEOPLAYER_CURRENT_TIME = "videoplayer-current-time";

localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, 10);




 

function onPlay(e) {
        
        // console.log(player.target);
    }
    
// console.log(player.on('timeupdate', throttle(data => {
//   localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, data.seconds.toString());
// }, 1000)));


    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });

// player.setCurrentTime(35).then(function(seconds) {
    
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });


// console.log(player);