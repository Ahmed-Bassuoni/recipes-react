
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';
import { useHome } from './home.hooks';
import './home.scss';

export const Home = () => {
    const { cuisines } = useHome();
    console.log(cuisines);
    return (
        <div className="home bg-gray-100 font-sans">
            <div className="banner relative h-96 bg-cover bg-center flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <h1 className="text-5xl font-extrabold text-center z-10">Welcome to Our Recipe App</h1>
            </div>
            <div className="container mx-auto p-4">
                {cuisines.map((cuisine) => (
                    <div key={cuisine.name} className="cuisine-section my-8">
                        <h2 className="text-4xl font-semibold mb-4 border-b-2 border-gray-300 pb-2 text-gray-800">{cuisine.name}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {cuisine.recipes ? (
                                cuisine.recipes.map((recipe) => (
                                   <RecipeCard recipe={recipe} />
                                ))
                            ) : (
                                <div className="loader col-span-full flex justify-center items-center">
                                    Loading {cuisine.name} recipes...
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

