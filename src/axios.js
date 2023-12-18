import axios from "axios";

/** base url to make requests to the movie database */

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default instance;
