import { useNavigate } from "react-router-dom";
import { RoutesPaths } from "../../routes/routes";


export const useRecipeCard = () => {
    const navigate = useNavigate();
    const goToRecipeInformation = (RecipeId: string | number) => {
        navigate(RoutesPaths.RECIPE.replace(':id', RecipeId.toString()));
    };

    return {
        goToRecipeInformation
    }
};
