require('./process.scss')
var React = require('react/addons');
var inipWidget = require('inip-widget');
var Surface = inipWidget.utils.ART.Surface;
var Wrapper = require('../overview/ts16949-overview-wrapper.jsx');
var OverviewWrapper = require('my-react/component/ts16949/overview/ts16949-overview-wrapper.jsx');
var cx = React.addons.classSet;
var processStore = require('my-react/stores/process-store');
var processAction = require('my-react/actions/ts16949-process-action');
var assign = require('object-assign');

var Ts16949Process = React.createClass({	
	propTypes: {
		//processId: React.PropTypes.string
	},	
	getInitialState: function() {
		return {
			processData:  {
				name: '',
				title: ''
			}
		};
	},
	componentDidMount: function() {
		processStore.addProcessListener(this.handleProcess);
	},
	componentWillUnmount: function() {
		processStore.removeProcessListener(this.handleProcess);
	},	
	render: function() {		
		var isHidden = this.props.hidden;
		var data = this.state.processData;
		var index = PROCESSES.indexOf(data.name) >= 0 ? (PROCESSES.indexOf(data.name) + 1): '978';
		var cls = cx({
			'entry-page': true,
			'hide-me': isHidden
		});
		return (
			<div className={cls}>
				<div className="ts16949-process">
					<div className="row row0">
						{this.renderNavigator()}
						<br/>
						<div className="title">
							{index + '. ' + data.title}
						</div>
					</div>					
					<div className="row row1">
						<div className="column col-md-3">
							{this.renderUtil('input')}
						</div>
						<div className="column col-md-6">
							<div className="row1-1">
								<div className="column col-md-6">									
									{this.renderUtil('material')}
								</div>
								<div className="column col-md-6">									
									{this.renderUtil('competence')}
								</div>
							</div>
							<div className="row1-2">
								<div className="column col-md-12">
									<div className="box">
									</div>
								</div>
							</div>
						</div>
						<div className="column col-md-3">							
							{this.renderUtil('output')}
						</div>
					</div>
					<div className="row row2">
						<div className="column col-md-6">							
							{this.renderUtil('methods')}
						</div>
						<div className="column col-md-6">
							{this.renderUtil('performance')}
						</div>
					</div>
					<div className="overview-widget" onClick={this.props.gotoOverview}>
						<Surface width={130} height={60}>
							<OverviewWrapper scale={0.1} />
						</Surface>
					</div>
				</div>
			</div>
		);
	},
	renderUtil: function(item) {
		var process = this.state.processData['name'];
		var data = this.state.processData[item];		
		if(!data) {			
			return null;
		}
			
		var title = BOXES[item];
		var rendered = [];
		var li;
		var children;
		var rendered = [];
		var m;
		var metaInfo;

		for(var i = 0; i < data.length; i++) {
			children=[];			
			metaInfo = parseContent(data[i]);
			m = <span style={metaInfo.style}>{metaInfo.content}</span>
			while(i+1 < data.length) {
				metaInfo = parseContent(data[i+1]);
				if(!metaInfo.li)
					break;
				children.push(
					<li key={process + '-' + item + '-' + i}>
						<span style={metaInfo.style}>{metaInfo.content}</span>
					</li>
				);
				/*if(data[i+1][0] !== '-') {
					break;					
				}
				children.push(
					<li key={process + '-' + item + '-' + i}>{data[i+1].substr(1)}</li>
				);*/
				i = i + 1;
			}
			if(children.length > 0)
				children = <ul className="dash">{children}</ul>;
			rendered.push(
				<li key={process + '-' + item + '-' + i}>
					{m}
					{children}
				</li>
			);
		}
		/*var rendered = data.map(function(m, idx) {
			return <li key={process + '-' + item + '-' + idx}>{m}</li>
		}, this);*/
		return (
			<div className="box">
				<span className="title">{title}</span>
				<ul>{rendered}</ul>
			</div>
		);

		function parseContent(datum) {
			var ret;
			if(typeof datum === 'string') {
				return parseLi(datum)
			}

			else if(typeof datum.content !== 'string')
				return ret;

			ret = parseLi(datum.content);
			console.log(ret)
			return assign(ret, {style:datum.style});
			//suitable object


			function parseLi(content) {
				var ret = {
					li: undefined,
					content: ''
				};

				if(!content || typeof content !== 'string')
					return ret;
				if(content[0] === '-') {
					ret.content = datum.substr(1);
					ret.li = '-';
				}
					
				else
					ret.content = content;
				return ret;
			}

		}
	},
	handleProcess: function(data) {
		this.setState({
			processData: data
		});
	},
	switchProcess: function(process) {
		console.log(process)
		processAction.retrieveProcess(process);
	},
	renderNavigator: function() {
		var lis = PROCESSES.map(function(p, idx) {
			var cls =cx({
				current: p === this.state.processData.name
			})
			return <li  key={'ts16949-nav-' + idx}><span className={cls} onClick={this.switchProcess.bind(this, p)}>{p}</span></li>;
		}, this);
		return <ul className="nav">{lis}</ul>;
	}

});

module.exports = Ts16949Process;
var PROCESSES = [
	'MP1',
	'COP2',
	'COP3',
	'COP4',
	'COP5F',
	'COP5B',
	'COP6',
	'SP7',
	'SP8',
	'SP9',
	'SP10',
	'SP11'];
var BOXES = {
	material: 'Material/Equipment',
	competence: 'Competence/Training',
	input: 'Input',
	output: 'Output',
	methods: 'Methods/Procedure',
	performance: 'Performance/measurement'
}
/*
var PROCESSES = {
	'MP1': {
		title: ''
	},
	'COP2': {
		title: 'Business & KPI management process'
	},
	'COP3': {
		title: ''
	},
	'COP4': {
		title: ''
	},
	'COP5F': {
		title: ''
	},
	'COP5B': {
		title: ''
	},
	'COP6': {
		title: ''
	},
	'SP7': {
		title: ''
	},
	'SP8': {
		title: ''
	},
	'SP9': {
		title: ''
	},
	'SP10': {
		title: ''
	},
	'SP11': {
		title: ''
	}
}*/	