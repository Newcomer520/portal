var React = require('react');
var AppAction = require('../actions/app-action');
var SwitchorStore = require('../stores/switchor-store');
var Constants = require('../CONSTANTS');
var Ts16949Btn = React.createClass({
	getInitialState: function() {
		return {
			view: SwitchorStore.getCurrent().view
		}
	},
	componentDidMount: function() {
		SwitchorStore.addToggleListener(this.toogle);
	},
	componentWillUnmount: function() {
		SwitchorStore.removeToggleListener(this.toggle);
	},	
	render: function() {
		var wording = this.state.view == Constants.DEFAULT_VIEW ?
			'TS16949': 'Default INIP'
		return (
			<div className="menu-gray" title="TS16949" onClick={this.handleClick}>
				{wording}
			</div>
		);
	},
	toogle: function() {
		this.setState({
			view: SwitchorStore.getCurrent().view
		});
	},
	handleClick: function() {
		AppAction.toggleCenterZone();
		//window.open('ts16949-temp.html');
	}

});

module.exports = Ts16949Btn;