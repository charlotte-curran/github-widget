import styled from "styled-components";

export const SearchBar = styled.input`
  min-width: 200px;
  margin-top: 10px;
`;

export const SearchButton = styled.input`
  color: white;
  font-family: monospace;
  background: #424242;
  height: 23px;
`;

export const SearchForm = styled.form``;

export const PageButton = styled.button`
  background: ${({ isActive }) => (isActive ? "white" : "lightgray")};
  cursor: ${({ isActive }) => (isActive ? "pointer" : "auto")};
`;

export const PageButtonWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;
