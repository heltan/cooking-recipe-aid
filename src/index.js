
import ReactDOM from 'react-dom'
import AddRecipe from './add-recipe.js';
import AllRecipes from './all-recipes.js';
import CurrentlyCooking from './currently-cooking.js';

import React, {useState, useEffect} from 'react';

function App () {

    const [currentDish, setCurrentDish] = useState('');
    console.log('current dish', currentDish)
        return (
            <div id='body'>
                <div id='header'>
                    <h1>cooking & recipe aid</h1>
                </div>

                <AddRecipe/>
                <AllRecipes setCurrentDish = {setCurrentDish}/>
                <CurrentlyCooking currentDish = {currentDish}/>
            </div>
        );
    
}

ReactDOM.render(<App/>, document.getElementById('app'));