global.__base = __dirname + '/';
var React = require('react');
var Ts16949Btn = require('./react/component/ts16949/ts16949-button.jsx');
var Ts16949CenterZone = require('./react/component/ts16949/ts16949-center-zone.jsx'); 
var reactify = require('svg-parser/Reactify.jsx');
React.render(
	<Ts16949Btn />,
	document.getElementById('li-ts16949')
);

React.render(
	<Ts16949CenterZone duration={1000} />,
	document.getElementById('ts16949-center-zone')

)

