import { useSearch } from "./search.hooks";


export const Search = () => {
    const { goToRecipe } = useSearch();
    return (
        <div className="container">
            <header className="">
                <h1>Search</h1>
            </header>
            <button onClick={() => goToRecipe(1)}>Recipe</button>
        </div>
    );
}
