import { RecipeTile } from '../RecipeTile/RecipeTile';
import { useQuickSearch } from './QuickSearch.hooks';
import './QuickSearch.scss';


export const QuickSearch: React.FC = () => {
    const { searchTerm, recipes, totalResutlsCount, isFocused, isLoading, setIsFocused, setSearchTerm, clearSearch, goToSearchPage } = useQuickSearch();

    return (
        <div className="quick-search">
            <i className="icon fa fa-search" aria-hidden="true"></i>
            <input
                className="w-full z-10 h-10 rounded-md bg-white bg-opacity-90 px-2 py-1 pl-10"
                type="text" placeholder="Search.."
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                onFocus={() => setIsFocused(true)}
            />
            {searchTerm && (
                <i className="icon fa fa-times cursor-pointer" aria-hidden="true" onClick={clearSearch}></i>
            )}
            {isFocused && (<div className="results-container">
                {recipes.length > 0 && recipes.map((recipe, index) => (
                    <div key={index} onClick={clearSearch}>
                        <RecipeTile recipe={recipe} />
                        <hr className='bg-slate-300 w-11/12 my-2' />
                    </div>
                ))}
                {
                    recipes.length === 0 && searchTerm && !isLoading && (
                        <div className="text-center text-gray-500 text-lg">No results found</div>
                    )
                }
                {
                    isLoading && (
                        <div className="text-center text-gray-500 text-lg">Loading...</div>
                    )
                }
                {totalResutlsCount > 0 && (<div
                    className="text-blue-400 text-center text-lg"
                    onClick={goToSearchPage}
                >
                    <h3>View all {totalResutlsCount} recipes</h3>
                </div>)}
            </div>)}
        </div>
    );
}
