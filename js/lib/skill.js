var skill = {
	_0 : {
		id: 0,
		degree: "入門",
		num: new BigNumber(1),
		need: new BigNumber(500),
		top: false,
		getPrev: () => { return null },
		getNext: () => { return skill._1 },
	},
	_1 : {
		id: 1,
		degree: "初級",
		num: new BigNumber(3),
		need: new BigNumber(2000),
		top: false,
		getPrev: () => { return skill._0 },
		getNext: () => { return skill._2 },
	},
	_2 : {
		id: 2,
		degree: "中級",
		num: new BigNumber(32),
		need: new BigNumber(10).pow(4).times(4),
		top: false,
		getPrev: () => { return skill._1 },
		getNext: () => { return skill._3 },
	},
	_3 : {
		id: 3,
		degree: "高級",
		num: new BigNumber(512),
		need: new BigNumber(10).pow(5).times(7),
		top: false,
		getPrev: () => { return skill._2 },
		getNext: () => { return skill._4 },
	},
	_4 : {
		id: 4,
		degree: "進階",
		num: new BigNumber(4321),
		need: new BigNumber(10).pow(7).times(2),
		top: false,
		getPrev: () => { return skill._3 },
		getNext: () => { return skill._5 },
	},
	_5 : {
		id: 5,
		degree: "精通",
		num: new BigNumber(12345),
		need: new BigNumber(10).pow(9).times(3),
		top: false,
		getPrev: () => { return skill._4 },
		getNext: () => { return skill._6 },
	},
	_6 : {
		id: 6,
		degree: "高手",
		num: new BigNumber(666666),
		need: new BigNumber(10).pow(11),
		top: false,
		getPrev: () => { return skill._5 },
		getNext: () => { return skill._7 },
	},
	_7 : {
		id: 7,
		degree: "大師",
		num: new BigNumber(9090909),
		need: new BigNumber(10).pow(13),
		top: false,
		getPrev: () => { return skill._6 },
		getNext: () => { return skill._8 },
	},
	_8 : {
		id: 8,
		degree: "宗師",
		num: new BigNumber(55555555),
		need: new BigNumber(10).pow(16),
		top: true,
		getPrev: () => { return skill._7 },
		getNext: () => { return null },
	},
	find: (id) => {
		switch(id){
			default:
			case 0: return skill._0;
			case 1: return skill._1;
			case 2: return skill._2;
			case 3: return skill._3;
			case 4: return skill._4;
			case 5: return skill._5;
			case 6: return skill._6;
			case 7: return skill._7;
			case 8: return skill._8;
		}
	},
};