require('./center-zone.scss');
var React = require('react/addons');
var SwitchorStore = require('../../stores/switchor-store');
var AppConstants = require('../../CONSTANTS');
var assign = require('object-assign');
var $ = require('jquery');
var EasingFunction = require('../../ease-function');
var cx = React.addons.classSet;
var Ts16949Overview = require('./overview/ts16949-overview.jsx');
var Ts16949Process = require('./process/ts16949-process.jsx');
var processAction = require('my-react/actions/ts16949-process-action');

var Ts16949CenterZone = React.createClass({
	propTypes: {
		duration: React.PropTypes.number
	},
	getInitialState: function() {
		return assign({
			marginTop: undefined,
			type: OVERVIEW
		}, SwitchorStore.getCurrent());
	},
	componentDidMount: function() {
		SwitchorStore.addToggleListener(this.toggle);	
	},
	componentWillUnmount: function() {
		SwitchorStore.removeToggleListener(this.toggle);
	},		
	render: function() {		
		var className = cx({
			'hidden-center-zone': this.state.view == AppConstants.DEFAULT_VIEW && this.state.marginTop == undefined,
			'wrapper': true
		})

		return (
			<div className={className}>
				{this.renderOverview()}				
				<Ts16949Process gotoOverview={this.gotoOverview} hidden={this.state.type !== PROCESS || this.state.view === DEFAULTPAGE} />
			</div>
		);
	},
	renderOverview: function() {
		var hidden = (this.state.type !== OVERVIEW && this.state.view !== DEFAULTPAGE) || (this.state.view == AppConstants.DEFAULT_VIEW);
		var overViewClass = cx({
			'hidden': hidden 
		});
		var style = this.state.style;
		//for ie, need to detect only rendering as displaying. 
		//updated: change the display way: use absoulte position to improve IE8 performance
		/*if(!hidden && this._ts16949Overview == null) {
			
		}*/
		this._ts16949Overview = (<Ts16949Overview gotoProcess={this.gotoProcess} hidden={hidden} />);
		//console.log(this._ts16949Overview)
		return this._ts16949Overview;
	},
	gotoProcess: function(process) {
		processAction.retrieveProcess(process);
		this.setState({
			type: PROCESS,
			view: AppConstants.TS16949_VIEW
		});
	},
	gotoOverview: function() {
		this.setState({
			type: OVERVIEW,
			view: AppConstants.TS16949_VIEW
		});	
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
		var state = SwitchorStore.getCurrent();
		if(state.view === AppConstants.TS16949_VIEW)
			state.view = DEFAULTPAGE;
		this.setState(state);

		
		//this.animate();
	},
	_ts16949Overview: null
});

module.exports = Ts16949CenterZone;

var MARGINTOP = -450;
var DEFAULTPAGE = 'DEFAULTPAGE'
var PROCESS = 'ts16949-process';
var OVERVIEW = 'ts16949-overview';