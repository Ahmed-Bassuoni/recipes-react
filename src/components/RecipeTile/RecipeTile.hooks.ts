import { useNavigate } from "react-router-dom";
import { RoutesPaths } from "../../routes/routes";


export const useRecipeTile = () => {
    const navigate = useNavigate();
    const goToRecipeInformation = (id: string | number) => {
        navigate({
            pathname: RoutesPaths.RECIPE.replace(':id', id.toString())
        });
    }
    return {
        goToRecipeInformation
    };
};
