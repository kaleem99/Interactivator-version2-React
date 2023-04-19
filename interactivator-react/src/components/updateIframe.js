function updateIframe(funcList, courseCode, video) {
  // console.log(functionList.innerHTML.match(/add_quiz/ig))
  const { functionList } = funcList;
  // console.log(courseCode)
  var srcAddendum = encodeURI(
    `plugin[interactivator][courseCode]=${courseCode}" +
      "&amp;plugin[interactivator][functions]=" +
      ${functionList ? functionList : ''} +
      "&amp;plugin[interactivator][chapters]={{chapters | safe}}" +
      &amp;plugin[interactivator][id]=${video} +
      "&amp;plugin[interactivator][intro]={{intro | safe}}" +
      "&amp;plugin[interactivator][outro]={{outro | safe}}" +
      "&amp;plugin[interactivator][src]=https://videos.getsmarter.com/Interactive+Video+Content/interactivator.js`
  );
  var iFrame =
    `
    &lt;iframe src="https://fast.wistia.net/embed/iframe/${video}?` +
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
