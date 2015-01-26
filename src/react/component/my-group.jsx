var React = require('react/addons');
var inipWidget = require('inip-widget');
var Group = inipWidget.utils.ART.Group;

var MyGroup = React.createClass({
	getDefaultProps: function() {
		return {
			hoverDisabled: false,
			key: Math.random()
		};
	},	
	render: function() {
		return (
			<Group {...this.props}>
				{this.renderChildren()}
			</Group>
		);
	},
	renderChildren: function() {
		var childrenWithHovered = 		
		this.props.children.map(function(child, idx) {		
			return React.addons.cloneWithProps(child, {
				hoverDisabled: this.props.hoverDisabled,
				key: child.key? child.key: (this.props.key + idx)
			});
		}, this);		
		return childrenWithHovered;
	}

});

module.exports = MyGroup;