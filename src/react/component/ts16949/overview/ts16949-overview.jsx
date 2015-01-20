require('./ts16949-overview.scss');
var React = require('react/addons');
var cx = React.addons.classSet;

var Ts16949Overview = React.createClass({
	
	render: function() {
		return (
			<div id="ts16949-overview">
				<div className="business-and-kpi" onClick={this.getProcessConfig.bind(this, 'sp1')}>
					Business and KPI
					management process
					(4.1, 5, 6.1, 8.4, 8.5)
				</div>
			</div>
		);
	},
	getProcessConfig: function(processId) {
		console.log('../process/configs/' + processId)
		require(['../process/configs/' + processId], function(process) {
			alert(process.name)
			console.log(process)
		});
	}

});

module.exports = Ts16949Overview;