import { USE_MOCKS } from '../config/config';
import { RecipesApi } from '../data/apis/recipe';
import { RecipesApiMock } from '../data/mocks/RecipesApiMock';

export abstract class ApisService {

    static getRecipesApi = (): RecipesApi => {
        if (USE_MOCKS) {
            return new RecipesApiMock() as RecipesApi;
        } else {
            return new RecipesApi();
        }
    }
}
