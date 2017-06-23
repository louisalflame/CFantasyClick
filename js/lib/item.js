var items = [
	// 使用類
	{
		info: "直接獲得大量的財富",
		useAble: true,
		start: () => { app.money = app.money.plus( app.removeCost.times(10) ); },
		runPerSec: () => {},
	},
	{
		info: "直接獲得大量的聲望",
		useAble: true,
		start: () => { app.renown = app.renown.plus( 1000 ); },
		runPerSec: () => {},
	},
	{
		info: "直接獲得大量的壽元",
		useAble: true,
		start: () => {			
			app.life = app.life.plus(1000);
		},
		runPerSec: () => {},
	},
	{
		info: "直接獲得大量的修為",
		useAble: true,
		start: () => { app.point = app.point.plus( app.level.max.div(5).round() ); },
		runPerSec: () => {},
	},
	{
		info: "直接獲得當前境界一半容量的修為",
		useAble: true,
		start: () => { app.point = app.point.plus( app.level.max.div(2).round() ); },
		runPerSec: () => {},
	},
	{
		info: "精神時光屋，可瞬間修練100次",
		useAble: true,
		start: () => { app.point = app.point.plus( app.body.num.times(100) ); },
		runPerSec: () => {},
	},
	{
		info: "將當前的修為直接翻倍",
		useAble: true,
		start: () => { app.point = app.point.times(2); },
		runPerSec: () => {},
	},
	{
		info: "將當前的財富直接翻倍",
		useAble: true,
		start: () => { app.money = app.money.times(2); },
		runPerSec: () => {},
	},
	{
		info: "將當前的名氣直接翻倍",
		useAble: true,
		start: () => { app.renown = app.renown.times(2); },
		runPerSec: () => {},
	},
	{
		info: "淨化心靈，提升正派心性10%",
		useAble: true,
		start: () => {	app.standPoint = app.standPoint.plus(1000);  },
		runPerSec: () => {},
	},
	{
		info: "汙染心靈，逆天而行墮落10%",
		useAble: true,
		start: () => {	app.standPoint = app.standPoint.minus(1000);  },
		runPerSec: () => {},
	},
	{
		info: "將肉體能力提升一個等級",
		useAble: true,
		start: () => { 
			if( !app.body.top ){ 
				app.body = app.body.getNext(); 
				app.logTxt.splice(0, 0, "肉體強化！脫胎為"+app.body.name+"！");
			}
		},
		runPerSec: () => {},
	},
	{
		info: "將靈根提升一個等級",
		useAble: true,
		start: () => { 
			if( !app.talent.top ){ 
				app.talent = app.talent.getNext(); 
				app.logTxt.splice(0, 0, "靈根提升！升級為"+app.talent.name+"！");
			}
		},
		runPerSec: () => {},
	},
	{
		info: "將境界直接提升一個等級",
		useAble: true,
		start: () => { 
			if( !app.level.top ){ 
				app.level = app.level.getNext(); 
	        	app.logTxt.splice(0, 0, "修為積累，境界突破！進入"+app.level.name+"階段！");
			}else{			
	        	app._gotoNextWorld();
			}
		},
		runPerSec: () => {},
	},
	{
		info: "將升級消耗最低的功法提升一個等級",
		useAble: true,
		start: () => {
			if( app.skills.length == 0 ) return;
			var id = 0;
			for( var i = 0; i < app.skills.length; i++){
				if( app.skills[i].object.need.lessThan(app.skills[id].object.need) ){ id = i; }
			}
			if( app.skills[id].object.getNext() != null ){
				app.skills[id].object = app.skills[id].object.getNext();
				app.logTxt.splice(0, 0, "潛心修練"+app.skills[id].name+"，功力提升！");
			}
		},
		runPerSec: () => {},
	},
	{
		info: "丟棄所有法寶以大幅提升自身一般修為",
		useAble: true,
		start: () => {
			app.point = app.point.plus( app.level.max.div(100).times( app.items.length ) );
			app.items = [];
		},
		runPerSec: () => {},
	},
	{
		info: "再來一次!獲得兩個新法寶",
		useAble: true,
		start: () => {
			for( var i = 0; i < 2; i++ ){
				var newItem = {
					name  : randomItemName(),
					object: getRandomItem(),
				};
				app.logTxt.splice(0, 0, randomNewItemLog(newItem.name)+"！");
				app.items.splice(1, 0, newItem );
			}
		},
		runPerSec: () => {},
	},
	{
		info: "耗費所有財富，每1000金購買新法寶，最多買100個",
		useAble: true,
		start: () => {
			for( ; app.money.greaterThan(1000); app.money = app.money.minus(1000) ){
				var newItem = {
					name  : randomItemName(),
					object: getRandomItem(),
				};
				app.logTxt.splice(0, 0, randomNewItemLog(newItem.name)+"！");
				app.items.splice(0, 0, newItem );
				if( app.items.length > 100 ){ break; }
			}
		},
		runPerSec: () => {},
	},
	{
		info: "耗費所有名聲尋找長生之道，每100名氣換取10秒",
		useAble: true,
		start: () => {
			var t = app.renown.div(100).round();
			app.renown = app.renown.minus( t.times(100) );
			app.life = app.life.plus(t);
		},
		runPerSec: () => {},
	},
	{
		info: "換個地方重新出發，將立場回歸中立",
		useAble: true,
		start: () => {
			app.standPoint = new BigNumber(0);
			app.stand = stands.find( app.standPoint );
		},
		runPerSec: () => {},
	},
	// 常駐類
	{
		info: "每秒獲得等同修練十次的一般修為",
		useAble: false,
		start: () => { },
		runPerSec: () => { 
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times( app.body.num ) ); 
		},
	},
	{
		info: "每秒獲得等同境界容量之萬分之一的一般修為",
		useAble: false,
		start: () => { },
		runPerSec: () => { 
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times( app.level.max.div(100000) ) ); 
		},
	},
	{
		info: "每秒獲得當前修為之萬分之一的一般修為",
		useAble: false,
		start: () => { },
		runPerSec: () => { 
			app.pointPerSec = app.pointPerSec.plus( app.stand.num.times( app.point.div(100000) ) ); 
		},
	},
	{
		info: "每秒可獲得1點財富",
		useAble: false,
		start: () => { },
		runPerSec: () => { app.money = app.money.plus(1); },
	},
	{
		info: "每秒可獲得1點名氣",
		useAble: false,
		start: () => { },
		runPerSec: () => { app.renown = app.renown.plus(1); },
	},
	{
		info: "每秒可獲得1點壽元",
		useAble: false,
		start: () => { },
		runPerSec: () => { 
			app.life = app.life.plus(1);
		},
	},
	{
		info: "可持續增加正派心性",
		useAble: false,
		start: () => { },
		runPerSec: () => { app.standPerSec = app.standPerSec.plus(2); },
	},
	{
		info: "可持續墮落滋長魔性",
		useAble: false,
		start: () => { },
		runPerSec: () => { app.standPerSec = app.standPerSec.minus(2); },
	},
];

function getRandomItem(){
	var randItem = items[ Math.floor( Math.random() * items.length ) ];
	return randItem;
}