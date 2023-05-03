import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchInputVideoID } from "./Helpers";
import "./InteractiveButtons.scss";

function InteractivativeButtons({
  state,
  changeVideo,
  setBtnState,
  fetchPageData,
  newIFunction,
  updateData,
}) {
  const [add, setAdd] = useState(false);
  const dispatch = useDispatch();
  const changeWistiaDataPage = (type) => {
    dispatch({ type: type });
    fetchPageData();
  };
  return (
    <div className="ButtonsInteractive">
      <div className="SelectAndNext">
        <select>
          <option value={"Interactive type"}>Interactive type</option>
        </select>

        <input
          type={"text"}
          onChange={(e) =>
            dispatch({ type: "CUSTOM_VIDEO_INPUT", payload: e.target.value })
          }
          placeholder={"course ID"}
          value={state.videoIDInput}
          className="videoInput"
        />
        <button onClick={() => searchInputVideoID(state, dispatch)}>
          Search
        </button>
        <select
          name="UPVideos"
          id="UPVIDEOS"
          onChange={(e) => changeVideo(e.target.value, dispatch, state)}
        >
          {state.videoData.map((data) => (
            <option value={data.name}>{data.name}</option>
          ))}
        </select>
      </div>
      {/* <div className="NextAndBack">
        <button
          id="NextPage"
          onClick={() =>
            state.Page > 1 && changeWistiaDataPage("CHANGE_PREVIOUS_PAGE_DATA")
          }
        >
          Previous Page
        </button>
        <h2>Page {state.Page} </h2>
        <button
          id="NextPage"
          onClick={() => changeWistiaDataPage("CHANGE_NEXT_PAGE_DATA")}
        >
          Next Page
        </button>
      </div> */}
      <div className="InteractiveButtons">
        {/* <div className="saveAndReload">
          <button
            value={"Reload"}
            onClick={(e) => setBtnState(e)}
            className="btn"
          >
            ↻
          </button>
        </div> */}
        {/* {!add ? (
          <button
            value={"Add Interactive"}
            onMouseEnter={(e) => setAdd(true)}
            className="btn AddInteractive"
          >
            +
          </button>
        ) : (
          <span className="newButtons" onMouseLeave={(e) => setAdd(false)}>
            <button type="button" onClick="newSub()">
              Subtitle
            </button>
            <button type="button" onClick="newChap()">
              Chapter
            </button>
            <select id="interactiveSelect" onChange={(e) => newIFunction(e)}>
              <option id="defaultOption" selected disabled>
                Interactivity
              </option>
              <option id="Ifunction_lowerThird">lowerThird</option>
              <option id="Ifunction_heading">heading</option>
              <option id="Ifunction_bullet">bullet</option>
              <option id="Ifunction_logo">logo</option>
              <option id="Ifunction_playbuzz">playbuzz</option>
              <option id="Ifunction_Add_Quiz" value="Add_Quiz">
                Add Quiz
              </option>
              <option
                id="Ifunction_Video_Interactivity_Timestamp"
                value="Video_Interactivity_Timestamp"
              >
                Video Interactivity Timestamp
              </option>
            </select>
          </span>
        )} */}
      </div>
    </div>
  );
}

export default InteractivativeButtons;
