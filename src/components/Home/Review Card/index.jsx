import React from "react";
import {
  Btn,
  Container,
  Content,
  Details,
  Footer,
  Image,
} from "../Review Card/style";

import Noimage from "../../../assets/img/No-Image-Placeholder.svg.png";
import { Rate } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../Home/Review Card/style";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
export const ReviewCard = (props) => {
  const { src: url, name: title, id } = props.data;
  const navigate = useNavigate();
  const [value, setValue] = useState(3);

  return (
    <>
      <Container>
        <Image onClick={() => navigate("/home/reviews")} src={url || Noimage} />
        <Content>
          <div className="reviewName">
            Name : {title || `Harry Potter Book`}
          </div>
          <div className="groupName">Group:Books</div>
          <Details>
            <Details.Item>
              <Icon.Like />
              <div className="info">0 likes</div>
            </Details.Item>
            <Details.Item>
              <Icon.Comment />
              <div className="info">0 Comments</div>
            </Details.Item>
          </Details>
          <Footer>
            <span>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? (
                <span className="ant-rate-text">{desc[value - 1]}</span>
              ) : (
                ""
              )}
            </span>

            <Btn onClick={() => navigate(`/home/${props.data._id}`)}>
              Read full review
            </Btn>
          </Footer>
        </Content>
      </Container>
    </>
  );
};
