import "./MainPage.scss";
import WistiaEmbed from "../WistiaEmbed";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Transcripts from "../components/Transcripts";
import { MdOutlineMode } from "react-icons/md";
import InteractivativeButtons from "../components/InteractiveButtons";
import { changeVideo, fetchPageData, updateData } from "../components/Helpers";
import VideoAndActivityRunTime from "../components/videoAndActivityRunTime";
import { editSubtitles } from "../components/editSubtitles";
const data = {
  preload: true,
  muted: true,
  playsinline: true,
  autoPlay: true,
  silentAutoPlay: true,
  endVideoBehavior: "loop",
};

function MainPage() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const setInOrOut = (type, index) => {
    for (let i = 1; i < 5; i++) {
      let controlsArr = document.querySelectorAll(`.controls${i}`);
      controlsArr[index].style.visibility = type;
    }
  };
  const setInOrOutTime = (time) => {
    console.log(time);
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
    });
  };
  return (
    <div className="MainPage">
      {state.popup && (
        <div className="Popup">
          <div className="popupMain">
            {editSubtitles(state, setInOrOut, setInOrOutTime, dispatch)}
          </div>
          <div className="popupFunctions">
            <div className="saveAndCancel">
              <button onClick={() => updateData(state)}>Save</button>
              <button
                onClick={() => dispatch({ type: "POPUP", payload: false })}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="Header">
        <div className="HeaderLeft">
          <InteractivativeButtons
            changeVideo={changeVideo}
            state={state}
            fetchPageData={fetchPageData}
          />
        </div>
        <div className="HeaderRight">
          <VideoAndActivityRunTime state={state} />
        </div>
      </div>
      <div className="Body">
        <div className="Video">
          <WistiaEmbed id={state.video} play={true} options={data} />
        </div>
        <div className="Transcripts">
          <div className="TransHeader">
            <h2 className="TranscriptHeading">
              Transcript{" "}
              {
                <button
                  className="TranscriptsButton"
                  onClick={() => dispatch({ type: "POPUP", payload: true })}
                >
                  <MdOutlineMode />
                </button>
              }
            </h2>
          </div>

          <Transcripts
            state={state}
            setInOrOut={setInOrOut}
            dispatch={dispatch}
            setInOrOutTime={setInOrOutTime}
          />
        </div>
      </div>
      <div className="Footer"></div>
    </div>
  );
}

export default MainPage;
