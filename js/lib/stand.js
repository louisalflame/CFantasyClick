var stands = {
	_0 : {
		name: '天命聖人',
		num : new BigNumber(1),
		filter: (pointPerSec) => {
			if( pointPerSec.greaterThan(0) ){ return pointPerSec.times(1.5); }
			else{ return pointPerSec.times(0.8); }
		},
	},
	_1 : {
		name: '名門正派',
		num : new BigNumber(1),
		filter: (pointPerSec) => {
			if( pointPerSec.greaterThan(0) ){ return pointPerSec.times(1.3); }
			else{ return pointPerSec.times(0.9); }
		},
	},
	_2 : {
		name: '剛正不阿',
		num : new BigNumber(1),
		filter: (pointPerSec) => {
			if( pointPerSec.greaterThan(0) ){ return pointPerSec.times(1.1); }
			else{ return pointPerSec; }
		},
	},
	_3 : {
		name: '中立無為',
		num : new BigNumber(1),
		filter: (pointPerSec) => {
			return pointPerSec.abs().times(0.9);
		},
	},
	_4 : {
		name: '陰險小人',
		num : new BigNumber(-1),
		filter: (pointPerSec) => {
			if( pointPerSec.lessThan(0) ){ return pointPerSec.abs().times(1.1); }
			else{ return pointPerSec.times(-1); }
		},
	},
	_5 : {
		name: '無惡不做',
		num : new BigNumber(-1),
		filter: (pointPerSec) => {
			if( pointPerSec.lessThan(0) ){ return pointPerSec.abs().times(1.3); }
			else{ return pointPerSec.times(-0.9); }
		},
	},
	_6 : {
		name: '混世魔頭',
		num : new BigNumber(-1),
		filter: (pointPerSec) => {
			if( pointPerSec.lessThan(0) ){ return pointPerSec.abs().times(1.5); }
			else{ return pointPerSec.times(-0.8); }
		},
	},

	find : (num) => { 
		if( num.gt(8000) ){ return stands._0; }
		else if( num.gt(5000) ){ return stands._1; }
		else if( num.gt(2000) ){ return stands._2; }
		else if( num.gt(-2000) ){ return stands._3; }
		else if( num.gt(-5000) ){ return stands._4; }
		else if( num.gt(-8000) ){ return stands._5; }
		else{ return stands._6; }
	},
};


