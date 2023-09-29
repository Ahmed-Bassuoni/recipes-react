

import { debounce } from 'lodash';
import { useQuickSearch } from './QuickSearch.hooks';
import './QuickSearch.scss';


export const QuickSearch: React.FC = () => {
    const { searchTerm, setSearchTerm, clearSearch } = useQuickSearch();

    return (
        <div className="quick-search">
            <i className="icon fa fa-search" aria-hidden="true"></i>
            <input
            className="w-full h-10 rounded-md bg-white bg-opacity-90 px-2 py-1 pl-10"
             type="text" placeholder="Search.."
             onChange={(e) => setSearchTerm(e.target.value)}
             value={searchTerm} />
            {searchTerm && (
                <i className="icon fa fa-times cursor-pointer" aria-hidden="true" onClick={clearSearch}></i>
            )}
            <div className="results-container">

            </div>
        </div>
    );
}
