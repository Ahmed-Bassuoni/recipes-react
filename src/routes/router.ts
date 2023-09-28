import { Home } from "../pages/home/home";
import { Recipe } from "../pages/recipe/recipe";
import { Search } from "../pages/search/search";
import { RoutesPaths } from "./routes";


export const Router = [
    {path: RoutesPaths.HOME, component: Home},
    {path: RoutesPaths.SEARCH, component: Search},
    {path: RoutesPaths.RECIPE, component: Recipe},
]
