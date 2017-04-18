import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;
  console.log(App);

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has a button to add a new recipe', () => {
  	expect(component.find('button')).to.exist;
  });

  it('has a list of existing recipes', () => {
  	expect(component.find('.recipes-list')).to.exist;
  });

});
