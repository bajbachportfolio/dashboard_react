import React, { useState } from "react";
import ContentBlockTop from "./ContentBlockTop";
import ContentTable from "./ContentTable";
import ContentBlockBottom from "./ContentBlockBottom";

const ContentBlock = () => {
  const [value, setValue] = useState("");

  return (
    <div className="user_block">
      <ContentBlockTop value={value} setValue={setValue} />
      <ContentTable value={value} />
      <ContentBlockBottom />
    </div>
  );
};
export default ContentBlock;
