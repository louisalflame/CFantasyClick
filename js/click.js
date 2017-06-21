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
		pointPerSec: new BigNumber(0.0),
		level : level._0,
		talent: talent._0,
		body : body._0,

		skills : [],
		items : [],

		// 顯示用
		world : "基礎",
		number : 0,
 
 		logTxt: [], 
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
			app._countPointPerSec();
			app.point = app.point.plus( app.pointPerSec );
		},
		_talentLvUp: () => {
			if( !app.point.lessThan( app.talent.need ) ){
				app.point = app.point.minus( app.talent.need );
				app.talent = app.talent.getNext();

				app.logTxt.push("靈根提升！升級為"+app.talent.name+"！");
			}
		},
		_bodyLvUp: () => {
			if( !app.point.lessThan( app.body.need ) ){
				app.point = app.point.minus( app.body.need );
				app.body = app.body.getNext();

				app.logTxt.push("肉體強化！脫胎為"+app.body.name+"！");
			}
		},
		_skillLvUp: ( i ) => {
			if( !app.point.lessThan( app.skills[i].object.need.times( app.skills[i].weight ) ) ){
				app.point = app.point.minus( app.skills[i].object.need.times( app.skills[i].weight ) );
				app.skills[i].object = app.skills[i].object.getNext();

				app.logTxt.push("潛心修練"+app.skills[i].name+"，功力提升！");
			}
		},
		_getNewSkill: () => {
			if( app.talent.num.greaterThan( app.skills.length ) &&
				!app.point.lessThan( app.level.max.div(2) ) ){
				app.point = app.point.div( app.skills.length+2 ).round();

				var randName = randomSkillName();
				app.skills.push( {
					name  : randName,
					object: skill._0,
					level : app.skills.length,
					weight: new BigNumber(app.skills.length+1).pow(2),
				} );

				app.logTxt.push(randomNewSkillLog(randName)+"！");
			}
		},
		_getNewItem: () => {
			if( !( app.point.lessThan( app.level.max.div(10) ) ) && 
				!( app.point.lessThan(10099) ) ){
				app.point = app.point.div( 10 ).round();

				var randName = randomItemName();
				var _item = getRandomItem();
				var newItem = {
					name  : randName,
					object: _item,
					used  : !_item.useAble,
				};

				app.logTxt.push(randomNewItemLog(randName)+"！");
				app.items.push( newItem );
			}
		},
		_useItem: (id) => {
			if( app.items[id].object.useAble && !app.items[id].used ){	
				app.items[id].used = true;			
				app.items[id].object.start();
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

	        	app.logTxt.push("修為積累，境界突破！進入"+app.level.name+"階段！");
	        }

		},
		_countPointPerSec: () => {
			app.pointPerSec = new BigNumber(0);
			for( s of app.skills ){
				app.pointPerSec = app.pointPerSec.plus( s.object.num.times( s.weight ) );
			}
			for( i of app.items ){ 
				app.pointPerSec = app.pointPerSec.plus( i.object.getPointPerSec() );
			}
		},
		_gotoNextWorld: () => {
			app.worldTimes += 1;
			app.world = randomWorldName();

			app.point = new BigNumber(0);
			app.pointPerSec = new BigNumber(0);
			app.level = level._0;
			app.talent = talent._0;
			app.body = body._0; 

			var tmpItems = [];
			for( i of app.items ){
				if( !i.used || !i.object.useAble ){ tmpItems.push(i); }
			}
			if( tmpItems.length > 0 ){			
				var leftItem = tmpItems[ Math.floor( Math.random() * tmpItems.length ) ];
				app.items = [ leftItem ];
			}else{
				app.items = [];
			}

			if( app.skills.length > 0 ){
				var leftSkill = app.skills[ Math.floor( Math.random() * app.skills.length ) ];
				leftSkill.level = 0;
				leftSkill.weight = 1;
				if( leftSkill.object.getPrev() != null ){
					leftSkill.object = leftSkill.object.getPrev();
				}
				app.skills = [ leftSkill ];
			}else{
				app.skills = [ ];
			}

			app.logTxt.push("境界圓滿，破碎虛空！超脫當前世界進入"+app.world+"界！");
		}
	},
});

app._startTimer();
