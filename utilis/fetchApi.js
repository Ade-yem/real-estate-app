import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";



export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '6f999abc05msha0292f7decce763p1bcbe4jsn9fbbb20e0536',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            },
        });

        return data;   
}

// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://bayut.p.rapidapi.com/properties/list",
//   params: {
//     locationExternalIDs: "5002,6020",
//     purpose: "for-rent",
//     hitsPerPage: "25",
//     page: "0",
//     lang: "en",
//     sort: "city-level-score",
//     rentFrequency: "monthly",
//     categoryExternalID: "4",
//   },
//   headers: {
//     "X-RapidAPI-Key": "6f999abc05msha0292f7decce763p1bcbe4jsn9fbbb20e0536",
//     "X-RapidAPI-Host": "bayut.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//     return response.data;
//   })
//   .catch(function (error) {
//     console.error(error.messag);
//   });

