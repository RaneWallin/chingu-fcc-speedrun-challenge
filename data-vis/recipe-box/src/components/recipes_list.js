import React, { Component } from 'react';
//import ModalBase from './modal_base';
import RecipeEditor from './recipe_editor';
import * as actions from '../actions';
import { connect } from 'react-redux';
import ModalBack from './modal_background';


class RecipeList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			modalHidden: true
		};

		this.hideModal = this.hideModal.bind(this);

		this.backgroundClickHandler = this.backgroundClickHandler.bind(this);
	}

	componentWillMount() {
		this.props.getRecipes(); 
	}


	backgroundClickHandler() {
		this.setState({ modalHidden: true });
	}

	handleClick(recipe) {
		this.props.activateRecipe(recipe);
		this.setState({ 
			modalHidden: !this.state.modalHidden });
	}

	handlePanelClick(e) {
		this.props.activateRecipe(e);
	}

	handleDelete(recipe) {
		this.props.deleteRecipe(recipe);
	}

	renderPanels() {
		return this.props.recipes.map((recipe, index) => {
			//console.log("recipe",recipe);
			return (
			<div key={`${(recipe.name).replace(/\s/g,'')}${index}`} className="panel panel-default">
    			<a 
    			data-toggle="collapse" 
    			data-parent="#accordion" 
    			href={`#collapse${index}`}>
    			<div className="panel-heading recipe-panel">
    	
      				<h4 className="panel-title">
        				{recipe.name}
      				</h4>
    			</div>
    			</a>
    			<div id={`collapse${index}`} 
    			className="panel-collapse collapse">
      				<div className="panel-body">
      					<div className="recipe-ingredients">
      					<h1 className="text-center">Ingredients</h1>
      					<hr />
		      				{ 
		      					recipe.ingredients.map((ing, index) => {
		      						return <p key={`${ing}${index}`}>{ing}</p>;
		      					}) 
		      				}
      					</div>
      					<div className="pull-right">
      						<button onClick={this.handleClick.bind(this, recipe)} className="btn btn-basic edit-btn">Edit</button>
      						<button onClick={this.handleDelete.bind(this, recipe)}className="btn btn-danger delete-btn">Delete</button>
      					</div>
      				</div>
    				</div>
  				</div>
  				);
		});

	};

	hideModal() {
		this.setState({ modalHidden: true });
	}
	render() {
		return (
			<div className="recipe-list-inside">
				<ModalBack onClick={this.backgroundClickHandler} className={this.state.modalHidden ? 'modal-back':'modal-back active'} />
				<div className='recipe-app'>
					<button onClick={this.handleClick.bind(this, null)} className="btn btn-primary add-btn">Add New</button>
					<RecipeEditor hideModal={this.hideModal} showOk="false" className={this.state.modalHidden ? 'modal-base' : 'modal-base active'} />
					<div className="panel-group" id="accordion">
						{	this.renderPanels() }
					</div>
				</div>
			</div>
			
		);
	}
}

function mapStateToProps(state) {
	return { recipes: state.recipesState.recipes,
				activeRecipe: state.recipesState.activeRecipe
			}
}

export default connect(mapStateToProps, actions)(RecipeList);