import React from 'react';

const Recipe = () => {
	return (
		<div>
			<h3 className="recipe-name">Recipe Title</h3>
			<ul className="recipe-ingredients">
				<li>Ingredient 1</li>
				<li>Ingredient 2</li>
			</ul>
			<button className="btn btn-primary edit-btn">Edit</button>
			<button className="btn btn-warning delete-btn">Delete</button>
		</div>
	);
}

export default Recipe;