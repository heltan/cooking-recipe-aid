import React from 'react'
import ReactDOM from 'react-dom'
import AddRecipe from './add-recipe.js';
import AllRecipes from './all-recipes.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id='body'>
                <div id='header'>
                    <h1>cooking & recipe aid</h1>
                </div>

                <AddRecipe/>
                <AllRecipes/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));