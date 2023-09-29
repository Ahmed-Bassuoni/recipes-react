import { ApiResponse } from "../../models/ApiResponse";
import { BaseRepository } from "../../models/BaseRepository";
import { IRecipe } from "../../models/IRecipe";
import { PaginationResponse } from "../../models/PaginationResponse";


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
    async get(id: string | number): Promise<ApiResponse<IRecipe>> {
        try {
            const result: ApiResponse<IRecipe> = await super.get(`${id}/information`);
            return result;
        } catch (error) {
            console.error(`Error fetching recipe id(${id}):`, error);
            throw error;
        }
    }

    /**
     * Call this method to get a list of recipes based on the search parameters
     * @param params search parameters
     */
    async getMany(params?: any): Promise<PaginationResponse<IRecipe>> {
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
    async searchRecipes(params?: any): Promise<PaginationResponse<IRecipe>> {
        try {
            const result: PaginationResponse<IRecipe> = await super.getMany({
                ...params
            }, 'complexSearch');
            return result;
        } catch (error) {
            console.error('Error fetching recipes:', error);
            throw error;
        }
    }



}
