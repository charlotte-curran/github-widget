import React from "react";
import {
  Wrapper,
  ListWrapper,
  Fave,
  User,
  Repo,
  FaveToggle,
  HeaderWrapper,
  Header,
  TabToggle
} from "./Faves.styles";

export default props => {
  const { favorites, isFavesTab, setIsFavesTab, removeFromFaves } = props;
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Favorites</Header>

        <TabToggle
          onClick={() => {
            setIsFavesTab(!isFavesTab);
          }}
        >
          Search
        </TabToggle>
      </HeaderWrapper>

      <ListWrapper>
        {favorites
          ? favorites.map((value, i) => {
              return (
                <Fave key={`value${i}`}>
                  <User key={`user${i}`} href={value.owner.url} target="_blank">
                    {value.owner.name}
                  </User>
                  <Repo key={`repo${i}`} href={value.repo.url} target="_blank">
                    {value.repo.name}
                  </Repo>
                  <FaveToggle
                    key={`favetoggle${i}`}
                    onClick={() => removeFromFaves(value.id)}
                    isFave={true}
                  />
                </Fave>
              );
            })
          : null}
      </ListWrapper>
    </Wrapper>
  );
};
