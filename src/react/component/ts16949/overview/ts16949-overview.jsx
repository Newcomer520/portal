require('./ts16949-overview.scss');
var React = require('react/addons');
var inipWidget = require('inip-widget');
var Surface = inipWidget.utils.ART.Surface;
var Wrapper = require('./ts16949-overview-wrapper.jsx');
var STYLE = require('./style');
var cx =React.addons.classSet;


var Ts16949Overview = React.createClass({
	propTypes: {
		gotoProcess: React.PropTypes.func.isRequired
	},		
	render: function() {		
		var cls =cx({
			'entry-page': true,
			'hide-me': this.props.hidden
		});
		return (			
			<div className={cls}>				
				<div className="ts16949-overview">
					<Surface width={STYLE.width} height={STYLE.height}>
						<Wrapper scale={1} gotoProcess={this.props.gotoProcess} />
					</Surface>				
				</div>
			</div>
		);

	},	
	handleMouseOver: function() {
		
	},
	handleMouseOut: function() {
		
	}
});

module.exports = Ts16949Overview;
