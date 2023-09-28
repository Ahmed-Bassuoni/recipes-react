import { useRecipe } from "./recipe.hooks";


export const Recipe = () => {
    const { goToSearch, recipeID } = useRecipe();
    return (
        <div className="">
            <header className="">
                <h1>Recipe {recipeID}</h1>
            </header>
            <button onClick={goToSearch}>Search</button>
        </div>
    );
}
