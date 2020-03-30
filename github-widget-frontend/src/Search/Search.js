import React from "react";
import {
  Wrapper,
  HeaderWrapper,
  Header,
  TabToggle,
  FaveToggle,
  ListWrapper,
  User,
  Repo,
  Fave as ResultLine
} from "../Faves/Faves.styles";
import { SearchBar, SearchForm, SearchButton } from "./Search.styles";
import PageButtons from "../PageButtons";

export default props => {
  const {
    favorites,
    isFavesTab,
    setIsFavesTab,
    handleInputChange,
    submitHandler,
    searchResults,
    pageHandler,
    addToFaves,
    removeFromFaves
  } = props;

  return (
    <Wrapper>
      <HeaderWrapper>
        <TabToggle
          onClick={() => {
            setIsFavesTab(!isFavesTab);
          }}
        >
          Favorites
        </TabToggle>

        <Header
          onClick={() => {
            setIsFavesTab(!isFavesTab);
          }}
        >
          Search
        </Header>
      </HeaderWrapper>

      <SearchForm onSubmit={submitHandler}>
        <SearchBar
          name="search"
          type="text"
          placeholder="Search for a repo!"
          onChange={handleInputChange}
        />
        <SearchButton value="Submit" type="submit" />
      </SearchForm>

      <ListWrapper>
        {searchResults
          ? searchResults.data.map((value, i) => {
              return (
                <ResultLine key={`resultline${i}`}>
                  <User key={`user${i}`} href={value.owner.url} target="_blank">
                    {value.owner.name}
                  </User>
                  <Repo key={`repo${i}`} href={value.repo.url} target="_blank">
                    {value.repo.name}
                  </Repo>
                  <FaveToggle
                    key={`favetoggle${i}`}
                    onClick={() =>
                      favorites.some(obj => obj.id === value.id)
                        ? removeFromFaves(value.id)
                        : addToFaves(value.id)
                    }
                    isFave={favorites.some(obj => obj.id === value.id)}
                  />
                </ResultLine>
              );
            })
          : null}
      </ListWrapper>

      <PageButtons pageHandler={pageHandler} searchResults={searchResults} />
    </Wrapper>
  );
};
