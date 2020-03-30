const axios = require("axios");

const getZen = async () => {
  const endpoint = "https://api.github.com/zen";
  try {
    const res = await axios.get(endpoint);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getRepo = async id => {
  const endpoint = `https://api.github.com/repositories/${id}`;
  try {
    const res = await axios.get(endpoint);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const searchRepo = async (query, endpoint) => {
  endpoint =
    endpoint ||
    `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=10`;
  try {
    const res = await axios.get(endpoint);
    const headersLinks = res.headers.link.split(",");
    const links = {
      first: "",
      prev: "",
      next: "",
      last: ""
    };

    headersLinks.forEach(link => {
      const trimmedLink = link.split(">")[0].split("<")[1];
      if (link.endsWith('rel="first"')) {
        links.first = trimmedLink;
      } else if (link.endsWith('rel="prev"')) {
        links.prev = trimmedLink;
      } else if (link.endsWith('rel="next"')) {
        links.next = trimmedLink;
      } else if (link.endsWith('rel="last"')) {
        links.last = trimmedLink;
      }
    });

    const searchResults = [];

    res.data.items.forEach(item => {
      searchResults.push({
        id: item.id,
        repo: { name: item.name, url: item.html_url },
        owner: { name: item.owner.login, url: item.owner.html_url }
      });
    });

    return { data: searchResults, links: links };
  } catch (error) {
    console.error(error);
  }
};

module.exports = [getZen, getRepo, searchRepo];
