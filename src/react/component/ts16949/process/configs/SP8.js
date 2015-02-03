var process = {
	name: 'SP8',
	title: 'Production Management',
	material: [		
 		{content: 'ERP', links:[{text: 'GPMC/MC Workplace - Oracle', url: '#'},{text:'GPMC/MC Workplace - EP Mall', url:'#'}]},
		{content: 'MPS/MRP', links:[{text: 'GPMC/PP Workplace - INXSS', url: '#'}, {text:'GPMC/MP Workplace - MPCS',url:'#'}]},
		{content: 'DSS', links:[{text: 'GPMC/3.DC Flow', url: '#'}]},
		{content: 'MES', links:[{text: 'GPMC/PC Workplace - INX Report System', url: '#'}]},
		{content: 'WMS', links:[{text: 'GPMC/Logistics Workplace - WMS', url: '#'}]}
	],
	competence: [
		{content: 'SCM/Material Markets Knowledge/Concept', links:[{text: 'GPMC - GPMC Studio', url: '#'}]},
		{content: 'Production Planning', links:[{text: 'GPMC - GPMC Studio', url: '#'}]},
		{content: 'Well Operation Skill On Support Tooling Or System', links:[{text: 'GPMC - GPMC Studio', url: '#'}]}
	], 
	input: [
		{content: 'Demand forecast and order', links:[{text: 'CRM/2.IOS3', url: '#'}]},
		{content: 'Incoming material (S)', links:[{text: 'SRM/4.Receive', url: '#'}]},
		{content: 'Finished goods and semi-finished goods handling', links:[{text: 'GIM/2.成品(F)', url: '#'},{text:'GIM/3.半成品(S)', url: '#'}]},
		{content: 'Samples', links:[{text: 'GPMC/PC Workplace - Exp Approval System', url: '#'}]},
		{content: 'BOM', links:[{text: 'GPMC/MP Workplace - PDM', url: '#'}]},
		{content: 'Customs Declaration', links:[{text: 'IEB/2.進口', url: '#'}, {text:'IEB/3.出口', url: '#'}]},
		{content: 'OEE', links:[{text: 'EMS/2.設備效能(E)', url: '#'}]},
		{content: 'Competent Employees -DL Recruit Plan', links:[{text: 'RMS/1.Head Count', url: '#'}]},
		{content: 'Customer Scorecard  & Analysis Report', links:[{text: 'PMS/2.客戶管理', url: '#'}]}
	],
	output: [
		{content: 'Business fulfillment and commitment', links:[{text: 'SiS/2.Delivery', url: '#'}]},
		{content: 'Factory demand forecast/allocation & commitment', links:[{text: 'PPC/1.排產管理(P)', url: '#'},{text: 'PPC/3.達產交貨(A)', url: '#'}]},
		{content: 'Shipment execution and logistics', links:[{text: 'SCM/8.運(T)', url: '#'}]},
		{content: 'Accepted BOM material & Auxiliary', links:[]},
		{content: 'Capa. Plan/Schedule', links:[{text: 'CPS/2.承諾產能', url: '#'}]},
		{content: 'MPS & DPS', links:[{text: 'SiS/3.Production', url: '#'}]},
		{content: 'Investment planning', links:[{text: 'ABC/1.資本計畫', url: '#'}]},
		{content: 'EQ move/release plan', links:[{text: 'CPS/3.產能履歷', url: '#'}]}
	],
	methods: [		
		'Methods/Procedure/Support Process',
		'Supplier Chain Management Procedure',
		'Warehousing Management Procedure',
		'Customer Order Handling Procedure for MD BU MS products',
		'物料管制作業系統 Material Control Procedure',
		'Sales Demand Planning Procedure – MD BU MS product apply',
		'QUOTATION AND PRICE CHANGE PROCEDUR',
		'Supplier capacity plan and allocation Procedure',
		'Back-end procurement Procedure',
		'Risk Order Management Procedure',
		'Front End Production Planning System',
		'Material Planning Procedure',
		'Material Review Board Procedure'
	],
	performance: [
		{content: 'CLIP (Conformed Line Item Performance) %', links:[{text: 'PPC/3.1.2.投產實績', url: '#'}]},
		{content: 'HUB stock (DOS)', links:[{text: 'GIM/1.Inventory/1.3.2.Aging', url: '#'}]},
		{content: 'Inventory turn over rate (turns)', links:[{text: 'GIM/1.Inventory/1.3.3.INV Turnover Day', url: '#'}]},
		{content: 'Obsolesce ratio', links:[{text: 'CPS/2.1.1.Prod Yield', url: '#'}]}
	],
	center: [
		{content: 'Forecast & Demand Consolidation', links: [{text: 'CRM', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=V_Room'}]},
		{content: 'Customer Service & Order Management', links: [{text: 'CRM', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=V_Room'}]},
		{content: 'Demand Planning & Allocation', links: [{text: 'GPMC', url: 'http://inip.cminl.oa/ip/GPMC/Pages/Home.aspx'}]},
		{content: 'Production Planning & Execution', links: [{text: 'PPC', url: 'http://psam.cminl.oa/Form/FRM_FA100_01.aspx?SYSID=W_ROOM&IFELITE=Y'}]},
		{content: 'Capacity Planning', links: [{text: 'CPS', url: 'http://psam.cminl.oa/Form/FRM_FA100_01.aspx?SYSID=CPS&IFELITE=Y'}]},
		{content: 'Material Planning', links: [{text: 'SCM', url: 'http://psam.cminl.oa/Form/FRM_FA100_01.aspx?SYSID=SCM&IFELITE=Y'}]},
		{content: 'WH & Logistics', links: [{text: 'SCM', url: 'http://psam.cminl.oa/Form/FRM_FA100_01.aspx?SYSID=SCM&IFELITE=Y'}]},
	]
}

module.exports = process;