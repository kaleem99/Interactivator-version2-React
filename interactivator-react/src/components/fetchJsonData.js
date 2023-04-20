const options = {
  headers: {
    Authorization:
      "Bearer 185e6a59d70559fdf59fe891201cf3f96d0c6e645b9aa4e7e1f0bf645ad2bed9",
  },
  method: "get",
};

const fetchJsonData = async () => {
  const jsonURL = "https://api.wistia.com/v1/projects/lo2mffrtc6.json";
  const jsonData = fetch(jsonURL, options).then((data) => data.json());
  return jsonData;
};

export default fetchJsonData;
