import styled from "styled-components";
import { ReactComponent as Google } from "../../../assets/icon/google.svg";
import { ReactComponent as Github } from "../../../assets/icon/github.svg";
export const Icon = styled.div`

`
Icon.Google = styled(Google)`
width: 32px;
height: 32px;
margin: 15px;
cursor: pointer;


`
Icon.Github = styled(Github)`
width: 32px;
height: 32px;
cursor: pointer;

margin: 15px;

`