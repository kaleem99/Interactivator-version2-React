function RenderFunction({ func, state }) {
  let newFunct = func.slice(0, func.indexOf("("));
  if (newFunct === "Add_Quiz") {
    return (
      <div className="Ifunction_Add_Quiz_variables">
        <span className="QTKDff">Multiple choice</span>
        <section id="section"></section>
        <div className="QuizInput Ifunction_Add_Quiz" id="QuizInput">
          <h2>Please populate input to add quiz</h2>
          <label>Question</label>
          <h1>{state.InteractivityState.toString()}</h1>
          <br />
          <input
            type="text"
            className="inputQuestion Add_Quiz_text"
            id="QInput1"
            // onChange={updateFunctionList}
          />
          <br />
          <div className="OptionsAndVideo">
            <div className="Inputs Add_Quiz_text">
              <label>Option 1</label>
              <input
                className="inputQuestion"
                type="text"
                id="QInput"
                // onChange={updateFunctionList}
              />
            </div>
            <div>
              <label>Option 2</label>
              <input
                className="inputQuestion"
                type="text"
                id="QInput"
                // onChange={updateFunctionList}
              />
            </div>
            <div>
              <label>Option 3</label>
              <input
                className="inputQuestion"
                type="text"
                id="QInput"
                // onChange={updateFunctionList}
              />
            </div>
            <div>
              <label>Option 4</label>
              <input
                className="inputQuestion"
                type="text"
                id="QInput"
                // onChange={updateFunctionList}
              />
            </div>
            <div>
              <label>Option 5</label>
              <input
                className="inputQuestion"
                type="text"
                id="QInput"
                // onChange={updateFunctionList}
              />
            </div>
            <div>
              <label>Option 6</label>
              <input
                className="inputQuestion"
                type="text"
                id="QInput"
                // onChange={updateFunctionList}
              />
            </div>
          </div>
          <div id="Inputs Add_Quiz"></div>
          <br />
          <label>Please choose correct option Answer</label>
          <select
            // onChange={updateFunctionList}
            name="cars"
            id="SelectOptions"
          >
            <option value="none" selected="">
              None selected
            </option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
            <option value="Option 6">Option 6</option>
          </select>
          <div id="btnsDiv"></div>
        </div>
      </div>
    );
  } else if (newFunct === "heading") {
    return (
      <div className="Ifunction_heading_variables">
        <input
          //   onChange={() => updateFunctionList()}
          className="heading_text"
          type="text"
          placeholder="heading"
        />
        <label>offset</label>
        <input
          //   onChange={() => updateFunctionList()}
          className="heading_offset"
          type="range"
          min="-50"
          max="50"
        />
        <select
          style={{ width: "auto" }}
          //   onChange={() => updateFunctionList()}
          className="heading_Left_or_Right"
          name="heading_Left_or_Right"
          id="heading_Left_or_Right"
        >
          <option value="left">left</option>
          <option value="right">right</option>
        </select>
      </div>
    );
  }
}

export default RenderFunction;
