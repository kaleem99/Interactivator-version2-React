import { useSelector, dispatch, useDispatch } from "react-redux";
import { editSubtitles } from "./editSubtitles";
import { updateIFunctionsFromList } from "./Functions";

function FunctionPopups({ setInOrOut, setInOrOutTime, saveMethod }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let body = "";
  console.log(state.PopupType);
  switch (state.PopupType) {
    case "Transcript":
      body = editSubtitles(state, setInOrOut, setInOrOutTime, dispatch);
      break;
    case "heading":
      const result = updateIFunctionsFromList(state.functionList);
      console.log(result);
      console.log("10".repeat(100));
      body = (
        <div
          className="Ifunction_heading_variables"
          dangerouslySetInnerHTML={{ __html: result.innerHTML }}
        ></div>
      );
      break;
    default:
      body = "";
      break;
  }
  return (
    <>
      {state.popup && (
        <div className="Popup">
          <div className="popupMain">{body}</div>
          <div className="popupFunctions">
            <div className="saveAndCancel">
              <button onClick={() => saveMethod(state)}>Save</button>
              <button
                onClick={() => dispatch({ type: "POPUP", payload: false })}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FunctionPopups;
