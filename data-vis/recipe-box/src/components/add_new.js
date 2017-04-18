import React, { Component } from 'react';
import RecipeEditor from './recipe_editor';
import onClickOutside from 'react-onclickoutside';
//import ModalBase from './modal_base';

class AddNew extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalHidden: true
		}
	}


	handleClickOutside = e => {
		//console.log("clicking");
		if(this.state.modalHidden ) return;
		this.setState({ modalHidden: !this.state.hideMe });
	}

	handleClick() {
		this.setState({ modalHidden: !this.state.modalHidden });
	}

	handleModal() {
		console.log(this);
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick.bind(this)} className="btn btn-primary add-btn">Add New</button>
				<RecipeEditor  hideModal={this.handleModal.bind(this)} showOk="false" className={this.state.modalHidden ? 'modal-base' : 'modal-base active'} />
			</div>
		);
	}
}

export default onClickOutside(AddNew);