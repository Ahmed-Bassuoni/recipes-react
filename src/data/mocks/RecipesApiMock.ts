import { shuffle } from "lodash";
import { BaseRepository } from "../../models/BaseRepository";
import { IRecipe } from "../../models/IRecipe";
import { PaginationResponse } from "../../models/PaginationResponse";
import { RespiesInformationMockData, RespiesMockData } from "./MockData";
import { mockApiResponse, mockPaginationResponse } from "./Helpers";
import { ApiResponse } from "../../models/ApiResponse";
import { IRecipeInformation } from "../../models/IRecipeInformation";

export class RecipesApiMock extends BaseRepository<IRecipe> {
    constructor() {
        super();
        this.createInstance();
        this.collection = 'recipes';
    }

    /**
     * Call this method to get a recipe by id
     * @param id recipe id
     */
    async get(id: any): Promise<ApiResponse<IRecipeInformation>> {
        return Promise.resolve(mockApiResponse<IRecipeInformation>(RespiesInformationMockData)) ;
    }

    /**
     * Call this method to get a list of recipes based on the search parameters
     * @param params search parameters
     */
    async getMany(params?: any): Promise<PaginationResponse<IRecipe>> {
        const shuffledData = shuffle(RespiesMockData);
        const selectedData = shuffledData.slice(0, params['number'] || 8);
        const result = await Promise.resolve(mockPaginationResponse<IRecipe>(selectedData));
        return result;
    }

    /**
     * Call this method to do a complex search for recipes
     * @param params search aparamerters
     * @returns
     */
    async searchRecipes(params?: any ): Promise<PaginationResponse<IRecipe>> {
        const shuffledData = shuffle(RespiesMockData);
        const selectedData = shuffledData.slice(0, params['number'] || 8);
        const result = await Promise.resolve(mockPaginationResponse<IRecipe>(selectedData));
        return result;
    }
}
