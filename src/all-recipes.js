import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import CurrentlyCooking from './currently-cooking.js';
const axios = require('axios');

//show all recipes
function AllRecipes (setCurrentDish) {

    const [recipeList, setRecipeList] = useState('');
    const [recipeJSX, setRecipeJSX] = useState('');
    const [currentRecipe, setCurrentRecipe] = useState('');
    //componentDidmount, to get all recipes and display
    //use effect will be default look for something if its changed, make it dependant on something that wont change like empty array.
    //or it will loop forever
    useEffect(()=> {
        console.log('all recipes current dish', setCurrentDish)
        console.log('all recipes being called')
        findAllRecipes();
        
    }, [])

    function findAllRecipes () {
        axios.get('http://localhost:3000/findAll')
        .then(response=> {
            console.log(
                'set recipe list', response.data
            )
            setRecipeList(response.data);
            renderRecipes(response.data);
        })
    }
    function renderRecipes (list) {

        console.log('recipe list in render recipes', list)
        let recipeArray = [];
        for (let id in list) {
            console.log('id?', list[id])
            recipeArray.push(<div class = "recipes" id= {list[id].title + list[id].author}>
                <h4>{list[id].title}</h4>
                <nobr> by {list[id].author}</nobr> 
                <button onClick = {(e)=> {
                    let dish = list[id];
                    console.log('dish id', dish)
                    //set that as currently cooking
                    // setCurrentDish(dishID)
                    setCurrentRecipe(dish)
                }}>Cook this recipe!</button></div>)
        }
        let recipeJSX = <div>{recipeArray}</div>;
        setRecipeJSX(recipeJSX);
 
    }


    
    return (<div>
        <h2>Show All Recipes</h2>
        {recipeJSX}
        <CurrentlyCooking currentRecipe = {currentRecipe}/>
    </div>)
}

export default AllRecipes;