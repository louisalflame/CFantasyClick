var point = new BigNumber(0.0);

var app = new Vue({ 
	el: '#app',
	data: {
		// Css
		backCss : {
			background: '#333333',
		},
		nameCss : {
			width: '100px',
		},
		buttonCss : {
			width: '60%',
			'font-size': '200%',
		},
		centerCss : {
			background: '#efefef',
		},
		tableCss : {
			width : '95%',
			margin : 'auto',
			background: '#ffffff',
		},
		tableRowCss : {
			background: '#888888',
		},
		Tr0css : {
			color: '#e6ffff',
			fontSize: '120%',
			'font-weight': 'bold',
			background: '#000066',
		},
		Tr1css : {
			background: '#e6e6ff',
		},
		Tr2css : {
			background: '#e6ffd6',
		},
		Tr3css : {
			background: '#ffffd6',
		},
		Tr4css : {
			background: '#f2d6ff',
		},
		logCss : {
			background: '#ffffff',
			height: '300px',
			overflow: 'scroll',
		},
		dataCss : {
			width: '70%',
		},


		// 讀秒器
		timerId : null,
		fpsInterval : 100,
		then : 0,

		secInterval : 1000,
		secThen : 0,
		itemWait : 10,
		groupWait : 30,

		// 點數
		worldTimes : 0,
		life : new BigNumber(10000),
		totalLife : new BigNumber(10000),
		renown : new BigNumber(100),
		money : new BigNumber(100),

		stand : stands._3,
		standPoint : new BigNumber(1.0), // 10000 ~ -10000 
		standPerSec : new BigNumber(0),  // 10 ~ -10

		group : { exist: false, object: null, name: '散修', },
		groupInterval : new BigNumber(10),

		point : new BigNumber(0.0),
		pointPerSec: new BigNumber(0.0),

		level : level._0,
		talent: talent._0,
		body : body._0,

		skills : [],
		removeCost : new BigNumber(100),

		items : [],
		itemInterval : new BigNumber(5),
		itemCost : new BigNumber(10000),

		// 顯示用
		name: "大中天",
		born: true,
		world : [ "基礎" ],
  		logTxt: [], 
  		record: "",

 		numFilter: { 
 			txt: (str) => {
 				var rev = str.split('').reverse().join('');

	 			var ret = []; 
	 			for(i = 0; i < rev.length; i += 3 ){
	 				ret.push( rev.substr( i, 3) );
	 			}
	 			return ret.join(',').split('').reverse().join('');
 			} 
 		},
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
				app._show();
	        }

	        var secElapsed = now - app.secThen;
	        if( secElapsed > app.secInterval ){
	            app.secThen = now - (secElapsed % app.secInterval);
 				
 				app._countPerSec();
	        }

	        if( app.life.eq(0) || app.life.lessThan(0) ){ app._goEnd(); }
	        else{ app.timerId = window.requestAnimationFrame( app._timer ); }
		},
		// 點數
		_addByBody: () => {
			if( app.life.greaterThan(0) ){
				app.point = app.point.plus( app.body.num );
			}
		},
		_countAutoAdd: () => {	
			app.point = app.point.plus( app.pointPerSec );

 			// 限制處理
 			if( app.point.lessThan(0) ){ app.point = new BigNumber(0); }
		},
		_countPointPerSec: () => {
			app.pointPerSec = new BigNumber(0);
			app.standPerSec = new BigNumber(0);
			for( s of app.skills ){ s.object.run(); } 
			for( i of app.items ){  i.object.runPerSec(); }

			if( app.group.exist ){ app.group.object.run(); }
			app.standPoint = app.standPoint.plus( app.standPerSec );
			app.stand = stands.find( app.standPoint );

			app.pointPerSec = app.stand.filter( app.pointPerSec );			
		},
		_countPerSec: () => {		
			app._countPointPerSec();

 			app.life = app.life.minus(1);
 			app.itemWait = app.itemWait > 0 ? app.itemWait -1 : 0;
 			app.groupWait = app.groupWait > 0 ? app.groupWait -1 : 0;

 			// 限制處理
 			if( app.money.lt(0) ){ app.money = new BigNumber(0); }
 			if( app.renown.lt(0) ){ app.renown = new BigNumber(0); }
 			if( app.standPoint.gt(10000) ){ app.standPoint = new BigNumber(10000); }
 			else if( app.standPoint.lt(-10000) ){app.standPoint = new BigNumber(-10000); }
		},
		_talentLvUp: () => {
			if( !app.point.lessThan( app.talent.need ) ){
				app.point = app.point.minus( app.talent.need );
				app.talent = app.talent.getNext();

				app.logTxt.splice(0, 0, "靈根提升！升級為"+app.talent.name+"！");
			}
		},
		_bodyLvUp: () => {
			if( !app.point.lessThan( app.body.need ) ){
				app.point = app.point.minus( app.body.need );
				app.body = app.body.getNext();

				app.logTxt.splice(0, 0, "肉體強化！脫胎為"+app.body.name+"！");
			}
		},
		_skillLvUp: ( i ) => {
			if( !app.point.lessThan( app.skills[i].object.need ) ){
				app.point = app.point.minus( app.skills[i].object.need );
				app.skills[i].object = app.skills[i].object.getNext();

				app.logTxt.splice(0, 0, "潛心修練"+app.skills[i].name+"，功力提升！");
			}
		},
		_getNewSkill: () => {
			if( app.talent.num.greaterThan( app.skills.length ) &&
				!app.point.lessThan( app.level.max.div(2) ) ){
				app.point = app.point.div( app.skills.length+2 ).round();

				var randName = randomSkillName();
				app.skills.push( {
					name  : randName,
					object: getRandomSkill(),
				} );

				app.logTxt.splice(0, 0, randomNewSkillLog(randName)+"！");
			}
		},
		_skillRemove: (id) => {
			if( !app.money.lessThan(app.removeCost) ){
				app.money = app.money.minus(app.removeCost);
				app.removeCost = app.removeCost.plus(10);
				app.skills.splice(id, 1);
			}
		},
		_getNewItem: () => {
			if( !( app.point.lessThan( app.level.max.div(2) ) ) && 
				!( app.point.lessThan( app.itemCost ) ) ){
				app.point = app.point.div( 10 ).round();
				app.itemCost = app.itemCost.times(1.1).round();
				app.itemInterval = app.itemInterval.plus(1);
				app.itemWait = app.itemInterval.toNumber();

				var randName = randomItemName();
				var _item = getRandomItem();
				var newItem = {
					name  : randName,
					object: _item,
				};

				app.logTxt.splice(0, 0, randomNewItemLog(randName)+"！");
				app.items.splice(0, 0, newItem );
			}
		},
		_useItem: (id) => {
			if( app.items[id].object.useAble ){
				app.items[id].object.start();
				app.items.splice(id, 1);
			}
		},
		_joinGroup: () => {
			if( !app.renown.lessThan(100) ){
				app.renown = app.renown.minus(100);
				app.group = { 
					exist: true, 
					object: getRandomGroup(), 
					name: randomGroupName(), 
				};
				app.group.object.start();
			}
		},
		_exitGroup: () => {
			app.group.object.end();
			app.group = { exist: false, object: null, name: '散修', };

			app.groupInterval = app.groupInterval.plus(10);
			app.groupWait = app.groupInterval.toNumber();
		},
		// 顯示用
		_setName: () => {
			app.born = false;
		},
		_show: () => {
	        while( app.point.greaterThan( app.level.max ) ){
	        	if( app.level.getNext() == null ){
	        		app._gotoNextWorld();
	        		break;
	        	}
	        	app.level = app.level.getNext();

	        	app.logTxt.splice(0, 0, "修為積累，境界突破！進入"+app.level.name+"階段！");
	        }

		},
		_gotoNextWorld: () => {
			app.worldTimes += 1;
			app.world.splice( 0, 0, randomWorldName() );

			app.point = new BigNumber(0);
			app.pointPerSec = new BigNumber(0);
			app.level = level._0;
			app.body = body._0; 
		
			app.renown = new BigNumber(10);
			app.money = new BigNumber(100);

			app.group = { exist: false, object: null, name: '散修', };
			app.groupInterval = new BigNumber(60);
			app.groupWait = app.groupInterval.toNumber();

			if( app.skills.length > 0 ){
				var leftSkill = app.skills[ Math.floor( Math.random() * app.skills.length ) ];
				for(var i = 0; i < 4; i++){
					if( leftSkill.object.getPrev() != null ){
						leftSkill.object = leftSkill.object.getPrev();
					}
				}
				app.skills = [ leftSkill ];
				app.talent = talent._1;
			}else{
				app.skills = [ ];
				app.talent = talent._0;
			}

			var tmpItems = [];
			for( i of app.items ){ tmpItems.push(i); }
			if( tmpItems.length > 0 ){			
				var leftItem = tmpItems[ Math.floor( Math.random() * tmpItems.length ) ];
				app.items = [ leftItem ];
			}else{
				app.items = [];
			}
			app.itemCost = new BigNumber(10000);
			app.itemInterval = new BigNumber(10);
			app.itemWait = app.itemInterval.toNumber();

			app.logTxt.splice(0, 0, "境界圓滿，破碎虛空！超脫當前世界進入"+app.world[0]+"界！");
		}, 
		_showData: () => {
			var data = {};
			data.point = app.point.round().toString();
			data.level = app.level.id;
			data.body = app.body.id;
			data.talent = app.talent.id;

			data.name = app.name;
			data.world = app.world;
			data.worldTimes = app.worldTimes;
			data.life = app.life.toString();
			data.totalLife = app.totalLife.toString();
			data.money = app.money.toString();
			data.renown = app.renown.toString();
        	data.standPoint = app.standPoint.toString();

			data.skills = [];
			for(s of app.skills){
				data.skills.push({
					name: s.name,
					id: s.object.id,
				});
			}

			data.items = [];
			for(i of app.items){
				data.items.push({
					name: i.name,
					id: items.indexOf(i.object),
				});
			}
			data.itemCost = app.itemCost.toString();
			data.itemInterval = app.itemInterval.toString();

			app.record = LZString.compressToEncodedURIComponent( JSON.stringify(data) );
		},
		_loadData: () => {
			try{
			    var record = LZString.decompressFromEncodedURIComponent( app.record );
			    if( !record ){ alert("不正確的資料"); return; }

        		var data = JSON.parse( record );

        		app.point = new BigNumber( data.point );
        		app.level = level[ data.level ];
        		app.body = body[ data.body ];
        		app.talent = talent[data.talent ];

        		app.name = data.name;
        		app.world = data.world;
        		app.worldTimes = data.worldTimes;
        		app.life = new BigNumber( data.life );
        		app.totalLife = new BigNumber( data.totalLife );
        		app.money = new BigNumber( data.money );
        		app.renown = new BigNumber( data.renown );
        		app.standPoint = new BigNumber( data.standPoint );
				app.stand = stands.find( app.standPoint );

        		app.logTxt = [];

        		app.skills = [];
        		for( s of data.skills ){
        			app.skills.push({
        				name: s.name,
        				object: skills[s.id],
        			});
        		}

        		app.items = [];
        		for( i of data.items ){
        			app.items.push({
        				name: i.name,
        				object: items[ i.id ],
        			});
        		}
        		app.itemCost = new BigNumber(data.itemCost);
        		app.itemInterval = new BigNumber(data.itemInterval);
				app.itemWait = app.itemInterval.toNumber();

		    }catch(e){ alert(e); }
		},
		_goEnd: () => { 
			alert( "壽元已盡，請來世再修吧！" );
		},
	},
});

app._startTimer();
