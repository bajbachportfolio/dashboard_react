import PaginationItem from "../../components/Pagination/PaginationItem";
import "../../scss/main-global.scss";

export default {
  title: "PaginationItem",
  component: PaginationItem,
  tags: ["autodocs"],
};

const Template = (args) => <PaginationItem {...args} />;

export const ItemDirection = Template.bind({});
ItemDirection.args = {
  mod: "prev",
};

export const ItemDots = Template.bind({});
ItemDots.args = {
  mod: "dots",
  value: "...",
};

export const ItemNumber = Template.bind({});
ItemNumber.args = {
  value: "5",
};

ItemDirection.argTypes = {
  mod: {
    type: "string",
    defaultValue: "prev",
    options: ["prev", "next"],
    control: {
      type: "radio",
    },
  },
};

ItemDots.argTypes = {
  mod: {
    type: "string",
    defaultValue: "dots",
  },
};
