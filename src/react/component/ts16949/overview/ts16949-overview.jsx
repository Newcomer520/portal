require('./ts16949-overview.scss');
//var a = require(DIRSRC +'svg2json/t1');
var React = require('react/addons');
var Reactify = require('svg-parser/Reactify.jsx');
var inipWidget = require('inip-widget'); 
var Surface = inipWidget.utils.ART.Surface;
var cx = React.addons.classSet;
//var BusinessAndKpi = Reactify(require('svg-dir/title-business-and-kpi'), 'title-business-and-kpi');
//var BusinessAndKpi = Reactify(require(DIRREACT +'svg2json/title-business-and-kpi'),'title-business-and-kpi');
var BusinessAndKpi = Reactify(require('svg2json/title-business-and-kpi'), 'title-business-and-kpi');



var Ts16949Overview = React.createClass({
	
	render: function() {
		return (
			<div classNmae="ts16949-overview">
				<Surface width={970} height={450}>
					<BusinessAndKpi />
				</Surface>
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