import { useCallback, useEffect, useMemo, useState } from "react";
import { IRecipe } from "../../models/IRecipe";
import { RecipesApi } from "../../data/apis/recipe";
import { debounce, set } from "lodash";
import { useNavigate } from "react-router-dom";
import { RoutesPaths } from "../../routes/routes";



export const useQuickSearch = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [totalResutlsCount, setTotalResutlsCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const recipesApi = useMemo(() => new RecipesApi(), []);
    const [isFocused, setIsFocused] = useState(false)

    const doSearch = useCallback(debounce(async (term) => {
        if (term.length >= 2) {
            setIsLoading(true);
            const results = await recipesApi.searchRecipes({ query: term, number: 5 });
            setRecipes(results.data);
            setTotalResutlsCount(results.totalResults);
            setIsLoading(false);
        } else if(term.length <= 0) {
            clearSearch();
        }
    }, 250),
        [recipesApi]);

    const goToSearchPage = () => {
        navigate(RoutesPaths.SEARCH)
    }

    useEffect(() => {
        doSearch(searchTerm);
    }, [searchTerm, doSearch]);

    const clearSearch = () => {
        setSearchTerm('');
        setRecipes([]);
        setIsLoading(false);
        setTotalResutlsCount(0);
        setIsFocused(false);
    };

    return {
        isLoading,
        recipes,
        searchTerm,
        totalResutlsCount,
        isFocused,
        setSearchTerm,
        clearSearch,
        goToSearchPage,
         setIsFocused
    };
};
