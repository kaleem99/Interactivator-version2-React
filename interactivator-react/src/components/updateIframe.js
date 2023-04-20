function updateIframe(funcList, courseCode, video, jsonData) {
  // console.log(functionList.innerHTML.match(/add_quiz/ig))
  let intro = "";
  let outro = "";
  let chapter = "";
  for (let media of jsonData["medias"]) {
    if (media["name"] === courseCode.split("-")[0] + " Intro") {
      intro = media["hashed_id"];
    }
    if (media["name"] === courseCode.split("-")[0] + " Outro") {
      outro = media["hashed_id"];
    }
  }
  const { functionList, chapterlist } = funcList;
  if (chapterlist === [] || chapterlist === undefined) {
    chapter = "[]";
  } else {
    chapter = chapterlist;
  }
  const srcAddendum = encodeURI(
    `plugin[interactivator][courseCode]=${courseCode}&amp;plugin[interactivator][functions]=${
      functionList ? functionList : ""
    }&amp;plugin[interactivator][chapters]=${
      chapterlist === [] || chapterlist === undefined ? "[]" : chapterlist
    }&amp;plugin[interactivator][id]=${video}&amp;plugin[interactivator][intro]=${intro}&amp;plugin[interactivator][outro]=${outro}&amp;plugin[interactivator][src]=https://videos.getsmarter.com/Interactive+Video+Content/interactivator.js`
  );

  const iFrame =
    `
    &lt;iframe src="https://fast.wistia.net/embed/iframe/${intro}?` +
    srcAddendum +
    `" 
    title="1" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" 
    name="wistia_embed" allowfullscreen="" mozallowfullscreen="" webkitallowfullscreen="" 
    oallowfullscreen="" msallowfullscreen="" style="zoom: 1;"&gt;&lt;/iframe&gt;
    `;
  return iFrame;
}

export default updateIframe;

// "Add_Quiz(\"79.517766\",\"84.517766\",\"Testing Quiz Functionality\",\"A\",\"B\",\"C\",\"\",\"\",\"\",\"Option 2\")"
