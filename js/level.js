var level = {
	_0 : { 
		name: "練體",
		max:  new BigNumber(10).pow(3),
		getNext: () => { return level._1; },
	},
	_1 : { 
		name: "練氣",
		max:  new BigNumber(10).pow(5),
		getNext: () => { return level._2; },
	},
	_2 : { 
		name: "築基",
		max:  new BigNumber(10).pow(7),
		getNext: () => { return level._3; },
	},
	_3 : { 
		name: "開光",
		max:  new BigNumber(10).pow(9),
		getNext: () => { return level._4; },
	},
	_4 : { 
		name: "結丹",
		max:  new BigNumber(10).pow(11),
		getNext: () => { return level._5; },
	},
	_5 : { 
		name: "元嬰",
		max:  new BigNumber(10).pow(13),
		getNext: () => { return level._6; },
	},
	_6 : { 
		name: "分神",
		max:  new BigNumber(10).pow(15),
		getNext: () => { return level._7; },
	},
	_7 : { 
		name: "化神",
		max:  new BigNumber(10).pow(17),
		getNext: () => { return level._8; },
	},
	_8 : { 
		name: "大乘",
		max:  new BigNumber(10).pow(19),
		getNext: () => { return level._9; },
	},
	_9 : { 
		name: "渡劫",
		max:  new BigNumber(10).pow(21),
		getNext: () => { return null; },
	},
};


var body = {
	_0 : {
		name: "凡胎肉軀",
		num: new BigNumber(1),
		need: new BigNumber(10),
		getNext: () => { return body._1; },
	},
	_1 : {
		name: "鋼筋鐵骨",
		num: new BigNumber(2),
		need: new BigNumber(100),
		getNext: () => { return body._2; },
	},
	_2 : {
		name: "龍氣戰體",
		num: new BigNumber(5),
		need: new BigNumber(2000),
		getNext: () => { return body._3; },
	},	
	_3 : {
		name: "黃金血脈",
		num: new BigNumber(10),
		need: new BigNumber(10).pow(4),
		getNext: () => { return body._4; },
	},
	_4 : {
		name: "金剛不壞",
		num: new BigNumber(500),
		need: new BigNumber(10).pow(6),
		getNext: () => { return body._5; },
	},
	_5 : {
		name: "傳說聖軀",
		num: new BigNumber(10).pow(4),
		need: new BigNumber(10).pow(8),
		getNext: () => { return body._6; },
	},
	_6 : {
		name: "圓滿道體",
		num: new BigNumber(10).pow(6),
		need: new BigNumber(10).pow(11),
		getNext: () => { return body._7; },
	},
	_7 : {
		name: "不滅法身",
		num: new BigNumber(10).pow(8),
		need: new BigNumber(10).pow(14),
		getNext: () => { return body._8; },
	},
	_8 : {
		name: "天上地下唯我獨尊",
		num: new BigNumber(10).pow(10),
		nedd: new BigNumber(10).pow(22),
	},
};

var talent = {
	_0 : {
		name: "雜屬廢靈根",
		need: new BigNumber(100),
		getNext: () => { return talent._1; },
	},
	_1 : {
		name: "五屬混靈根",
		need: new BigNumber(500),
		getNext: () => { return talent._2; },
	},
	_2 : {
		name: "四屬弱靈根",
		need: new BigNumber(10).pow(3),
		getNext: () => { return talent._3; },
	},
	_3 : {
		name: "三重靈根",
		need: new BigNumber(10).pow(4),
		getNext: () => { return talent._4; },
	},
	_4 : {
		name: "雙靈根",
		need: new BigNumber(10).pow(6),
		getNext: () => { return talent._5; },
	},
	_5 : {
		name: "單靈根",
		need: new BigNumber(10).pow(8),
		getNext: () => { return talent._6; },
	},
	_6 : {
		name: "天靈根",
		need: new BigNumber(10).pow(10),
		getNext: () => { return talent._7; },
	},
	_7 : {
		name: "聖靈根",
		need: new BigNumber(10).pow(22),
		getNext: () => { return null; },
	},

};