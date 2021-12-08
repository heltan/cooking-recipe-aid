import React, {useState, useEffect} from 'react';

function CurrentlyCooking (currentRecipe) {
    const [currentRecipeJSX, setCurrentRecipeJSX] = useState('');
    const [currentRecipeNow, setCurrentRecipe] = useState('');
    
   


    useEffect(()=> {
        setCurrentRecipeJSX('')
        let recipe =  currentRecipe.currentRecipe;
            if (recipe) {

            //now we will create a recipe
            let recipeArray = [];
            //put the title and author
            let titleAuthorInfo = <div>
                <h4> {recipe.title}</h4><nobr>by {recipe.author}</nobr>
                <h5>Ingrediants:</h5>
            </div>
            recipeArray.push(titleAuthorInfo);
        
            //grab ingrediants and put a checkbox next to each linebreak
            let ingrediants = [];
            //grab ingrediants and put into array separated by linebreak
            if (recipe.ingrediants !== undefined) {
                let ingrediantsArr = recipe.ingrediants.split('\n');
                for (let item in ingrediantsArr) {
                    ingrediants.push(<div>

                         <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                        </label>
                         <nobr>   {ingrediantsArr[item]}</nobr>
                    </div>)
                }
            }

            //do the same for the directions
            let directions = [];
            directions.push(<h5>Directions: </h5>)
            if (recipe.directions) {
                let directionsArr = recipe.directions.split('\n');
                for (let item in directionsArr) {
                        directions.push(<div>
                            <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                            </label>
                           <nobr> {directionsArr[item]} </nobr>
                        </div>)
                }
            }
            recipeArray.push(ingrediants);
            recipeArray.push(directions)
                setCurrentRecipeJSX(recipeArray)
            }
    }, [currentRecipe.currentRecipe])
    return (<div>
        <h3>currently cooking: </h3>
        {currentRecipeJSX}
        </div>)
}

export default CurrentlyCooking;