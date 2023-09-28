import { RoutesPaths } from "../../routes/routes";
import { useNavigate } from "react-router-dom";


export const useAppHeader = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate(RoutesPaths.HOME);
    }

    return {
        goToHome
    }
};
