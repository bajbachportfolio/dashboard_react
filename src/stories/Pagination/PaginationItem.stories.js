import PaginationItem from "../../components/Pagination/PaginationItem";
import "../../scss/main-global.scss";

export default {
  title: "PaginationItem",
  component: PaginationItem,
  tags: ["autodocs"],
  argTypes: {},
};

export const itemPrev = {
  args: {
    className: "prev",
  },
};

export const itemNext = {
  args: {
    className: "next",
  },
};
