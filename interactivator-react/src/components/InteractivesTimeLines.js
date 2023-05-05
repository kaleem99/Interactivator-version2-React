import { useEffect, useState } from "react";
import "./components.scss";
import { useDispatch, useSelector } from "react-redux";
import { newIFunction } from "./Functions";
import { MdOutlineModeEdit, MdDelete } from "react-icons/md";

function InteractiveTimeLines({ updateIframeData, state }) {
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  console.log(state.functionList);
  useEffect(() => {
    // updateIframeData();
  }, []);
  const formatFunctionName = (name) => {
    let formattedName = name.slice(0, name.indexOf("("));
    if (formattedName === "Video_Interactivity_Timestamp") {
      return "TimeStamp";
    } else if (formattedName === "Add_Quiz") {
      return "Quiz";
    }
    return formattedName;
  };
  return (
    <div className="TimeLine">
      <div className="TimeLineHeader">
        <p className="TimeLineP">TimeLine</p>
        {!add ? (
          <button
            value={"Add Interactive"}
            onMouseEnter={(e) => setAdd(true)}
            className="btn AddInteractive"
          >
            <p>+</p>
          </button>
        ) : (
          <span className="newButtons" onMouseLeave={(e) => setAdd(false)}>
            {/* <button type="button" onClick="newSub()">
              Subtitle
            </button>
            <button type="button" onClick="newChap()">
              Chapter
            </button> */}
            <select id="interactiveSelect" onChange={(e) => newIFunction(e)}>
              <option id="defaultOption" selected disabled>
                <p>Interactivity</p>
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
      <div className="TimeLineBody">
        {state.functionList.length > 0 &&
          state.functionList.map((name) => (
            <div className="TimeLineCard">
              <div className="TimeLineCardBody">
                <p className="TimeLineName">{formatFunctionName(name)}</p>
                <p className="TimeLineTime">0:00</p>
                {/* <div className=""> */}
                {/* <button className="AddInteractive1"> */}
                <MdOutlineModeEdit
                  className="svgLeft"
                  onClick={() =>
                    dispatch({
                      type: "POPUP",
                      payload: true,
                      actionType: formatFunctionName(name),
                    })
                  }
                />
                <MdDelete className="svgRight" />
                {/* </button> */}
                {/* <button className="AddInteractive"></button> */}
                {/* </div> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default InteractiveTimeLines;

// MdOutlineModeEdit
