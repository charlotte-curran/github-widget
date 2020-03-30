import styled from "styled-components";

export const PageButton = styled.button`
  background: ${({ isActive }) => (isActive ? "white" : "lightgray")};
  cursor: ${({ isActive }) => (isActive ? "pointer" : "auto")};
`;

export const PageButtonWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;
