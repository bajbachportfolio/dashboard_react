const Sidebar = () => {
  return (
    <div className="main_page__sidebar">
      <div className="main_page__sidebar_in">
        <div className="main_page__sidebar_logo_wrap">
          <a
            className="main_page__sidebar_logo"
            href="#"
            arai-label="logo link"
          >
            <img
              className="main_page__sidebar_logo_img"
              src="images/logo.4e29ab76.svg"
              alt="logo"
            />
          </a>
          <div className="main_page__sidebar_logo_version">v.01</div>
        </div>
        <ul className="sidebar_menu">
          <li className="sidebar_menu__item">
            <a className="sidebar_menu__link" href="#" aria-label="menu link">
              <div className="sidebar_menu__link_icon_w">
                <span className="icon icon--size_mod">
                  <svg width={24} height={24}>
                    <path
                      fill="currentColor"
                      d="M15 1.25H9C3.57 1.25 1.25 3.57 1.25 9v6c0 5.43 2.32 7.75 7.75 7.75h6c5.43 0 7.75-2.32 7.75-7.75V9c0-5.43-2.32-7.75-7.75-7.75ZM21.25 15c0 4.61-1.64 6.25-6.25 6.25H9c-4.61 0-6.25-1.64-6.25-6.25V9c0-4.61 1.64-6.25 6.25-6.25h6c4.61 0 6.25 1.64 6.25 6.25Z"
                    />
                    <path
                      fill="currentColor"
                      d="M9.86 7.2a4.9 4.9 0 0 0-1.33 4.48L6.24 14a1.87 1.87 0 0 0-.47 1.44l.16 1.21a1.75 1.75 0 0 0 1.46 1.45l1.19.16h.22a1.79 1.79 0 0 0 1.24-.5l2.29-2.28a4.86 4.86 0 0 0 4.48-1.33 4.89 4.89 0 0 0 1.44-3.48 4.83 4.83 0 0 0-1.44-3.47 4.93 4.93 0 0 0-6.95 0Zm5.89 5.88a3.36 3.36 0 0 1-3.42.84.76.76 0 0 0-.76.19l-1.11 1.11-.33-.33a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.32.33-.39.41a.39.39 0 0 1-.19.06l-1.21-.16a.33.33 0 0 1-.17-.18l-.16-1.2a.47.47 0 0 1 .04-.21l2.58-2.58a.75.75 0 0 0 .19-.75 3.41 3.41 0 1 1 5.67 1.39Z"
                    />
                    <path
                      fill="currentColor"
                      d="M13.4 9.7a1 1 0 1 0 1 1 1 1 0 0 0-1.01-1Z"
                    />
                  </svg>
                </span>
              </div>
              <span className="sidebar_menu__link_text">Dashboard</span>
              <div className="sidebar_menu__link_chevron_w">
                <span className="icon icon--size_mod">
                  <svg width={6} height={10}>
                    <title>Vector</title>
                    <path
                      fill="currentColor"
                      d="M1 10a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L3.59 5 .29 1.71A1 1 0 0 1 1.71.29l4 4a1 1 0 0 1 0 1.42l-4 4A1 1 0 0 1 1 10Z"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </li>
          <li className="sidebar_menu__item">
            <a className="sidebar_menu__link" href="#" aria-label="menu link">
              <div className="sidebar_menu__link_icon_w">
                <span className="icon icon--size_mod">
                  <svg width={24} height={24}>
                    <title>3d-square 1</title>
                    <path
                      fill="currentColor"
                      d="M15 1.25H9C3.57 1.25 1.25 3.57 1.25 9v6c0 5.43 2.32 7.75 7.75 7.75h6c5.43 0 7.75-2.32 7.75-7.75V9c0-5.43-2.32-7.75-7.75-7.75ZM21.25 15c0 4.61-1.64 6.25-6.25 6.25H9c-4.61 0-6.25-1.64-6.25-6.25V9c0-4.61 1.64-6.25 6.25-6.25h6c4.61 0 6.25 1.64 6.25 6.25Z"
                    />
                    <path
                      fill="currentColor"
                      d="m16.81 7.4-3.2-1.78a3.58 3.58 0 0 0-3.22 0L7.19 7.4a3.64 3.64 0 0 0-1.7 2.9v3.39a3.58 3.58 0 0 0 1.7 2.9l3.2 1.78a3.42 3.42 0 0 0 1.61.38 3.3 3.3 0 0 0 1.61-.38l3.2-1.78a3.64 3.64 0 0 0 1.7-2.9V10.3a3.58 3.58 0 0 0-1.7-2.9Zm-5.69-.46a1.84 1.84 0 0 1 .88-.19 1.84 1.84 0 0 1 .88.19l3.2 1.78a1.46 1.46 0 0 1 .29.23L12 11.48 7.63 9a1.54 1.54 0 0 1 .29-.23Zm-3.2 8.33A2.07 2.07 0 0 1 7 13.69v-3.38l4.26 2.46v4.33l-.13-.05ZM17 13.69a2.09 2.09 0 0 1-.93 1.58l-3.2 1.78-.13.05v-4.34L17 10.3Z"
                    />
                  </svg>
                </span>
              </div>
              <span className="sidebar_menu__link_text">Product</span>
              <div className="sidebar_menu__link_chevron_w">
                <span className="icon icon--size_mod">
                  <svg width={6} height={10}>
                    <title>Vector</title>
                    <path
                      fill="currentColor"
                      d="M1 10a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L3.59 5 .29 1.71A1 1 0 0 1 1.71.29l4 4a1 1 0 0 1 0 1.42l-4 4A1 1 0 0 1 1 10Z"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </li>
          <li className="sidebar_menu__item">
            <a className="sidebar_menu__link" href="#" aria-label="menu link">
              <div className="sidebar_menu__link_icon_w">
                <span className="icon icon--size_mod">
                  <svg width={24} height={24}>
                    <title>user</title>
                    <path
                      fill="currentColor"
                      d="M15 1.25H9C3.57 1.25 1.25 3.57 1.25 9v6c0 4.16 1.4 6.49 4.41 7.34a11.64 11.64 0 0 0 3.34.41h6a11.59 11.59 0 0 0 3.34-.41c3-.86 4.39-3.19 4.39-7.34V9c.02-5.43-2.3-7.75-7.73-7.75Zm-6 20a11.63 11.63 0 0 1-2.26-.19s0-.06 0-.09a2.85 2.85 0 0 1 .12-.31 3.23 3.23 0 0 1 .2-.42 2.68 2.68 0 0 1 .2-.24l.29-.39.23-.24a3.09 3.09 0 0 1 .39-.37l.27-.21.45-.28.32-.17c.17-.08.35-.14.52-.21s.27-.13.35-.13a5.44 5.44 0 0 1 .61-.15c.11 0 .21-.05.32-.06a6.37 6.37 0 0 1 1-.08 6.4 6.4 0 0 1 1 .08 2.84 2.84 0 0 1 .31.06 6.42 6.42 0 0 1 .63.15c.11 0 .22.08.33.12a4.87 4.87 0 0 1 .53.21 3.07 3.07 0 0 1 .31.17 5.11 5.11 0 0 1 .46.28l.27.2a4.4 4.4 0 0 1 .39.35 2.39 2.39 0 0 1 .22.23 3.9 3.9 0 0 1 .31.4c.06.09.12.17.17.26a3.68 3.68 0 0 1 .21.45 2.33 2.33 0 0 1 .11.28s0 .07 0 .1a11.63 11.63 0 0 1-2.26.19ZM21.25 15c0 3.06-.77 4.79-2.54 5.61a6.13 6.13 0 0 0-.33-.8.54.54 0 0 0-.07-.13 4.85 4.85 0 0 0-.47-.74l-.08-.1a5.77 5.77 0 0 0-.63-.68 5.67 5.67 0 0 0-.77-.6h-.05a6.53 6.53 0 0 0-.86-.48l-.12-.06a6.7 6.7 0 0 0-.92-.34h-.15a9.78 9.78 0 0 0-1-.22h-.16a8 8 0 0 0-1.1-.08 7.88 7.88 0 0 0-1.09.08h-.14a7.59 7.59 0 0 0-1 .21h-.19a8.44 8.44 0 0 0-.88.34L8.56 17a8.2 8.2 0 0 0-.82.46l-.09.07a7.72 7.72 0 0 0-.72.56l-.06.05a6.56 6.56 0 0 0-.62.67l-.08.1a6.66 6.66 0 0 0-.48.74l-.06.12a6.38 6.38 0 0 0-.33.82c-1.78-.8-2.55-2.53-2.55-5.59V9c0-4.61 1.64-6.25 6.25-6.25h6c4.61 0 6.25 1.64 6.25 6.25Z"
                    />
                    <path
                      fill="currentColor"
                      d="M12.06 6.26H12a4.33 4.33 0 0 0-4.33 4.33.77.77 0 0 0 0 .15 3.38 3.38 0 0 0 .07.72 4.32 4.32 0 0 0 1.75 2.64l.09.08a5 5 0 0 0 .46.25 2.49 2.49 0 0 0 .28.15 2.46 2.46 0 0 0 .29.09 4.28 4.28 0 0 0 1.39.25 4.15 4.15 0 0 0 .79-.08h.08a3.18 3.18 0 0 0 .33-.1c.16-.05.33-.09.48-.15h.08a4.35 4.35 0 0 0 2.57-4 4.34 4.34 0 0 0-4.27-4.32ZM12 13.42a2.84 2.84 0 0 1-2.83-2.81 2.4 2.4 0 0 1 0-.28 2.81 2.81 0 0 1 2.23-2.49 2.62 2.62 0 0 1 .6-.09 2.83 2.83 0 0 1 2.83 2.83 2.62 2.62 0 0 1-.06.57A2.83 2.83 0 0 1 12 13.42Z"
                    />
                  </svg>
                </span>
              </div>
              <span className="sidebar_menu__link_text">Customers</span>
              <div className="sidebar_menu__link_chevron_w">
                <span className="icon icon--size_mod">
                  <svg width={6} height={10}>
                    <title>Vector</title>
                    <path
                      fill="currentColor"
                      d="M1 10a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L3.59 5 .29 1.71A1 1 0 0 1 1.71.29l4 4a1 1 0 0 1 0 1.42l-4 4A1 1 0 0 1 1 10Z"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </li>
          <li className="sidebar_menu__item">
            <a className="sidebar_menu__link" href="#" aria-label="menu link">
              <div className="sidebar_menu__link_icon_w">
                <span className="icon icon--size_mod">
                  <svg width={24} height={24}>
                    <title>wallet-money 2</title>
                    <path
                      fill="currentColor"
                      d="M7.18 10.25a4.7 4.7 0 0 0-2.29.6l-.12.06-.09.09a3.54 3.54 0 0 0-.54.39 3.62 3.62 0 0 0-1.3 2.75v4.78a4.12 4.12 0 0 0 4.33 3.86 4.11 4.11 0 0 0 4.32-3.86v-4.81a3.66 3.66 0 0 0-1.3-2.77 4.64 4.64 0 0 0-3.01-1.09Zm-2 2.18a2.76 2.76 0 0 1 .39-.28 2.94 2.94 0 0 1 .44-.2 3.28 3.28 0 0 1 1.09-.18 3.11 3.11 0 0 1 2.05.74 2.07 2.07 0 0 1 .85 1.6 1.87 1.87 0 0 1-.27 1 3 3 0 0 1-2.56 1.19 3 3 0 0 1-2.56-1.22 2 2 0 0 1-.26-.89v-.08a2.19 2.19 0 0 1 .83-1.67Zm4.82 4.5c-.05 1.21-1.23 2.12-2.81 2.12s-2.77-.9-2.82-2.11a4.9 4.9 0 0 0 2.81.86 4.82 4.82 0 0 0 2.82-.87Zm-2.82 4.32a2.93 2.93 0 0 1-2.58-1.38 4.9 4.9 0 0 0 .87.39 5.57 5.57 0 0 0 .73.19h.12a5.71 5.71 0 0 0 .84.07 5.57 5.57 0 0 0 .84-.04h.21a5.09 5.09 0 0 0 .56-.14l.23-.12a3.22 3.22 0 0 0 .5-.22l.17-.08h.08a2.91 2.91 0 0 1-2.57 1.33Z"
                    />
                    <path
                      fill="currentColor"
                      d="M21.75 9.39V8.5a5.39 5.39 0 0 0-4.88-5.69 5.69 5.69 0 0 0-.87-.06H7a5.06 5.06 0 0 0-.9.07A5.39 5.39 0 0 0 1.25 8.5v2a.75.75 0 0 0 1.5 0v-2A3.93 3.93 0 0 1 6.3 4.3a5.36 5.36 0 0 1 .7 0h9a5 5 0 0 1 .66 0 3.93 3.93 0 0 1 3.59 4.2v.7h-1.33A2.69 2.69 0 0 0 17 10a2.75 2.75 0 0 0-.65 1 2.71 2.71 0 0 0-.16 1.2 2.86 2.86 0 0 0 2.36 2.51 3.31 3.31 0 0 0 .55.05h1.21v.7A4 4 0 0 1 16 19.75h-2.5a.75.75 0 0 0 0 1.5H16a5.44 5.44 0 0 0 5.75-5.75v-.88a1.77 1.77 0 0 0 1-1.59V11a1.74 1.74 0 0 0-1-1.61ZM19 13.3a1.5 1.5 0 0 1-.52-.09 1.33 1.33 0 0 1-.89-1.1 1.27 1.27 0 0 1 .39-1 1.23 1.23 0 0 1 .9-.37H21a.28.28 0 0 1 .27.27V13a.27.27 0 0 1-.25.27Z"
                    />
                  </svg>
                </span>
              </div>
              <span className="sidebar_menu__link_text">Income</span>
              <div className="sidebar_menu__link_chevron_w">
                <span className="icon icon--size_mod">
                  <svg width={6} height={10}>
                    <title>Vector</title>
                    <path
                      fill="currentColor"
                      d="M1 10a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L3.59 5 .29 1.71A1 1 0 0 1 1.71.29l4 4a1 1 0 0 1 0 1.42l-4 4A1 1 0 0 1 1 10Z"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </li>
          <li className="sidebar_menu__item">
            <a className="sidebar_menu__link" href="#" aria-label="menu link">
              <div className="sidebar_menu__link_icon_w">
                <span className="icon icon--size_mod">
                  <svg width={24} height={24}>
                    <title>discount-shape 1</title>
                    <path
                      fill="currentColor"
                      d="m22.06 10.34-1.52-1.52a1.14 1.14 0 0 1-.25-.6V6.06a2.35 2.35 0 0 0-2.35-2.35h-2.16a1.14 1.14 0 0 1-.6-.25l-1.52-1.52a2.42 2.42 0 0 0-3.32 0L8.82 3.46a1.14 1.14 0 0 1-.6.25H6.06a2.35 2.35 0 0 0-2.35 2.35v2.16a1.14 1.14 0 0 1-.25.6l-1.52 1.52A2.3 2.3 0 0 0 1.25 12a2.34 2.34 0 0 0 .69 1.66l1.52 1.52a1.14 1.14 0 0 1 .25.6v2.16a2.35 2.35 0 0 0 2.35 2.35h2.16a1.14 1.14 0 0 1 .6.25l1.52 1.52a2.34 2.34 0 0 0 3.32 0l1.52-1.52a1.14 1.14 0 0 1 .6-.25h2.16a2.35 2.35 0 0 0 2.35-2.35v-2.16a1.14 1.14 0 0 1 .25-.6l1.52-1.52a2.3 2.3 0 0 0 .69-1.66 2.34 2.34 0 0 0-.69-1.66ZM21 12.6l-1.52 1.52a2.58 2.58 0 0 0-.69 1.66v2.16a.85.85 0 0 1-.85.85h-2.16a2.58 2.58 0 0 0-1.66.69L12.6 21a.87.87 0 0 1-1.2 0l-1.52-1.52a2.58 2.58 0 0 0-1.66-.69H6.06a.85.85 0 0 1-.85-.85v-2.16a2.58 2.58 0 0 0-.69-1.66L3 12.6a.85.85 0 0 1 0-1.2l1.52-1.52a2.58 2.58 0 0 0 .69-1.66V6.06a.85.85 0 0 1 .85-.85h2.16a2.58 2.58 0 0 0 1.66-.69L11.4 3a.87.87 0 0 1 1.2 0l1.52 1.52a2.58 2.58 0 0 0 1.66.69h2.16a.85.85 0 0 1 .85.85v2.16a2.58 2.58 0 0 0 .69 1.66L21 11.4a.85.85 0 0 1 0 1.2Z"
                    />
                    <path
                      fill="currentColor"
                      d="M15 14a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM9 10a1 1 0 1 0-1-1 1 1 0 0 0 1 1ZM15.53 8.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06Z"
                    />
                  </svg>
                </span>
              </div>
              <span className="sidebar_menu__link_text">Promote</span>
              <div className="sidebar_menu__link_chevron_w">
                <span className="icon icon--size_mod">
                  <svg width={6} height={10}>
                    <title>Vector</title>
                    <path
                      fill="currentColor"
                      d="M1 10a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L3.59 5 .29 1.71A1 1 0 0 1 1.71.29l4 4a1 1 0 0 1 0 1.42l-4 4A1 1 0 0 1 1 10Z"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </li>
          <li className="sidebar_menu__item">
            <a className="sidebar_menu__link" href="#" aria-label="menu link">
              <div className="sidebar_menu__link_icon_w">
                <span className="icon icon--size_mod">
                  <svg width={24} height={24}>
                    <title>message-question 1</title>
                    <path
                      fill="currentColor"
                      d="M8 22.32a1.76 1.76 0 0 1-.83-.21 1.74 1.74 0 0 1-.92-1.54v-1.42a5.39 5.39 0 0 1-5-5.71v-6A5.44 5.44 0 0 1 7 1.69h10a5.44 5.44 0 0 1 5.75 5.75v6A5.44 5.44 0 0 1 17 19.19h-3.77L9 22a1.78 1.78 0 0 1-1 .32ZM7 3.18a4 4 0 0 0-4.25 4.25v6A4 4 0 0 0 7 17.68a.76.76 0 0 1 .75.75v2.13a.25.25 0 0 0 .39.21l4.45-3a.77.77 0 0 1 .42-.13h4a4 4 0 0 0 4.25-4.25v-6A4 4 0 0 0 17 3.18Z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 12.11a.76.76 0 0 1-.75-.75v-.21a2.33 2.33 0 0 1 1.17-2c.37-.25.49-.42.49-.68a.91.91 0 0 0-1.82 0 .75.75 0 0 1-1.5 0 2.41 2.41 0 0 1 4.82 0 2.29 2.29 0 0 1-1.15 1.92c-.39.26-.51.43-.51.71v.21a.75.75 0 0 1-.75.8ZM12 14.6a.75.75 0 1 1 .75-.75.75.75 0 0 1-.75.75Z"
                    />
                  </svg>
                </span>
              </div>
              <span className="sidebar_menu__link_text">Help</span>
              <div className="sidebar_menu__link_chevron_w">
                <span className="icon icon--size_mod">
                  <svg width={6} height={10}>
                    <title>Vector</title>
                    <path
                      fill="currentColor"
                      d="M1 10a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L3.59 5 .29 1.71A1 1 0 0 1 1.71.29l4 4a1 1 0 0 1 0 1.42l-4 4A1 1 0 0 1 1 10Z"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </li>
        </ul>
        <div className="main_page__sidebar_user">
          <picture className="main_page__sidebar_user_img_wrap">
            <source srcSet="images/user.8ace3a57.webp" type="image/webp" />
            <source srcSet="images/user.9f1d467a.png" type="image/png" />
            <img
              className="main_page__sidebar_user_img"
              src="images/user.9f1d467a.png"
              alt="some image"
              loading="eager"
            />
          </picture>
          <div className="main_page__sidebar_user_info">
            <h4 className="main_page__sidebar_user_title">Evano</h4>
            <div className="main_page__sidebar_user_descr">Project Manager</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
