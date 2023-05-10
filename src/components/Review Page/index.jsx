import { Rate } from "antd";

import React, { useEffect, useState } from "react";
import {
  AllComments,
  Btn,
  Container,
  Form,
  Icon,
  Image,
  Info,
  Recommend,
  ReviewName,
  Username,
  Wrap,
  Wrapper,
} from "./style";
import HarryPotterBook from "../../assets/img/harry-potter-book.png";
import { useNavigate, useParams } from "react-router-dom";
import UserImg from "../../assets/img/01 copy.jpg";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
export const ReviewPage = (props) => {
  const param = useParams();
  const { url } = props;
  console.log(param, "url");
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:5003/books/${param.id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const navigate = useNavigate();
  const [value, setValue] = useState(3);
  return (
    <>
      <Container>
        <Wrap>
          <Image src={data?.book?.url || HarryPotterBook} />
          <span>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? (
              <span className="ant-rate-text">{desc[value - 1]}</span>
            ) : (
              ""
            )}
          </span>
        </Wrap>

        <ReviewName>
          <div className="reviewName">
            Name : {data?.book?.name || "no name"}
          </div>
        </ReviewName>
        <Recommend>
          <Icon>
            <Icon.Like />
            <div>Like</div>
          </Icon>
          <Icon>
            <Icon.Comment />
            <div>Comment</div>
          </Icon>
        </Recommend>

        <Info>{data?.book?.description}</Info>

        <AllComments>Comments</AllComments>
        <Wrapper>
          <Wrapper.Img src={UserImg} />

          <Wrapper.Comment>
            <Username>Miftohiddin</Username>
            <Wrapper.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              sunt mollitia ad ipsa ut dolor aperiam, ea nihil adipisci
              cupiditate explicabo molestiae voluptate ipsum repellat doloribus
              reiciendis ex quisquam quis esse libero iure similique. Nesciunt
              vero officiis pudiandae eveniet error saepe labore quae fuga.
              <Wrapper.Reply>
                <Icon.Reply />
                Reply
              </Wrapper.Reply>
            </Wrapper.Text>
            <Form>
              <Wrapper.Inp type="text" placeholder="Add comment..." />
              <Btn>Add</Btn>
            </Form>
          </Wrapper.Comment>
        </Wrapper>
      </Container>
    </>
  );
};
