var assign = require('object-assign');

function parseContent(datum, li) {
	var ret;
	if(typeof datum === 'string') {
		return parseLi(datum, li)
	}

	else if(typeof datum.content !== 'string')
		return ret;

	ret = parseLi(datum.content, li);
	return assign(ret, {style:datum.style, links: datum.links});	
}

//suitable object
function parseLi(content, li) {
	var ret = {
		li: undefined,
		content: ''
	};

	if(!content || typeof content !== 'string')
		return ret;
	if(li && content[0] === li.key) {
		ret.content = content.substr(1);
		ret.li = li.className;
	}
		
	else
		ret.content = content;
	return ret;
}

module.exports = {
	parseContent: parseContent,
	parseLi: parseLi
};