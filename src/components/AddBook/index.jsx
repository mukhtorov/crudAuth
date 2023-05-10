import React, { useRef, useState } from "react";

export const AddBook = () => {
  const [data, setData] = useState("");
  const nameRef = useRef();
  const srcRef = useRef();
  const groupRef = useRef();
  const descRef = useRef();

  const getData = (e) => {
    fetch("http://localhost:5003/books")
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err, "error"));
  };
  const onSubmit = (e) => {
    fetch("http://localhost:5003/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        description: descRef.current.value,
        src: srcRef.current.value,
        group: groupRef.current.value,
        token: localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err, "error"));
  };
  const getOne = () => {
    fetch("http://localhost:5003/books/645bc0145a538f58d09d85e5")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <div>
      <button onClick={getOne}>get one</button>
      <hr />
      <h1>Get Data</h1>
      <button onClick={getData}>get Data</button>
      <hr />
      <h1>Add book</h1>
      <input ref={nameRef} type="text" name="name" placeholder="name" />
      <input ref={groupRef} type="text" name="group" placeholder="group" />
      <input ref={srcRef} type="text" name="src" placeholder="img src" />
      <input
        ref={descRef}
        type="text"
        name="description"
        placeholder="description"
      />
      <button onClick={onSubmit}>add book</button>
    </div>
  );
};
export default AddBook;
