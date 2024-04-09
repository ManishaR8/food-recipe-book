import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'

const MainSection = () => {

    let [recipes, setRecipes] = useState([]);

    const API_KEY = "04b2e36c7f1042c9bfc6ce908a0d21e2";

    useEffect(() => {
        const getRecipe = async () => {
            try {
                const res = await fetch(`https://api.spoonacular.com/recipes/random?number=2&includeTags=vegetarian,dessert&excludeTags=quinoa&apiKey=${API_KEY}`);
                const data = await res.json();
                setRecipes(data.recipes);

                // console.log("line 17",data.recipes);
               

            } catch (err) {
                console.log("Error:", err);
            }
        };

        getRecipe();
    }, []); 

    // console.log("line 25", recipes.title)

  return (
    <div>
        <div>
        <div className=' w-full items-center flex justify-center p-5 pb-9'>
            <p className='text-5xl text-red-700 font-semibold'>Popular Dishes</p>
        </div>
        <div className='flex flex-wrap justify-around pt-5'>
       
        {recipes.map((recipe, index) => (
                    <RecipeCard key={index} title={recipe.title} img={recipe.image} recipeId={recipe.id} />
                ))}
        </div>
        </div>
    </div>
  )
}

export default MainSection