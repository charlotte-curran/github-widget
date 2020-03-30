import axios from "axios";

export const getQuote = async () => {
  const endpoint = "/zen";
  try {
    const res = await axios.get(endpoint);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const getFaves = async () => {
  const endpoint = "/favorites";
  try {
    const res = await axios.get(endpoint);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const postFave = async id => {
  const endpoint = "/favorites";
  try {
    const res = await axios.post(endpoint, { favorite: id });
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const removeFave = async id => {
  const endpoint = "/favorites";
  try {
    const res = await axios.delete(endpoint, { favorite: id });
    return res;
  } catch (error) {}
};
export const getSearch = async (query, pageEndpoint) => {
  const endpoint = "/search";
  const body = pageEndpoint
    ? { query: query, endpoint: pageEndpoint }
    : { query: query };
  try {
    const res = await axios.post(endpoint, body);
    return res;
  } catch (error) {
    console.error(error);
  }
};
