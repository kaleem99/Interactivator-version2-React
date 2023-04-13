import { useState } from "react";
import "./InteractiveButtons.scss";

function InteractivativeButtons({ setBtnState }) {
  const [add, setAdd] = useState(false);
  return (
    <div className="InteractiveButtons">
      <div className="saveAndReload">
        <button
          value={"Subtitles"}
          onClick={(e) => setBtnState(e)}
          className="btn primary"
        >
          Save
        </button>
        <button
          value={"Reload"}
          onClick={(e) => setBtnState(e)}
          className="btn"
        >
          ↻
        </button>
      </div>
      {!add ? (
        <button
          value={"Add Interactive"}
          onMouseEnter={(e) => setAdd(true)}
          className="btn AddInteractive"
        >
          +
        </button>
      ) : (
        <span className="newButtons" onMouseLeave={(e) => setAdd(false)}>
          <button type="button" onclick="newSub()">
            Subtitle
          </button>
          <button type="button" onclick="newChap()">
            Chapter
          </button>
          <select id="interactiveSelect" onchange="newIFunction(this)">
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
      )}
    </div>
  );
}

export default InteractivativeButtons;
