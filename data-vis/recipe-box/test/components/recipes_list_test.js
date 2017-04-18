import { renderComponent, expect } from '../test_helper';
import RecipesList from '../../src/components/recipes_list';

describe('Recipes List', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(RecipesList);
	});

	it('has a list of recipes', () => {
		expect(component.find('.recipes-list')).to.exist;
	});
});