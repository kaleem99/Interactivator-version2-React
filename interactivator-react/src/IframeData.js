import logsFile from "./videoLogs.json";
const iframeData = (videoId) => {
  if(logsFile[videoId] === undefined){
    return ""
  }
  return logsFile[videoId];
};
export default iframeData;
