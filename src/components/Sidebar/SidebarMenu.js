import { menuList } from "../projectData";
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenu = () => {
  return (
    <ul className="sidebar_menu">
      {menuList.map((item) => (
        <SidebarMenuItem menuItem={item} />
      ))}
    </ul>
  );
};
export default SidebarMenu;
