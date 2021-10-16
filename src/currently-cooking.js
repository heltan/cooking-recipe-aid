import React, {useState, useEffect} from 'react';

function CurrentlyCooking (currentRecipe) {
    const [currentRecipeJSX, setCurrentRecipeJSX] = useState('');
    const [currentRecipeNow, setCurrentRecipe] = useState('');
    
   


    useEffect(()=> {
        setCurrentRecipeJSX('')
        let recipe =  currentRecipe.currentRecipe;
    
            console.log('recipe, ', recipe)
            //now we will create a recipe
            let recipeArray = [];
            //put the title and author
            let titleAuthorInfo = <div>
                <h4> {recipe.title}</h4><nobr>by {recipe.author}</nobr>
            </div>
            recipeArray.push(titleAuthorInfo);
        
            //grab ingrediants and put a checkbox next to each linebreak
            let ingrediants = [];
            //grab ingrediants and put into array separated by linebreak
            if (recipe.ingrediants !== undefined) {
                let ingrediantsArr = recipe.ingrediants.split('\n');
                for (let item in ingrediantsArr) {
                    console.log('item', ingrediantsArr[item])
                    ingrediants.push(<div>
               

                        {/* <label class="switch">
                        <input type="checkbox" name={ingrediantsArr[item].id} 
                        value = {ingrediantsArr[item].id} id = {ingrediantsArr[item].id}>
                            <span class="slider round"></span>
                            
                            
                            
                            </label>
                         */}
                         <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
                         <nobr>   {ingrediantsArr[item]}</nobr>
                        
                    
                    </div>)
                }
            }
            recipeArray.push(ingrediants)
            console.log('recipe array', recipeArray)
         
                setCurrentRecipeJSX(recipeArray)

        
 
    

    }, [currentRecipe.currentRecipe])
    return (<div>
        <h3>currently cooking: </h3>
        {currentRecipeJSX}
        </div>)
}

export default CurrentlyCooking;