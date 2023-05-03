function Transcripts({ state, setInOrOut, dispatch, setInOrOutTime }) {
  return (
    // <div className="">
    //   {state.subtitle.length > 0 &&
    //     state.subtitle.map((data, i) => {
    //       return (
    //         <div
    //           class="container"
    //           onMouseOver={() => setInOrOut("visible", i)}
    //           onMouseOut={() => setInOrOut("hidden", i)}
    //           style={{ display: "flex;" }}
    //         >
    //           <div class="controls1">
    //             <button
    //               title="move in point"
    //               tabindex="-1"
    //               class="subIn"
    //               type="button"
    //               // onclick="setInOrOut(this,false)"
    //             >
    //               (
    //             </button>
    //             <button
    //               title="move out point"
    //               tabindex="-1"
    //               class="subOut"
    //               type="button"
    //               // onclick="setInOrOut(this,true)"
    //             >
    //               )
    //             </button>
    //           </div>
    //           <textarea
    //             // onblur="resetButton(this)"
    //             // onselect="symbolSwitch(this)"
    //             // onmouseup="symbolSwitch(this)"
    //             class="TextAreaSubtitles"
    //             // onkeydown="autoScrollOff()"
    //             // onclick="autoScrollOff()"
    //             onChange={(e) =>
    //               dispatch({
    //                 type: "UPDATING_CAPTIONS",
    //                 payload: {
    //                   index: i,
    //                   newCaption: e.target.value,
    //                   id: e.target.id,
    //                 },
    //               })
    //             }
    //             id={`${data[0]}/${data[1]}`}
    //             name={`${data[0]}/${data[1]}`}
    //           >
    //             {data[2]}
    //           </textarea>
    //           <div class="controls2">
    //             <button
    //               tabindex="-1"
    //               class="small"
    //               type="button"
    //               // onclick="go(this.parentNode.parentNode.getElementsByTagName('textarea')[0])"
    //               title="Go to this point in the video"
    //               onClick={() => setInOrOutTime(data[0])}
    //             >
    //               ←
    //             </button>
    //             <button
    //               tabindex="-1"
    //               id="toggle_newLine42.8/47.009"
    //               class="small"
    //               type="button"
    //               // onclick="check('newLine42.8/47.009')"
    //               title="New paragraph"
    //             >
    //               ↵
    //             </button>
    //             {/* <input
    //     style={{ display: "none;" }}
    //     tabindex="-1"
    //     id="newLine42.8/47.009"
    //     name="newLine42.8/47.009"
    //     type="checkbox"
    //   /> */}
    //           </div>
    //           <div class="controls3">
    //             <button
    //               tabindex="-1"
    //               class="small"
    //               type="button"
    //               // onclick="makeSpeakerSelect(this)"
    //               title="Mark speaker"
    //             >
    //               ⁚
    //             </button>
    //             <button
    //               tabindex="-1"
    //               class="small"
    //               type="button"
    //               // onclick="makeNotes(this)"
    //               title="Make notes"
    //             >
    //               ✎
    //             </button>
    //           </div>
    //           <div class="controls4">
    //             <button
    //               tabindex="-1"
    //               class="small"
    //               type="button"
    //               // onclick="removeContainer(this.parentNode.parentNode)"
    //               title="Delete"
    //             >
    //               x
    //             </button>
    //           </div>
    //         </div>
    //       );
    //     })}
    // </div>
    <div className="TranscriptText">
      {state.subtitle.length > 0 &&
        state.subtitle.map((data) => <p>{data[2]}</p>)}
    </div>
  );
}

export default Transcripts;
