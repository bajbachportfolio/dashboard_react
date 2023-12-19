const SidebarUser = ({ userInfo }) => {
  return (
    <div className="main_page__sidebar_user">
      <picture className="main_page__sidebar_user_img_wrap">
        <source srcSet={userInfo.img.webp} type="image/webp" />
        <source srcSet={userInfo.img.png} type="image/png" />
        <img
          className="main_page__sidebar_user_img"
          src={userInfo.img.png}
          alt="user pic"
          loading="eager"
        />
      </picture>
      <div className="main_page__sidebar_user_info">
        <h4 className="main_page__sidebar_user_title">{userInfo.name}</h4>
        <div className="main_page__sidebar_user_descr">{userInfo.descr}</div>
      </div>
    </div>
  );
};
export default SidebarUser;
