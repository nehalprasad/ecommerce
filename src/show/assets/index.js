import { ReactComponent as Cart } from "./Cart.svg";

export const icons = [Cart];

icons.map((icon) => {
  const Icon = (props) => {
    const ShowIcon = icon;
    return <ShowIcon {...props} />;
  };
  return Icon;
});

export { Cart };
