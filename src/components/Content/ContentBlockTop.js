import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

const ContentBlockTop = ({ value, setValue }) => {
  return (
    <div className="user_block__top">
      <div className="user_block__title_wrap">
        <h2 className="user_block__title">All Customers</h2>
        <div className="user_block__subtitle">Active Members</div>
      </div>
      <SearchBar setValue={(e) => setValue(e.target.value)} value={value} />
    </div>
  );
};

export default ContentBlockTop;
