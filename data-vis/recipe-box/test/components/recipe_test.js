import { renderComponent, expect } from '../test_helper';
import Recipe from '../../src/components/recipe';

describe('Recipe', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(Recipe);
	});

	it('has a recipt name', () => {
		expect(component.find('.recipe-name')).to.exist;
	});

	it('has a list of ingredients', () => {
		expect(component.find('.recipe-ingredients')).to.exist;
	});

	it('has a button to delete the recipe', () => {
		expect(component.find('.delete-btn')).to.exist;
	});

	it('has a button to edit the recipe', () => {
		expect(component.find('.edit-btn')).to.exist;
	});
});