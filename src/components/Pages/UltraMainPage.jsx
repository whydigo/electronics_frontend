import React from "react";
import MainPage from "../Main/MainPage";
import Header from "../Header/Header";
import Menu from "../Header/Menu"
import { useState } from "react";

const UltraMainPage = () => {
  const [text, setText] = useState("");
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Header openModal={openModal} setOpenModal={setOpenModal} text={text} setText={setText} />
      <Menu setOpenModal={setOpenModal} openModal={openModal} />
      <MainPage text={text} />
    </div>
  );
};

export default UltraMainPage;