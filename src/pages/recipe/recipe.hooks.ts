import { useNavigate, useParams } from "react-router-dom";
import { RoutesPaths } from "../../routes/routes";
import { RecipesApi } from "../../data/apis/recipe";


export const useRecipe = () => {
const navigate = useNavigate();
const params = useParams();
const recipiesRepository = new RecipesApi();

    const goToSearch = () => {
        navigate(RoutesPaths.SEARCH);
    }
    return {
        goToSearch,
        recipeID: params.id
    }
}
