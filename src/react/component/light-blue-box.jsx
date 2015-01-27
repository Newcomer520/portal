var React = require('react');
var inipWidget = require('inip-widget');
var Group = inipWidget.utils.ART.Group;
var Rectangle = inipWidget.utils.Rectangle;
var LinearGradientTransform = inipWidget.LinearGradientTransform;

var LightBlueBox = React.createClass({
	propTypes: {
		width: React.PropTypes.number.isRequired,
		height: React.propTypes.number.isRequired
	},
	render: function() {
		return (
			<Group {...this.props}>
				<Rectangle {...this.props} x={0} y={0} radius={5} fill={LinearGradientTransform(LG)} />
				{this.props.children}
				<Rectangle {...this.props} x={0} y={0} radius={5} fill="#fff" opacity={0} />
			</Group>
		);
	}
});

module.exports = LightBlueBox;

var LG = {
	"x1":"174.28572",
	"y1":"-61.923531",
	"x2":"177.14285",
	"y2":"406.64789",
	"stops":{
		"0":"#11e4e8",
		"1":"#ffffff"
	}
}