// convert seconds to hours, minutes and seconds
const hhmmss = (input) => {
  // for converting from UI time to srt time
  const date = new Date(parseInt(input.split(".")[0]) * 1000);
  let output = date.toISOString().substr(11, 8);
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ".") {
      output += "," + parseFloat(input).toFixed(3).split(".")[1];
    }
  }
  return output;
};

const updateData = async (state) => {
  let wistiaKey = process.env.REACT_APP_WISTIA_KEY;
  let WistiaHeaders = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + wistiaKey,
  };
  let result = [];
  let CCs = [];
  let CCElements = document.getElementsByTagName("textarea");

  for (let i = 0; i < CCElements.length; i++) {
    let CCsTimes = CCElements[i].id.split("/");
    CCs.push(CCElements[i].id.split("/"));
    result.push(
      `\n${i + 1}\n${hhmmss(CCsTimes[0].toString())} --> ${hhmmss(
        CCsTimes[1].toString()
      )}\n${CCElements[i].value} \n`
    );
  }

  let object = {};
  object["caption_file"] = result.join("");
  const requestOptions = {
    method: "PUT",
    headers: WistiaHeaders,
    body: JSON.stringify(object),
  };
  const response = await fetch(
    "https://api.wistia.com/v1/medias/" + state.video + "/captions/eng.json",
    requestOptions
  );
  if (response.ok) {
    alert("Captions have been successfully updates.");
  } else {
    alert("Error, captions were not updated.");
  }
};

export default updateData;
