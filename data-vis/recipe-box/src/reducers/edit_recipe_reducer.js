import { EDIT_RECIPE, 
		 GET_RECIPES, 
		 DELETE_RECIPE,
		 ACTIVATE_RECIPE  } from '../actions/types';

const INITIAL_STATE = {
	recipes: [
			{ name: "Ice",
			  ingredients: [ "Water" ]
			},
			{ name: "Steam",
			  ingredients: [ "Water" ]
			},
			{ name: "Beer",
			  ingredients: [ "Water", "Other stuff" ]
			}
		],
	activeRecipe: ''
}

export default function(state = INITIAL_STATE, action) {
	let newState = {};

	newState.recipes = [...state.recipes];
	newState.activeRecipe = state.activeRecipe;
	switch(action.type) {

		case EDIT_RECIPE:
			newState = addRecipe(newState, action.payload);
			return newState;
		case GET_RECIPES:
			newState.recipes = getRecipes();
			return newState;
		case DELETE_RECIPE:
			newState = deleteRecipe(newState, action.payload);
			return newState;
		case ACTIVATE_RECIPE:
			newState.activeRecipe = action.payload;
			return newState;
	}
	return state;
}

function getRecipes() {
	let theRecipes = [];

	if(!(theRecipes = JSON.parse(localStorage.getItem('wallin_recipe')))) {
		theRecipes = INITIAL_STATE.recipes;

		theRecipes = sortRecipes(theRecipes);
		localStorage.setItem('wallin_recipe', JSON.stringify(theRecipes));
	}

	return theRecipes;
}

function deleteRecipe(newState, recipe) {
	const keys = newState.recipes.map((i) => {
		return i.name;
	});

	const index = keys.indexOf(recipe.name);

	newState.recipes.splice(index, 1);

	localStorage.setItem('wallin_recipe', JSON.stringify(newState.recipes));

	return newState;

}

function addRecipe(newState, recipe) {

	let keys = [];
	let index;

	const ings = recipe.ingredients.split(',');

	if(recipe.index != undefined && recipe.index != -1) {
		newState.recipes[recipe.index].name = recipe.name;
		newState.recipes[recipe.index].ingredients = ings;
	} else {
		newState.recipes.push({
			name: recipe.name,
			ingredients: ings
		});
	}

	newState.recipes = sortRecipes(newState.recipes);

	localStorage.setItem('wallin_recipe', JSON.stringify(newState.recipes));

	return newState;
}

function sortRecipes(recipes) {
	return recipes.sort((a, b) => {
		if(a.name > b.name)
			return 1;
		if(b.name > a.name)
			return -1;
		return 0;
	});
}