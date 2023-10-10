import { Form } from "../../components/forms/Form";

export default {
  title: "Forms/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = {
  args: {
    children: "Data",
    id: "form",
    onSubmit: () => {},
  },
};
