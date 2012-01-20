var apiswf = null;

$(document).ready(function() {

  var flashvars = {
    'playbackToken': playback_token,
    'domain': domain,
    'listener': 'callback_object'
  };

  var params = {
    'allowScriptAccess': 'always'
  };

  var attributes = {};

  swfobject.embedSWF('http://www.rdio.com/api/swf/', 'apiswf', 1, 1, '9.0.0', 'expressInstall.swf', flashvars, params, attributes);

  $('#play').click(function() { apiswf.rdio_play($('#play_key').val()); });
  $('#stop').click(function() { apiswf.rdio_stop(); });
  $('#pause').click(function() { apiswf.rdio_pause(); });
  $('#previous').click(function() { apiswf.rdio_previous(); });
  $('#next').click(function() { apiswf.rdio_next(); });

});

var callback_object = {};

callback_object.ready = function ready(user) {
  apiswf = $('#apiswf').get(0);
}

callback_object.playingTrackChanged = function playingTrackChanged(playingTrack, sourcePosition) {
  // The currently playing track has changed.
  // Track metadata is provided as playingTrack and the position within the playing source as sourcePosition.
  if (playingTrack != null) {
    $('#track').text(playingTrack['name']);
    $('#album').text(playingTrack['album']);
    $('#artist').text(playingTrack['artist']);
    $('#art').attr('src', playingTrack['icon']);
  }

  alert('whoa');
}
