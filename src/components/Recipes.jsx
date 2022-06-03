import { useState } from "react"

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}

const elvenGauntlets = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4
}

const Recipes = () => {
    const [recipes, setRecipes] = useState({});

    return (
        <div>
            <h3>Current Recipe:</h3>
            <button onClick={() => setRecipes(elvenShieldRecipe)}>Elven Shield Recipe</button>
            <button onClick={() => setRecipes(elvenGauntlets)}>Elven Gaunlets Recipe</button>

            <ul>
                {Object.keys(recipes).map(material => (
                    <li key={material}> {material}: {recipes[material]} </li>
                ))}
            </ul>
        </div>
    )
}

export default Recipes;