import React from "react";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";
import SidebarUser from "./SidebarUser";
import { user } from "../projectData";

const Sidebar = () => {
  return (
    <div className="main_page__sidebar">
      <div className="main_page__sidebar_in">
        <SidebarLogo version={"v.01"} />
        <SidebarMenu />
        <SidebarUser userInfo={user} />
      </div>
    </div>
  );
};

export default Sidebar;
