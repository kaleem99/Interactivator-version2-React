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
function updateIFunctionsFromList(functionList) {
  //   window._wq = window._wq || [];
  //   window._wq.push({
  //     id: "{{Wistia_URL}}",
  //     onReady: function (video) {
  //   let functionList = document.getElementById("functionList").innerHTML;
  //   if (functionList === "new") {
  //     functionList = `logo("0","${video.duration()}","${
  //       UPLogoData[0][1]
  //     }");lowerThird("5","12","${lwrThirdData[0][0]}","left");lowerThird("${
  //       video.duration() - 12
  //     }","${video.duration() - 5}","${lwrThirdData[0][0]}","left");`;
  //     document.getElementById("functionList").innerHTML = functionList;
  //   }
  const functionListArray = functionList;

  // remove all elements of class function
  //   const functions = document.getElementsByClassName("function");
  //   for (let i = 0; i < functions.length; i++) {
  //     functions[i].parentElement.remove();
  //   }

  // loop through functionListArray and add functions
  let testingData = "";
  for (let i = 0; i < functionListArray.length; i++) {
    if (functionListArray[i] !== "") {
      const funcName = functionListArray[i].split("(")[0];
      const funcArgs = functionListArray[i]
        .split("(")[1]
        .slice(1, -2)
        .split('","');
      //   document.getElementById("interactiveSelect").value = funcName;
      testingData = newIFunction(funcName, funcArgs, funcName);
      console.log(`added function ${funcName}`);
      console.log(funcName);
    }
  }
  //     },
  //   });
  //   updateIframe(functionList);
  return testingData;
}

function newIFunction(element, funcArgs, funcName) {
  let result = "10";
  //   window._wq = window._wq || [];
  //   window._wq.push({
  //     id: "pxn2ycze9k",
  //     onReady: function (video) {
  var nextSub = false;
  var id = funcArgs[0] + "/" + funcArgs[1];
  if (funcArgs) {
    id = funcArgs[0] + "/" + funcArgs[1];
  }
  // var functionData = element.options[element.selectedIndex].innerHTML

  let functionName = funcName;

  let newIFunc = document.createElement("div");
  newIFunc.id = id;
  newIFunc.className = "container";
  newIFunc.innerHTML =
    `
          <div class="function" ondblclick="go(this.parentNode)">
            <h2>` +
    functionName +
    `</h2>
         `;
  //   var IFcount = document.getElementById("IFcount");
  //   IFcount.innerHTML = parseInt(IFcount.innerHTML) + 1;
  var functionDiv = newIFunc.getElementsByClassName("function")[0];
  console.log(funcArgs);
  console.log("=".repeat(20));
  functionDiv.innerHTML += ` <div className="Ifunction_heading_variables">
      <input
        onChange="updateFunctionList()"
        className="heading_text"
        type="text"
        value="${funcArgs[2]}"
        placeholder="heading"
      />
      <label>offset</label>
      <input
        onChange="updateFunctionList()"
        className="heading_offset"
        type="range" 
        value="${funcArgs[3]}"
        min="-50"
        max="50"
      />
      <select
        onChange="updateFunctionList()"
        className="heading_Left_or_Right"
        name="heading_Left_or_Right"
        id="heading_Left_or_Right"
        
      >
        <option ${
          funcArgs[4] === "right" && "selected"
        } value="right">right</option>
        <option  ${
          funcArgs[4] === "left" && "selected"
        } value="left">left</option>

      </select>
    </div>`;
  console.log(functionDiv.toString());
  if (funcArgs) {
    newIFunc.id = funcArgs[0] + "/" + funcArgs[1];
    var inputs = [];
    for (let f = 0; f < newIFunc.getElementsByTagName("input").length; f++) {
      inputs.push(newIFunc.getElementsByTagName("input")[f]);
    }
    for (let f = 0; f < newIFunc.getElementsByTagName("select").length; f++) {
      inputs.push(newIFunc.getElementsByTagName("select")[f]);
    }

    for (let j = 0; j < funcArgs.length - 2; j++) {
      var funcValue = funcArgs[j + 2];
      inputs[j].value = funcValue;
    }
  }

  // setIn(newIFunc, funcArgs);
  //   document.getElementById("defaultOption").selected = true;
  //   var functionToggle = document.getElementById("functionToggle");
  //   if (functionToggle.className == "off") {
  //     newIFunc.style.display = "none";
  //   }
  //   if (newIFunc.getElementsByTagName("input").len > 0) {
  //     newIFunc.getElementsByTagName("input")[0].focus();
  //   }
  result = functionDiv;
  //     },
  //   });
  return result;
}
export { updateFunctionList, newIFunction, updateIFunctionsFromList };
