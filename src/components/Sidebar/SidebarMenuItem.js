import React from "react";

const SidebarMenuItem = ({ menuItem }) => {
  return (
    <li className="sidebar_menu__item">
      <a
        className={["sidebar_menu__link", menuItem.mod].join(" ")}
        href="#s"
        aria-label="menu link"
      >
        <div className="sidebar_menu__link_icon_w">
          <span className="icon icon--size_mod">{menuItem.icon}</span>
        </div>
        <span className="sidebar_menu__link_text">{menuItem.menuItem}</span>
        <div className="sidebar_menu__link_chevron_w">
          <span className="icon icon--size_mod">
            <svg width={6} height={10}>
              <path
                fill="currentColor"
                d="M1 10a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L3.59 5 .29 1.71A1 1 0 0 1 1.71.29l4 4a1 1 0 0 1 0 1.42l-4 4A1 1 0 0 1 1 10Z"
              />
            </svg>
          </span>
        </div>
      </a>
    </li>
  );
};
export default SidebarMenuItem;
