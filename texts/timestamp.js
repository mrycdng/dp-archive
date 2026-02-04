var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'F0K2DnI1TDk',
    });
}
function setCurrentTime(slideNum) {
    var object = [
        7, 
        58, 
        137,
        228,
        293,
        354,
        471
    ];
    player.seekTo(object[slideNum]);
}