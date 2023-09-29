import { ApiResponse } from "../../models/ApiResponse";
import { BaseRepository } from "../../models/BaseRepository";
import { IRecipe } from "../../models/IRecipe";
import { PaginationResponse } from "../../models/PaginationResponse";
import { RespiesMockData } from "../mocks/MockData";
import { mockApiResponse, mockPaginationResponse } from "../mocks/Helpers";
import { shuffle } from 'lodash';


export class RecipesApi extends BaseRepository<IRecipe> {

    constructor() {
        super();
        this.createInstance();
        this.collection = 'recipes';
    }

    /**
     * Call this method to get a recipe by id
     * @param id recipe id
     */
    async get(id: any): Promise<ApiResponse<IRecipe>> {
        return Promise.resolve(mockApiResponse<IRecipe>(RespiesMockData[0]));
    }

    /**
     * Call this method to get a list of recipes based on the search parameters
     * @param params search parameters
     */
    async getMany(params?: any): Promise<PaginationResponse<IRecipe>> {
        console.log('RecipesApi.getMany: ', params);
        try {
            const result: PaginationResponse<IRecipe> = await super.getMany({
              ...params
            });
            return result;
          } catch (error) {
            console.error('Error fetching recipes:', error);
            throw error;
          }
    }

    /**
     * Call this method to do a complex search for recipes
     * @param params search aparamerters
     * @returns
     */
    async searchRecipes(params?: any ): Promise<PaginationResponse<IRecipe>> {
        const shuffledData = shuffle(RespiesMockData);  // Shuffle the data array
        const selectedData = shuffledData.slice(0, 8); // Select the first 8 items from the shuffled array
        const result = await Promise.resolve(mockPaginationResponse<IRecipe>(selectedData));
        console.log('RecipesApi.searchRecipes: ', result);
        return result
        /* try {
            const result: PaginationResponse<IRecipe> = await super.getMany({
              ...params
            }, 'complexSearch');
            return result;
          } catch (error) {
            console.error('Error fetching recipes:', error);
            throw error;
          } */
    }



}
