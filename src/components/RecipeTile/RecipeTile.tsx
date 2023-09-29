import { IRecipe } from "../../models/IRecipe";
import { useRecipeTile } from "./RecipeTile.hooks";
import './RecipeTile.scss';


interface RecipeTileProps {
    recipe: IRecipe;
}

export const RecipeTile: React.FC<RecipeTileProps> = ({ recipe }) => {
    const { goToRecipeInformation } = useRecipeTile();
    return (
        <div key={recipe.id}
            className="recipe-tile"
            onClick={() => { goToRecipeInformation(recipe.id) }}>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
        </div>
    );
};
