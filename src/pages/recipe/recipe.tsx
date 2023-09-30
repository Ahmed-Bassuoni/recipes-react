import { useRecipe } from "./recipe.hooks";
import './recipe.scss';


export const Recipe = () => {
    const { goToSearch, recipe, isLoading } = useRecipe();
    return (
        <div className="recipe-information container">
            {isLoading && (
                <center>
                    <div className="loader">Loading...</div>
                </center>
            )}
            {!isLoading && recipe && (
                <div>
                    <h1 className="text-3xl border-b-2 pb-2 border-lime-400 text-slate-700">{recipe.title}</h1>
                    <img className="mx-auto mt-10 w-full max-w-2xl" src={recipe.image} alt={recipe.title} />
                    <hr className="my-10 w-full max-w-screen-lg mx-auto border-lime-400" />
                    <div className="flex flex-wrap max-w-md mx-auto justify-between text-center">
                        <div>
                            <i className="fa fa-stopwatch fa-3x text-blue-400"></i>
                            <p className="mt-2 text-sm text-slate-600">Ready in {recipe.readyInMinutes} minutes</p>
                        </div>
                        <div>
                            <i className="fa fa-3x fa-spoon text-lime-500"></i>
                            <p className="mt-2 text-sm text-slate-600">Servigns {recipe.servings}</p>
                        </div>
                        <div>
                            <i className="fa fa-3x fa-heart text-red-400"></i>
                            <p className="mt-2 text-sm text-slate-600">Health Score {recipe.healthScore}</p>
                        </div>
                    </div>
                    <div className="mt-8 p-5 border-2 border-lime-5 rounded-md bg-gray-100"
                        dangerouslySetInnerHTML={{ __html: recipe.summary }}>
                    </div>
                    <p className="px-2 mt-2 text-sm text-slate-500">
                        <strong>Recipe Source:</strong> {recipe.sourceName} &middot; <a className="underline" href={recipe.sourceURL || recipe.spoonacularSourceURL}>{recipe.sourceURL || recipe.spoonacularSourceURL}</a>
                    </p>
                    <hr className="my-10 w-full max-w-screen-lg mx-auto border-lime-400" />
                    {recipe && recipe.extendedIngredients && (
                        <div className="text-slate-900 mt-6">
                            <h2 className="text-2xl ">Ingredients</h2>
                            <ul className="mt-2 list-disc list-inside">
                                {recipe.extendedIngredients.map((ingredient) => (
                                    <li key={ingredient.id}>{ingredient.original}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
