import { async } from "regenerator-runtime";
import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function() 
{
	try {
		// GET HASH FROM ADRESS
		const id = window.location.hash.slice(1);

		if(!id) return;

		// SHOW LOAD SPINNER 
		recipeView.renderSpinner();

		// LOADING RECIPE
		await model.loadRecipe(id);

		// RENDERING RECIPE
		recipeView.render(model.state.recipe);
	
	} catch(err) {
		alert(err);
	};
};

const init = function() {
	recipeView.addHandlerRender(controlRecipes);
};
init();