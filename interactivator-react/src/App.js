import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import VideoPlayerEmbed from "./Video";
import Lottie from "react-lottie";
import animationData from "./assets/99109-loading (1).json";
import { useDispatch, useSelector } from "react-redux";
import WistiaEmbed from "./WistiaEmbed";
import iframeData from "./IframeData";
import InteractivativeButtons from "./components/InteractiveButtons";
import updateIframe from "./components/updateIframe";
// import { Wistia } from 'wistia/player';
import fetchJsonData from "./components/fetchJsonData";
const options = {
  headers: {
    Authorization:
      "Bearer 185e6a59d70559fdf59fe891201cf3f96d0c6e645b9aa4e7e1f0bf645ad2bed9",
  },
  method: "get",
};
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "100%",
  // height: "100vh",
};
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPageData();
  }, []);

  const fetchPageData = async () => {
    const url = `https://api.wistia.com/v1/medias.json?page=${state.Page}`;
    const result = await fetch(url, options).then((data) => data.json());
    const jsonDataIntrAndOutro = await fetchJsonData();
    result.jsonData = jsonDataIntrAndOutro;
    dispatch({ type: "FETCH_VIDEO", payload: result });
    const url2 = `https://api.wistia.com/v1/medias/${result[0].hashed_id}/captions.json`;
    const subtitles = await fetch(url2, options).then((data) => data.json());
    dispatch({ type: "FETCH_SUBTITLE", payload: subtitles[0].text });
  };
  const changeVideo = async (videoID) => {
    const videoIDNAME = state.videoData.filter(
      (data) => data.name === videoID && data.hashed_id
    );
    dispatch({
      type: "CHANGE_VIDEO",
      payload: { videoID: videoIDNAME[0].hashed_id, name: videoIDNAME[0].name },
    });
    const url2 = `https://api.wistia.com/v1/medias/${videoIDNAME[0].hashed_id}/captions.json`;

    const subtitles = await fetch(url2, options).then((data) => data.json());
    dispatch({ type: "FETCH_SUBTITLE", payload: subtitles[0].text });
  };

  const setBtnState = (e) => {
    if (e.target.className === "btn" && e.target.value === "Subtitles") {
      e.target.className = "btn on";
      dispatch({ type: "CHANGE_SUBTITLE_STATE", payload: true });
    } else {
      dispatch({ type: "CHANGE_SUBTITLE_STATE", payload: false });
      e.target.className = "btn";
    }
  };
  const data = {
    preload: true,
    muted: true,
    playsinline: true,
    autoPlay: true,
    silentAutoPlay: true,
    endVideoBehavior: "loop",
  };
  const updateIframeData = () => {
    setTimeout(() => {
      const functionList = iframeData(state.video);
      console.log(functionList);
      const result = updateIframe(
        functionList,
        state.courseCode,
        state.video,
        state.jsonDataIntrAndOutro
      );
      console.log(result.length);
      document.getElementById("textDisplayCode").innerHTML = result;
    }, 2000);
  };
  const testing = (time) => {
    window._wq = window._wq || [];
    window._wq.push({
      id: state.video,
      onFind: function (video) {
        video.addPlugin("myPluginName", {
          src: "https://wiggly-tree-nectarine.glitch.me/my-plugin.js",
        });
      },
      onHasData: () => {
        console.log("onHasData");
      },
      onReady: function (video) {
        video.time(time);
        console.log(video.duration());
      },
      // onchange: myOnReady,
      // onplay: myOnReady
    });
  };

  const renderVideo = () => {
    // console.log(state.videoName);

    return (
      <div>
        <h2 className="VideoName">{state.videoName}</h2>

        <div>
          <button
            value={"Transcript"}
            onClick={(e) => setBtnState(e)}
            className="btn"
          >
            Transcript
          </button>
          <button
            value={"Interactivities"}
            onClick={(e) => setBtnState(e)}
            className="btn"
          >
            Interactivities
          </button>
          <button
            value={"Subtitles"}
            onClick={(e) => setBtnState(e)}
            className="btn"
          >
            Subtitles
          </button>
          <button
            value={"Chapters"}
            onClick={(e) => setBtnState(e)}
            className="btn"
          >
            Chapters
          </button>
        </div>
        {/* <h1>{state.subtitleState.toString()}</h1> */}
        <div
          className="wistia_responsive_padding"
          style={{ padding: "56.25% 0 0 0", position: "relative" }}
        >
          <div
            className="wistia_responsive_wrapper"
            style={{
              height: "100%",
              left: "0",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          >
            <WistiaEmbed id={state.video} play={true} options={data} />
          </div>
        </div>
      </div>
    );
  };
  const searchInputVideoID = async () => {
    const url = `https://api.wistia.com/v1/medias/${state.videoIDInput}.json`;
    const result = await fetch(url, options).then((data) => data.json());
    if (result.error) {
      return alert(result.error);
    }
    dispatch({
      type: "CHANGE_VIDEO",
      payload: { videoID: result.hashed_id, name: result.name },
    });
    const url2 = `https://api.wistia.com/v1/medias/${state.videoIDInput}/captions.json`;

    const subtitles = await fetch(url2, options).then((data) => data.json());
    dispatch({ type: "FETCH_SUBTITLE", payload: subtitles[0].text });
    dispatch({ type: "FETCH_CUSTOM_VIDEO_INPUT", payload: result });
    console.log(result);
    updateIframeData();
  };

  const setInOrOut = (type, index) => {
    for (let i = 1; i < 5; i++) {
      let controlsArr = document.querySelectorAll(`.controls${i}`);
      controlsArr[index].style.visibility = type;
    }
  };
  const setInOrOutTime = (data) => {
    const time = data.split("\n")[0];
    const parts = time.split(":");
    let seconds =
      parseInt(parts[0]) * 86400 +
      parseInt(parts[1]) * 3600 +
      parseInt(parts[2]) * 60;
    // parseInt(parts[3]);
    seconds = seconds / 60;
    testing(seconds);
  };
  return (
    <div style={styles} className="Interactivator">
      {state.videoData.length > 0 ? (
        <div className="videoDiv">
          {renderVideo()}
          <InteractivativeButtons
            state={state}
            changeVideo={changeVideo}
            setBtnState={setBtnState}
            fetchPageData={fetchPageData}
          />
          <input
            type={"text"}
            onChange={(e) =>
              dispatch({ type: "CUSTOM_VIDEO_INPUT", payload: e.target.value })
            }
            placeholder={"course ID"}
            value={state.videoIDInput}
            className="videoInput"
          />
          <button onClick={() => searchInputVideoID()}>Search</button>
          <details>
            <summary>Embed Code</summary>
            <div id="textDisplayCode">Hello</div>
            <div
              id="iFrame"
              // contentEditable="true"
              // onClick="copyTextToClipBoard()"
              // onInput="reverseUpdate()"
            ></div>
          </details>
          {updateIframeData()}
        </div>
      ) : (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
      <div className="Interactives">
        {state.subtitleState === true &&
          state.subtitle.split("-->").map((data, i) => {
            return (
              <div
                class="container"
                onMouseOver={() => setInOrOut("visible", i)}
                onMouseOut={() => setInOrOut("hidden", i)}
                style={{ display: "flex;" }}
              >
                <div class="controls1">
                  <button
                    title="move in point"
                    tabindex="-1"
                    class="subIn"
                    type="button"
                    // onclick="setInOrOut(this,false)"
                  >
                    (
                  </button>
                  <button
                    title="move out point"
                    tabindex="-1"
                    class="subOut"
                    type="button"
                    // onclick="setInOrOut(this,true)"
                  >
                    )
                  </button>
                </div>
                <textarea
                  // onblur="resetButton(this)"
                  // onselect="symbolSwitch(this)"
                  // onmouseup="symbolSwitch(this)"
                  class="TextAreaSubtitles"
                  // onkeydown="autoScrollOff()"
                  // onclick="autoScrollOff()"

                  id="42.8/47.009"
                  name="42.8/47.009"
                >
                  {data}
                </textarea>
                <div class="controls2">
                  <button
                    tabindex="-1"
                    class="small"
                    type="button"
                    // onclick="go(this.parentNode.parentNode.getElementsByTagName('textarea')[0])"
                    title="Go to this point in the video"
                    onClick={() => setInOrOutTime(data)}
                  >
                    ←
                  </button>
                  <button
                    tabindex="-1"
                    id="toggle_newLine42.8/47.009"
                    class="small"
                    type="button"
                    // onclick="check('newLine42.8/47.009')"
                    title="New paragraph"
                  >
                    ↵
                  </button>
                  {/* <input
                    style={{ display: "none;" }}
                    tabindex="-1"
                    id="newLine42.8/47.009"
                    name="newLine42.8/47.009"
                    type="checkbox"
                  /> */}
                </div>
                <div class="controls3">
                  <button
                    tabindex="-1"
                    class="small"
                    type="button"
                    // onclick="makeSpeakerSelect(this)"
                    title="Mark speaker"
                  >
                    ⁚
                  </button>
                  <button
                    tabindex="-1"
                    class="small"
                    type="button"
                    // onclick="makeNotes(this)"
                    title="Make notes"
                  >
                    ✎
                  </button>
                </div>
                <div class="controls4">
                  <button
                    tabindex="-1"
                    class="small"
                    type="button"
                    // onclick="removeContainer(this.parentNode.parentNode)"
                    title="Delete"
                  >
                    x
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
