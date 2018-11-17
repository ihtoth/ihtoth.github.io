function onYouTubeIframeAPIReady() {

  var player;
  player = new YT.Player('muteYouTubeVideoPlayerCopilot', {
    videoId: 'FA6CpOf1bn8', // YouTube Video ID
    width: 560,               // Player width (in px)
    height: 316,              // Player height (in px)
    playerVars: {
      autoplay: 0,        // Auto-play the video on load
      controls: 1,        // Show pause/play buttons in player
      showinfo: 0,        // Hide the video title
      modestbranding: 1,  // Hide the Youtube Logo
      loop: 0,            // Run the video in a loop
      fs: 1,              // Hide the full screen button
      cc_load_policy: 0, // Hide closed captions
      iv_load_policy: 3,  // Hide the Video Annotations
      autohide: 0         // Hide video controls when playing
    },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });

  var playerTwo;
  playerTwo = new YT.Player('muteYouTubeVideoPlayerCirrus', {
    videoId: 'qLHp8cgXAvc', // YouTube Video ID
    width: 724,               // Player width (in px)
    height: 487,              // Player height (in px)
    playerVars: {
      autoplay: 0,        // Auto-play the video on load
      controls: 1,        // Show pause/play buttons in player
      showinfo: 0,        // Hide the video title
      modestbranding: 1,  // Hide the Youtube Logo
      loop: 0,            // Run the video in a loop
      fs: 1,              // Hide the full screen button
      cc_load_policy: 0, // Hide closed captions
      iv_load_policy: 3,  // Hide the Video Annotations
      autohide: 0         // Hide video controls when playing
    },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });
  // $(window).scroll(function() {
  //       $(".YTVideo").each( function() {
  //           if( $(window).scrollTop() > $(this).offset().top - 500) {
  //               // $(this).css('opacity',1);
  //               player.playVideo();
  //               // playerTwo.playVideo();
  //           } else {
  //               // $(this).css('opacity',0);
  //               player.stopVideo();
  //               // playerTwo.stopVideo();
  //           }
  //       });
  // });

 }
