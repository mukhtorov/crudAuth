import styled, { css } from "styled-components";
import { ReactComponent as Like } from "../../assets/icon/like.svg";
import { ReactComponent as Comment } from "../../assets/icon/comment.svg";
import { ReactComponent as Reply } from "../../assets/icon/reply.svg";
const center = css`
  display: flex;
  align-items: center;
`;
export const Container = styled.div`
display: flex;
flex-direction: column;

height: 100%;
width: 100%;
background-color:${({ theme }) => theme.bg};
border-radius: 30px;

`
export const Image = styled.img`
width: 300px;
max-height: 522px;
`

export const Btn = styled.button`
margin: 20px 0px;
cursor: pointer;
height: 38px;
width: 64px;
border-radius: 20px;


`
export const Wrap = styled.div`
${center}
justify-content: center;
flex-direction: column;
`
export const ReviewName = styled.div`
margin: 30px;
${center}
justify-content: center;

`

export const Recommend = styled.div`
display: flex;
align-items: center;
justify-content: space-around;

`
export const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

`
Icon.Like = styled(Like)`
width: 32px;
fill:${({ theme }) => theme.text};


`
Icon.Comment = styled(Comment)`
width: 32px;
fill:${({ theme }) => theme.text};
`
export const Info = styled.div`
${center}
justify-content: center;

margin: 20px 100px;
`
export const AllComments = styled.div`



margin: 20px 100px;
`
export const Wrapper = styled.div`
display:flex;
margin: 20px 100px;

`
Wrapper.Img = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
Wrapper.Comment = styled.div`
`
export const Username = styled.div`
margin: 10px;
`
Wrapper.Text = styled.div`
margin: 10px;
`
Wrapper.Reply = styled.div`
${center}

`
Icon.Reply = styled(Reply)`
fill:${({ theme }) => theme.text};
`
Wrapper.Inp = styled.input`
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
`
export const Form = styled.form`
  ${center}

  height: 42px;

 width: 525px;
`;