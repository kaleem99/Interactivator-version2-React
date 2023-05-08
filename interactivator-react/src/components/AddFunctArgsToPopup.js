import { useState } from "react";
function AddFuncArgsToPopup({ functionListArray, state, name }) {
  let funcArgs = functionListArray[state.index]
    .split("(")[1]
    .slice(1, -2)
    .split('","');
  const [functionArgs, setFunctionArgs] = useState(funcArgs);
  let funcName = functionListArray[state.index].split("(")[0];
  const updateFunctionList = (index, data) => {
    console.log(10);
    const newDataResult = [...functionArgs];
    newDataResult[index] = data;
    setFunctionArgs(newDataResult);
  };
  switch (name) {
    case "heading":
      return (
        <div
          // style={{ display: "none" }}
          className="Ifunction_heading_variables"
        >
          <input
            className="heading_text"
            type="text"
            placeholder="heading"
            // value={funcArgs[2]}
            onChange={(e) => updateFunctionList(2, e.target.value)}
            value={functionArgs[2]}
          />
          <label>offset</label>
          <input
            onChange={(e) => updateFunctionList(3, e.target.value)}
            className="heading_offset"
            type="range"
            value={functionArgs[3]}
            min="-50"
            max="50"
          />
          <select
            style={{ width: "auto" }}
            onChange={(e) => updateFunctionList(4, e.target.value)}
            className="heading_Left_or_Right"
            name="heading_Left_or_Right"
            id="heading_Left_or_Right"
          >
            {functionArgs[4] === "left" ? (
              <>
                <option value="left">left</option>
                <option value="right">right</option>
              </>
            ) : (
              <>
                <option value="right">right</option>
                <option value="left">left</option>
              </>
            )}
          </select>
        </div>
      );
    case "Quiz":
      console.log(funcArgs[9] === "Option 2");
      return (
        <div
          // style={{ display: "none" }}
          className="Ifunction_Add_Quiz_variables"
        >
          <span className="QTKDff">Multiple choice</span>
          <section id="section"></section>
          <div className="QuizInput Ifunction_Add_Quiz" id="QuizInput">
            <div className="textQuiz">
              <h2>Question</h2>
              <label>Input your question below.</label>
            </div>
            <input
              type="text"
              className="inputQuestion Add_Quiz_text"
              id="QInput1"
              onChange={(e) => updateFunctionList(2, e.target.value)}
              value={functionArgs[2]}
            />
            <br />
            <div className="textQuiz">
              <h2>Answers:</h2>
              <text>
                Input your answer options here. Select the number to indicate
                correct answers.
              </text>
              <br></br>
            </div>
            <div className="OptionsAndVideo">
              {functionArgs.slice(3, 9).map((data, i) => (
                <div className="Inputs Add_Quiz_text">
                  <button
                    className={`InputsQuestionsNumber ${
                      i + 1 === parseInt(functionArgs[9].split(" ")[1])
                        ? "inputsActive"
                        : ""
                    }`}
                    onClick={(e) => updateFunctionList(9, e.target.value)}
                    value={`Option ${i + 1}`}
                  >
                    {i + 1}
                  </button>
                  <input
                    className="inputQuestion"
                    type="text"
                    id="QInput"
                    value={data}
                    onChange={(e) => updateFunctionList(i + 3, e.target.value)}
                  />
                </div>
              ))}
              {/* <div> 
                <label>Option 2</label>
                <input
                  className="inputQuestion"
                  type="text"
                  id="QInput"
                  onChange="updateFunctionList()"
                  value={funcArgs[4]}
                />
              </div>
              <div>
                <label>Option 3</label>
                <input
                  className="inputQuestion"
                  type="text"
                  id="QInput"
                  onChange="updateFunctionList()"
                  value={funcArgs[5]}
                />
              </div>
              <div>
                <label>Option 4</label>
                <input
                  className="inputQuestion"
                  type="text"
                  id="QInput"
                  onChange="updateFunctionList()"
                  value={funcArgs[6]}
                />
              </div>
              <div>
                <label>Option 5</label>
                <input
                  className="inputQuestion"
                  type="text"
                  id="QInput"
                  onChange="updateFunctionList()"
                  value={funcArgs[7]}
                />
              </div>
              <div>
                <label>Option 6</label>
                <input
                  className="inputQuestion"
                  type="text"
                  id="QInput"
                  onChange="updateFunctionList()"
                  value={funcArgs[8]}
                />
              </div> */}
            </div>
            <div id="Inputs Add_Quiz"></div>
            <br />
            {/* <label>Please choose correct option Answer</label> */}
            {/* <select
              onChange={(e) => updateFunctionList(9, e.target.value)}
              name="cars"
              id="SelectOptions"
            >
              <option value="none">None selected</option>
              {functionArgs.slice(2, 8).map((data, i) => (
                <option
                  selected={
                    i + 1 === parseInt(funcArgs[9].split(" ")[1]) ? true : false
                  }
                  value={`Option ${i + 1}`}
                >
                  Option {i + 1}
                </option>
              ))}
            </select> */}
            <div id="btnsDiv"></div>
          </div>
        </div>
      );
    default:
      return "";
  }
}

export default AddFuncArgsToPopup;
