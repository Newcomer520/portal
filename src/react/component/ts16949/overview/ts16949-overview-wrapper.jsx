require('./ts16949-overview.scss');
var React = require('react/addons');
var inipWidget = require('inip-widget'); 
var Surface = inipWidget.utils.ART.Surface;
var Shape = inipWidget.utils.ART.Shape;
var cx = React.addons.classSet;
var ShadowedRect = require('my-react/component/shadowed-rect.jsx');
var Rectangle = inipWidget.utils.Rectangle;
var Group = inipWidget.utils.ART.Group;
var MyGroup = require('my-react/component/my-group.jsx');
var Text = inipWidget.utils.ART.Text;
var STYLE = require('./style');
var LightBlueBox = require('my-react/component/light-blue-box.jsx');
var doubleArrowPath = require('my-react/component/ts16949/double-arrow-path');
var singleArrowPath = require('my-react/component/ts16949/single-arrow-path');

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
			<MyGroup scale={scale}>
			{/*row 0*/}
				<LightBlueBox x={GRID[0][0].x} y={GRID[0][0].y} width={300} height={70} onClick={processFunc.bind(this,'MP1')}>					
						<Text font={font()} alignment="center" fill="#000" x={150} y={5}>Business and KPI</Text>
						<Text font={font()} alignment="center" fill="#000" x={150} y={25}>management process</Text>
						<Text font={font()} alignment="center" fill="#000" x={150} y={45}>(4.1, 5, 6.1, 8.4, 8.5)</Text>
					{this.renderTextBox('1',{fill:'green', x:-27, y:25})}
				</LightBlueBox>				
			{/*row 1*/}
				<LightBlueBox x={GRID[1][0].x} y={GRID[1][0].y} width={200} height={180} hoverDisabled={true} mask={false}>
					<Text font={font(20)} alignment="center" fill="#000" x={100} y={70}>Customer</Text>
					<Text font={font(20)} alignment="center" fill="#000" x={100} y={100}>Requirement</Text>
				</LightBlueBox>
			{/*central block*/}			
				<LightBlueBox x={GRID[1][1].x} y={GRID[1][1].y} width={400} height={180} hoverDisabled={true} radius={50} mask={false}>
			{/*arrows*/}
					<Shape scale={2.5} x={10} y={30} d="m 45,10 20,0" stroke="#000" strokeWidth={0.5} />
					<Shape x={150} y={45+10} scaleX={0.8} rotation={-180} d={ARROW1} fill="#000"></Shape>
					<Shape scale={2.5} x={140} y={30} d="m 45,10 20,0" stroke="#000" strokeWidth={0.5} />
					<Shape x={280} y={45+10} scaleX={0.8} rotation={-180} d={ARROW1} fill="#000"></Shape>
					<Shape scale={2.5} x={50} y={90} d="m 108,0 0,2 -120,0 0,8 10,0" stroke="#000" strokeWidth={0.5} />
					<Shape x={40} y={115} scaleX={0.8} rotation={-180} d={ARROW1} fill="#000"></Shape>
					<Shape scale={2.5} x={50} y={90} d="m 45,10 25,0" stroke="#000" strokeWidth={0.5} />
					<Shape x={220} y={115} scaleX={0.8} rotation={-180} d={ARROW1} fill="#000"></Shape>

					<LightBlueBox x={10} y={20} width={110} height={70} fill="#FF7F24" stroke="#fff" onClick={processFunc.bind(this,'COP2')}>
						<Text font={font(11)} alignment="center" fill="#000" x={55} y={5}>Sales and</Text>
						<Text font={font(11)} alignment="center" fill="#000" x={55} y={20}>Marketing Process</Text>
						<Text font={font(11)} alignment="center" fill="#000" x={55} y={35}>(5.2,5.5.2.1, 7.2,7.2.3,</Text>
						<Text font={font(11)} alignment="center" fill="#000" x={55} y={50}>7.5.1.8)</Text>						
						{this.renderTextBox('2',{fill:'blue', x:42, y:-27})}
					</LightBlueBox>
					<LightBlueBox x={160} y={20} width={100} height={70} fill="#FF7F24" stroke="#fff" onClick={processFunc.bind(this,'COP3')}>
						<Text font={font(11)} alignment="center" fill="#000" x={50} y={5}>Program</Text>
						<Text font={font(11)} alignment="center" fill="#000" x={50} y={20}>Management</Text>
						<Text font={font(11)} alignment="center" fill="#000" x={50} y={35}>Process</Text>
						<Text font={font(11)} alignment="center" fill="#000" x={50} y={50}>(7.1, 7.2, 8.4.1)</Text>		
						{this.renderTextBox('3',{fill:'blue', x:55, y:-27})}
					</LightBlueBox>
					<LightBlueBox x={290} y={20} width={100} height={70} fill="#FF7F24" stroke="#fff" onClick={processFunc.bind(this,'COP4')}>
						<Text font={font(11)} alignment="center" fill="#000" x={50} y={10}>R & D</Text>
						<Text font={font(11)} alignment="center" fill="#000" x={50} y={25}>Process</Text>
						<Text font={font(11)} alignment="center" fill="#000" x={50} y={40}>(7.3, 7.6.3, 8.4, 8.5)</Text>
						{this.renderTextBox('4',{fill:'blue', x:42, y:-27})}
					</LightBlueBox>

					<LightBlueBox x={50} y={100} width={120} height={70} fill="#FF7F24" stroke="#fff" onClick={processFunc.bind(this,'COP5F')}>
						<Group x={60} y={5}>
							<Text font={font(11)} alignment="center" fill="#000" y={0}>Manufacturing</Text>
							<Text font={font(11)} alignment="center" fill="#000" y={15}>Process</Text>
							<Text font={font(11)} alignment="center" fill="#000" y={30}>(6.3, 6.4, 7.5, 7.6, 8.2.3,</Text>
							<Text font={font(11)} alignment="center" fill="#000" y={45}>8.2.4, 8.3, 8.4, 8.5)</Text>
						</Group>					
						{this.renderTextBox('5',{fill:'blue', x:100, y:71})}
					</LightBlueBox>					
					<LightBlueBox x={230} y={100} width={120} height={70} fill="#FF7F24" stroke="#fff" onClick={processFunc.bind(this,'COP6')}>
						<Group x={60} y={5}>
							<Text font={font(11)} alignment="center" fill="#000" y={0}>Customer</Text>
							<Text font={font(11)} alignment="center" fill="#000" y={15}>Satisfaction Process</Text>
							<Text font={font(11)} alignment="center" fill="#000" y={30}>(5.5.2.1, 7.5.1.7, 8.2.1,</Text>
							<Text font={font(11)} alignment="center" fill="#000" y={45}>8.4, 8.5)</Text>
						</Group>													
						{this.renderTextBox('6',{fill:'blue', x:100, y:71})}
					</LightBlueBox>					
				</LightBlueBox>

				<LightBlueBox x={GRID[1][2].x} y={GRID[1][2].y} width={200} height={180} hoverDisabled={true} mask={false}>
					<Group x={100} y={70}>
						<Text font={font(20)} alignment="center" fill="#000" y={0}>Customer</Text>
						<Text font={font(20)} alignment="center" fill="#000" y={30}>Satisfaction</Text>
					</Group>				
				</LightBlueBox>

				<LightBlueBox x={GRID[2][0].x} y={GRID[2][0].y} width={800} height={120} hoverDisabled={true} radius={30}  mask={false}>
					<LightBlueBox x={120} y={5} width={220} height={50} fill="#FFCC11" stroke="white" onClick={processFunc.bind(this,'SP7')}>
						<Group x={110} y={10}>
							<Text font={font(12)} alignment="center" fill="#000" y={0}>Purchasing & Supplier Management</Text>
							<Text font={font(12)} alignment="center" fill="#000" y={20}>Process (7.4, 7.4.1, 7.4.2)</Text>
						</Group>
						{this.renderTextBox('7',{fill:'#bf0000', x:3, y:22})}
					</LightBlueBox>
					<LightBlueBox x={120 + 220 + 20} y={5} width={220} height={50} fill="#FFCC11" stroke="white" onClick={processFunc.bind(this,'SP8')}>
						<Group x={110} y={10}>
							<Text font={font(12)} alignment="center" fill="#000" y={0}>Production Management</Text>
							<Text font={font(12)} alignment="center" fill="#000" y={20}>Process (7.5.1.6, 7.5.5)</Text>
						</Group>
						{this.renderTextBox('8',{fill:'#bf0000', x:3, y:22})}
					</LightBlueBox>
					<LightBlueBox x={120 +220*2 + 20*2} y={5} width={150} height={50} fill="#FFCC11" stroke="white" onClick={processFunc.bind(this,'SP9')}>
						<Group x={75} y={10}>
							<Text font={font(12)} alignment="center" fill="#000" y={0}>Human Resource</Text>
							<Text font={font(12)} alignment="center" fill="#000" y={20}>Process (6.2)</Text>
						</Group>
						{this.renderTextBox('9',{fill:'#bf0000', x:3, y:22})}
					</LightBlueBox>
				{/*2nd row*/}
					<LightBlueBox x={100} y={55+5} width={300} height={50} fill="#FFCC11" stroke="white" onClick={processFunc.bind(this,'SP10')}>
						<Group x={150} y={10}>
							<Text font={font(12)} alignment="center" fill="#000" y={0}>IT System Management</Text>
							<Text font={font(12)} alignment="center" fill="#000" y={20}>Process (6.3)</Text>
						</Group>
						{this.renderTextBox('10',{fill:'#bf0000', x:3, y:22})}
					</LightBlueBox>
					<LightBlueBox x={100+300+20} y={55+5} width={300} height={50} fill="#FFCC11" stroke="white" onClick={processFunc.bind(this,'SP11')}>
						<Group x={150} y={10}>
							<Text font={font(12)} alignment="center" fill="#000" y={0}>Quality Management Process</Text>
							<Text font={font(12)} alignment="center" fill="#000" y={20}>(4.2, 5, 7.4.3, 8.1, 8.2, 8.4, 8.5)</Text>
						</Group>
						{this.renderTextBox('11',{fill:'#bf0000', x:3, y:22})}
					</LightBlueBox>					
				</LightBlueBox>
				{/*small tags*/}
				<Group x={0} y={10}>
					<Rectangle fill="green" width={SMALLTag.width} height={SMALLTag.height} radius={3} />
					<Text font={font()} alignment="center" fill={SMALLTag.color} x={SMALLTag.width/2} y={SMALLTag.textY}>MP</Text>
				</Group>
				<Group x={0} y={STYLE.height/2-50}>
					<Rectangle fill="blue" width={SMALLTag.width} height={SMALLTag.height} radius={3} />
					<Text font={font()} alignment="center" fill={SMALLTag.color} x={SMALLTag.width/2} y={SMALLTag.textY}>COP</Text>
				</Group>
				<Group x={0} y={STYLE.height-90}>
					<Rectangle fill="#bf0000" width={SMALLTag.width} height={SMALLTag.height} radius={3} />
					<Text font={font()} alignment="center" fill={SMALLTag.color} x={SMALLTag.width/2} y={SMALLTag.textY}>SP</Text>
				</Group>
				{/*arrow is at the top layer!*/}
				<Shape x={970/2+50} y={75} rotation={90} scaleX={0.03} scaleY={0.10} d={doubleArrowPath} fill="blue" />
				<Shape x={GRID[1][0].x+215} y={175} scaleY={0.6} scaleX={0.9} d={singleArrowPath} fill="blue" />
				<Shape x={GRID[1][1].x+410} y={175} scaleY={0.6} scaleX={0.9} d={singleArrowPath} fill="blue" />
				<Shape x={970/2-60} y={GRID[2][0].y-35} rotation={90} scaleX={0.03} scaleY={0.10} d={doubleArrowPath} fill="blue" />
				<Shape x={970/2+140} y={GRID[2][0].y-35} rotation={90} scaleX={0.03} scaleY={0.10} d={doubleArrowPath} fill="blue" />
			</MyGroup>
		);
	},
	renderTextBox: function(text, props) {		
		return (
			<Group {...props}>
				<Rectangle width={26} height={26} radius={5} {...props} x={0} y={0}>
				</Rectangle>
				<Text font={font()} alignment="center" fill="white" x={13} y={5}>
					{text}
				</Text>
			</Group>
			
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
var GRID = [
	[{x:970/2-150, y:10}],
	[{x:20, y:100}, {x:970/2-200, y:100}, {x: 970-20-200, y: 100}],
	[{x:970/2-800/2, y:450-10-120}]	
]
var ARROW1 = "M 0.0,0.0 L 5.0,-5.0 L -12.5,0.0 L 5.0,5.0 L 0.0,0.0 z"
/*
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
				<Ellipse width={ES.width} height={ES.height} fill="#f6e1ff"  x={ES.x+ES.width*0.8} y={ES.y2+65} scale={1} hoverCursor="pointer" onClick={processFunc.bind(this,'COP4')}>
					<Text font={font()} alignment="center" fill="#000" y={-30}>R & D</Text>
					<Text font={font()} alignment="center" fill="#000" y={-30+ES.toffset}>Process</Text>
					<Text font={font()} alignment="center" fill="#000" y={-30+ES.toffset*2}>(7.3,7.6.3,8.4,8.5)</Text>
				</Ellipse>
				<MyGroup x={STYLE.padding+SIDEBAR.width+50} y={STYLE.padding+SIDEBAR.height-40}>
					<Rectangle stroke="#000" strokeWidth={1} radius={10} width={STYLE.width-SIDEBAR.width*2-50*2} height={120} />
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
				</MyGroup>*/