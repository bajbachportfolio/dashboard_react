import logo from "../../images/logo.svg";

const SidebarLogo = (logoInfo) => {
  return (
    <div className="main_page__sidebar_logo_wrap">
      <a className="main_page__sidebar_logo" href="#s" arai-label="logo link">
        <img className="main_page__sidebar_logo_img" src={logo} alt="logo" />
      </a>
      <div className="main_page__sidebar_logo_version">{logoInfo.version}</div>
    </div>
  );
};
export default SidebarLogo;
