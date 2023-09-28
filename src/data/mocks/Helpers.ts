import { ApiResponse } from "../../models/ApiResponse";
import { Consitency, IExtendedIngredient } from "../../models/IExtendedIngredient";
import { IRecipe } from "../../models/IRecipe";
import { IRecipeInformation } from "../../models/IRecipeInformation";
import { PaginationResponse } from "../../models/PaginationResponse";


export const mockExtendedIngredient = (ingredient: any): IExtendedIngredient => ({
    aisle: ingredient.aisle,
    amount: ingredient.amount,
    consitency: ingredient.consitency === 'liquid' ? Consitency.Liquid : Consitency.Solid,
    id: ingredient.id,
    image: ingredient.image,
    measures: {
        metric: {
            amount: ingredient.measures.metric.amount,
            unitLong: ingredient.measures.metric.unitLong,
            unitShort: ingredient.measures.metric.unitShort
        },
        us: {
            amount: ingredient.measures.us.amount,
            unitLong: ingredient.measures.us.unitLong,
            unitShort: ingredient.measures.us.unitShort
        }
    },
    meta: ingredient.meta,
    name: ingredient.name,
    original: ingredient.original,
    originalName: ingredient.originalName,
    unit: ingredient.unit
});

export const mockRecipeInformation = (recipe: any): IRecipeInformation => ({
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    imageType: recipe.imageType,
    servings: recipe.servings,
    readyInMinutes: recipe.readyInMinutes,
    license: recipe.license,
    sourceName: recipe.sourceName,
    sourceURL: recipe.sourceUrl,
    spoonacularSourceURL: recipe.spoonacularSourceUrl,
    healthScore: recipe.healthScore,
    spoonacularScore: recipe.spoonacularScore,
    pricePerServing: recipe.pricePerServing,
    analyzedInstructions: recipe.analyzedInstructions,
    cheap: recipe.cheap,
    creditsText: recipe.creditsText,
    cuisines: recipe.cuisines,
    dairyFree: recipe.dairyFree,
    diets: recipe.diets,
    gaps: recipe.gaps,
    glutenFree: recipe.glutenFree,
    instructions: recipe.instructions,
    ketogenic: recipe.ketogenic,
    lowFodmap: recipe.lowFodmap,
    occasions: recipe.occasions,
    sustainable: recipe.sustainable,
    vegan: recipe.vegan,
    vegetarian: recipe.vegetarian,
    veryHealthy: recipe.veryHealthy,
    veryPopular: recipe.veryPopular,
    whole30: recipe.whole30,
    weightWatcherSmartPoints: recipe.weightWatcherSmartPoints,
    dishTypes: recipe.dishTypes,
    extendedIngredients: recipe.extendedIngredients.map(mockExtendedIngredient),
    summary: recipe.summary
});

export const mockRecipe = (recipe: any): IRecipe => ({
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    imageType: recipe.imageType
});

export const mockApiResponse = <T>(data: T, succeeded: boolean = true, errors?: any): ApiResponse<T> => ({
    data: data,
    succeeded: succeeded,
    errors: errors
});

export const mockPaginationResponse = <T>(data: T[], totalResults: number = 0, offset: number = 0, number: number = 0): PaginationResponse<T> => ({
    totalResults: totalResults,
    offset: offset,
    number: number,
    data: data,
    succeeded: true,  // Assuming the request was successful
    errors: null  // Assuming there are no errors
});
