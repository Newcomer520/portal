var React = require('react');
var inipWidget = require('inip-widget');
var Ellipse = inipWidget.utils.Ellipse;
var Group = inipWidget.utils.ART.Group;
var mouseEvents = require('my-react/component/mixins/mouse-event');

var TsEllipse = React.createClass({
	propTypes: {
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired
	},	
	mixins: [mouseEvents],
	render: function() {
		var stroke = this.state.hover? '#db5bbb' : '#000'
		var cursor = this.state.hover? this.props.hoverCursor? this.props.hoverCursor: 'default': 'default';
		var strokeWidth = this.state.hover? 5: 2;
		return (
			<Group {...this.props} onClick={null}>
				<Ellipse {...this.props} strokeWidth={strokeWidth} stroke={stroke} x={-this.props.width/2} y={-this.props.height/2} scale={1} onClick={null}/>
				{this.props.children}
				<Ellipse 
					{...this.props}
					width={this.props.width} height={this.props.height} scale={1}
					x={-this.props.width/2} y={-this.props.height/2} fill="#fff" opacity={0}  cursor="pointer"
					onMouseMove={this.handleMouseMove} 
					onMouseOut={this.handleMouseOut} />
			</Group>
		);
	}
});

module.exports = TsEllipse;