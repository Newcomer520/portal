var process = {
	name: 'COP6',
	title: 'Production Management',
	material: [		
 		'ERP(SAP, MFG/Pro)',
		'MPS/MRP',
		'DSS (Demand vs Supply Simulation)',
		'MES (Manufacturing Excellent System))',
		'WMS/WH equipment (Forklift/trailer/Packing…etc)',
		'(Warehouse Management System)'
	],
	competence: [
		'SCM/Material markets knowledge/concept',
		'Production planning (MPS/WPS/DPS)',
		'Well operation skill on support tooling or system',
		'(SAP/MES/eMatrix/MRP/IDEA/Excel program and so on.)',
		'Forklift/ chemical handling certification'
	],
	input: [		
		'Demand forecast and order (COP2)',
		'-Short term demand (12weeks )',
		'-Long term demand forecast Supply commitment and delivery (S)',
		'Incoming material (S)',
		'Finished goods and semi-finished goods handling (include RMA) (C,COP5)',
		'Samples (COP5)',
		'BOM (COP4)',
		'Customs declaration (G)',
		'OEE(COP5B)',
		'Competent employees (SP9)',
		'-DL recruit plan',
		'Customer Scorecard  & Analysis Report (COP6)'
	],
	output: [
		'Business fulfillment and commitment (COP2,SP7)',
		'Factory demand forecast/allocation & commitment (COP2)',
		'Shipment execution and logistics (COP2)',
		'Accepted BOM material &Auxiliary (COP5)',
		'Capa. Plan/schedule  (COP5)',
		'MPS & DPS (COP5)',
		'Customs declaration forms and application (C)',
		'Bonded operation and document shipment (C)',
		'Investment planning (COP5B)',
		'EQ move/release plan (COP5B)'
	],
	methods: [
		'6100P-001 Supplier Chain Management Procedure',
		'II2OS-0004 Warehousing Management Procedure',
		'6120P-001 Customer Order Handling Procedure  for MD BU MS products',
		'II2OS-0005 物料管制作業系統Material Control Procedure',
		'6110P-001  Sales Demand Planning Procedure – MD BU MS product apply',
		'4420P-001 QUOTATION AND PRICE CHANGE PROCEDUR',
		'6150P-002 Supplier capacity plan and allocation Procedure',
		'6500P-001  Back-end procurement Procedure',
		'6150P-004  Risk Order Management Procedure',
		'5100P-001 Front End Production Planning System',
		'6150P-001 Material Planning Procedure',
		'6150P-003  Material Review Board Procedure'
	],
	performance: [
		'CLIP (Conformed Line Item Performance) %',
		'HUB stock (DOS)',
		'Inventory turn over rate (turns)',
		'Obsolesce ratio'
	]
}

module.exports = process;