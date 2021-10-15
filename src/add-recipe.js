import React, {useState} from 'react'
const axios = require('axios');
// const mongo123 = require('./mongoDatabase.js')
// import mongo from './mongoDatabase.js'
// import ReactDOM from 'react-dom'

function AddRecipe() {
    //state variable that will hold the new recipe
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [ingrediants, setIngrediants] = useState('');
    const [directions, setDirections] = useState('');

    return (
        <div>
        
            <form>
                <label for='title'></label>
                <br></br>
                <input type='text' id='recipe-title' placeholder='recipe title' onChange = { e=> {
                    setTitle(e.target.value);
                   
                }}></input>
                <label for='author'></label>
                <br></br>
                <input type='text' id='recipe-author' placeholder='recipe author' onChange = { e=> {
                    setAuthor(e.target.value);
                    
                }}></input>
                <label for='ingrediants'></label>
                <br></br>
                <textarea id='recipe-ingrediants' placeholder='ingrediants' onChange = { e=> {
                    setIngrediants(e.target.value);
                    
                }}></textarea>
                <label for='directions'></label>
                <br></br>
                <textarea id='recipe-directions' placeholder='directions' onChange = { e=> {
                    setDirections(e.target.value);
                    
                }}></textarea>
            </form>
            <button onClick = {()=> {
                console.log(title, author, ingrediants, directions);
                axios.get('http://localhost:3000/')
                .then(response => {
                    console.log('response', response.data)
                })
                
           
            }}>add new recipe</button>
        </div>
    )
}

export default AddRecipe;