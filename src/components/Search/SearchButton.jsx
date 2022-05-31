import React, { useState } from "react";
import { useNavigate } from "react-router";

// search button and show result

const SearchButton = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
