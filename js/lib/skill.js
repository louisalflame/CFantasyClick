
var skills = {
	// 正統功法 ===============================================
	a0_0 : {
		id: 'a0_0',
		top: false,
		degree: "入門",
		info: "每秒增加10正統修為",
		need: new BigNumber(500),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(1);
			app.standPerSec = app.standPerSec.plus(1);
		},
		num: new BigNumber(1),
		getPrev: () => { return null },
		getNext: () => { return skills.a0_1 },
	},
	a0_1 : {
		id: 'a0_1',
		top: false,
		degree: "初級",
		info: "每秒增加30正統修為",
		need: new BigNumber(2000),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(3);
			app.standPerSec = app.standPerSec.plus(1);
		},
		getPrev: () => { return skills.a0_0 },
		getNext: () => { return skills.a0_2 },
	},
	a0_2 : {
		id: 'a0_2',
		top: false,
		degree: "中級",
		info: "每秒增加50正統修為",
		need: new BigNumber(10).pow(4).times(4),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(5);
			app.standPerSec = app.standPerSec.plus(1);
		},
		getPrev: () => { return skills.a0_1 },
		getNext: () => { return skills.a0_3 },
	},
	a0_3 : {
		id: 'a0_3',
		top: false,
		degree: "高級",
		info: "每秒增加200正統修為",
		need: new BigNumber(10).pow(5).times(7),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(20);
			app.standPerSec = app.standPerSec.plus(2);
		},
		getPrev: () => { return skills.a0_2 },
		getNext: () => { return skills.a0_4 },
	},
	a0_4 : {
		id: 'a0_4',
		top: false,
		degree: "進階",
		info: "每秒增加2,000正統修為",
		need: new BigNumber(10).pow(7).times(2),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(200);
			app.standPerSec = app.standPerSec.plus(2);
		},
		getPrev: () => { return skills.a0_3 },
		getNext: () => { return skills.a0_5 },
	},
	a0_5 : {
		id: 'a0_5',
		top: false,
		degree: "精通",
		info: "每秒增加10,000正統修為",
		need: new BigNumber(10).pow(9).times(3),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(1000);
			app.standPerSec = app.standPerSec.plus(2);
		},
		getPrev: () => { return skills.a0_4 },
		getNext: () => { return skills.a0_6 },
	},
	a0_6 : {
		id: 'a0_6',
		top: false,
		degree: "高手",
		info: "每秒增加3,333,000正統修為",
		need: new BigNumber(10).pow(11),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(333300);
			app.standPerSec = app.standPerSec.plus(3);
		},
		getPrev: () => { return skills.a0_5 },
		getNext: () => { return skills.a0_7 },
	},
	a0_7 : {
		id: 'a0_7',
		top: false,
		degree: "大師",
		info: "每秒增加50,505,050正統修為，增加1點壽元",
		need: new BigNumber(10).pow(13),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(5050505);
			app.standPerSec = app.standPerSec.plus(3);
			app.life = app.life.plus(1);
			app.totalLife = app.totalLife.plus(1);
		},
		getPrev: () => { return skills.a0_6 },
		getNext: () => { return skills.a0_8 },
	},
	a0_8 : {
		id: 'a0_8',
		top: true,
		degree: "宗師",
		info: "每秒增加111,111,110正統修為，增加2點壽元",
		need: new BigNumber(10).pow(16),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(11111111);
			app.standPerSec = app.standPerSec.plus(4);
			app.life = app.life.plus(2);
			app.totalLife = app.totalLife.plus(2);
		},
		getPrev: () => { return skills.a0_7 },
		getNext: () => { return null },
	},
	//先苦後甘型
	a1_0 : {
		id: 'a1_0',
		top: false,
		degree: "入門",
		info: "每秒增加10正統修為",
		need: new BigNumber(1000),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(1);
			app.standPerSec = app.standPerSec.plus(1);
		},
		num: new BigNumber(1),
		getPrev: () => { return null },
		getNext: () => { return skills.a1_1 },
	},
	a1_1 : {
		id: 'a1_1',
		top: false,
		degree: "初級",
		info: "每秒增加30正統修為",
		need: new BigNumber(5000),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(3);
			app.standPerSec = app.standPerSec.plus(1);
		},
		getPrev: () => { return skills.a1_0 },
		getNext: () => { return skills.a1_2 },
	},
	a1_2 : {
		id: 'a1_2',
		top: false,
		degree: "中級",
		info: "每秒增加50正統修為",
		need: new BigNumber(10).pow(5),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(5);
			app.standPerSec = app.standPerSec.plus(2);
		},
		getPrev: () => { return skills.a1_1 },
		getNext: () => { return skills.a1_3 },
	},
	a1_3 : {
		id: 'a1_3',
		top: false,
		degree: "高級",
		info: "每秒增加100正統修為",
		need: new BigNumber(10).pow(6).times(3),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(10);
			app.standPerSec = app.standPerSec.plus(3);
		},
		getPrev: () => { return skills.a1_2 },
		getNext: () => { return skills.a1_4 },
	},
	a1_4 : {
		id: 'a1_4',
		top: false,
		degree: "進階",
		info: "每秒增加1,000正統修為，修行心性",
		need: new BigNumber(10).pow(8).times(4),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(100);
			app.standPerSec = app.standPerSec.plus(5);
		},
		getPrev: () => { return skills.a1_3 },
		getNext: () => { return skills.a1_5 },
	},
	a1_5 : {
		id: 'a1_5',
		top: false,
		degree: "精通",
		info: "每秒增加10,000正統修為，修行心性、延年益壽",
		need: new BigNumber(10).pow(10).times(5),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(1000);
			app.standPerSec = app.standPerSec.plus(10);
			app.life = app.life.plus(1);
			app.totalLife = app.totalLife.plus(1);
		},
		getPrev: () => { return skills.a1_4 },
		getNext: () => { return skills.a1_6 },
	},
	a1_6 : {
		id: 'a1_6',
		top: false,
		degree: "高手",
		info: "每秒增加200,000正統修為，修行心性、延年益壽",
		need: new BigNumber(10).pow(11),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(20000);
			app.standPerSec = app.standPerSec.plus(15);
			app.life = app.life.plus(2);
			app.totalLife = app.totalLife.plus(2);
		},
		getPrev: () => { return skills.a1_5 },
		getNext: () => { return skills.a1_7 },
	},
	a1_7 : {
		id: 'a1_7',
		top: false,
		degree: "大師",
		info: "每秒增加3,000,000正統修為，修行心性、延年益壽",
		need: new BigNumber(10).pow(12),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(300000);
			app.standPerSec = app.standPerSec.plus(20);
			app.life = app.life.plus(3);
			app.totalLife = app.totalLife.plus(3);
		},
		getPrev: () => { return skills.a1_6 },
		getNext: () => { return skills.a1_8 },
	},
	a1_8 : {
		id: 'a1_8',
		top: true,
		degree: "宗師",
		info: "每秒增加99,999,999,990正統修為，修行心性、延年益壽",
		need: new BigNumber(10).pow(16),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(9999999999);
			app.standPerSec = app.standPerSec.plus(30);
			app.life = app.life.plus(5);
			app.totalLife = app.totalLife.plus(5);
		},
		getPrev: () => { return skills.a1_7 },
		getNext: () => { return null },
	},
	// 純練正功
	a2_0 : {
		id: 'a2_0',
		top: false,
		degree: "入門",
		info: "每秒增加10正統修為",
		need: new BigNumber(500),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(1);
			app.standPerSec = app.standPerSec.plus(1);
		},
		num: new BigNumber(1),
		getPrev: () => { return null },
		getNext: () => { return skills.a2_1 },
	},
	a2_1 : {
		id: 'a2_1',
		top: false,
		degree: "初級",
		info: "每秒增加50正統修為",
		need: new BigNumber(5000),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(5);
			app.standPerSec = app.standPerSec.plus(1);
		},
		getPrev: () => { return skills.a2_0 },
		getNext: () => { return skills.a2_2 },
	},
	a2_2 : {
		id: 'a2_2',
		top: false,
		degree: "中級",
		info: "每秒增加300正統修為",
		need: new BigNumber(10).pow(4).times(4),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(30);
			app.standPerSec = app.standPerSec.plus(1);
		},
		getPrev: () => { return skills.a2_1 },
		getNext: () => { return skills.a2_3 },
	},
	a2_3 : {
		id: 'a2_3',
		top: false,
		degree: "高級",
		info: "每秒增加1,000正統修為",
		need: new BigNumber(10).pow(5).times(6),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(100);
			app.standPerSec = app.standPerSec.plus(2);
		},
		getPrev: () => { return skills.a2_2 },
		getNext: () => { return skills.a2_4 },
	},
	a2_4 : {
		id: 'a2_4',
		top: false,
		degree: "進階",
		info: "每秒增加7,000正統修為",
		need: new BigNumber(10).pow(7),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(700);
			app.standPerSec = app.standPerSec.plus(2);
		},
		getPrev: () => { return skills.a2_3 },
		getNext: () => { return skills.a2_5 },
	},
	a2_5 : {
		id: 'a2_5',
		top: false,
		degree: "精通",
		info: "每秒增加90,000正統修為",
		need: new BigNumber(10).pow(8).times(2),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(9000);
			app.standPerSec = app.standPerSec.plus(2);
		},
		getPrev: () => { return skills.a2_4 },
		getNext: () => { return skills.a2_6 },
	},
	a2_6 : {
		id: 'a2_6',
		top: false,
		degree: "高手",
		info: "每秒增加100,000正統修為",
		need: new BigNumber(10).pow(10),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(10000);
			app.standPerSec = app.standPerSec.plus(3);
		},
		getPrev: () => { return skills.a2_5 },
		getNext: () => { return skills.a2_7 },
	},
	a2_7 : {
		id: 'a2_7',
		top: false,
		degree: "大師",
		info: "每秒增加3,000,000正統修為",
		need: new BigNumber(10).pow(11),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(300000);
			app.standPerSec = app.standPerSec.plus(5);
		},
		getPrev: () => { return skills.a2_6 },
		getNext: () => { return skills.a2_8 },
	},
	a2_8 : {
		id: 'a2_8',
		top: true,
		degree: "宗師",
		info: "每秒增加500,000,000正統修為",
		need: new BigNumber(10).pow(16),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus(50000000);
			app.standPerSec = app.standPerSec.plus(10);
		},
		getPrev: () => { return skills.a2_7 },
		getNext: () => { return null },
	},
	// 中立功法 ===============================================
	b0_0 : {
		id: 'b0_0',
		top: false,
		degree: "入門",
		info: "每秒增加10一般修為",
		need: new BigNumber(500),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(1) );
		},
		getPrev: () => { return null },
		getNext: () => { return skills.b0_1 },
	},
	b0_1 : {
		id: 'b0_1',
		top: false,
		degree: "初級",
		info: "每秒增加40一般修為",
		need: new BigNumber(2000),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(4) );
		},
		getPrev: () => { return skills.b0_0 },
		getNext: () => { return skills.b0_2 },
	},
	b0_2 : {
		id: 'b0_2',
		top: false,
		degree: "中級",
		info: "每秒增加100一般修為",
		need: new BigNumber(10).pow(4).times(3),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(10) );
		},
		getPrev: () => { return skills.b0_1 },
		getNext: () => { return skills.b0_3 },
	},
	b0_3 : {
		id: 'b0_3',
		top: false,
		degree: "高級",
		info: "每秒增加500一般修為，增加1點財富",
		need: new BigNumber(10).pow(5).times(2),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(50) );
			app.money = app.money.plus(1);
		},
		getPrev: () => { return skills.b0_2 },
		getNext: () => { return skills.b0_4 },
	},
	b0_4 : {
		id: 'b0_4',
		top: false,
		degree: "進階",
		info: "每秒增加6,000一般修為，增加2點財富",
		need: new BigNumber(10).pow(6).times(8),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(600) );
			app.money = app.money.plus(2);
		},
		getPrev: () => { return skills.b0_3 },
		getNext: () => { return skills.b0_5 },
	},
	b0_5 : {
		id: 'b0_5',
		top: false,
		degree: "精通",
		info: "每秒增加60,000一般修為，增加3點財富",
		need: new BigNumber(10).pow(8).times(2),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(6000) );
			app.money = app.money.plus(3);
		},
		getPrev: () => { return skills.b0_4 },
		getNext: () => { return skills.b0_6 },
	},
	b0_6 : {
		id: 'b0_6',
		top: false,
		degree: "高手",
		info: "每秒增加990,000一般修為，增加4點財富和1點名氣",
		need: new BigNumber(10).pow(9),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(99000) );
			app.money = app.money.plus(4);
			app.renown = app.renown.plus(1);
		},
		getPrev: () => { return skills.b0_5 },
		getNext: () => { return skills.b0_7 },
	},
	b0_7 : {
		id: 'b0_7',
		top: false,
		degree: "大師",
		info: "每秒增加2,020,000一般修為，增加5點財富和3點名氣",
		need: new BigNumber(10).pow(10),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(202000) );
			app.money = app.money.plus(5);
			app.renown = app.renown.plus(3);
		},
		getPrev: () => { return skills.b0_6 },
		getNext: () => { return skills.b0_8 },
	},
	b0_8 : {
		id: 'b0_8',
		top: true,
		degree: "宗師",
		info: "每秒增加33,110,000一般修為，增加6點財富和5點名氣",
		need: new BigNumber(10).pow(16),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(3311000) );
			app.money = app.money.plus(6);
			app.renown = app.renown.plus(5);
		},
		getPrev: () => { return skills.b0_7 },
		getNext: () => { return null },
	},
	// 修財富
	b1_0 : {
		id: 'b1_0',
		top: false,
		degree: "入門",
		info: "每秒增加10一般修為",
		need: new BigNumber(200),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(1) );
		},
		getPrev: () => { return null },
		getNext: () => { return skills.b1_1 },
	},
	b1_1 : {
		id: 'b1_1',
		top: false,
		degree: "初級",
		info: "每秒增加20一般修為，增加1點財富",
		need: new BigNumber(600),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(2) );
			app.money = app.money.plus(1);
		},
		getPrev: () => { return skills.b1_0 },
		getNext: () => { return skills.b1_2 },
	},
	b1_2 : {
		id: 'b1_2',
		top: false,
		degree: "中級",
		info: "每秒增加100一般修為，增加2點財富",
		need: new BigNumber(5000),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(10) );
			app.money = app.money.plus(2);
		},
		getPrev: () => { return skills.b1_1 },
		getNext: () => { return skills.b1_3 },
	},
	b1_3 : {
		id: 'b1_3',
		top: false,
		degree: "高級",
		info: "每秒增加300一般修為，增加3點財富和1點名氣",
		need: new BigNumber(40000),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(30) );
			app.money = app.money.plus(3);
			app.renown = app.renown.plus(1);
		},
		getPrev: () => { return skills.b1_2 },
		getNext: () => { return skills.b1_4 },
	},
	b1_4 : {
		id: 'b1_4',
		top: false,
		degree: "進階",
		info: "每秒增加2,000一般修為，增加4點財富和2點名氣",
		need: new BigNumber(10).pow(5).times(4),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(200) );
			app.money = app.money.plus(4);
			app.renown = app.renown.plus(2);
		},
		getPrev: () => { return skills.b1_3 },
		getNext: () => { return skills.b1_5 },
	},
	b1_5 : {
		id: 'b1_5',
		top: false,
		degree: "精通",
		info: "每秒增加10,000一般修為，增加5點財富和3點名氣",
		need: new BigNumber(10).pow(6).times(3),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(1000) );
			app.money = app.money.plus(5);
			app.renown = app.renown.plus(3);
		},
		getPrev: () => { return skills.b1_4 },
		getNext: () => { return skills.b1_6 },
	},
	b1_6 : {
		id: 'b1_6',
		top: false,
		degree: "高手",
		info: "每秒增加400,000一般修為，增加7點財富和5點名氣",
		need: new BigNumber(10).pow(8),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(40000) );
			app.money = app.money.plus(7);
			app.renown = app.renown.plus(5);
		},
		getPrev: () => { return skills.b1_5 },
		getNext: () => { return skills.b1_7 },
	},
	b1_7 : {
		id: 'b1_7',
		top: false,
		degree: "大師",
		info: "每秒增加600,000一般修為，增加10點財富和8點名氣",
		need: new BigNumber(10).pow(9),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(600000) );
			app.money = app.money.plus(10);
			app.renown = app.renown.plus(8);
		},
		getPrev: () => { return skills.b1_6 },
		getNext: () => { return skills.b1_8 },
	},
	b1_8 : {
		id: 'b1_8',
		top: true,
		degree: "宗師",
		info: "每秒增加9,000,000一般修為，增加20點財富和10點名氣",
		need: new BigNumber(10).pow(16),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(900000) );
			app.money = app.money.plus(20);
			app.renown = app.renown.plus(10);
		},
		getPrev: () => { return skills.b1_7 },
		getNext: () => { return null },
	},
	//	耗財
	b2_0 : {
		id: 'b2_0',
		top: false,
		degree: "入門",
		info: "每秒增加10一般修為",
		need: new BigNumber(100),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(1) );
		},
		getPrev: () => { return null },
		getNext: () => { return skills.b2_1 },
	},
	b2_1 : {
		id: 'b2_1',
		top: false,
		degree: "初級",
		info: "每秒增加20一般修為",
		need: new BigNumber(500),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(2) );
		},
		getPrev: () => { return skills.b2_0 },
		getNext: () => { return skills.b2_2 },
	},
	b2_2 : {
		id: 'b2_2',
		top: false,
		degree: "中級",
		info: "每秒增加80一般修為",
		need: new BigNumber(4000),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(8) );
		},
		getPrev: () => { return skills.b2_1 },
		getNext: () => { return skills.b2_3 },
	},
	b2_3 : {
		id: 'b2_3',
		top: false,
		degree: "高級",
		info: "每秒增加200一般修為",
		need: new BigNumber(10).pow(4),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(20) );
			app.money = app.money.plus(1);
		},
		getPrev: () => { return skills.b2_2 },
		getNext: () => { return skills.b2_4 },
	},
	b2_4 : {
		id: 'b2_4',
		top: false,
		degree: "進階",
		info: "每秒增加600一般修為",
		need: new BigNumber(10).pow(5),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(60) );
			app.money = app.money.plus(2);
		},
		getPrev: () => { return skills.b2_3 },
		getNext: () => { return skills.b2_5 },
	},
	b2_5 : {
		id: 'b2_5',
		top: false,
		degree: "精通",
		info: "每秒增加10,000一般修為，修練十分昂貴",
		need: new BigNumber(10).pow(7),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(1000) );
			app.money = app.money.minus(5);
		},
		getPrev: () => { return skills.b2_4 },
		getNext: () => { return skills.b2_6 },
	},
	b2_6 : {
		id: 'b2_6',
		top: false,
		degree: "高手",
		info: "每秒增加200,000一般修為，修練十分昂貴",
		need: new BigNumber(10).pow(8),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(20000) );
			app.money = app.money.minus(10);
		},
		getPrev: () => { return skills.b2_5 },
		getNext: () => { return skills.b2_7 },
	},
	b2_7 : {
		id: 'b2_7',
		top: false,
		degree: "大師",
		info: "每秒增加3,000,000一般修為，修練十分昂貴",
		need: new BigNumber(10).pow(9),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(300000) );
			app.money = app.money.minus(30);
		},
		getPrev: () => { return skills.b2_6 },
		getNext: () => { return skills.b2_8 },
	},
	b2_8 : {
		id: 'b2_8',
		top: true,
		degree: "宗師",
		info: "每秒增加150,000,000一般修為，修練十分昂貴",
		need: new BigNumber(10).pow(16),
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times(15000000) );
			app.money = app.money.minus(100);
		},
		getPrev: () => { return skills.b2_7 },
		getNext: () => { return null },
	},

	// 邪派功法 ===============================================
	c0_0 : {
		id: 'c0_0',
		top: false,
		degree: "入門",
		info: "每秒增加20邪派修為",
		need: new BigNumber(500),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(2);
			app.standPerSec = app.standPerSec.minus(1);
		},
		getPrev: () => { return null },
		getNext: () => { return skills.c0_1 },
	},
	c0_1 : {
		id: 'c0_1',
		top: false,
		degree: "初級",
		info: "每秒增加100邪派修為",
		need: new BigNumber(2000),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(10);
			app.standPerSec = app.standPerSec.minus(1);
		},
		getPrev: () => { return skills.c0_0 },
		getNext: () => { return skills.c0_2 },
	},
	c0_2 : {
		id: 'c0_2',
		top: false,
		degree: "中級",
		info: "每秒增加400邪派修為",
		need: new BigNumber(10).pow(4),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(40);
			app.standPerSec = app.standPerSec.minus(2);
		},
		getPrev: () => { return skills.c0_1 },
		getNext: () => { return skills.c0_3 },
	},
	c0_3 : {
		id: 'c0_3',
		top: false,
		degree: "高級",
		info: "每秒增加1,000邪派修為",
		need: new BigNumber(10).pow(5).times(2),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(100);
			app.standPerSec = app.standPerSec.minus(2);
		},
		getPrev: () => { return skills.c0_2 },
		getNext: () => { return skills.c0_4 },
	},
	c0_4 : {
		id: 'c0_4',
		top: false,
		degree: "進階",
		info: "每秒增加30,000邪派修為",
		need: new BigNumber(10).pow(6).times(5),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(3000);
			app.standPerSec = app.standPerSec.minus(3);
		},
		getPrev: () => { return skills.c0_3 },
		getNext: () => { return skills.c0_5 },
	},
	c0_5 : {
		id: 'c0_5',
		top: false,
		degree: "精通",
		info: "每秒增加550,000邪派修為",
		need: new BigNumber(10).pow(8),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(55000);
			app.standPerSec = app.standPerSec.minus(4);
		},
		getPrev: () => { return skills.c0_4 },
		getNext: () => { return skills.c0_6 },
	},
	c0_6 : {
		id: 'c0_6',
		top: false,
		degree: "高手",
		info: "每秒增加12,300,000邪派修為",
		need: new BigNumber(10).pow(9).times(2),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(1230000);
			app.standPerSec = app.standPerSec.minus(5);
		},
		getPrev: () => { return skills.c0_5 },
		getNext: () => { return skills.c0_7 },
	},
	c0_7 : {
		id: 'c0_7',
		top: false,
		degree: "大師",
		info: "每秒增加55,555,500邪派修為",
		need: new BigNumber(10).pow(11),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(5555550);
			app.standPerSec = app.standPerSec.minus(10);
		},
		getPrev: () => { return skills.c0_6 },
		getNext: () => { return skills.c0_8 },
	},
	c0_8 : {
		id: 'c0_8',
		top: true,
		degree: "宗師",
		info: "每秒增加333,333,300邪派修為",
		need: new BigNumber(10).pow(16),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(33333330);
			app.standPerSec = app.standPerSec.minus(20);
		},
		getPrev: () => { return skills.c0_7 },
		getNext: () => { return null },
	},
	// 初期用
	c1_0 : {
		id: 'c1_0',
		top: false,
		degree: "入門",
		info: "每秒增加50邪派修為，汙染道心",
		need: new BigNumber(500),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(5);
			app.standPerSec = app.standPerSec.minus(1);
		},
		getPrev: () => { return null },
		getNext: () => { return skills.c1_1 },
	},
	c1_1 : {
		id: 'c1_1',
		top: false,
		degree: "初級",
		info: "每秒增加500邪派修為，汙染道心",
		need: new BigNumber(3000),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(50);
			app.standPerSec = app.standPerSec.minus(5);
		},
		getPrev: () => { return skills.c1_0 },
		getNext: () => { return skills.c1_2 },
	},
	c1_2 : {
		id: 'c1_2',
		top: false,
		degree: "中級",
		info: "每秒增加2,000邪派修為，汙染道心",
		need: new BigNumber(10).pow(4).times(5),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(200);
			app.standPerSec = app.standPerSec.minus(10);
		},
		getPrev: () => { return skills.c1_1 },
		getNext: () => { return skills.c1_3 },
	},
	c1_3 : {
		id: 'c1_3',
		top: false,
		degree: "高級",
		info: "每秒增加60,000邪派修為，汙染道心",
		need: new BigNumber(10).pow(5).times(4),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(6000);
			app.standPerSec = app.standPerSec.minus(30);
		},
		getPrev: () => { return skills.c1_2 },
		getNext: () => { return skills.c1_4 },
	},
	c1_4 : {
		id: 'c1_4',
		top: true,
		degree: "進階",
		info: "每秒增加444,000邪派修為，汙染道心",
		need: new BigNumber(10).pow(16),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(44400);
			app.standPerSec = app.standPerSec.minus(50);
		},
		getPrev: () => { return skills.c1_3 },
		getNext: () => { return null },
	},
	//
	c2_0 : {
		id: 'c2_0',
		top: false,
		degree: "入門",
		info: "每秒增加50邪派修為，邪功練法詭譎損害名氣",
		need: new BigNumber(10).pow(4),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(5);
			app.standPerSec = app.standPerSec.minus(1);
			app.renown = app.renown.minus(1);
		},
		getPrev: () => { return null },
		getNext: () => { return skills.c2_1 },
	},
	c2_1 : {
		id: 'c2_1',
		top: false,
		degree: "初級",
		info: "每秒增加60邪派修為，邪功練法詭譎損害名氣",
		need: new BigNumber(10).pow(6),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(6);
			app.standPerSec = app.standPerSec.minus(1);
			app.renown = app.renown.minus(2);
		},
		getPrev: () => { return skills.c2_0 },
		getNext: () => { return skills.c2_2 },
	},
	c2_2 : {
		id: 'c2_2',
		top: false,
		degree: "中級",
		info: "每秒增加70邪派修為，邪功練法詭譎損害名氣",
		need: new BigNumber(10).pow(7),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(7);
			app.standPerSec = app.standPerSec.minus(2);
			app.renown = app.renown.minus(3);
		},
		getPrev: () => { return skills.c2_1 },
		getNext: () => { return skills.c2_3 },
	},
	c2_3 : {
		id: 'c2_3',
		top: false,
		degree: "高級",
		info: "每秒增加80邪派修為，邪功練法詭譎、損名傷身",
		need: new BigNumber(10).pow(7).times(2),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(8);
			app.standPerSec = app.standPerSec.minus(2);
			app.renown = app.renown.minus(4);
			app.life = app.life.minus(1);
			app.totalLife = app.totalLife.minus(1);
		},
		getPrev: () => { return skills.c2_2 },
		getNext: () => { return skills.c2_4 },
	},
	c2_4 : {
		id: 'c2_4',
		top: false,
		degree: "進階",
		info: "每秒增加90邪派修為，邪功練法詭譎、損名傷身",
		need: new BigNumber(10).pow(7).times(3),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(9);
			app.standPerSec = app.standPerSec.minus(3);
			app.renown = app.renown.minus(5);
			app.life = app.life.minus(1);
			app.totalLife = app.totalLife.minus(1);
		},
		getPrev: () => { return skills.c2_3 },
		getNext: () => { return skills.c2_5 },
	},
	c2_5 : {
		id: 'c2_5',
		top: false,
		degree: "精通",
		info: "每秒增加100邪派修為，邪功練法詭譎、損名傷身",
		need: new BigNumber(10).pow(7).times(4),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(10);
			app.standPerSec = app.standPerSec.minus(4);
			app.renown = app.renown.minus(6);
			app.life = app.life.minus(3);
			app.totalLife = app.totalLife.minus(3);
		},
		getPrev: () => { return skills.c2_4 },
		getNext: () => { return skills.c2_6 },
	},
	c2_6 : {
		id: 'c2_6',
		top: false,
		degree: "高手",
		info: "每秒增加200邪派修為，邪功練法詭譎、損名傷身",
		need: new BigNumber(10).pow(7).times(5),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(20);
			app.standPerSec = app.standPerSec.minus(5);
			app.renown = app.renown.minus(7);
			app.life = app.life.minus(5);
			app.totalLife = app.totalLife.minus(5);
		},
		getPrev: () => { return skills.c2_5 },
		getNext: () => { return skills.c2_7 },
	},
	c2_7 : {
		id: 'c2_7',
		top: false,
		degree: "大師",
		info: "每秒增加500邪派修為，邪功練法詭譎、損名傷身",
		need: new BigNumber(10).pow(9),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(50);
			app.standPerSec = app.standPerSec.minus(6);
			app.renown = app.renown.minus(8);
			app.life = app.life.minus(10);
			app.totalLife = app.totalLife.minus(10);
		},
		getPrev: () => { return skills.c2_6 },
		getNext: () => { return skills.c2_8 },
	},
	c2_8 : {
		id: 'c2_8',
		top: true,
		degree: "宗師",
		info: "每秒增加11,111,111,111,110邪派修為，邪功總算大成",
		need: new BigNumber(10).pow(16),
		run: () => {
			app.pointPerSec = app.pointPerSec.minus(1111111111111);
			app.standPerSec = app.standPerSec.minus(7);
			app.renown = app.renown.minus(10);
			app.life = app.life.minus(100);
			app.totalLife = app.totalLife.minus(100);
		},
		getPrev: () => { return skills.c2_7 },
		getNext: () => { return null },
	},
};


function getRandomSkill(){
	var rand = Math.random();

	if( rand < 0.2 ){
		var c = [ skills.c0_0, skills.c1_0, skills.c2_0 ];
		return c[ Math.floor( Math.random() * c.length ) ];
	}else if( rand < 0.5 ){ 
		var a = [ skills.a0_0, skills.a1_0, skills.a2_0 ]; 
		return a[ Math.floor( Math.random() * a.length ) ];
	}else { 
		var b = [ skills.b0_0, skills.b1_0, skills.b2_0 ];
		return b[ Math.floor( Math.random() * b.length ) ];
	}
}