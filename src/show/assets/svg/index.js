import { ReactComponent as EyeIcon } from "./Eye.svg";
import { ReactComponent as Cart } from "./Cart.svg";

export const icons = [Cart, EyeIcon];

icons.map((icon) => {
  const Icon = (props) => {
    const ShowIcon = icon;
    return <ShowIcon {...props} />;
  };
  return Icon;
});

export { Cart, EyeIcon };
