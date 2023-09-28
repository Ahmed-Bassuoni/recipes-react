import { IRecipe } from "./IRecipe";

export interface RecipeSearchResult {
    offset:       number;
    number:       number;
    results:      IRecipe[];
    totalResults: number;
}
