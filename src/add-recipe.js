import React, {useState} from 'react'
import ReactDOM from 'react-dom'

function AddRecipe() {
    //state variable that will hold the new recipe
    const [title, setTitle] = useState(0);

    return (
        <div>
            <p>You clicked {title} times</p>
            <button onClick = {()=> setTitle(title + 1)}>add new recipe</button>
            <form>
                <label for='title'></label>
                <br></br>
                <input type='text' id='recipe-title' placeholder='recipe title'></input>
                <label for='author'></label>
                <br></br>
                <input type='text' id='recipe-author' placeholder='recipe author'></input>
                <label for='ingrediants'></label>
                <br></br>
                <textarea id='recipe-ingrediants' placeholder='ingrediants'></textarea>
                <label for='directions'></label>
                <br></br>
                <textarea id='recipe-directions' placeholder='directions'></textarea>
            </form>
        </div>
    )
}

export default AddRecipe;