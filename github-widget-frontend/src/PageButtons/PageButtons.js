import React from "react";
import { PageButton, PageButtonWrapper } from "./PageButtons.styles";

export default props => {
  const { pageHandler, searchResults } = props;
  return searchResults ? (
    <PageButtonWrapper>
      <PageButton
        onClick={() => {
          pageHandler(searchResults.links.first);
        }}
        isActive={searchResults.links.first !== "" ? true : false}
      >
        {"<<"}
      </PageButton>

      <PageButton
        onClick={() => {
          pageHandler(searchResults.links.prev);
        }}
        isActive={searchResults.links.prev !== "" ? true : false}
      >
        {"<"}
      </PageButton>

      <PageButton
        onClick={() => {
          pageHandler(searchResults.links.next);
        }}
        isActive={searchResults.links.next !== "" ? true : false}
      >
        {">"}
      </PageButton>

      <PageButton
        onClick={() => {
          pageHandler(searchResults.links.last);
        }}
        isActive={searchResults.links.last !== "" ? true : false}
      >
        {">>"}
      </PageButton>
    </PageButtonWrapper>
  ) : null;
};
