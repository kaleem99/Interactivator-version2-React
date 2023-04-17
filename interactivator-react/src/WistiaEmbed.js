import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import classNames from 'classnames/bind'

// import s from './WistiaEmbed.module.scss'
// const cn = classNames.bind(s)

function WistiaEmbed({ id, play, options }) {
  // const el = useRef()
  const [video, setVideo] = useState();
  const [time, setTime] = useState(0);
  useEffect(() => {
    if (!video) return;
    if (play) {
      console.log("play video");
      video.play();
    } else {
      video.pause();
    }
  }, [play, video]);

  useEffect(() => {
    // window._wq = window._wq || [];

    // // RUN WEBSITE IN PRICAVY MODE
    // window._wq.push(function (W) {
    //   W.consent(false);
    // });

    // window._wq.push({
    //   id,
    //   options: {
    //     // PLAYBACK
    //     preload: true,
    //     muted: true,
    //     playsinline: true,
    //     autoPlay: play,
    //     silentAutoPlay: true,
    //     endVideoBehavior: "loop",

    //     // LAYOUT
    //     fitStrategy: "cover",
    //     videoFoam: false,

    //     // TRACKING
    //     copyLinkAndThumbnailEnabled: false,
    //     doNotTrack: true,
    //     googleAnalytics: false,
    //     seo: false,
    //     controlsVisibleOnLoad: false,
    //     fullscreenOnRotateToLandscape: false,
    //     fullscreenButton: false,
    //     settingsControl: false,
    //     qualityControl: false,
    //     playButton: false,
    //     playbar: false,
    //     playbackRateControl: false,
    //     smallPlayButton: false,

    //     ...options,
    //   },
    //   onReady: myOnReady,
    //   onHasData: () => {
    //     console.log("onHasData");
    //   },
    // });
    window._wq = window._wq || [];
    window._wq.push({
      id: id,
      onFind: function (video) {
        video.addPlugin("myPluginName", {
          src: "https://wiggly-tree-nectarine.glitch.me/my-plugin.js",
        });
      },
      onHasData: () => {
        console.log("onHasData");
      },
      onReady: myOnReady,
      // onchange: myOnReady,
      // onplay: myOnReady
    });
  }, []);

  const onPlayEvent = () => {
    console.log("The video was just played!", id);
    console.log(video.duration());
  };

  useEffect(() => {
    if (!video) return;
    console.log(video.time());
    video.bind("play", onPlayEvent);
    setTime(video.time());
    console.log(video.time());
    video.bind("beforeremove", function () {
      return video.unbind;
    });
    video.bind("timechange", function () {
      console.log(video.time());
      setTime(video.time());
    });
    video.bind("timechange", function (t) {
      if (t > 5) {
        console.log("Made it past 30 seconds! This will never fire again.");
        // video.time(225);
        return video.unbind;
      }
    });

    return () => {
      video.unbind("play", onPlayEvent);
      video.remove(); // clean up
    };
  }, [video]);

  const myOnReady = (video) => {
    // document.getElementById("points").max = video.duration();
    // console.log("myOnReady");
    // setVideo(video);
    console.log(video.duration());
    if (video.time() > 10) {
      console.log("Video changed to 34 seconds.");
      video.time(34);
    }
  };
  const videSeek = (time) => {
    video.time(time);
    console.log(time);
  };
  return (
    <>
      <div className="iframe-wrapper">
        {/* <Helmet>
          <script
            src="https://fast.wistia.com/assets/external/E-v1.js"
            async
          ></script>
          <script
            src={`https://fast.wistia.com/embed/medias/${id}.json`}
            async
          ></script>
        </Helmet> */}
        <iframe
          src={`https://fast.wistia.net/embed/iframe/${id}?backTenSecondsControl=true`}
          title="Video"
          allow="autoplay; fullscreen"
          // allowTransparency="true"
          frameBorder="0"
          scrolling="no"
          className="wistia_embed"
          name="wistia_embed"
          allowFullScreen
          // msallowfullscreen="true"
          width="640"
          height="360"
        ></iframe>
      </div>
    </>
  );
}

export default WistiaEmbed;
