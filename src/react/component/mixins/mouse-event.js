var EventMixins = {
	getInitialState: function() {
		return {
			hover: false
		}
	},
	getDefaultProps: function() {
		return {
			hoverDisabled: true
		}
	},
	handleMouseMove: function() {	
		if(this.props.hoverDisabled === false && this.state.hover !== true) {
			this.setState({hover: true});
		}
	},
	handleMouseOut: function() {
		if(this.props.hoverDisabled === false)
			this.setState({hover: false});
	}
}

module.exports = EventMixins;