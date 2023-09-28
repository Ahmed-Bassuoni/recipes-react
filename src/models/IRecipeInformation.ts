import { IExtendedIngredient } from "./IExtendedIngredient";

export interface RecipeInformation {
    id:                       number;
    title:                    string;
    image:                    string;
    imageType:                string;
    servings:                 number;
    readyInMinutes:           number;
    license:                  string;
    sourceName:               string;
    sourceURL:                string;
    spoonacularSourceURL:     string;
    healthScore:              number;
    spoonacularScore:         number;
    pricePerServing:          number;
    analyzedInstructions:     any[];
    cheap:                    boolean;
    creditsText:              string;
    cuisines:                 any[];
    dairyFree:                boolean;
    diets:                    any[];
    gaps:                     string;
    glutenFree:               boolean;
    instructions:             string;
    ketogenic:                boolean;
    lowFodmap:                boolean;
    occasions:                any[];
    sustainable:              boolean;
    vegan:                    boolean;
    vegetarian:               boolean;
    veryHealthy:              boolean;
    veryPopular:              boolean;
    whole30:                  boolean;
    weightWatcherSmartPoints: number;
    dishTypes:                string[];
    extendedIngredients:      IExtendedIngredient[];
    summary:                  string;
}
