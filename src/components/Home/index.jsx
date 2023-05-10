import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { ReviewCard } from "./Review Card";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5003/books")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      <Container>
        {data.map((value) => {
          return <ReviewCard data={value} />;
        })}
      </Container>
    </>
  );
};
export default Home;
