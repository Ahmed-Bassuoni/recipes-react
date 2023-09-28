import { useNavigate, useParams } from "react-router-dom";
import { RoutesPaths } from "../../routes/routes";


export const useRecipe = () => {
const navigate = useNavigate();
const params = useParams();

    const goToSearch = () => {
        navigate(RoutesPaths.SEARCH);
    }
    return {
        goToSearch,
        recipeID: params.id
    }
}
