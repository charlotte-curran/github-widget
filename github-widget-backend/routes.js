const [getFaves, testFunc] = require("./db");
const [getZen, getRepo, searchRepo] = require("./github-api");

const appRouter = app => {
  app.get("/", (req, res) => {
    const test = testFunc();
    console.log(test);
    res.status(200).send(test);
  });

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

  app.get("/search", async (req, res) => {
    const results = await searchRepo(
      "linux",
      "https://api.github.com/search/repositories?q=linux&sort=stars&order=desc&per_page=10&page=2"
    );
    res.status(200).send(results);
  });

  //   app.post("/payments", (req, res) => {
  //     db.get("payments")
  //       .push(req.body.payment)
  //       .write();
  //     res.status(200);
  //   });
};

module.exports = appRouter;
