import React, { Component } from 'react';
import ModalWrapper from './modal_wrapper';
import * as actions from '../actions';
import { connect } from 'react-redux';
import ModalBack from './modal_background';


class RecipeEditor extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			modalHidden: true,
			recipe: {
				index: -1,
				name: '',
				ingredients: ''
			}
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleChange = this.handleChange.bind(this);
		
	}

	componentWillReceiveProps(nextProps) {
	
		const recipe = nextProps.recipe;
		let index, keys;

		if(recipe) {
			keys = nextProps.allRecipes.map((r) => {
				return r.name;
		});
			index = (keys.indexOf(recipe.name));
		}

		this.setState({ recipe: {
			index: index,
			name: recipe?recipe.name:'',
			ingredients: recipe?recipe.ingredients.join(', '):''
		}});
	}

	handleCancel() {
		this.props.hideModal();
	}

	handleSubmit(event) {
		event.preventDefault();
		if(this.state.recipe.ingredients != '')
			this.props.editRecipe(this.state.recipe);
		this.props.hideModal();
		//this.close();
	}

	handleChange(event) {
		const myKey = event.target.id;
		const myVal = event.target.value;
		let myObj = {};

		let recipe = {
			recipe: {
				index: this.state.recipe.index,
				name: this.state.recipe.name,
				ingredients: this.state.recipe.ingredients,
			} };
		
		recipe.recipe[myKey] = myVal;

		this.setState(recipe);
		//console.log("state", this.state);
	}

	render() {

		const recipe = this.props.recipe;

		return (
			<div>
			<ModalWrapper
				{ ...this.props }
				title="Edit Recipe"
				width={400}
				showOk={false}
			>
				<form onSubmit={this.handleSubmit}>
				<label htmlFor="recipeName">Recipe Name</label>
				<input 
					type="text" 
					id="name" 
					onChange={ this.handleChange }
					value={this.state.recipe.name} />
				<label htmlFor="ingredients">Ingredients</label>
				<input 
					type="text" 
					onChange={ this.handleChange }
					id="ingredients" 
					value={this.state.recipe.ingredients} />
				<div className="pull-right">
				<button type="submit" className="btn btn-basic edit-btn">Submit</button>
				<button type="button" onClick={this.handleCancel} className="btn btn-danger delete-btn">Cancel</button>
				</div>
				</form>
			</ModalWrapper>
			</div>

		);
	}
}

function mapStateToProps(state) {

	return { recipe: state.recipesState.activeRecipe, 
		     allRecipes: state.recipesState.recipes }
}

export default connect(mapStateToProps, actions)(RecipeEditor);