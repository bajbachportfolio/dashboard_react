import KeyIcon from "./Icons/KeyIcon";
import CubeIcon from "./Icons/CubeIcon";
import UserIcon from "./Icons/UserIcon";
import WalletIcon from "./Icons/WalletIcon";
import DiscountIcon from "./Icons/DiscountIcon";
import MessageIcon from "./Icons/MessageIcon";

export const user = {
  img: { png: "images/user.9f1d467a.png", webp: "images/user.8ace3a57.webp" },
  name: "Evano",
  descr: "Project Manager",
};

export const menuList = [
  {
    menuItem: "Dashboard",
    icon: <KeyIcon />,
  },
  {
    menuItem: "Product",
    icon: <CubeIcon />,
  },
  {
    menuItem: "Customers",
    icon: <UserIcon />,
    mod: "sidebar_menu__link--active_mod",
  },
  {
    menuItem: "Income",
    icon: <WalletIcon />,
  },
  {
    menuItem: "Promote",
    icon: <DiscountIcon />,
  },
  {
    menuItem: "Help",
    icon: <MessageIcon />,
  },
];

export const usersListHead = [
  "Customer Name",
  "Company",
  "Phone Number",
  "Email",
  "Country",
  "Status",
];

export const usersList = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "inactive",
  },
];
