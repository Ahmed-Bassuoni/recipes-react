import { useNavigate, useSearchParams } from "react-router-dom";
import { RoutesPaths } from "../../routes/routes";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ApisService } from "../../utils/ApisService";
import { IRecipe } from "../../models/IRecipe";
import { debug } from "console";


export const useSearch = () => {
    const navigate = useNavigate();
    const recipesApi = useMemo(() => ApisService.getRecipesApi(), []);
    const [searchTerm, setSearchTerm] = useState('');
    const [excludeIngredients, setExcludeIngredients] = useState('');
    const [includeIngredients, setIncludeIngredients] = useState('');
    const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [searchParams] = useSearchParams();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'searchTerm') setSearchTerm(value);
        if (name === 'excludeIngredients') setExcludeIngredients(value);
        if (name === 'includeIngredients') setIncludeIngredients(value);
    };

    const handleCuisineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setSelectedCuisines(prev =>
            checked ? [...prev, value] : prev.filter(cuisine => cuisine !== value)
        );
    };

    const doSearch = useCallback(async () => {
        let apiParams: any = {
            number: 50,
        }
        if (searchTerm) {
            apiParams = { ...apiParams, query: searchTerm }
        }
        if (excludeIngredients) {
            apiParams = { ...apiParams, excludeIngredients: excludeIngredients }
        }
        if (includeIngredients) {
            apiParams = { ...apiParams, includeIngredients: includeIngredients }
        }
        if(selectedCuisines.length > 0) {
            apiParams = { ...apiParams, cuisine: selectedCuisines.join(',') }
        }
        console.log('doSearch: ', apiParams);
        const recipes = await recipesApi.searchRecipes(apiParams);
        setRecipes(recipes.data);
    }, [searchTerm, selectedCuisines, excludeIngredients, includeIngredients,recipesApi]);

    useEffect(() => {
        searchParams.get('query') && setSearchTerm(searchParams.get('query')!);
        doSearch();
    }, []);

    return {
        searchTerm,
        excludeIngredients,
        includeIngredients,
        recipes,
        selectedCuisines,
        handleInputChange,
        handleCuisineChange,
        doSearch,
    }
}
