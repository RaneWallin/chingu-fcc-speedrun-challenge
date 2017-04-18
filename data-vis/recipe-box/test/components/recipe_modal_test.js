import { renderComponent, expect } from '../test_helper';
import RecipeEditor from '../../src/components/recipe_editor';


describe('Modal', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(RecipeModal);
	});

	it('has an input to add the recipe name', () => {
		expect(component.find('.recipe-name')).to.exist;
	});

	it('has an input to add the recipe ingredients', () => {
		expect(component.find('.recipe-ingredients')).to.exist;
	});

	it('has a button to save the recipe', () => {
		expect(component.find('.add-btn')).to.exist;
	});

	it('has a button to cancel the recipe', () => {
		expect(component.find('.cancel-btn')).to.exist;
	});

});