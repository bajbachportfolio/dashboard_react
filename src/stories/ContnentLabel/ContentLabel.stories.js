import ContentLabel from "../../components/Content/ContentLabel";
import "../../scss/main-global.scss";

export default {
  title: "ContentLabel",
  component: ContentLabel,
  tags: ["autodocs"],
};

const Template = (args) => <ContentLabel {...args} />;

export const LabelActive = Template.bind({});
LabelActive.args = {
  value: "Active",
  style: "active",
};

export const LabelInactive = Template.bind({});
LabelInactive.args = {
  value: "Inactive",
  style: "inactive",
};
