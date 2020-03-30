import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme/Theme";
import { GlobalStyle } from "./Theme/GlobalStyle";
import { Wrapper, Header } from "./App.styles";
import { getQuote, getFaves, getSearch, postFave, removeFave } from "./API";
import Faves from "./Faves";
import Search from "./Search";

const App = () => {
  const [zenQuote, setZenQuote] = useState(null);
  const [favorites, setFavorites] = useState(null);
  const [isFavesTab, setIsFavesTab] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [isFavesUpdated, setIsFavesUpdated] = useState(false);

  const handleInputChange = e => {
    setSearchInput(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();
    const res = await getSearch(searchInput);

    if ((res.status = 200)) {
      setSearchResults(res.data);
      setSearchInput("");
    }
  };

  const pageHandler = async endpoint => {
    if (endpoint === "") {
      return;
    } else {
      const res = await getSearch(searchInput, endpoint);

      if ((res.status = 200)) {
        setSearchResults(res.data);
        setSearchInput("");
      }
    }
  };

  const addToFaves = async id => {
    const res = await postFave(id);

    if ((res.status = 200)) {
      setIsFavesUpdated(true);
    }
  };

  const removeFromFaves = async id => {
    const res = await removeFave(id);

    if ((res.status = 200)) {
      setIsFavesUpdated(true);
    }
  };

  useEffect(() => {
    setZenQuote("This is a zen quote");

    setFavorites([
      {
        id: 1,
        owner: { name: "owner", url: "" },
        repo: { name: "repo", url: "" }
      },
      {
        id: 1,
        owner: { name: "owner", url: "" },
        repo: { name: "repo", url: "" }
      }
    ]);
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const [quote, faves] = await Promise.all([getQuote(), getFaves()]);
  //     setZenQuote(quote.data);
  //     setFavorites(faves.data);
  //     setIsFavesUpdated(false);
  //   })();
  // }, [isFavesUpdated]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Wrapper>
        <Header>{zenQuote}</Header>
        {isFavesTab ? (
          <Faves
            favorites={favorites}
            isFavesTab={isFavesTab}
            setIsFavesTab={setIsFavesTab}
            removeFromFaves={removeFromFaves}
          />
        ) : (
          <Search
            favorites={favorites}
            isFavesTab={isFavesTab}
            setIsFavesTab={setIsFavesTab}
            handleInputChange={handleInputChange}
            submitHandler={submitHandler}
            searchResults={searchResults}
            pageHandler={pageHandler}
            addToFaves={addToFaves}
          />
        )}
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
