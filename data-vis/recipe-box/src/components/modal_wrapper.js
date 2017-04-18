import React, { Component } from 'react';
const { PropTypes } = React;
//import onClickOutside from 'react-onclickoutside';

class ModalWrapper extends Component {
	
	render() {
		return (
			<div className={this.props.className} >
				
				<h1 className="editor-title">{this.props.title}</h1>
				{this.props.children}
			</div>
			
		);
	}
};

ModalWrapper.propTypes = {

	title: PropTypes.string,
	showOk: PropTypes.bool,
	okText: PropTypes.string,
	okDisabled: PropTypes.bool,
	width: PropTypes.number,
	style: PropTypes.object,
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.element,
		PropTypes.string
		]).isRequired,
	hideModal: PropTypes.func,
	onOk: PropTypes.func
};

ModalWrapper.defaultProps = {
	title: '',
	showOk: true,
	showOkText: 'OK',
	okDisabled: false,
	width: 400,
	onOk: () => {}
};

export default ModalWrapper;