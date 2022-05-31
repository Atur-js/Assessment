import React, { useState } from "react";
import { useNavigate } from "react-router";

// search button and show result

const SearchButton = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  // get event.target.value
  const getInputValue = (event) => {
    const userValue = event.target.value;
    setText(event.target.value);
    console.log(userValue);
  };

  // when click search button,page navigate to search component
  const clickHandler = () => {
    navigate("/campaigns/search");
  };

