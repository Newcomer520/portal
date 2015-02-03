var process = {
	name: 'SP9',
	title: 'Human Resource',
	material: [		
        { content: 'SP9.1 Organization information management  system', links: [{ text: 'OIMS', url: 'http://inxhr/oims/MS/Default.aspx' }]},
		'SP9.2 Recruiting system (manpower demand, aptitude test, etc.)',
        { content: 'SP9.3 Learning certification system', links: [{ text: 'LCS', url: 'http://tnhreduap.cminl.oa/ehrdweb/' }] },
		'SP9.4 Performance management  system, promotion system',
        { content: 'SP9.5 Compensation system', links: [{ text: 'SAP', url: '#' }, { text: 'Smooth', url: '#' }], style: 'gray' },
		'SP9.6 Resignation system',
	    { content: 'SP9.6 Employee Care Center System', links: [{ text: 'ECC', url: 'http://10.189.209.114/ECC/Logon.aspx' }] }
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
		'-Recruiting policies',
		'-Promotion policies',
		'-Compensation & benefit policies',
		'-Training Policies',
		'-Employee Relation policies',
		'KPI settings for all processes (MP1)'
	],
	output: [
        { content: 'SP9.1 Effective Organization Chart', links: [{ text: 'OMS 2.2.1.公司組織圖', url: 'http://psam.cminl.oa/form/FRM_FA100_06.aspx?SYSID=OMS&FUNCID=OMS_016369' }] },
        { content: 'SP9.2 Qualified employees', links: [{ text: 'RMS 2.4 IDL撥補率', url: 'http://psam.cminl.oa/form/FRM_FA100_06.aspx?SYSID=RMS_AVO&FUNCID=RMS_AVO_B002' }] },
        { content: 'SP9.3 Certified employees', links: [{ text: 'HRD 2.1.DL崗位證照', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=LMS&MODULE=3' }, { text: 'HRD 2.2.IDL職位認證', url: 'http://psam.cminl.oa/form/FRM_FA100_06.aspx?SYSID=LMS&FUNCID=LMS_000484' }] },
        { content: 'SP9.4 Employee annual performance Rating', links: [{ text: 'PMD', url: 'http://10.56.196.101/pmd/Default.aspx' }] },
        { content: 'SP9.4 Performance Improvement Program', links: [{ text: 'PIP', url: '#' }], style: 'gray' },
        { content: 'SP9.5 Employees’ retention & reward program (retention bonus ,stock option , performance  bonus and etc.)', links: [{ text: 'CBMS 2.費用管理(L)', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=CBMS&MODULE=3' }] },
        { content: 'SP9.5 Payroll', links: [{ text: 'CBMS 2.費用管理(L)', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=CBMS&MODULE=3' }] },
    	{ content: 'SP9.6 Analysis of ER cases', links: [{ text: 'EC2 2.1.員工溝通', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=ECS&MODULE=3' }] }

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
        { content: 'SP9.2 Job fulfilling rate', links: [{ text: 'RMS 2.4 IDL撥補率', url: 'http://psam.cminl.oa/form/FRM_FA100_06.aspx?SYSID=RMS_AVO&FUNCID=RMS_AVO_B002' }] },
        { content: 'SP9.3 Certification Rate', links: [{ text: 'HRD 2.1.DL崗位證照', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=LMS&MODULE=3' }, { text: 'HRD 2.2.IDL職位認證', url: 'http://psam.cminl.oa/form/FRM_FA100_06.aspx?SYSID=LMS&FUNCID=LMS_000484' }] },
		'SP9.4 Delivery Rate / Improvement Rate(100%)',
		'SP9.5 Accuracy of payroll (100%)',
		'SP9.6 Preliminary reply rate on time(100%)'
	],
	center: [
		{content: 'SP9.1 Organization Management', links: [{text: 'OMS', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=OMS'}]},
		{content: 'SP9.2 Recruiting & Staffing', links: [{text: 'RMS', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=RMS_AVO'}]},
		{content: 'SP9.3 Training & Development', links: [{text: 'HRD', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=LMS'}]},
		{content: 'SP9.4 Performance Management', links: [{text: 'HRD', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=LMS'}]},
		{content: 'SP9.5 Compensation & Benefits', links: [{text: 'CBMS', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=CBMS'}]},
		{content: 'SP9.6 Employee Relation', links: [{text: 'EC2', url: 'http://psam.cminl.oa/form/FRM_FA100_01.aspx?SYSID=ECS'}]}
	]
}

module.exports = process;