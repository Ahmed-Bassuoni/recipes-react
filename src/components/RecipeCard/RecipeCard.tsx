import { IRecipe } from "../../models/IRecipe";
import { useRecipeCard } from "./RecipeCard.hooks";
import './RecipeCard.scss';


export interface RecipeCardProps {
    recipe: IRecipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const { goToRecipeInformation } = useRecipeCard();
    return (
        <div key={recipe.id} onClick={() => {
            goToRecipeInformation(recipe.id);
        }} className="recipe-card border rounded shadow-lg transform hover:scale-105 transition-transform">
            <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover mb-4 rounded-t-lg" />
            <h3 className="text-2xl px-4 font-medium text-gray-800">{recipe.title}</h3>
        </div>
    );
};
