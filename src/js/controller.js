import { async } from "regenerator-runtime";
import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

// https://forkify-api.herokuapp.com/v2

// if(module.hot) module.hot.accept();

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
		recipeView.renderError(err);
		throw err;
	};
};

const controlSearchResults = async function() {
	try {
		resultsView.renderSpinner();

		// GET SEARCH QUERY
		const query = searchView.getQuery();
		if(!query) return;

		// LOAD SEARCH RESULTS
		await model.loadSearchResults(query);

		// RENDER RESULTS
		resultsView.render(model.getSearchResultsPage());

		// RENDER INITIAL PAGINATION BUTTONS
		paginationView.render(model.state.search);

	} catch(err) {
		console.error(err)
	};
};

const init = function() {
	recipeView.addHandlerRender(controlRecipes);
	searchView.addHanlderSearch(controlSearchResults);
};
init();