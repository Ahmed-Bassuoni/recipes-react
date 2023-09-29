import { useState, useEffect, useMemo } from "react";
import { RecipesApi } from "../../data/apis/recipe";
import { Cuisines } from '../../constants/Cuisines';
import { ICuisine } from "../../models/ICuisine";


export const useHome = () => {
    const [cuisines, setCuisines] = useState<ICuisine[]>(Object.values(Cuisines).map(cuisine => ({ name: cuisine, recipes: [] })));
    const recipesApi = useMemo(() => new RecipesApi(), []);

    useEffect(() => {
        async function fetchRecipesForCuisine(cuisine: string) {
            try {
                const recipesResponse = await recipesApi.searchRecipes({ cuisine, number: 8 });
                setCuisines(prevCuisines => {
                    return prevCuisines.map(cuisineItem => {
                        if (cuisineItem.name === cuisine) {
                            return { name: cuisine, recipes: recipesResponse.data };
                        }
                        return cuisineItem;
                    });
                });
            } catch (error) {
                console.error(`Error fetching recipes for ${cuisine} cuisine:`, error);
            }
        }

        Object.values(Cuisines).forEach(cuisine => {
            fetchRecipesForCuisine(cuisine);
        });
        console.log(cuisines);
    }, [recipesApi]);

    return {
        cuisines
    }
}
