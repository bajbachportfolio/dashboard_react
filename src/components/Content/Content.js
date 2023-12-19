import React from "react";
import { user } from "../projectData";
import ContentBlock from "./ContentBlock";

const Content = () => {
  return (
    <div className="main_page__content">
      <div className="main_page__content_in">
        <h1 className="main_page__content_title">Hello {user.name}</h1>
        <ContentBlock />
      </div>
    </div>
  );
};

export default Content;
