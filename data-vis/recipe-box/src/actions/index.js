import { EDIT_RECIPE,
		 GET_RECIPES,
		 DELETE_RECIPE,
		 ACTIVATE_RECIPE } from './types';

export function editRecipe(props) {
	return {
		type: EDIT_RECIPE,
		payload: props
	};
}

export function getRecipes() {
	return {
		type: GET_RECIPES
	}
}

export function deleteRecipe(recipe) {
	console.log(recipe);
	return {
		type: DELETE_RECIPE,
		payload: recipe
	}
}

export function activateRecipe(recipe) {
	return {
		type: ACTIVATE_RECIPE,
		payload: recipe
	}
}