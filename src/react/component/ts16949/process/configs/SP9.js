var process = {
	name: 'SP9',
	title: 'Human Resource',
	material: [		
		'SP9.1Organization information management  system(OIMS)',
		'SP9.2Recruiting system (manpower demand, aptitude test, etc.)',
		'SP9.3 Learning certification system(LCS)',
		'SP9.4Performance management  system, promotion system',
		'SP9.5Compensation system (SAP/Smooth)',
		'SP9.6Resignation system',
		'SP9.6Employee Care Center System (ECC)'
	],
	competence: [
		'HR rule & regulations',
		'Labor law',
		'Office system operation skill'
	], 
	input: [		
		'Auto business strategies  and functional objectives (MP1)',
		'Organization‘s policies (MP1)',
		'-Align organizational structure to delivery of strategy',
		{content: '-Recruiting policies'},
		{content: '-Promotion policies'},
		'-Compensation & benefit policies',
		'-Training Policies',
		'-Employee Relation policies',
		'KPI settings for all processes (MP1)'
	],
	output: [
		'SP9.1 Effective Organization Chart(OMS2.2.1)',
		'SP9.2 Qualified employees(RMS2.4)',
		'SP9.3 Certified employees(HRD2.1, 2.2)',
		'SP9.4 Employee annual performance Rating(PMD)',
		'SP9.4 Performance Improvement Program (PIP)',
		'SP9.5 Employees’ retention & reward program (retention bonus ,stock option , performance  bonus and etc.) (CBMS2.x)',
		'SP9.5 Payroll (CBMS2.x)',
		'SP9.6 Analysis of ER cases (EC2 2.1)'
	],
	methods: [		
		'SP9.1 Organization Management Procedure_v02',
		'SP9.2 Taiwan recruiting management Procedure_v02',
		'SP9.3 Qualified Personnel Examination Procedure_v01',
		'SP9.3 Training Procedure_v01',
		'SP9.4 Performance Management Procedure _v02',
		'SP9.5 Compensation & Benefits Management Procedure',
		'SP9.6 Internal Communication Procedure_v01'
	],
	performance: [
		'SP9.1 On time Rate',
		'SP9.2 Job fulfilling rate(RMS2.4)',
		'SP9.3 Certification Rate(HRD2.1,2.2)',
		'SP9.4 Delivery Rate / Improvement Rate(100%)',
		'SP9.5 Accuracy of payroll (100%)',
		'SP9.6 Preliminary reply rate on time(100%)'
	],
	center: [
		{content: 'SP9.1 Organization Management', links: [{text: 'OMS', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=OMS&IFELITE=Y'}]},
		{content: 'SP9.2 Recruiting & Staffing', links: [{text: 'RMS', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=RMS_AVO&IFELITE=Y'}]},
		{content: 'SP9.3 Training & Development', links: [{text: 'HRD', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=LMS'}]},
		{content: 'SP9.4 Performance Management', links: [{text: 'HRD', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=LMS'}]},
		{content: 'SP9.5 Compensation & Benefits', links: [{text: 'CBMS', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=CBMS&IFELITE=Y'}]},
		{content: 'SP9.6 Employee Relation', links: [{text: 'EC2', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=ECS&IFELITE=Y'}]}
	]
}

module.exports = process;