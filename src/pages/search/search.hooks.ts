import { useNavigate } from "react-router-dom";
import { RoutesPaths } from "../../routes/routes";


export const useSearch = () => {
    const navigate = useNavigate();

    const goToRecipe = (id: string | number) => {
        navigate({
            pathname: RoutesPaths.RECIPE.replace(':id', id.toString())
        });
    }
    return {
        goToRecipe
    }
}
