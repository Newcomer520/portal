var React = require('react');
var inipWidget = require('inip-widget');
var Group = inipWidget.utils.ART.Group;
var Rectangle = inipWidget.utils.Rectangle;
var LinearGradientTransform = inipWidget.LinearGradientTransform;
var assign = require('object-assign');
var mouseEvent = require('my-react/component/mixins/mouse-event');

var LightBlueBox = React.createClass({
	propTypes: {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired,
		mask: React.PropTypes.bool
	},
	mixins: [mouseEvent],
	render: function() {
		var scaleY = this.props.height / (LG.y2 - LG.y1);
		var gradient = assign({}, LG, {y1: scaleY * LG.y1, y2: scaleY * LG.y2});
		var fill = LinearGradientTransform(gradient);
		var stroke = this.state.hover? '#db5bbb': this.props.stroke? this.props.stroke: '#000'		
		var strokeWidth = this.state.hover? 5: 2;
		var handleMouseMove = this.props.hoverDisabled? null: this.handleMouseMove;
		var handleMouseOut =  this.props.hoverDisabled? null: this.handleMouseOut;
		var maskRect = this.props.mask === false ?
			null: (<Rectangle
					radius={10}
					{...this.props}
					x={0} y={0}
					cursor="pointer"
					fill="#fff" opacity={0} stroke={stroke} />)
		return (
			<Group 
				{...this.props} 
				onMouseMove={handleMouseMove}
				onMouseOut={handleMouseOut}>				
				<Rectangle 
					radius={10}
					fill={fill} 					
					strokeWidth={strokeWidth}					
					{...this.props}
					x={0} y={0}
					stroke={stroke} 	/>
				{this.props.children}
				{maskRect}
			</Group>
		);
	},
	renderUnitRect: function(fill, opacity) {
		
	}
});

module.exports = LightBlueBox;

var LG = {
	"x1": 174.28572,
	"y1": -61.923531,
	"x2": 177.14285,
	"y2": 406.64789,
	"stops":{
		"0":'#00BFFF',//"#11e4e8",
		"1":"#ffffff"
	}
}