import { menuList } from "../projectData";
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenu = () => {
  return (
    <ul className="sidebar_menu">
      {menuList.map((item, index) => (
        <SidebarMenuItem menuItem={item} key={index} />
      ))}
    </ul>
  );
};
export default SidebarMenu;