var groups = [
	{
		info : "名震天下的古老宗門，快速增加正氣，注重長生之道。每秒增加3點壽元 1點名氣",
		start: () => {
			app.money = app.money.div(5).round();
			app.logTxt.splice(0, 0, "進入名門大派需要耗費不少開銷，耗費8成財富");
		},
		run: () => {
			app.life = app.life.plus(3);
			app.standPerSec = app.standPerSec.plus(10);
			app.renown = app.renown.plus(1);
		},
		end: () => {
			app.life = app.life.plus(100);
			app.logTxt.splice(0, 0, "願你找到志同道合之人，賜你些傷藥以備不時之需。增加100點壽元");
		},
	},
	{
		info : "勢力廣大遍佈天下的幫派，快速累積經驗增加修為。每秒增加一些修為和1點正氣、2點名氣",
		start: () => {
			app.itemCost = app.itemCost.times(0.6).round();
			app.itemInterval = app.itemInterval.minus(2);
			app.itemWait = 0;
			app.logTxt.splice(0, 0, "四處遊歷增廣見聞，有更多機會尋覓機緣。秘境開啟時間縮短");
		},
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.point.div(5000) );
			app.standPerSec = app.standPerSec.plus(1);
			app.renown = app.renown.plus(2);
		},
		end: () => {
			var newItem = {
				name  : randomItemName(),
				object: getRandomItem(),
			};
			app.items.splice(0, 0, newItem );
			app.logTxt.splice(0, 0, "四海之內皆兄弟，有困難時就用此信物吧。獲得隨機法寶");
		},
	},
	{
		info : "專屬於皇宮的太監之術，非常人所能修練。每秒增加一點修為和10點財富",
		start: () => {
			var minus = app.life.div(5).round();
			app.life = app.life.minus( minus );
			app.logTxt.splice(0, 0, "修習公公之道，愈先練功，必先自宮!損失2成壽元");
		},
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times( app.point.div(10000) ) );
			app.money = app.money.plus(10);
		},
		end: () => {
			var randName = randomSkillName();
			app.skills.push( {
				name  : randName,
				object: getRandomSkill(),
			} );
			app.logTxt.splice(0, 0, "臨走前摸走皇宮中深藏的未知奇術-"+randName);
		},
	},
	{
		info : "隱居山谷的秘宗，不問世事只專心於修道。每秒增加小量修為和損失1點名氣",
		start: () => {
			app.renown = app.renown.div(2).round();
			app.logTxt.splice(0, 0, "要低調隱忍才能安心修練。損失一半名氣");
		},
		run: () => {
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times( app.point.div(2000) ) );
			app.renown = app.renown.minus(1);
		},
		end: () => {
			app.renown = app.renown.plus(50);
			app.logTxt.splice(0, 0, "再度入世歷練，闖出一番名號，恢復50點名氣");
		},
	},
	{
		info : "無處安身的散修公會，雖然缺乏資源但卻自由。每秒增加微量修為和1點壽元",
		start: () => {
			app.point = app.point.times(1.3);
			app.logTxt.splice(0, 0, "修道上的問題，公會內的道友都很樂於幫忙。修為增加3成");
		},
		run: () => {
			app.life = app.life.plus(1);
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times( app.point.div(10000) ) );
			app.money = app.money.minus( 1 );
		},
		end: () => {
			app.logTxt.splice(0, 0, "還是去找個安穩的棲身之所吧。");
		},
	},
	{
		info : "為達目的不擇手段的邪魔外道，大量搜刮錢財。每秒增加小量邪派修為和邪氣，增加5點財富",
		start: () => {
			if( app.renown.greaterThan(200) ){ app.renown = app.renown.minus(200); }
			else{ app.renown = new BigNumber(0); }
			app.logTxt.splice(0, 0, "跟這些宵小之輩同流合汙只會敗壞你的名聲。減少200名氣");
		},
		run: () => {
			app.pointPerSec = app.pointPerSec.minus( app.point.div(3000) );
			app.standPerSec = app.standPerSec.minus(4);
			app.money = app.money.plus( 5 );
		},
		end: () => {
			app.money = app.money.div(2).round();
			app.logTxt.splice(0, 0, "要走可以，可得先留下過路費才行。消耗5成財富");
		},
	},
	{
		info : "毀滅世界的邪惡組織，犧牲壽元提升修為。每秒減少5點壽元，增加大量邪派修為和邪氣，增加2點名氣",
		start: () => {
			app.life = app.life.times(0.7).round();
			app.logTxt.splice(0, 0, "犧牲自由證明你的忠誠!損失3成壽元");
		},
		run: () => {
			app.life = app.life.minus(5);
			app.renown = app.renown.plus(2);
			app.pointPerSec = app.pointPerSec.minus( app.point.div(1000) );
			app.standPerSec = app.standPerSec.minus(10);
		},
		end: () => {
			app.point = app.point.div(100);
			app.logTxt.splice(0, 0, "散去你一身功力，以示懲罰!損失9成修為");
		},
	},
];

function getRandomGroup(){
	var rand = Math.random();

	if( rand < 0.15 )		{ return groups[0]; }
	else if( rand < 0.4 ) 	{ return groups[1]; }
	else if( rand < 0.5 )	{ return groups[2]; }
	else if( rand < 0.6 ) 	{ return groups[3]; }
	else if( rand < 0.85 ) 	{ return groups[4]; }
	else if( rand < 0.95 ) 	{ return groups[5]; }
	else 					{ return groups[6]; }
}