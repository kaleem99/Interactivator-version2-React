import React, { PropTypes } from "react";
const insertScriptHead = ({ name, src }) => {
  if (!document.querySelector(`#${name}`)) {
    const container = document.head || document.querySelector("head");
    const scriptElement = document.createElement("script");
    scriptElement.setAttribute("id", name);
    scriptElement.async = true;
    scriptElement.src =
      src +
      "https://kaleem99.github.io/hostingContents/content/Interactivator.js";
    container.appendChild(scriptElement);
  }
};

const wistiaScriptsHandler = (embedId) => {
  const requiredScripts = [
    {
      name: "wistia-script",
      src: "https://fast.wistia.com/assets/external/E-v1.js",
    },
  ];
  requiredScripts.forEach((v) =>
    insertScriptHead({
      name: v.name,
      src: v.src,
    })
  );
};

class VideoPlayerEmbed extends React.Component {
  constructor(props) {
    super(props);
    window._wq = window._wq || [];
    window._wq.push({
      id: this.props.embedId,
      onReady: (video) => {
        this.handle = video;
      },
    });
    this.state = {
      video: this.props.videoData[0].hashed_id,
      name: this.props.videoData[0].name,
    };
  }

  componentDidMount() {
    wistiaScriptsHandler(this.props.embedId, this.wrapper);
  }

  componentWillUnmount() {
    this.handle && this.handle.remove();
  }

  createWistiaEmbed(embedId) {
    return {
      __html: `<div class='wistia_responsive_padding'
            style="padding: 56.25% 0 0 0; position: relative;">
          <div class='wistia_responsive_wrapper'
            style="height: 100%; left: 0; position: absolute; top: 0; width: 100%;">
            <div class='wistia_embed wistia_async_${embedId} videoFoam=true autoPlay=true'
              style="height: 100%; width: 100%;">&nbsp;</div>
          </div>
        </div>`,
    };
  }
  changeVideo(videoID) {
    console.log(videoID);
    const videoIDNAME = this.props.videoData.filter(
      (data) => data.name === videoID && data.hashed_id
    );
    console.log(videoIDNAME[0].hashed_id);
    this.setState({ video: videoIDNAME[0].hashed_id });
    this.setState({ name: videoIDNAME[0].name });
  }
  // render() {
  //   // console.log(this.props.videoData[0].name);
  //   return (
  //     <div>
  //       <h2>{this.state.name}</h2>
  //       <div
  //         className="wistia_responsive_padding"
  //         style={{ padding: "56.25% 0 0 0", position: "relative" }}
  //       >
  //         <div
  //           className="wistia_responsive_wrapper"
  //           style={{
  //             height: "100%",
  //             left: "0",
  //             position: "absolute",
  //             top: "0",
  //             width: "100%",
  //           }}
  //         >
  //           <iframe
  //             src={`https://fast.wistia.com/embed/medias/${this.state.video}`}
  //             title="1"
  //             allowtransparency="true"
  //             frameborder="0"
  //             scrolling="no"
  //             class="wistia_embed"
  //             name="wistia_embed"
  //             allowfullscreen=""
  //             mozallowfullscreen=""
  //             webkitallowfullscreen=""
  //             oallowfullscreen=""
  //             msallowfullscreen=""
  //             width={"100%"}
  //             height={"100%"}
  //             alt=""
  //           ></iframe>
  //         </div>
  //       </div>
  //       <br></br>
  //       <select
  //         name="UPVideos"
  //         id="UPVIDEOS"
  //         onChange={(e) => this.changeVideo(e.target.value)}
  //       >
  //         {this.props.videoData.map((data) => (
  //           <option value={data.name}>{data.name}</option>
  //         ))}
  //       </select>
  //       <br></br>
  //     </div>
  //   );
  // }

  // render() {
  //   return (
  //     <div
  //       ref={el => (this.wrapper = el)}
  //       dangerouslySetInnerHTML={this.createWistiaEmbed(this.props.embedId)} />
  //   )
  // }
  render() {
    return (
      <div
        ref={(el) => (this.wrapper = el)}
        dangerouslySetInnerHTML={this.createWistiaEmbed(this.props.embedId)}
      />
    );
  }
}

export default VideoPlayerEmbed;
