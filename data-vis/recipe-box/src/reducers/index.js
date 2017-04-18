import { combineReducers } from 'redux';
import RecipesReducer from './edit_recipe_reducer';

const rootReducer = combineReducers({
  recipesState: RecipesReducer,
});

export default rootReducer;
