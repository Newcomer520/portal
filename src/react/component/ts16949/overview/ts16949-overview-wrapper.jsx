require('./ts16949-overview.scss');
var React = require('react/addons');
var Reactify = require('svg-parser/Reactify.jsx');
var inipWidget = require('inip-widget'); 
var Surface = inipWidget.utils.ART.Surface;
var cx = React.addons.classSet;
var Ellipse = require('my-react/component/ellipse.jsx');
var ShadowedRect = require('my-react/component/shadowed-rect.jsx');
var Rectangle = inipWidget.utils.Rectangle;
var Group = inipWidget.utils.ART.Group;
var MyGroup = require('my-react/component/my-group.jsx');
var Text = inipWidget.utils.ART.Text;
var STYLE = require('./style');


var Wrapper = React.createClass({	
	propTypes: {
		gotoProcess: React.PropTypes.func
	},
	getDefaultProps: function() {
		return {
			scale: 1
		};
	},
	render: function() {
		var scale = this.props.scale;
		var hoverDisabled = scale < 1;
		var processFunc = this.processFunc;
		return (
			<MyGroup scale={scale} hoverDisabled={hoverDisabled}>				
				<Group x={STYLE.padding+40} y={5}>
					<Rectangle  width={SIDEBAR.width} height={SIDEBAR.height} radius={20} stroke="#000" strokeWidth="2" fill="#78b0f0" />
					<Text font={font(30)} alignment="center" fill="#000" y={20} x={50+15} rotation={90} alignment="left">Customer Requirement</Text>
				</Group>
				<Group x={STYLE.width-100-STYLE.padding*2} y={STYLE.padding}>
					<Rectangle  width={SIDEBAR.width} height={SIDEBAR.height} radius={20} stroke="#000" strokeWidth="2" fill="#78b0f0" />
					<Text font={font(30)} alignment="center" fill="#000" y={20} x={50+15} rotation={90} alignment="left">Customer Satisfaction</Text>
				</Group>
				<ShadowedRect x={STYLE.width/2-STYLE.padding-150} y={STYLE.padding} width={300} height={80} fill="#3e8ce3" onClick={processFunc.bind(this,'MP1')}>
					<Group x={300/2} y={5}>
						<Text font={font()} alignment="center" fill="#000" y={0}>Business and KPI</Text>
						<Text font={font()} alignment="center" fill="#000" y={25}>management process</Text>
						<Text font={font()} alignment="center" fill="#000" y={50}>(4.1, 5, 6.1, 8.4, 8.5)</Text>
					</Group>
				</ShadowedRect>
				<Group x={0} y={10}>
					<Rectangle fill={SMALLTag.fill} width={SMALLTag.width} height={SMALLTag.height} />
					<Text font={font()} alignment="center" fill={SMALLTag.color} x={SMALLTag.width/2} y={SMALLTag.textY}>MP</Text>
				</Group>
				<Group x={0} y={STYLE.height/2-50}>
					<Rectangle fill={SMALLTag.fill} width={SMALLTag.width} height={SMALLTag.height} />
					<Text font={font()} alignment="center" fill={SMALLTag.color} x={SMALLTag.width/2} y={SMALLTag.textY}>COP</Text>
				</Group>
				<Group x={0} y={STYLE.height-50}>
					<Rectangle fill={SMALLTag.fill} width={SMALLTag.width} height={SMALLTag.height} />
					<Text font={font()} alignment="center" fill={SMALLTag.color} x={SMALLTag.width/2} y={SMALLTag.textY}>SP</Text>
				</Group>
				<Ellipse width={ES.width} height={ES.height} fill="#f5ca9e"  x={ES.x} y={ES.y1} scale={1} hoverCursor="pointer" onClick={processFunc.bind(this,'COP2')}>
					<Group y={-35}>
						<Text font={font()} alignment="center" fill="#000" y={0}>Sales and</Text>
						<Text font={font()} alignment="center" fill="#000" y={ES.toffset}>Marketing Process</Text>
						<Text font={font()} alignment="center" fill="#000" y={ES.toffset*2}>(5.2,5.5.2.1, 7.2,7.2.3,7.5.1.8)</Text>
					</Group>
				</Ellipse>
				<Ellipse width={ES.width} height={ES.height} fill="#ff9900"  x={ES.x} y={ES.y2} scale={1} onClick={processFunc.bind(this,'COP3')}>
					<Group y={-30}>
						<Text font={font()} alignment="center" fill="#000" y={0}>Program management</Text>
						<Text font={font()} alignment="center" fill="#000" y={ES.toffset}>Process</Text>
						<Text font={font()} alignment="center" fill="#000" y={ES.toffset*2}>( 7.1, 7.2 ,8.4.1)</Text>
					</Group>
				</Ellipse>
				<Ellipse width={ES.width} height={ES.height} fill="#6edb5b"  x={970-ES.x} y={ES.y1} scale={1} onClick={processFunc.bind(this,'COP5B')}>
					<Group y={-40}>
						<Text font={font()} alignment="center" fill="#000" y={0}>Customer</Text>
						<Text font={font()} alignment="center" fill="#000" y={ES.toffset}>Satisfaction Process</Text>
						<Text font={font()} alignment="center" fill="#000" y={ES.toffset*2}>(5.5.2.1,7.5.1.7, 8.2.1,</Text>
						<Text font={font()} alignment="center" fill="#000" y={ES.toffset*3}>8.4,8.5)</Text>
					</Group>
				</Ellipse>
				<Ellipse width={ES.width} height={ES.height} fill="#40e0d0"  x={970-ES.x} y={ES.y2} scale={1} hoverCursor="pointer" onClick={processFunc.bind(this,'COP5F')}>
					<Group y={-38}>
						<Text font={font()} alignment="center" fill="#000" y={0}>Manufacturing</Text>
						<Text font={font()} alignment="center" fill="#000" y={ES.toffset}>Process</Text>
						<Text font={font()} alignment="center" fill="#000" y={ES.toffset*2}>(6.3,6.4,7.5,7.6,8.2.3,</Text>
						<Text font={font()} alignment="center" fill="#000" y={ES.toffset*3}>8.2.4,8.3,8.4,8.5)</Text>
					</Group>
				</Ellipse>
				{/*central ellipse*/}
				<Ellipse width={ES.width} height={ES.height} fill="#f6e1ff"  x={ES.x+ES.width*0.8} y={ES.y2+65} scale={1} hoverCursor="pointer" onClick={processFunc.bind(this,'COP4')}>
					<Text font={font()} alignment="center" fill="#000" y={-30}>R & D</Text>
					<Text font={font()} alignment="center" fill="#000" y={-30+ES.toffset}>Process</Text>
					<Text font={font()} alignment="center" fill="#000" y={-30+ES.toffset*2}>(7.3,7.6.3,8.4,8.5)</Text>
				</Ellipse>
				{/*bottom container*/}
				<MyGroup x={STYLE.padding+SIDEBAR.width+50} y={STYLE.padding+SIDEBAR.height-40}>
					<Rectangle stroke="#000" strokeWidth={1} radius={10} width={STYLE.width-SIDEBAR.width*2-50*2} height={120} />
				{/*Row 0*/}
					<ShadowedRect x={STYLE.padding} y={BR.y1} width={BR.width0} height={BR.height} fill={BR.fill} onClick={processFunc.bind(this,'COP6')}>
						<Group y={8} x={BR.width0/2}>
							<Text font={font(12)} alignment="center" fill="#000" y={0}>Purchasing & Supplier Management</Text>
							<Text font={font(12)} alignment="center" fill="#000" y={ES.toffset}>Process (7.4,7.4.1,7.4.2)</Text>
						</Group>
					</ShadowedRect>
					<ShadowedRect x={STYLE.padding*2+BR.width0} y={BR.y1} width={BR.width0} height={BR.height} fill={BR.fill} onClick={processFunc.bind(this,'SP7')}>
						<Group y={8} x={BR.width0/2}>
							<Text font={font(12)} alignment="center" fill="#000" y={0}>Production Management</Text>
							<Text font={font(12)} alignment="center" fill="#000" y={ES.toffset}>Process (7.5.1.6, 7.5.5)</Text>
						</Group>
					</ShadowedRect>
					<ShadowedRect x={STYLE.padding*3+BR.width0*2} y={BR.y1} width={BR.width0} height={BR.height} fill={BR.fill} onClick={processFunc.bind(this,'SP8')}>
						<Group y={8} x={BR.width0/2}>
							<Text font={font(12)} alignment="center" fill="#000" y={0}>Human Resource Process</Text>
							<Text font={font(12)} alignment="center" fill="#000" y={ES.toffset}>(6.2)</Text>
						</Group>
					</ShadowedRect>
				{/*endof Row 0*/}
				{/*Row 1*/}				
					<ShadowedRect x={STYLE.padding} y={BR.y2} width={300} height={BR.height} fill={BR.fill} onClick={processFunc.bind(this,'SP9')}>
						<Group y={8} x={300/2}>
							<Text font={font(12)} alignment="center" fill="#000" y={0}>IT System. Management Process</Text>
							<Text font={font(12)} alignment="center" fill="#000" y={ES.toffset}>(6.3)</Text>
						</Group>
					</ShadowedRect>
					<ShadowedRect x={STYLE.padding*2+300} y={BR.y2} width={300} height={BR.height} fill={BR.fill} onClick={processFunc.bind(this,'SP10')}>
						<Group y={8} x={300/2}>
							<Text font={font(12)} alignment="center" fill="#000" y={0}>Quality Management Process</Text>
							<Text font={font(12)} alignment="center" fill="#000" y={ES.toffset}>(4.2,5,7.4.3,8.1,8.2, 8.4,8.5)</Text>
						</Group>
					</ShadowedRect>
				</MyGroup>
			</MyGroup>
		);
	},
	processFunc: function(process) {
		if(this.props.scale < 1)
			return;
		this.props.gotoProcess(process);
	}
});

module.exports = Wrapper;

var font = function(size) {
	size = size || 15;
	return 'bold ' + size + 'px Moderna';
}


var SMALLTag = {
	x: 0,
	width: 60,
	height: 30,
	textY: 10,
	fill: "orange",
	color: "#fff"
}

var SIDEBAR = {
	width: 100, 
	height:STYLE.height-STYLE.padding*2-80
}

var ES = {//Ellipse setting
	width: 250,
	height: 80,
	x: 280,
	y1: 130,
	y2: 215,
	toffset: 20
}
//bottom rectangle
var BR = {
	fill: '#b0f3f4',
	width0: 215,
	height: 50,
	y1: STYLE.padding,
	y2: STYLE.padding*2 + 50
}