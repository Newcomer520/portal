require('./process.scss');
var React = require('react');
var urlArrowToRight = require('file!./arrow-left.png');
var urlArrowToTop = require('file!./arrow-up.png');
var urlArrowToBotttom = require('file!./arrow-down.png');

var Wrapper = React.createClass({

	render: function() {
		return (			
			<div className="box central-box">
				<img className="arrow left" src={urlArrowToRight} />
				<img className="arrow right" src={urlArrowToRight} />
				<img className="arrow top-1" src={urlArrowToTop} />
				<img className="arrow top-2" src={urlArrowToTop} />
				<img className="arrow bot-1" src={urlArrowToBotttom} />
				<img className="arrow bot-2" src={urlArrowToBotttom} />

				<div className="blocker">
					<div className="central-wrapper">

					</div>

				</div>
			</div>
		);
	}

});

module.exports = Wrapper;