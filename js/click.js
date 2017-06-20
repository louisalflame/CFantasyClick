var point = new BigNumber(0.0);

var app = new Vue({ 
	el: '#app',
	data: {
		// 讀秒器
		timerId : null,
		fpsInterval : 100,
		then : 0,

		// 點數
		worldTimes : 0,
		point : new BigNumber(0.0),
		pointPerSec: new BigNumber( 10),
		level : level._0,
		talent: talent._0,
		body : body._0,

		// 顯示用
		world : "基礎",
		number : 0,
		levelTxt : level._0.name,
		talentTxt: talent._0.name,
		talentNeed: talent._0.need.toString(),
		talentAble: false,
		bodyTxt : body._0.name,
		bodyNum: body._0.num.toString(),
		bodyNeed: body._0.need.toString(),
		bodyAble: false,

		skillName: randomSkillName(),
	},
	methods: {
		// 讀秒器
		_startTimer: () => {
			app.then = new Date().getTime();
			app.timerId = window.requestAnimationFrame( app._timer );
		},
		_timer: () => { 
        	var now     = new Date().getTime();
	        var elapsed = now - app.then;

	        if( elapsed > app.fpsInterval ){
	            app.then = now - (elapsed % app.fpsInterval);

	            app._countAutoAdd();
	        }

			app.timerId = window.requestAnimationFrame( app._timer );
			app._show();
		},
		// 點數
		_addByBody: () => {
			app.point = app.point.plus( app.body.num );
		},
		_countAutoAdd: () => {
			app.point = app.point.plus(1 );
		},
		_talentLvUp: () => {
			if( app.point.greaterThan( app.talent.need ) ){
				app.point = app.point.minus( app.talent.need );
				app.talent = app.talent.getNext();
				app.talentTxt = app.talent.name;
				app.talentNeed = app.talent.need.toString();
			}
		},
		_bodyLvUp: () => {
			if( app.point.greaterThan( app.body.need ) ){
				app.point = app.point.minus( app.body.need );
				app.body = app.body.getNext();
				app.bodyTxt = app.body.name;
				app.bodyNum = app.body.num.toString();
				app.bodyNeed = app.body.need.toString();
			}
		},
		// 顯示用
		_show: () => {
	        app.number = app.point.toString();

	        while( app.point.greaterThan( app.level.max ) ){
	        	if( app.level.getNext() == null ){
	        		app._gotoNextWorld();
	        		break;
	        	}
	        	app.level = app.level.getNext();
	        	app.levelTxt = app.level.name;
	        }

	        app.bodyAble = app.point.greaterThan( app.body.need );
	        app.talentAble = app.point.greaterThan( app.talent.need );

		},
		_gotoNextWorld: () => {
			app.worldTimes += 1;
			app.world = randomWorldName();

			app.point = new BigNumber(0);
			app.pointPerSec = new BigNumber(0);
			app.level = level._0;
			app.talent = talent._0;
			app.body = body._0;

			app.number = app.point.toString();
			app.levelTxt = app.level.name;
			app.talentTxt = app.talent.name;
			app.talentNeed = app.talent.need.toString();
			app.bodyTxt = app.body.name;
			app.bodyNum = app.body.num.toString();
			app.bodyNeed = app.body.need.toString();
		}
	},
});

app._startTimer();
