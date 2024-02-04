const axios = require("axios");

export const fetchFromAPI = async (urlQuery) => {

  const BaseUrl =  "https://youtube-v31.p.rapidapi.com";

  const options = {
    params: {
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.get(`${BaseUrl}/${urlQuery}`, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
