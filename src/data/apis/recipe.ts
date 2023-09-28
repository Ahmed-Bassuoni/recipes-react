import { ApiResponse } from "../../models/ApiResponse";
import { BaseRepository } from "../../models/BaseRepository";
import { IRecipe } from "../../models/IRecipe";
import { PaginationResponse } from "../../models/PaginationResponse";
import { RespiesMockData } from "../mocks/MockData";
import { mockApiResponse, mockPaginationResponse } from "../mocks/Helpers";


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
        return Promise.resolve(mockPaginationResponse<IRecipe>(RespiesMockData, 86, 0, 2));
    }



}
