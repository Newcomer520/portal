var React = require('react/addons');
var SwitchorStore = require('../stores/switchor-store');
var AppConstants = require('../CONSTANTS');
var assign = require('object-assign');
var $ = require('jquery');
var EasingFunction = require('../ease-function');

var Ts16949CenterZone = React.createClass({
	propTypes: {
		duration: React.PropTypes.number
	},
	getInitialState: function() {
		return assign({
			marginTop: undefined
		},SwitchorStore.getCurrent());
	},
	componentDidMount: function() {
		SwitchorStore.addToggleListener(this.toggle);		
	},
	componentWillUnmount: function() {
		SwitchorStore.removeToggleListener(this.toggle);
	},		
	render: function() {
		if(this.state.view == AppConstants.DEFAULT_VIEW && this.state.marginTop == undefined)
			return null;
		var style = this.state.style;
		return <div className="displayed" style={style} />;
	},
	animate: function() {
		var startValue = -450;
		var endValue = 0;
		var duration = this.props.duration || 1000;
		var multiplier = duration / 1000; //upper bound of ease function is 1000 miliseconds.
		var perTickTime = 20;
		var ticks = -perTickTime;
		var current = SwitchorStore.getCurrent();
		var marginTop = current.view == AppConstants.DEFAULT_VIEW? MARGINTOP: 0;
		var ease = EasingFunction.linear;
		var cl = setInterval(function() {
			ticks += perTickTime;
			var h = startValue + ease(ticks/1000/multiplier) * (endValue - startValue);			
			if(h >= endValue) {
				clearInterval(cl);				
			}				
			this.setState(assign({style: {marginTop: h}}, current));
		}.bind(this), perTickTime);
	},
	/**
		toggle the zone*/
	toggle: function() {
		this.setState(SwitchorStore.getCurrent());
		
		//this.animate();
	}
});

module.exports = Ts16949CenterZone;

var MARGINTOP = -450;
