import React, { Component } from 'react';
import AddNew from './add_new';
import RecipesList from './recipes_list';
import Footer from './footer';
//import ModalBase from './modal_base';

export default class App extends Component {
  render() {
    return (
    	<div className="recipe-list">
    	 	<RecipesList />
    	 	<Footer />
     	</div>
    );
  }
}	
