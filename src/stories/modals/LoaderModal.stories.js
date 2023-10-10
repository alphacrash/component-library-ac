import { LoaderModal } from "../../components/modals/LoaderModal";

export default {
  title: "Modals/LoaderModal",
  component: LoaderModal,
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
    show: false,
    title: "Hello!",
  },
};
