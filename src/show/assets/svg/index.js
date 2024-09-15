import { ReactComponent as EyeIcon } from '../../assets/svg/eye-icon.svg'

export const icons = [EyeIcon]

icons.map(icon => {
    const Icon = props => {
        const ShowIcon = icon;
        return <ShowIcon {...props} />;
    };
    return Icon;
});

export {EyeIcon}
