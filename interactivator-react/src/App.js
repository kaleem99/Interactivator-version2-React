import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import VideoPlayerEmbed from "./Video";
import Lottie from "react-lottie";
import animationData from "./assets/99109-loading (1).json";
import { useDispatch, useSelector } from "react-redux";
import WistiaEmbed from "./WistiaEmbed";
import iframeData from "./IframeData";
import InteractivativeButtons from "./components/InteractiveButtons";
import updateIframe from "./components/updateIframe";
// import { Wistia } from 'wistia/player';
import fetchJsonData from "./components/fetchJsonData";
const options = {
  headers: {
    Authorization:
      "Bearer 185e6a59d70559fdf59fe891201cf3f96d0c6e645b9aa4e7e1f0bf645ad2bed9",
  },
  method: "get",
};
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "100%",
  // height: "100vh",
};
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPageData();
  }, []);
  const updateData = async () => {
    let wistiaKey = "8b834e4fd84efbc8a2bb50138fa926471b071be50834aba84b0b73c1b76b6e57"
    let WistiaHeaders = {"Content-Type": "application/json","Authorization": "Bearer " + wistiaKey}
    // let testing = {"caption_file": "1\n00:00:10,120 --> 00:00:15,640\nIn 2009, a man named Christopher Coach\nbought 5,000 bitcoins on a whim.\n\n2\n00:00:16,120 --> 00:00:18,920\nIt cost him a grand total of 27 dollars.\n\n3\n00:00:19,280 --> 00:00:24,720\nHe promptly forgot about them and until a few years later\nwhen he saw a news article about Bitcoin, and\n\n4\n00:00:24,720 --> 00:00:26,040\nchecked out his investment.\n\n5\n00:00:26,520 --> 00:00:29,400\nCan you guess what his 5,000\nbitcoins were worth?\n\n6\n00:00:30,440 --> 00:00:38,600\nAs of 2018, It was 39,460,525 dollars.\n\n7\n00:00:39,160 --> 00:00:41,720\nBitcoin and the rise\nof cryptocurrencies\n\n8\n00:00:41,720 --> 00:00:45,120\nhas been one of the most surprising\nmilestones of the 21st century.\n\n9\n00:00:45,880 --> 00:00:51,560\nAnd today, we have industry expert Simon Dixon with\nus, who will share his perspective on the key\n\n10\n00:00:51,560 --> 00:00:53,840\nevents in the cryptocurrency history.\n\n11\n00:00:54,280 --> 00:01:01,120\nSimon is an author, Fintech investor, and the CEO\nof the online investment platform, BnkToTheFuture.\n\n12\n00:01:05,120 --> 00:01:09,760\nThis whole thing of trying to create a digital currency,\nhas been going on for quite some time.\n\n13\n00:01:09,800 --> 00:01:15,920\nIn fact, you know, money is digital by nature, and\nthe banks were the very first to create a digital\n\n14\n00:01:15,960 --> 00:01:20,880\ncurrency, because they took the money that the government\nprints and made a digital representation\n\n15\n00:01:20,880 --> 00:01:22,160\nof it through banking.\n\n16\n00:01:22,800 --> 00:01:26,200\nAnd the money in your online banking\nis in fact a digital currency.\n\n17\n00:01:26,200 --> 00:01:31,720\nIt's not created by the government, it's actually\ncreated by the private bank and it's backed by debt.\n\n18\n00:01:32,400 --> 00:01:38,240\nAnd so, the money, the digital currency, that the banks\nhave created is a digital representation of\n\n19\n00:01:38,240 --> 00:01:40,600\nthe money that the governments\nwere originally printing.\n\n20\n00:01:40,840 --> 00:01:47,480\nBut, this whole concept of how you actually create\na digital currency that exists without a bank, or\n\n21\n00:01:47,480 --> 00:01:53,400\nwithout a central bank, was something that was trying\nto be popularised shortly after the birth of the internet.\n\n22\n00:01:53,920 --> 00:01:58,400\nNow, the one that particularly came around that\nsolved a problem called the \"double spend\"\n\n23\n00:01:58,400 --> 00:01:59,520\nproblem, was Bitcoin.\n\n24\n00:02:00,320 --> 00:02:03,360\nBitcoin solved a problem of\nhow you actually\n\n25\n00:02:03,360 --> 00:02:06,720\nhave a digital representation of\na currency that can't be counterfeited.\n\n26\n00:02:07,640 --> 00:02:14,800\nIn order to do that, they created this very, you\nknow, specific set of circumstances called\n\n27\n00:02:14,800 --> 00:02:21,040\n\u201ca blockchain\", and a specific set of market\nincentives that solved that problem.\n\n28\n00:02:21,720 --> 00:02:27,280\nAnd, what they did is that they created a way whereby\npeople running machinery could actually audit\n\n29\n00:02:27,280 --> 00:02:34,280\nevery transaction, and if those auditors, known\nas miners, reach consensus on, you know, one\n\n30\n00:02:34,320 --> 00:02:39,720\nversion of the truth, the ledger, think of it like the\nbank, the ledger, showing that this person owns\n\n31\n00:02:39,720 --> 00:02:45,200\nthat amount of money, without them being able to double spend,\nwas exactly the problem that Bitcoin solved.\n\n32\n00:02:45,680 --> 00:02:52,080\nAnd that original white paper was written in 2008,\nand in 2009 the first version of Bitcoin was\n\n33\n00:02:52,080 --> 00:02:53,440\nactually released on the internet.\n\n34\n00:02:54,120 --> 00:02:58,480\nAt that time, the whole concept of Bitcoin was trying\nto create a decentralised currency, i.e.\n\n35\n00:02:58,800 --> 00:03:04,480\na currency that exists without the need for any central\nauthority that can control and manipulate\n\n36\n00:03:04,760 --> 00:03:05,720\nthe ecosystem.\n\n37\n00:03:06,680 --> 00:03:08,200\nAnd that was really the goal.\n\n38\n00:03:08,280 --> 00:03:16,840\nNow, originally, the creator of Bitcoin, Satoshi Nakamoto\nwhich was believed to be a group of people\n\n39\n00:03:17,080 --> 00:03:21,600\nyou know, they created the first version\nof that and it was highly centralised.\n\n40\n00:03:22,160 --> 00:03:23,400\nThey were doing the mining.\n\n41\n00:03:24,120 --> 00:03:25,840\nThey were verifying all the transactions.\n\n42\n00:03:25,880 --> 00:03:27,200\nThey were creating the technology.\n\n43\n00:03:27,240 --> 00:03:29,960\nThey were developing, dictating\nthe development.\n\n44\n00:03:30,160 --> 00:03:36,040\nThey were actually encouraging people to build technology\nusing this protocol, and it was highly\n\n45\n00:03:36,040 --> 00:03:38,880\ncentralised and highly centrally planned.\n\n46\n00:03:43,800 --> 00:03:50,400\nOriginally, the very first price for a bitcoin was a\nperson on a bitcoin talk forum persuaded someone\n\n47\n00:03:50,680 --> 00:03:55,800\nto buy two pizzas, and they purchased\ntwo pizzas for 10,000 bitcoins.\n\n48\n00:03:56,200 --> 00:03:58,120\nToday, that's, you know, laughed about.\n\n49\n00:03:58,200 --> 00:04:03,480\nIt's a very historical moment in the history of bitcoin\ncalled Bitcoin Pizza Day, because every year\n\n50\n00:04:04,120 --> 00:04:08,880\nthose pizzas become more and more expensive as they've\ngone from hundreds of thousands to tens of\n\n51\n00:04:08,880 --> 00:04:11,160\nmillions in value.\n\n52\n00:04:11,400 --> 00:04:15,400\nBut that was originally how it firstly, kind of,\na barter system, that's how it got its value.\n\n53\n00:04:15,440 --> 00:04:21,320\nBut then, an exchange came along and allowed people\nto, the market, to determine the price in dollars.\n\n54\n00:04:21,640 --> 00:04:26,600\nAnd so, people will deposit dollars if they wanted\nto buy bitcoin, and then people would naturally\n\n55\n00:04:26,640 --> 00:04:31,280\ntrade with each other as every\nFX market does on the book.\n\n56\n00:04:31,400 --> 00:04:36,160\nWhat came then, is that people started to realise,\nas people could speculate on the price of this\n\n57\n00:04:36,160 --> 00:04:38,400\nthing, the next use case came along.\n\n58\n00:04:38,480 --> 00:04:40,720\nThe original use case was\ncensorship resistance.\n\n59\n00:04:41,160 --> 00:04:45,200\nThe second use case was speculation, so people\ncame along and speculated on the price.\n\n60\n00:04:46,000 --> 00:04:48,400\nIt was a highly speculative technology.\n\n61\n00:04:48,840 --> 00:04:52,960\nIt was a very strange thing because it\nwasn't really a financial asset.\n\n62\n00:04:53,280 --> 00:04:54,320\nIt wasn't really a stock.\n\n63\n00:04:54,360 --> 00:04:55,280\nIt wasn't really a bond.\n\n64\n00:04:55,320 --> 00:04:56,920\nIt wasn't quite a currency.\n\n65\n00:04:57,280 --> 00:04:58,600\nIt wasn't a technology.\n\n66\n00:04:58,640 --> 00:04:59,920\nIt wasn't just a protocol.\n\n67\n00:04:59,960 --> 00:05:04,680\nIt was all of the above because people could use it\nhow they wanted to use it, and so, people would\n\n68\n00:05:04,720 --> 00:05:10,400\nspeculate on the value of this thing, and it was kind\nof like watching the internet born in real time\n\n69\n00:05:10,400 --> 00:05:14,800\nand having a live price for the technology\ncalled the internet as it gets adoption.\n\n70\n00:05:15,680 --> 00:05:20,480\nBut as people started to speculate on it, then\nordinary businesses that weren't involved in\n\n71\n00:05:20,480 --> 00:05:26,680\ncensorship started to try and accept this new\npayment method as a marketing scheme.\n\n72\n00:05:27,240 --> 00:05:31,680\nSo, if a shop came along and said, \"We accept bitcoin\",\nthe entire bitcoin community would go to that\n\n73\n00:05:31,720 --> 00:05:33,840\nshop and try and make a transaction.\n\n74\n00:05:33,880 --> 00:05:39,880\nSo after that, you had the very early, you know,\nmerchants all around the world doing perfectly\n\n75\n00:05:39,880 --> 00:05:45,640\nlegitimate uncensored transactions, trying to use\nbitcoin as a marketing strategy, and that would\n\n76\n00:05:45,640 --> 00:05:47,480\ntend to drive some kind of adoption.\n\n77\n00:05:48,480 --> 00:05:53,240\nAnd that would drive more speculation, more merchant\nadoption, more use cases as people started to\n\n78\n00:05:53,280 --> 00:05:58,320\nrealise that they could use it for more censorship\nresistance, and the bitcoin ecosystem really evolved.\n\n79\n00:05:59,840 --> 00:06:04,720\nIf there are any sections you'd like to cover again,\nplease click on the relevant button now.\n\n"}
    let testing = ['1\n00:00:10,120 ', ' 00:00:15,640\nIn 2009, a man named Christopher Coach\nbought 5,000,00 bitcoins on a whim. \n\n2\n00:00:16,120 ', ' 00:00:18,920\nIt cost him a grand total of 27 dollars.\n\n3\n00:00:19,280 ', ' 00:00:24,720\nHe promptly forgot about them and until a few years later\nwhen he saw a news article about Bitcoin, and\n\n4\n00:00:24,720 ', ' 00:00:26,040\nchecked out his investment.\n\n5\n00:00:26,520 ', ' 00:00:29,400\nCan you guess what his 5,000\nbitcoins were worth?\n\n6\n00:00:30,440 ', ' 00:00:38,600\nAs of 2018, It was 39,460,525 dollars.\n\n7\n00:00:39,160 ', ' 00:00:41,720\nBitcoin and the rise\nof cryptocurrencies\n\n8\n00:00:41,720 ', ' 00:00:45,120\nhas been one of the most surprising\nmilestones of the 21st century.\n\n9\n00:00:45,880 ', ' 00:00:51,560\nAnd today, we have industry expert Simon Dixon with\nus, who will share his perspective on the key\n\n10\n00:00:51,560 ', ' 00:00:53,840\nevents in the cryptocurrency history.\n\n11\n00:00:54,280 ', ' 00:01:01,120\nSimon is an author, Fintech investor, and the CEO\nof the online investment platform, BnkToTheFuture.\n\n12\n00:01:05,120 ', ' 00:01:09,760\nThis whole thing of trying to create a digital currency,\nhas been going on for quite some time.\n\n13\n00:01:09,800 ', ' 00:01:15,920\nIn fact, you know, money is digital by nature, and\nthe banks were the very first to create a digital\n\n14\n00:01:15,960 ', ' 00:01:20,880\ncurrency, because they took the money that the government\nprints and made a digital representation\n\n15\n00:01:20,880 ', ' 00:01:22,160\nof it through banking.\n\n16\n00:01:22,800 ', ' 00:01:26,200\nAnd the money in your online banking\nis in fact a digital currency.\n\n17\n00:01:26,200 ', " 00:01:31,720\nIt's not created by the government, it's actually\ncreated by the private bank and it's backed by debt.\n\n18\n00:01:32,400 ", ' 00:01:38,240\nAnd so, the money, the digital currency, that the banks\nhave created is a digital representation of\n\n19\n00:01:38,240 ', ' 00:01:40,600\nthe money that the governments\nwere originally printing.\n\n20\n00:01:40,840 ', ' 00:01:47,480\nBut, this whole concept of how you actually create\na digital currency that exists without a bank, or\n\n21\n00:01:47,480 ', ' 00:01:53,400\nwithout a central bank, was something that was trying\nto be popularised shortly after the birth of the internet.\n\n22\n00:01:53,920 ', ' 00:01:58,400\nNow, the one that particularly came around that\nsolved a problem called the "double spend"\n\n23\n00:01:58,400 ', ' 00:01:59,520\nproblem, was Bitcoin.\n\n24\n00:02:00,320 ', ' 00:02:03,360\nBitcoin solved a problem of\nhow you actually\n\n25\n00:02:03,360 ', " 00:02:06,720\nhave a digital representation of\na currency that can't be counterfeited.\n\n26\n00:02:07,640 ", ' 00:02:14,800\nIn order to do that, they created this very, you\nknow, specific set of circumstances called\n\n27\n00:02:14,800 ', ' 00:02:21,040\n“a blockchain", and a specific set of market\nincentives that solved that problem.\n\n28\n00:02:21,720 ', ' 00:02:27,280\nAnd, what they did is that they created a way whereby\npeople running machinery could actually audit\n\n29\n00:02:27,280 ', ' 00:02:34,280\nevery transaction, and if those auditors, known\nas miners, reach consensus on, you know, one\n\n30\n00:02:34,320 ', ' 00:02:39,720\nversion of the truth, the ledger, think of it like the\nbank, the ledger, showing that this person owns\n\n31\n00:02:39,720 ', ' 00:02:45,200\nthat amount of money, without them being able to double spend,\nwas exactly the problem that Bitcoin solved.\n\n32\n00:02:45,680 ', ' 00:02:52,080\nAnd that original white paper was written in 2008,\nand in 2009 the first version of Bitcoin was\n\n33\n00:02:52,080 ', ' 00:02:53,440\nactually released on the internet.\n\n34\n00:02:54,120 ', ' 00:02:58,480\nAt that time, the whole concept of Bitcoin was trying\nto create a decentralised currency, i.e.\n\n35\n00:02:58,800 ', ' 00:03:04,480\na currency that exists without the need for any central\nauthority that can control and manipulate\n\n36\n00:03:04,760 ', ' 00:03:05,720\nthe ecosystem.\n\n37\n00:03:06,680 ', ' 00:03:08,200\nAnd that was really the goal.\n\n38\n00:03:08,280 ', ' 00:03:16,840\nNow, originally, the creator of Bitcoin, Satoshi Nakamoto\nwhich was believed to be a group of people\n\n39\n00:03:17,080 ', ' 00:03:21,600\nyou know, they created the first version\nof that and it was highly centralised.\n\n40\n00:03:22,160 ', ' 00:03:23,400\nThey were doing the mining.\n\n41\n00:03:24,120 ', ' 00:03:25,840\nThey were verifying all the transactions.\n\n42\n00:03:25,880 ', ' 00:03:27,200\nThey were creating the technology.\n\n43\n00:03:27,240 ', ' 00:03:29,960\nThey were developing, dictating\nthe development.\n\n44\n00:03:30,160 ', ' 00:03:36,040\nThey were actually encouraging people to build technology\nusing this protocol, and it was highly\n\n45\n00:03:36,040 ', ' 00:03:38,880\ncentralised and highly centrally planned.\n\n46\n00:03:43,800 ', ' 00:03:50,400\nOriginally, the very first price for a bitcoin was a\nperson on a bitcoin talk forum persuaded someone\n\n47\n00:03:50,680 ', ' 00:03:55,800\nto buy two pizzas, and they purchased\ntwo pizzas for 10,000 bitcoins.\n\n48\n00:03:56,200 ', " 00:03:58,120\nToday, that's, you know, laughed about.\n\n49\n00:03:58,200 ", " 00:04:03,480\nIt's a very historical moment in the history of bitcoin\ncalled Bitcoin Pizza Day, because every year\n\n50\n00:04:04,120 ", " 00:04:08,880\nthose pizzas become more and more expensive as they've\ngone from hundreds of thousands to tens of\n\n51\n00:04:08,880 ", ' 00:04:11,160\nmillions in value.\n\n52\n00:04:11,400 ', " 00:04:15,400\nBut that was originally how it firstly, kind of,\na barter system, that's how it got its value.\n\n53\n00:04:15,440 ", ' 00:04:21,320\nBut then, an exchange came along and allowed people\nto, the market, to determine the price in dollars.\n\n54\n00:04:21,640 ', ' 00:04:26,600\nAnd so, people will deposit dollars if they wanted\nto buy bitcoin, and then people would naturally\n\n55\n00:04:26,640 ', ' 00:04:31,280\ntrade with each other as every\nFX market does on the book.\n\n56\n00:04:31,400 ', ' 00:04:36,160\nWhat came then, is that people started to realise,\nas people could speculate on the price of this\n\n57\n00:04:36,160 ', ' 00:04:38,400\nthing, the next use case came along.\n\n58\n00:04:38,480 ', ' 00:04:40,720\nThe original use case was\ncensorship resistance.\n\n59\n00:04:41,160 ', ' 00:04:45,200\nThe second use case was speculation, so people\ncame along and speculated on the price.\n\n60\n00:04:46,000 ', ' 00:04:48,400\nIt was a highly speculative technology.\n\n61\n00:04:48,840 ', " 00:04:52,960\nIt was a very strange thing because it\nwasn't really a financial asset.\n\n62\n00:04:53,280 ", " 00:04:54,320\nIt wasn't really a stock.\n\n63\n00:04:54,360 ", " 00:04:55,280\nIt wasn't really a bond.\n\n64\n00:04:55,320 ", " 00:04:56,920\nIt wasn't quite a currency.\n\n65\n00:04:57,280 ", " 00:04:58,600\nIt wasn't a technology.\n\n66\n00:04:58,640 ", " 00:04:59,920\nIt wasn't just a protocol.\n\n67\n00:04:59,960 ", ' 00:05:04,680\nIt was all of the above because people could use it\nhow they wanted to use it, and so, people would\n\n68\n00:05:04,720 ', ' 00:05:10,400\nspeculate on the value of this thing, and it was kind\nof like watching the internet born in real time\n\n69\n00:05:10,400 ', ' 00:05:14,800\nand having a live price for the technology\ncalled the internet as it gets adoption.\n\n70\n00:05:15,680 ', " 00:05:20,480\nBut as people started to speculate on it, then\nordinary businesses that weren't involved in\n\n71\n00:05:20,480 ", ' 00:05:26,680\ncensorship started to try and accept this new\npayment method as a marketing scheme.\n\n72\n00:05:27,240 ', ' 00:05:31,680\nSo, if a shop came along and said, "We accept bitcoin",\nthe entire bitcoin community would go to that\n\n73\n00:05:31,720 ', ' 00:05:33,840\nshop and try and make a transaction.\n\n74\n00:05:33,880 ', ' 00:05:39,880\nSo after that, you had the very early, you know,\nmerchants all around the world doing perfectly\n\n75\n00:05:39,880 ', ' 00:05:45,640\nlegitimate uncensored transactions, trying to use\nbitcoin as a marketing strategy, and that would\n\n76\n00:05:45,640 ', ' 00:05:47,480\ntend to drive some kind of adoption.\n\n77\n00:05:48,480 ', ' 00:05:53,240\nAnd that would drive more speculation, more merchant\nadoption, more use cases as people started to\n\n78\n00:05:53,280 ', ' 00:05:58,320\nrealise that they could use it for more censorship\nresistance, and the bitcoin ecosystem really evolved.\n\n79\n00:05:59,840 ', " 00:06:04,720\nIf there are any sections you'd like to cover again,\nplease click on the relevant button now.\n"]

    let result = [];
    let CCs = [];
    let CCElements = document.getElementsByTagName('textarea');
    const hhmmss = (input) => {
      // for converting from UI time to srt time
      const date = new Date(parseInt(input.split(".")[0]) * 1000);
      let output = date.toISOString().substr(11, 8);
      for(let i = 0; i < input.length; i++){
        if(input[i] === "."){
            output += "," + parseFloat(input).toFixed(3).split(".")[1];
        }
      }
      return output;
    }
    for (let i = 0; i < CCElements.length; i++) {
      let CCsTimes = CCElements[i].id.split('/');
      CCs.push(CCElements[i].id.split('/'));
      result.push(`\n${i+1}\n${hhmmss(CCsTimes[0].toString())} --> ${hhmmss(CCsTimes[1].toString())}\n${CCElements[i].value} \n`);
    };
    
    let object = {};
    object["caption_file"] = result.join("");
    const requestOptions = {
      method: 'PUT',
      headers: WistiaHeaders,
      body: JSON.stringify(object)
  };
  const response = await fetch('https://api.wistia.com/v1/medias/'+state.video+'/captions/eng.json', requestOptions);
  const data = await response.json();
  console.log(data)
 
  }
  const fetchPageData = async () => {
    const url = `https://api.wistia.com/v1/medias.json?page=${state.Page}`;
    const result = await fetch(url, options).then((data) => data.json());
    const jsonDataIntrAndOutro = await fetchJsonData();
    result.jsonData = jsonDataIntrAndOutro;
    dispatch({ type: "FETCH_VIDEO", payload: result });
    const url2 = `https://api.wistia.com/v1/medias/${result[0].hashed_id}/captions.json`;
    const subtitles = await fetch(url2, options).then((data) => data.json());
    dispatch({ type: "FETCH_SUBTITLE", payload: subtitles[0].text });
  };
  const changeVideo = async (videoID) => {
    const videoIDNAME = state.videoData.filter(
      (data) => data.name === videoID && data.hashed_id
    );
    dispatch({
      type: "CHANGE_VIDEO",
      payload: { videoID: videoIDNAME[0].hashed_id, name: videoIDNAME[0].name },
    });
    const url2 = `https://api.wistia.com/v1/medias/${videoIDNAME[0].hashed_id}/captions.json`;

    const subtitles = await fetch(url2, options).then((data) => data.json());
    dispatch({ type: "FETCH_SUBTITLE", payload: subtitles[0].text });
  };

  const setBtnState = (e) => {
    if (e.target.value === "Subtitles") {
      if (e.target.className === "btn") {
        e.target.className = "btn on";
        dispatch({ type: "CHANGE_SUBTITLE_STATE", payload: true });
      } else {
        dispatch({ type: "CHANGE_SUBTITLE_STATE", payload: false });
        e.target.className = "btn";
      }
    } else if (e.target.value === "Interactivities") {
      if (e.target.className === "btn") {
        e.target.className = "btn on";
        // dispatch({ type: "CHANGE_SUBTITLE_STATE", payload: true });
      } else {
        // dispatch({ type: "CHANGE_SUBTITLE_STATE", payload: false });
        e.target.className = "btn";
      }
    }
    else if(e.target.value === "Save"){
      alert(100)
      updateData()
    }
  };
  const data = {
    preload: true,
    muted: true,
    playsinline: true,
    autoPlay: true,
    silentAutoPlay: true,
    endVideoBehavior: "loop",
  };
  const updateIframeData = () => {
    setTimeout(() => {
      const functionList = iframeData(state.video);
      console.log(functionList);
      const result = updateIframe(
        functionList,
        state.courseCode,
        state.video,
        state.jsonDataIntrAndOutro
      );
      document.getElementById("textDisplayCode").innerHTML = result;
    }, 2000);
  };
  const testing = (time) => {
    console.log(time);
    window._wq = window._wq || [];
    window._wq.push({
      id: state.video,
      onFind: function (video) {
        video.addPlugin("myPluginName", {
          src: "https://wiggly-tree-nectarine.glitch.me/my-plugin.js",
        });
      },
      onHasData: () => {
        console.log("onHasData");
      },
      onReady: function (video) {
        video.time(time);
        console.log(video.duration());
      },
      // onchange: myOnReady,
      // onplay: myOnReady
    });
  };

  const renderVideo = () => {
    // console.log(state.videoName);

    return (
      <div>
        <h2 className="VideoName">{state.videoName}</h2>

        <div>
          <button
            value={"Transcript"}
            onClick={(e) => setBtnState(e)}
            className="btn"
          >
            Transcript
          </button>
          <button
            value={"Interactivities"}
            onClick={(e) => setBtnState(e)}
            className="btn"
          >
            Interactivities
          </button>
          <button
            value={"Subtitles"}
            onClick={(e) => setBtnState(e)}
            className="btn"
          >
            Subtitles
          </button>
          <button
            value={"Chapters"}
            onClick={(e) => setBtnState(e)}
            className="btn"
          >
            Chapters
          </button>
        </div>
        {/* <h1>{state.subtitleState.toString()}</h1> */}
        <div
          className="wistia_responsive_padding"
          style={{ padding: "56.25% 0 0 0", position: "relative" }}
        >
          <div
            className="wistia_responsive_wrapper"
            style={{
              height: "100%",
              left: "0",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          >
            <WistiaEmbed id={state.video} play={true} options={data} />
          </div>
        </div>
      </div>
    );
  };
  const searchInputVideoID = async () => {
    const url = `https://api.wistia.com/v1/medias/${state.videoIDInput}.json`;
    const result = await fetch(url, options).then((data) => data.json());
    if (result.error) {
      return alert(result.error);
    }
    dispatch({
      type: "CHANGE_VIDEO",
      payload: { videoID: result.hashed_id, name: result.name },
    });
    const url2 = `https://api.wistia.com/v1/medias/${state.videoIDInput}/captions.json`;

    const subtitles = await fetch(url2, options).then((data) => data.json());
    dispatch({ type: "FETCH_SUBTITLE", payload: subtitles[0].text });
    dispatch({ type: "FETCH_CUSTOM_VIDEO_INPUT", payload: result });
    console.log(result);
    updateIframeData();
  };

  const setInOrOut = (type, index) => {
    for (let i = 1; i < 5; i++) {
      let controlsArr = document.querySelectorAll(`.controls${i}`);
      controlsArr[index].style.visibility = type;
    }
  };
  function newIFunction(element, funcArgs, funcName) {
    window._wq = window._wq || [];
    window._wq.push({
      id: "{{Wistia_URL}}",
      onReady: function (video) {
        var nextSub = false;
        var id = video.time() + "/" + (video.time() + 5);
        if (funcArgs) {
          id = funcArgs[0] + "/" + funcArgs[1];
        }
        // var functionData = element.options[element.selectedIndex].innerHTML
        var functionName = element.options[element.selectedIndex].innerHTML;
        if (functionName == "Interactivity" || funcName) {
          functionName = funcName;
          document.getElementById("interactiveSelect").value = funcName;
        }
        console.log(funcName);
        if (element.value === "Add_Quiz") {
          // console.log(funcName);
          functionName = "Add_Quiz";
        }
        if (element.value === "Video_Interactivity_Timestamp") {
          functionName = "Video_Interactivity_Timestamp";
          // AddOptionVideoInteractivityQuiz()
          // setVideoTime(video.time());
        }
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
        var IFcount = document.getElementById("IFcount");
        IFcount.innerHTML = parseInt(IFcount.innerHTML) + 1;
        var functionDiv = newIFunc.getElementsByClassName("function")[0];
        functionDiv.appendChild(
          document
            .getElementsByClassName(
              "Ifunction_" + functionName + "_variables"
            )[0]
            .cloneNode(true)
        );

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
        document.getElementById("defaultOption").selected = true;
        var functionToggle = document.getElementById("functionToggle");
        if (functionToggle.className == "off") {
          newIFunc.style.display = "none";
        }
        if (newIFunc.getElementsByTagName("input").len > 0) {
          newIFunc.getElementsByTagName("input")[0].focus();
        }
      },
    });
  }
  const setInOrOutTime = (data) => {
    // const time = data.split("\n")[0];
    // const parts = time.split(":");
    // let seconds =
    //   parseInt(parts[0]) * 86400 +
    //   parseInt(parts[1]) * 3600 +
    //   parseInt(parts[2]) * 60;
    // // parseInt(parts[3]);
    // seconds = seconds / 60;
    
    testing(data[0]);
  };
  const formattingSubtitles = (data) => {
    let dataArr = data.split("\n");
    const d1 = dataArr.shift();
    const d2 = dataArr.pop();
    const d3 = dataArr.pop();
    return dataArr.join(" ");
  };
  return (
    <div style={styles} className="Interactivator">
      {state.videoData.length > 0 ? (
        <div className="videoDiv">
          {renderVideo()}
          <InteractivativeButtons
            state={state}
            changeVideo={changeVideo}
            setBtnState={setBtnState}
            fetchPageData={fetchPageData}
            newIFunction={newIFunction}
            updateData={updateData}
          />
          <input
            type={"text"}
            onChange={(e) =>
              dispatch({ type: "CUSTOM_VIDEO_INPUT", payload: e.target.value })
            }
            placeholder={"course ID"}
            value={state.videoIDInput}
            className="videoInput"
          />
          <button onClick={() => searchInputVideoID()}>Search</button>
          <details>
            <summary>Embed Code</summary>
            <div id="textDisplayCode">Hello</div>
            <div
              id="iFrame"
              // contentEditable="true"
              // onClick="copyTextToClipBoard()"
              // onInput="reverseUpdate()"
            ></div>
          </details>
          {updateIframeData()}
        </div>
      ) : (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
      <div className="Interactives">
        { state.subtitle.length > 0 && state.subtitleState === true && state.subtitle.map((data, i) => {
          return (
      <div
        class="container"
        onMouseOver={() => setInOrOut("visible", i)}
        onMouseOut={() => setInOrOut("hidden", i)}
        style={{ display: "flex;" }}
      >
        <div class="controls1">
          <button
            title="move in point"
            tabindex="-1"
            class="subIn"
            type="button"
            // onclick="setInOrOut(this,false)"
          >
            (
          </button>
          <button
            title="move out point"
            tabindex="-1"
            class="subOut"
            type="button"
            // onclick="setInOrOut(this,true)"
          >
            )
          </button>
        </div>
        <textarea
          // onblur="resetButton(this)"
          // onselect="symbolSwitch(this)"
          // onmouseup="symbolSwitch(this)"
          class="TextAreaSubtitles"
          // onkeydown="autoScrollOff()"
          // onclick="autoScrollOff()"
          onChange={(e) => dispatch({type: "UPDATING_CAPTIONS", payload: {index: i ,newCaption:e.target.value, id: e.target.id}})}
          // id={data.split("\n")[data.split("\n").length - 1] + "/" + data.split("\n")[0]}
          id={`${data[0]}/${data[1]}`}
          name={`${data[0]}/${data[1]}`}
        >
          {data[2]}
        </textarea>
        <div class="controls2">
          <button
            tabindex="-1"
            class="small"
            type="button"
            // onclick="go(this.parentNode.parentNode.getElementsByTagName('textarea')[0])"
            title="Go to this point in the video"
            onClick={() => setInOrOutTime(data)}
          >
            ←
          </button>
          <button
            tabindex="-1"
            id="toggle_newLine42.8/47.009"
            class="small"
            type="button"
            // onclick="check('newLine42.8/47.009')"
            title="New paragraph"
          >
            ↵
          </button>
          {/* <input
            style={{ display: "none;" }}
            tabindex="-1"
            id="newLine42.8/47.009"
            name="newLine42.8/47.009"
            type="checkbox"
          /> */}
        </div>
        <div class="controls3">
          <button
            tabindex="-1"
            class="small"
            type="button"
            // onclick="makeSpeakerSelect(this)"
            title="Mark speaker"
          >
            ⁚
          </button>
          <button
            tabindex="-1"
            class="small"
            type="button"
            // onclick="makeNotes(this)"
            title="Make notes"
          >
            ✎
          </button>
        </div>
        <div class="controls4">
          <button
            tabindex="-1"
            class="small"
            type="button"
            // onclick="removeContainer(this.parentNode.parentNode)"
            title="Delete"
          >
            x
          </button>
        </div>
      </div>
    );
        })}
      </div>
    </div>
  );
}

export default App;
