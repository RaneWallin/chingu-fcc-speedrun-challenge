import { renderComponent, expect } from '../test_helper';
import AddNew from '../../src/components/add_new';

describe('Add New', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(AddNew);
	});

	it('has text \'Add New\'', () => {
		expect(component.find('button')).to.have.text('Add New');
	});

});