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
    window._wq = window._wq || [];

    // RUN WEBSITE IN PRICAVY MODE
    window._wq.push(function (W) {
      W.consent(false);
    });

    window._wq.push({
      id,
      options: {
        // PLAYBACK
        preload: true,
        muted: true,
        playsinline: true,
        autoPlay: play,
        silentAutoPlay: true,
        endVideoBehavior: "loop",

        // LAYOUT
        fitStrategy: "cover",
        videoFoam: false,

        // TRACKING
        copyLinkAndThumbnailEnabled: false,
        doNotTrack: true,
        googleAnalytics: false,
        seo: false,

        // DEFAULT QUALITY
        // qualityMax,
        // qualityMin,

        // UI CONTROLS
        controlsVisibleOnLoad: false,
        fullscreenOnRotateToLandscape: false,
        fullscreenButton: false,
        settingsControl: false,
        qualityControl: false,
        playButton: false,
        playbar: false,
        playbackRateControl: false,
        smallPlayButton: false,

        ...options,
      },
      onReady: myOnReady,
      onHasData: () => {
        console.log("onHasData");
      },
    });
  }, [id]);

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
    document.getElementById("points").max = video.duration();
    console.log("myOnReady");
    setVideo(video);
    console.log(video.time());
  };
  const videSeek = (time) => {
    video.time(time);
    console.log(time);
  };
  return (
    <>
      <div className="iframe-wrapper">
        <Helmet>
          <script
            src={`https://fast.wistia.com/embed/medias/${id}.json`}
            async
          ></script>
          <script
            src="https://fast.wistia.com/assets/external/E-v1.js"
            async
          ></script>
        </Helmet>
        <div
          className="wistia_responsive_padding"
          style={{ padding: "56.25% 0 0 0", position: "relative" }}
        >
          <div
            className="wistia_responsive_wrapper"
            style={{
              height: "100%",
              left: 0,
              position: "absolute",
              top: 0,
              width: "100%",
            }}
          >
            <div
              className={`wistia_embed wistia_async_${id} seo=true videoFoam=false `}
              style={{ height: "100%", position: "relative", width: "100%" }}
            >
              <div
                className="wistia_swatch"
                style={{
                  height: "100%",
                  left: 0,
                  opacity: 0,
                  overflow: "hidden",
                  position: "absolute",
                  top: 0,
                  transition: "opacity 200ms",
                  width: "100%",
                }}
              >
                <img
                  src={`https://fast.wistia.com/embed/medias/${id}/swatch`}
                  style={{
                    filter: "blur(5px)",
                    height: "100%",
                    objectFit: "contain",
                    width: "100%",
                  }}
                  alt=""
                  aria-hidden="true"
                  onload="this.parentNode.style.opacity=1;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "50px",
          display: "grid",
          gridTemplateColumns: "auto auto",
          marginBottom: "40px",
          backgroundColor: "gray",
        }}
      >
        <p style={{ color: "white" }}>{time}</p>
        <input
          onChange={(e) => videSeek(e.target.value)}
          type="range"
          id="points"
          name="points"
          defaultValue="0"
          min="0"
          max="10"
        />
      </div>
    </>
  );
}

export default WistiaEmbed;
