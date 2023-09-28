import { ApiResponse } from "../../models/ApiResponse";
import { BaseRepository } from "../../models/BaseRepository";
import { IRecipe } from "../../models/IRecipe";


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
        throw new Error("Method not implemented.");
    }

    /**
     * Call this method to get a list of recipes based on the search parameters
     * @param params search parameters
     */
    async getMany(params?: any): Promise<ApiResponse<IRecipe[]>> {
        throw new Error("Method not implemented.");
    }



}
