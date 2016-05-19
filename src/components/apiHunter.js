'use strict'
import React from 'react'
import request from 'superagent'

function getRecipe(){
  request
  .get('/hunting')
  .end((err, res) => {
    console.log(JSON.parse(res.text).recipes)
    this.setState({hunting: JSON.parse(res.text).recipes})
    console.log('anything happening here?') ////
  })
}



export default class ApiHunter extends React.Component{ //reffered in client.js
   constructor(props){
    super(props)
    this.state = {hunting : []}

   }

    render() {
      return (
        <div>
           <div><h2>ApiHunter in action.... no api is safe...</h2></div>
           <div id='hunting'>
                <ul>
                {this.state.hunting.map(function(recipe)
                   {
                    console.log('recipe', recipe)
                    return <li>{recipe.title}</li>
                   }

                  )}
              </ul>
           </div>
           <button onClick={getRecipe.bind(this)}>Get Recipes</button>
        </div>
      )
    }
}



