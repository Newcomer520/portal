require('./process.scss');
var React = require('react');
var urlArrowToRight = require('file!./arrow-left.png');
var urlArrowToTop = require('file!./arrow-up.png');
var urlArrowToBotttom = require('file!./arrow-down.png');
var parseUtil = require('./configs/parse-util');

var Wrapper = React.createClass({
	propTypes: {
		data: React.PropTypes.array,
		name: React.PropTypes.string
	},
	render: function() {
		return (			
			<div className="box central-box">
				<img className="arrow left" src={urlArrowToRight} />
				<img className="arrow right" src={urlArrowToRight} />
				<img className="arrow top-1" src={urlArrowToBotttom} />
				<img className="arrow top-2" src={urlArrowToBotttom} />
				<img className="arrow bot-1" src={urlArrowToTop} />
				<img className="arrow bot-2" src={urlArrowToTop} />

				<div className="blocker">
					<div className="central-wrapper">
						<div className="title">Process</div>
						<div className="wrapper-inner">
							{this.renderDetails()}
						</div>
					</div>
				</div>
			</div>
		);
	},
	renderDetails: function() {
		var data = this.props.data;
		if(!data || !Array.isArray(data))
			return null;
		var rendered = data.map(function(datum, idx) {
			var metaInfo = parseUtil.parseContent(datum);
			var style = metaInfo.style;
			var arrowDown = idx == 0 ? null: <div className="arrow-down">↓</div>
			return (
				<div className="central-process" key={this.props.name + '-center-' + idx} style={style}>
					{arrowDown}
					{metaInfo.content}
					<div>
						{this.renderLinks(metaInfo.links, datum + '-' + idx)}
					</div>
				</div>
			);
		}, this);
		return rendered;
	},
	renderLinks: function(links, parentKey) {
		if(!links || !Array.isArray(links))
			return null;
		var rendered = links.map(function(link, idx) {
			return (
				<a className="link" href={link.url} target="_blank" key={parentKey+'-'+idx}>
					{link.text}
				</a>
			);
		});

		return rendered;
	}

});

module.exports = Wrapper;