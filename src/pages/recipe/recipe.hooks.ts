import { useNavigate, useParams } from "react-router-dom";
import { RoutesPaths } from "../../routes/routes";
import { RecipesApi } from "../../data/apis/recipe";
import { useEffect, useState } from "react";
import { IRecipeInformation } from "../../models/IRecipeInformation";
import { ApisService } from "../../utils/ApisService";


export const useRecipe = () => {
    const navigate = useNavigate();
    const params = useParams();
    const recipesApi = ApisService.getRecipesApi();
    const [recipe, setRecipe] = useState<IRecipeInformation | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const goToSearch = () => {
        navigate(RoutesPaths.SEARCH);
    }

    useEffect(() => {
        async function fetchRecipe() {
            try {
                setIsLoading(true);
                if (params.id !== undefined && params.id !== null) {
                    const recipe = await recipesApi.get(params.id);
                    console.log(recipe);
                    setRecipe(recipe.data ?? null);
                }
                setIsLoading(false);
            } catch (error) {
                console.error(`Error fetching recipe with id ${params.id}:`, error);
            }
        }
        fetchRecipe();
    }, [params.id]);
    return {
        goToSearch,
        recipe,
        isLoading,
    }
}
