import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListWrapper = styled.div`
  width: 100%;
`;

export const Fave = styled.div`
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  width: 100%;
  :hover {
    background: lightgray;
  }
`;

export const User = styled.a``;

export const Repo = styled.a`
  text-align: left;
`;

export const FaveToggle = styled.button`
  height: 10px;
  width: 10px;
  background: ${({ isFave }) => (isFave ? "yellow" : "lightgray")};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  min-height: 30px;
  width: 100%;
`;

export const Header = styled.div`
  width: 50%;
  font-size: 16px;
`;

export const TabToggle = styled.button`
  background: #424242;
  color: #fff;
  width: 50%;
  font-family: monospace;
  font-size: 16px;
`;
