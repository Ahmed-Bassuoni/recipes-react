import { useEffect, useMemo, useState } from "react";
import { IRecipe } from "../../models/IRecipe";
import { RecipesApi } from "../../data/apis/recipe";
import { debounce } from "lodash";



export const useQuickSearch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const recipesApi = useMemo(() => new RecipesApi(), []);

    const doSearch = useMemo(() => {
        return debounce(async (term) => {
            if (term.length >= 2) {
                setIsLoading(true);
                const results = await recipesApi.searchRecipes({ query: term, number: 5 });
                setRecipes(results.data);
                setIsLoading(false);
            }
        }, 250);
    }, [recipesApi]);

    useEffect(() => {
        doSearch(searchTerm);
    }, [searchTerm, doSearch]);

    const clearSearch = () => {
        setSearchTerm('');
        setRecipes([]);
        setIsLoading(false);
    };

    return {
        isLoading,
        recipes,
        searchTerm,
        setSearchTerm,
        clearSearch,
    };
};
