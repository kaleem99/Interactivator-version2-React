import updateIframe from "./updateIframe";
import logsFile from "../logs.json";
function updateFunctionList() {
  var functionElments = document.getElementsByClassName("function");
  console.log(functionElments);
  console.log("functionElments", 10);
  // Loop through function elements and add heading and input values to list to create a string to be evaluated later
  var functionList = "";
  for (let i = 0; i < functionElments.length; i++) {
    functionList += functionElments[i].getElementsByTagName("h2")[0].innerHTML;
    functionList += "(";
    var inOut = functionElments[i].parentNode.id.split("/");
    functionList += '"' + inOut[0] + '","' + inOut[1] + '",';
    for (
      let j = 0;
      j < functionElments[i].getElementsByTagName("input").length;
      j++
    ) {
      functionList += '"';
      functionList += functionElments[i].getElementsByTagName("input")[j].value;
      functionList += '"';
      if (j < functionElments[i].getElementsByTagName("input").length - 1) {
        functionList += ",";
      }
    }
    for (
      let j = 0;
      j < functionElments[i].getElementsByTagName("select").length;
      j++
    ) {
      if (
        functionElments[i].getElementsByTagName("input").length > 0 ||
        j > 0
      ) {
        functionList += ",";
      }
      functionList += '"';
      functionList +=
        functionElments[i].getElementsByTagName("select")[j].value;
      functionList += '"';
    }
    functionList += ");";
  }
  document.getElementById("functionList").innerHTML = functionList;

  // Load Wistia JavaScript API and pass variables to Interactivator.js to run functions
  window._wq = window._wq || [];
  window._wq.push({
    id: "{{Wistia_URL}}",
    onReady: function (video) {
      var courseCode = "{{courseCode}}";
      var WistiaId = "{{Wistia_URL}}";
      var intro = "{{intro}}";
      var outro = "{{outro}}";
      let startPlay = false;
      // interactivatorData comes from the Flask server version of Interactivator.js and not AWS. The AWS version is used in the Review page and the iFrame output
      {
        {
          //   interactivatorData | safe;
        }
      }
      // Above code is truncated and does include the execution of the functionList. This is so that the functionList can be updated in the HTML before the code is executed
      // Find definitions of below functions in Interactivator.js
      //   generalLottie();
      //   execute(chapters, functionList);
    },
  });
  //   updateIframe(functionList);
}
function updateIFunctionsFromList(functionList, state) {
  const UPLogoData = "";
  const lwrThirdData = "";
  window._wq = window._wq || [];
  window._wq.push({
    id: state.video,
    onReady: function (video) {
      if (functionList === "new") {
        functionList =
          'logo("0","' +
          video.duration() +
          '","' +
          UPLogoData[0][1] +
          '");lowerThird("5","12","' +
          lwrThirdData[0][0] +
          '","left");lowerThird("' +
          (video.duration() - 12) +
          '","' +
          (video.duration() - 5) +
          '","' +
          lwrThirdData[0][0] +
          '","left");';
        document.getElementById("functionList").innerHTML = functionList;
      }
      let functionListArray = functionList;

      // let funcName = functionListArray[state.index].split("(")[0];
      // let funcArgs = functionListArray[state.index]
      //   .split("(")[1]
      //   .slice(1, -2)
      //   .split('","');
      // document.getElementById("interactiveSelect").value = funcName;
      // const result = newIFunction(
      //   document.getElementById("interactiveSelect"),
      //   funcArgs
      // );
      return functionListArray;
    },
  });
  updateIframe(functionList, state.courseCode, state.video, logsFile);
  return window._wq[0].onReady();
}

function newIFunction(element, funcArgs) {
  console.log(funcArgs);
  return (
    <div
      // style={{ display: "none" }}
      className="Ifunction_heading_variables"
    >
      <input
        onChange="updateFunctionList()"
        className="heading_text"
        type="text"
        placeholder="heading"
        // value={funcArgs[2]}
      />
      <label>offset</label>
      <input
        onChange="updateFunctionList()"
        className="heading_offset"
        type="range"
        value={funcArgs[3]}
        min="-50"
        max="50"
      />
      <select
        style={{ width: "auto" }}
        onChange="updateFunctionList()"
        className="heading_Left_or_Right"
        name="heading_Left_or_Right"
        id="heading_Left_or_Right"
      >
        {funcArgs[4] === "left" ? (
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
}
// pg4ycfs4k7
export { updateFunctionList, newIFunction, updateIFunctionsFromList };
