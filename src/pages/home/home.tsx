
import { Link } from 'react-router-dom';
import { useHome } from './home.hooks';
import { RoutesPaths } from '../../routes/routes';

export const Home = () => {
    const { } = useHome();
    return (
        <div className="">
            <header className="">
                <h1>Home</h1>
            </header>
            <Link to={RoutesPaths.SEARCH}>Search</Link>
            <Link to={RoutesPaths.RECIPE.replace(":id", "1")}>Recipe</Link>
        </div>
    );
}

