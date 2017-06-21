var skill = {
	_0 : {
		degree: "入門",
		num: new BigNumber(1),
		need: new BigNumber(500),
		getNext: () => { return skill._1 },
	},
	_1 : {
		degree: "初級",
		num: new BigNumber(2),
		need: new BigNumber(2000),
		getNext: () => { return skill._2 },
	},
	_2 : {
		degree: "中級",
		num: new BigNumber(4),
		need: new BigNumber(8000),
		getNext: () => { return skill._3 },
	},
	_3 : {
		degree: "高級",
		num: new BigNumber(12),
		need: new BigNumber(40000),
		getNext: () => { return skill._4 },
	},
	_4 : {
		degree: "進階",
		num: new BigNumber(111),
		need: new BigNumber(10).pow(5),
		getNext: () => { return skill._5 },
	},
	_5 : {
		degree: "精通",
		num: new BigNumber(1024),
		need: new BigNumber(10).pow(6),
		getNext: () => { return skill._6 },
	},
	_6 : {
		degree: "高手",
		num: new BigNumber(7007),
		need: new BigNumber(10).pow(7),
		getNext: () => { return skill._7 },
	},
	_7 : {
		degree: "大師",
		num: new BigNumber(10).pow(5),
		need: new BigNumber(10).pow(8),
		getNext: () => { return skill._8 },
	},
	_8 : {
		degree: "宗師",
		num: new BigNumber(10).pow(7),
		need: new BigNumber(10).pow(16),
		getNext: () => { return null },
	},
};