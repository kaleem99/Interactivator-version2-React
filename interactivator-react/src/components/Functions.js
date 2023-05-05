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

      // remove all elements of class function
      // functions = document.getElementsByClassName("function");
      // for (let i = 0; i < functions.length; i++) {
      //   functions[i].parentElement.remove();
      // }

      // loop through functionListArray and add functions
      // for (let i = 0; i < functionListArray.length; i++) {
      //   if (functionListArray[i] !== "") {
      // async function update() {
      var funcName = functionListArray[state.index].split("(")[0];
      var funcArgs = functionListArray[state.index]
        .split("(")[1]
        .slice(1, -2)
        .split('","');
      // document.getElementById("interactiveSelect").value = funcName;
      newIFunction(
        document.getElementById("interactiveSelect"),
        funcArgs,
        funcName,
        state
      );
      console.log("added function " + funcName);
      //   }
      //   break;
      // }
      console.log(functionListArray);
    },
  });
  updateIframe(functionList, state.courseCode, state.video, logsFile);
}

function newIFunction(element, funcArgs, funcName, state) {
  window._wq = window._wq || [];
  window._wq.push({
    id: state.video,
    onReady: function (video) {
      var nextSub = false;
      var id = video.time() + "/" + (video.time() + 5);
      if (funcArgs) {
        id = funcArgs[0] + "/" + funcArgs[1];
      }
      // var functionData = element.options[element.selectedIndex].innerHTML
      var functionName = funcName;
      if (functionName == "Interactivity" || funcName) {
        functionName = funcName;
        // document.getElementById("interactiveSelect").value = funcName;
      }
      console.log(funcName);
      // if (element.value === "Add_Quiz") {
      //   console.log(funcName);
      //   functionName = "Add_Quiz";
      // }
      // if (element.value === "Video_Interactivity_Timestamp") {
      //   functionName = "Video_Interactivity_Timestamp";
      //   // AddOptionVideoInteractivityQuiz()
      //   // setVideoTime(video.time());
      // }
      let newIFunc = document.createElement("div");
      newIFunc.id = id;
      newIFunc.className = "container";
      newIFunc.innerHTML =
        `
      <div class="controls">
      <button title="move in point" tabindex="-1" class="small" type="button" onclick="setIn(this.parentNode.parentNode);">(</button>
      <button title="move out point" tabindex="-1" class="small" type="button" onclick="setOut(this.parentNode.parentNode);">)</button>
      </div>
      <div class="function" ondblclick="go(this.parentNode)">
        <h2>` +
        functionName +
        `</h2>
        </div>
        <div class="controls">
          <button tabindex="-1" class="small" type="button" onclick="removeContainer(this.parentNode.parentNode)"title="Delete">x</button>
          </div>
          `;
      // var IFcount = document.getElementById("IFcount");
      // IFcount.innerHTML = parseInt(IFcount.innerHTML) + 1;
      console.log("function Name", 173);
      console.log(functionName);
      var functionDiv = newIFunc.getElementsByClassName("function")[0];
      let cloneNodeElement = document
        .getElementsByClassName("Ifunction_" + functionName + "_variables")[0]
        .cloneNode(true);
      cloneNodeElement.style.display = "inline";
      functionDiv.appendChild(cloneNodeElement);

      if (funcArgs) {
        newIFunc.id = funcArgs[0] + "/" + funcArgs[1];
        var inputs = [];
        for (
          let f = 0;
          f < newIFunc.getElementsByTagName("input").length;
          f++
        ) {
          inputs.push(newIFunc.getElementsByTagName("input")[f]);
        }
        for (
          let f = 0;
          f < newIFunc.getElementsByTagName("select").length;
          f++
        ) {
          inputs.push(newIFunc.getElementsByTagName("select")[f]);
        }

        for (let j = 0; j < funcArgs.length - 2; j++) {
          var funcValue = funcArgs[j + 2];
          inputs[j].value = funcValue;
        }
      }

      // setIn(newIFunc, funcArgs);
      const IfunctionDiv = document.createElement("div");
      IfunctionDiv.className = "Ifunction_heading_variables";
      IfunctionDiv.innerHTML = newIFunc.innerHTML;
      document.getElementsByClassName("popupMain")[0].appendChild(IfunctionDiv);
      document.getElementById("defaultOption").selected = true;
      // var functionToggle = document.getElementById("functionToggle");
      // if (functionToggle.className == "off") {
      //   newIFunc.style.display = "none";
      // }
      // if (newIFunc.getElementsByTagName("input").len > 0) {
      //   newIFunc.getElementsByTagName("input")[0].focus();
      // }
    },
  });
}

export { updateFunctionList, newIFunction, updateIFunctionsFromList };
