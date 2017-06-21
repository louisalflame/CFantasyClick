var items = [
	// 使用類
	{
		info: "直接獲得當前境界一半容量的修為",
		useAble: true,
		start: () => { app.point = app.point.plus( app.level.max.div(2).round() ); },
		getPointPerSec: () => { return 0; },
	},
	{
		info: "精神時光屋，可瞬間修練100次",
		useAble: true,
		start: () => { app.point = app.point.plus( app.body.num.times(100) ); },
		getPointPerSec: () => { return 0; },
	},
	{
		info: "將當前的修為直接翻倍",
		useAble: true,
		start: () => { app.point = app.point.times(2); },
		getPointPerSec: () => { return 0; },
	},
	{
		info: "其實好像什麼效果也沒有......",
		useAble: true,
		start: () => { },
		getPointPerSec: () => { return 0; },
	},
	{
		info: "將肉體能力提升一個等級",
		useAble: true,
		start: () => { 
			if( app.body.getNext() != null ){ 
				app.body = app.body.getNext(); 
				app.logTxt.push("肉體強化！脫胎為"+app.body.name+"！");
			}
		},
		getPointPerSec: () => { return 0; },
	},
	{
		info: "將靈根提升一個等級",
		useAble: true,
		start: () => { 
			if( app.talent.getNext() != null ){ 
				app.talent = app.talent.getNext(); 
				app.logTxt.push("靈根提升！升級為"+app.talent.name+"！");
			}
		},
		getPointPerSec: () => { return 0; },
	},
	{
		info: "將境界直接提升一個等級",
		useAble: true,
		start: () => { 
			if( app.level.getNext() != null ){ 
				app.level = app.level.getNext(); 
	        	app.logTxt.push("修為積累，境界突破！進入"+app.level.name+"階段！");
			}else{			
	        	app._gotoNextWorld();
			}
		},
		getPointPerSec: () => { return 0; },
	},
	{
		info: "將升級消耗最低的功法提升一個等級",
		useAble: true,
		start: () => {
			if( app.skills.length == 0 ) return;
			var id = 0;
			console.log(app.skills.length);
			for( var i = 0; i < app.skills.length; i++){
				console.log( app.skills[i].object.need.toString() +": "+app.skills[id].object.need.toString() );
				if( app.skills[i].object.need.lessThan(app.skills[id].object.need) ){ id = i; }
			}
			if( app.skills[id].object.getNext() != null ){
				app.skills[id].object = app.skills[id].object.getNext();
				app.logTxt.push("潛心修練"+app.skills[id].name+"，功力提升！");
			}
		},
		getPointPerSec: () => { return 0; },
	},
	{
		info: "丟棄所有法寶以大幅提升自身修為",
		useAble: true,
		start: () => {
			app.point = app.point.plus( app.level.max.div(10).times( app.items.length ) );
			app.items = [];
		},
		getPointPerSec: () => { return 0; },
	},
	{
		info: "放棄所有功法而瞬間超大幅提升自身修為",
		useAble: true,
		start: () => {
			app.point = app.point.plus( new BigNumber(10).pow( app.skills.length ) );
			app.skills = [];
		},
		getPointPerSec: () => { return 0; },
	},
	// 常駐類
	{
		info: "每秒獲得等同修練十次的修為",
		useAble: false,
		start: () => { },
		getPointPerSec: () => { return app.body.num; },
	},
	{
		info: "每秒獲得等同境界容量之萬分之一的修為",
		useAble: false,
		start: () => { },
		getPointPerSec: () => { return app.level.max.div(100000).round(); },
	},
	{
		info: "每秒獲得當前修為之萬分之一的修為",
		useAble: false,
		start: () => { },
		getPointPerSec: () => { return app.point.div(100000).round(); },
	},
	{
		info: "每秒可獲得依法寶數量而增加的修為",
		useAble: false,
		start: () => { },
		getPointPerSec: () => { return new BigNumber(2).pow( app.items.length ).round() ; },
	},
	{
		info: "每秒可獲得功力最低的功法所修練的修為",
		useAble: false,
		start: () => { },
		getPointPerSec: () => {
			if( app.skills.length == 0 ){ return; }
			var num = app.skills[0].object.num.times( app.skills[0].weight );
			for( s of app.skills ){
				if( s.object.num.times( s.weight ).lessThan(num) ){
					num = s.object.num.times( s.weight );
				}
			}
			return num;
		},
	},
	//負面	
	{
		info: "道種魔心，會每秒衰減修練十次的修為",
		useAble: false,
		start: () => { },
		getPointPerSec: () => { return app.body.num.times(-1) ; },
	},
	{
		info: "入魔之人會衰減等同境界容量之萬分之一的修為",
		useAble: false,
		start: () => { },
		getPointPerSec: () => { return app.level.max.div(100000).round(),times(-1); },
	},
	{
		info: "逆行天道，會衰退功力最高的功法所修練的修為",
		useAble: false,
		start: () => { },
		getPointPerSec: () => { 
			if( app.skills.length == 0 ){ return; }
			var num = new BigNumber(0);
			for( s of app.skills ){
				if( s.object.num.times( s.weight ).greaterThan(num) ){
					num = s.object.num.times( s.weight );
				}
			}
			return num.times(-1);
		},
	},
];

function getRandomItem(){
	var randItem = items[ Math.floor( Math.random() * items.length ) ];
	return randItem;
}