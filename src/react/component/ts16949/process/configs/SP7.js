var process = {
	name: 'SP7',
	title: 'Purchasing & Supplier Management',
	material: [		
 		{content: 'SRM', links: [{text:'EISS/MSPG', url:'http://tw.yahoo.com'}, {text:'Workplace-SRM', url:'http://tw.yahoo.com'}]},
 		{content: 'ERP', links: [{text:'EISS/MSPG', url:'http://tw.yahoo.com'}, {text:'Workplace-EP', url:'http://tw.yahoo.com'}, {text:'Mall', url:'http://tw.yahoo.com'}]},
 		{content: 'SRS', links: [{text:'QM/SIMP', url:'http://tw.yahoo.com'}]},
		{content: 'PDM', links: [{text:'EISS/MSPG Workplace-PDM', url: '#'}]},
		{content: 'SIMP', links: [{text:'M/SQE', url: '#'}, {text:'Workplace-SIMP02', url: '#'}]}
	],
	competence: [
		{content:'TS16949 / VDA System Audit Training', links:[{text:'QS/4.Audit/4.4.2.ISO/TS 16949',url:'#'}]},
		{content: 'Certified auditor', links:[{text:'QM/QS(1)Workplace/Audit', url:'#'}]},
		{content: 'Vendor management skill', links:[{text:'TBD', url:'#'}]}
	], 
	input: [		
		{content:'Sourcing Strategy', links:[{text:'VSM', url: '#'}]},
		{content:'Supplier QTR(QBR)', links:[{text:'SQE/1.供應商稽核', url: '#'}]},
		{content:'Business Fulfillment and Commitment', links:[{text:'SRM/2.FCST Commit', url: '#'}]},
		{content:'RFI(RFQ)', links:[{text:'SRM/1.Sourcing', url: '#'}]},
		{content:'Proposed Suppliers', links:[{text:'TBD', url: '#'}]},
		{content:'RFQ Key Components', links:[{text:'SRM/1.Sourcing', url: '#'}]},
		{content:'Product Terminated', links:[{text:'TPS/3.(S)產品實現', url: '#'}]},
		{content:'Result of ECRB', links:[{text:'TBD', url: '#'}]},
		{content:'(Request for updated) AVL', links:[{text:'SRM/1.Sourcing', url: '#'}]}
	],
	output: [
		{content:'Approved Key Component Supplier', links:[{text:'SCM/2.供應商管理', url:'#'}]},
		{content:'SRS Result', links:[{text:'SQE/5.供應商評比', url:'#'}]},
		{content:'Key Supplier Roadmaps', links:[{text:'TBD', url:'#'}]},
		{content:'PSL(Preferred  Supplier List)', links:[{text:'SCM/2.供應商管理', url:'#'},{text:'EQS/2.採購管理', url:'#'},{text:'MROS/2.採購管理', url:'#'}]}
	],
	methods: [
		'Material Supplier Management Procedure',
		'Supplier Rating System Procedure',
		'Supplier Development Collaboration',
		'Supplier Chain Management Procedure',
		'Supplier capacity plan and allocation Procedure',
		'Supplier Quality Management Procedure',
		'Supplier Selection Procedure'
	],
	performance: [
		{content:'SRS (Supplier Rating System)', links:[{text:'SQE/5.供應商評比/5.1.SQPR', url:'#'}]},
		{content:'AVL change rate', links:[{text:'SCM/2.供應商管理/2.1.8.供應商收斂 KPI', url:'#'}]},
		{content: 'Suppler Quality KPI monitoring', links:[{text:'SQE/5.供應商評比/5.2.VPS', url:'#'}]}
	],
	center: [
		{content: 'Material and Supplier Sourcing', links: [{text: 'VSM', url:'#'}]},
		{content: 'Supplier Qualification', links: [{text: 'SRM', url:'#'},{text: 'EQS', url:'#'},{text: 'MROS', url:'#'}]},
		{content: 'New Project Supplier & Supplier Chain Selection', links: [{text: 'SRM', url:'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=M-ROOM'}]},
		{content: 'SRS Rating', links: [{text: 'SQE', url:'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=SQMR'}]},
		{content: 'Supplier Monitoring Mechanism', links: [{text: 'SQE', url:'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=SQMR'}]},
		{content: 'Escalation/Issue Notification', links: [{text: 'TBD', url:'#'}], style: {'backgroundColor': '#ebebf2'}}
	]
}

module.exports = process;