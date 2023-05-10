
import styled, { css } from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icon/icons8-search.svg";
import { ReactComponent as Dark } from "../../assets/icon/icon-dark.svg";
import { ReactComponent as Global } from "../../assets/icon/global.svg";
import { ReactComponent as Personal } from "../../assets/icon/personal.svg";

const center = css`
display: flex;
align-items: center;
`
export const Container = styled.div`
${center}
 background-color: ${({ theme }) => theme.bg};
  height: 72px;
  width: 100%;
  position: fixed;
  border-bottom: ${({ theme }) => theme.text} solid;
`
export const Wrap = styled.div`
  ${center}

  max-width: 1440px;
  width: 100%;

justify-content: space-evenly;

`
Wrap.Images = styled("div")`
${center}
color:  rgb(208,150,150);
cursor: pointer;

`
Wrap.Container = styled.div`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.main_bg};
  color:${({ theme }) => theme.text};
  min-height: 100vh;
`;
Wrap.Outlet = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-top: 100px;
`;
Wrap.Language = styled.div`
 ${center}
  font-size: 18px;
  margin: 5px 15px 15px 0;
  cursor: pointer;



`
Wrap.LangImage = styled.img`
  width: 40px;
  height: 20px;
  margin-right: 15px;


`;
export const Images = styled.div``

Images.Logo1 = styled.img`
width: 7.125em;


`
export const Search = styled.form`
  ${center}

  height: 42px;

 width: 525px;
`;
Search.Input = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: 0.5px solid rgb(202, 202, 202);
  background-color: white;
  display: block;
  font-size: 16px;
  font-weight: 300;
  line-height: 16px;
  white-space: nowrap;
  outline: none;
  width: 100%;

`;
Search.Btn = styled.button`
  border:none;
  background-color: ${({ theme }) => theme.bg};

  cursor: pointer;
  width: 46px;
`;
export const Icon = styled.div``;
Icon.Search = styled(SearchIcon)`
  fill: ${({ theme }) => theme.text};


`
Icon.Dark = styled(Dark)`
fill: ${({ theme }) => theme.text};
cursor: pointer;
background-color: none;


`
Icon.Lang = styled(Global)`
  fill: ${({ theme }) => theme.text};
  cursor: pointer;
`;
Icon.Personal = styled(Personal)`
${center}
width: 42px;
height: 42px;
fill: ${({ theme }) => theme.text};

  cursor: pointer; 
  


`
export const Controllers = styled.div`
  ${center}
margin: 0 20px;

`;
export const ControlController = styled.div`
${center}
`

export const Btn = styled.button`
:hover{

  background-color: rgb(205, 205, 205);

}
width: 106px;
height:46px;

font-size: 14px;
cursor: pointer;
background-color: ${({ theme }) => theme.bg};
border: ${({ theme }) => theme.text} solid;
border-radius: 20px;
color:${({ theme }) => theme.text};


`
Btn.Log = styled(Btn)`
:hover{

background-color: rgb(205, 205, 205);

}
width: 92px;
height:36px;

font-size: 14px;
cursor: pointer;
background-color: ${({ theme }) => theme.bg};
border: ${({ theme }) => theme.text} solid;
border-radius: 20px;
color:${({ theme }) => theme.text};
`