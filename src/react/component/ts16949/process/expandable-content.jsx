require('./expandable-content.scss');
var React = require('react/addons');
var urlExpand = require('file!./toggle-expand.png');
var urlCollapse = require('file!./toggle-collapse.png');
var cx = React.addons.classSet;

var ExpandableContent = React.createClass({	
	propTypes: {
		content: React.PropTypes.string,
		links: React.PropTypes.array,
		style: React.PropTypes.object
	},
	getInitialState: function() {
		return {
			key: Math.random(),
			isExpanded: false
		};
	},
	render: function() {		
		var url = this.state.isExpanded? urlCollapse: urlExpand;
		return (
			<div className="expandable-item" style={this.props.style}>				
				<span>{this.props.content}</span>
				<img className="icon" src={url} onClick={this.toggle}/>
				{this.renderLinks()}
			</div>
		);
	},
	renderLinks: function() {
		var links = this.props.links;
		if(!links || !Array.isArray(links))
			return null;
		var rendered = links.map(function(link, idx) {
			if(!link.text || !link.url)
				return null;
			var key = this.state.key + '-' + idx;
			return <a key={key} href={link.url} target="_blank">{link.text}</a>
		}, this);
		var cls = cx({
			'content-links': true,
			'collapse': !this.state.isExpanded
		});
		return (
			<div className={cls}>
				{rendered}
			</div>
		);
	},
	toggle: function() {
		this.setState({isExpanded: !this.state.isExpanded});
	}

});

module.exports = ExpandableContent;