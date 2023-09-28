
import logo from '../../assets/images/logo.png';

interface AppLogoProps {
    onClick?: () => void;
}
export const AppLogo: React.FC<AppLogoProps> = ({ onClick }) => {

    return (
        <div className="app-logo" onClick={onClick}>
            <img src={logo} alt="recipe react logo" />
        </div>
    )
}
