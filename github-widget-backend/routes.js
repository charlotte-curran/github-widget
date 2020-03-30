const [getFaves, addToFaves, removeFromFaves] = require("./db");
const [getZen, getRepo, searchRepo] = require("./github-api");

const appRouter = app => {
  app.get("/zen", async (req, res) => {
    const zen = await getZen();
    res.status(200).send(zen);
  });

  app.get("/favorites", async (req, res) => {
    const faveIDs = getFaves();

    const faveInfos = faveIDs.map(id => getRepo(id));
    const infos = await Promise.all(faveInfos);

    const favorites = [];
    faveIDs.forEach(id => {
      const fave = infos.find(i => i.id === id);
      if (fave) {
        favorites.push({
          id: { id },
          owner: {
            name: fave.owner.login,
            url: fave.owner.html_url
          },
          repo: { name: fave.name, url: fave.html_url }
        });
      }
    });

    res.status(200).send(favorites);
  });

  app.post("/favorites", (req, res) => {
    if (req.body.favorite) {
      const faves = addToFaves(req.body.favorite);
    } else if (req.body.delete) {
      const faves = removeFromFaves(req.body.delete);
    }
    res.status(200).send(faves);
  });

  app.post("/search", async (req, res) => {
    const results = req.body.endpoint
      ? await searchRepo(req.body.query, req.body.endpoint)
      : await searchRepo(req.body.query);

    res.status(200).send(results);
  });
};

module.exports = appRouter;
