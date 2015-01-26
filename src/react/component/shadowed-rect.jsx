var React = require('react');
var inipWidget = require('inip-widget');
var Group = inipWidget.utils.ART.Group;
var Rectangle = inipWidget.utils.Rectangle;
var mouseEvent = require('my-react/component/mixins/mouse-event');

var ShadowRect = React.createClass({
	propTypes: {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired
	},
	mixins: [mouseEvent],
	render: function() {
		var radius=5;
		var stroke = this.state.hover? '#db5bbb' : '#000'		
		var strokeWidth = this.state.hover? 5: 2;
		return (
			<Group {...this.props} onClick={null} >
				{/*shadow*/}
				<Rectangle {...this.props} x={5} y={5} scale={1} radius={radius} fill="#8e8e8e" onClick={null} >
				</Rectangle>
				<Rectangle  {...this.props} x={0} y={0} scale={1} radius={radius} stroke={stroke} strokeWidth={strokeWidth} onClick={null}>
				</Rectangle>
				{this.props.children}
				<Rectangle {...this.props} x={0} y={0} scale={1} opacity={0} fill="#fff" cursor="pointer"
					onMouseMove={this.handleMouseMove}
					onMouseOut={this.handleMouseOut}
					>
				</Rectangle>
			</Group>
		);
	}


});

module.exports = ShadowRect;