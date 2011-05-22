function onYouTubePlayerReady(playerId) {
	ytplayer = document.getElementById("playing");
	ytplayer.addEventListener("onStateChange", "onPlayerChange");
	ytplayer.addEventListener("onError", "onPlayerError");
}

function onPlayerChange(newstate) {
	if (newstate === 0) {
		playNext();
	}
}

function playNext() {
    var index = videos[Math.floor(Math.random() * videos.length)];
	ytplayer.loadVideoById(index);
}

function onPlayerError(error) {}

jQuery(function($) {
	$.getJSON('videos', function(data) {
		videos = data.videos;

		currentVideoId = videos[0];

		var params = {
			allowScriptAccess: "always"
		};

		var atts = {
			id: "playing",
			allowFullScreen: "true"
		};

		swfobject.embedSWF("http://www.youtube.com/v/" + currentVideoId + "&enablejsapi=1&playerapiid=playing" + "&rel=0&autoplay=1&egm=0&loop=0&fs=1&hd=0&showsearch=0&showinfo=0&iv_load_policy=3&cc_load_policy=1&version=3", "playing", "720", "405", "8", null, null, params, atts);
	});
});

