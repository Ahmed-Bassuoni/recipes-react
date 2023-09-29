import { RecipeCard } from "../../components/RecipeCard/RecipeCard";
import { Cuisines } from "../../constants/Cuisines";
import { useSearch } from "./search.hooks";
import './search.scss';

interface SearchProps {
    query?: string;
}

export const Search: React.FC<SearchProps> = ({ }) => {
    const {
        searchTerm,
        excludeIngredients,
        includeIngredients,
        recipes,
        selectedCuisines,
        doSearch, handleCuisineChange, handleInputChange
    } = useSearch();
    return (
        <div className="search-page container">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Find Your Next Favorite Recipe</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                doSearch();
            }}>
                <div className="fields-container">
                    <label className="block text-sm font-bold text-gray-500 mb-2">Search Term:</label>
                    <input className="input-field mb-4"
                        type="text"
                        name="searchTerm"
                        placeholder="Search term..."
                        value={searchTerm}
                        onChange={(e) => handleInputChange(e)} />
                    <details className="mb-4">
                        <summary className="font-bold mb-2 text-gray-500">Include/Exclude Ingredients</summary>
                        <div className="ps-4">
                            <label className="block text-sm font-bold mb-2 text-gray-500">Include:</label>
                            <input className="input-field mb-4"
                                type="text"
                                name="includeIngredients"
                                placeholder="Include ingredients, e.g., chicken, tomatoes..."
                                value={includeIngredients}
                                onChange={(e) => handleInputChange(e)} />
                            <label className="block text-sm font-bold mb-2 text-gray-500">Exclude:</label>
                            <input className="input-field mb-4"
                                type="text"
                                name="excludeIngredients"
                                placeholder="Exclude ingredients, e.g., nuts, dairy..."
                                value={excludeIngredients}
                                onChange={(e) => handleInputChange(e)} />
                        </div>
                    </details>

                    <details className="mb-4">
                        <summary className="font-bold mb-2 text-gray-500">Select Cuisine</summary>
                        <div className="grid lg:grid-cols-10 md:grid-cols-5 grid-cols-2 gap-2 mt-2 ps-4">
                            {Object.keys(Cuisines).map(cuisine => (
                                <label key={cuisine} className="text-gray-700 flex justify-start items-center">
                                    <input name={cuisine} checked={selectedCuisines.includes(cuisine)}
                                        onChange={handleCuisineChange} className="h-4 !w-4 me-2" type="checkbox" value={cuisine} /> {cuisine}
                                </label>
                            ))}
                        </div>
                    </details>
                </div>
                <button type="submit" className="btn btn-primary bg-lime-500 rounded-md h-10 w-full text-white text-xl">Search</button>
            </form>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 mt-6">
                {recipes && recipes.map(recipe =>
                    (<RecipeCard key={recipe.id} recipe={recipe} />)
                )}
            </div>

        </div>
    );
}
