import { useNavigate } from "react-router-dom";
import { RoutesPaths } from "../../routes/routes";
import { RecipesApi } from "../../data/apis/recipe";


export const useSearch = () => {
    const navigate = useNavigate();
    const recipiesRepository = new RecipesApi();

    const goToRecipe = (id: string | number) => {
        navigate({
            pathname: RoutesPaths.RECIPE.replace(':id', id.toString())
        });
    }
    return {
        goToRecipe
    }
}
