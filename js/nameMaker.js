
var attr1 = [
	"九陽", "九陰", "八九", "至尊", "無極", "太虛", "洪荒", "天幻", "妙空", "妙有", 
	"純陽", "道真", "九龍", "真幻", "大藏", "天魔", "聖魔", "神魔", "天佛", "菩提", 
	"青龍", "白虎", "鳳凰", "玄武", "騰蛇", "麒麟", "般若", "燭龍", "盛滅", "末法", 
	"千鶴", "萬劍", "剎那", "卍咒", "皇霸", "真龍", "滅絕", "如來", "三聖", "九天", 
	"九煌", "軒轅", "日月", "星辰", "絕塵", "太清", "聖言", "死海", "地獄", "狂天", 
	"伏羲", "女媧", "洪荒", "真武", "萬象", "太乙", "乾元", "混元", "梵天", "輪迴", 
];

var attr2 = [
	"紫霞", "七星", "星霞", "古蜀", "紅霞", "幻海", "赤焰", "飛星", "煉獄", "紫光", 
	"流劍", "絕刀", "八卦", "雙燕", "迷魂", "墨羽", "定海", "閃光", "星爆", "彌勒", 
	"靈蛇", "水鏡", "飛雪", "洛英", "森羅", "碧雲", "天狼", "孤星", "天照", "流光", 
	"五彩", "天羅", "碎星", "定天", "極樂", "八卦", "天蠶", "地藏", "巽風", "風舞", 
	"血陽", "蒼羽", "屠羅", "飛霜", "流風", "狂嵐", "無雙", "星月", "真日", "證道", 
	"四象", "虛空", "浪濤", "迷魂", "陰陽", "靈霄", "太歲", "太白", "極上", "輪轉", 
	"孤月", "弦月", "怒濤", "淒煌", "靈狐", "轉生", "無垠", "無垢", "無限", "百仙", 
	"天罡", "仁王", "修羅", "羅剎", "菩薩", "蛇蠍", "五毒", "虎嘯", "蓮花", "七曜", 
];

var typeName = [
	"功", "圖", "咒", "錄", "訣", "譜", "典", "書", "經", "卷"
];

var attrType = [
	"聖", "禁", "大", "秘", "真", "古", "絕", "神", "靈", "奇",
	"寶", "之", "無上", "神仙",
];

var randomSkillName = function(){
	var a1 = attr1[ Math.floor( Math.random() * attr1.length ) ];
	var a2 = attr2[ Math.floor( Math.random() * attr2.length ) ];
	var type = typeName[ Math.floor( Math.random() * typeName.length ) ];
	var attr = attrType[ Math.floor( Math.random() * attrType.length ) ];

	var rand = Math.random();
	if( rand < 0.2 ){  return a1+a2+attr+type; }
	else if( rand < 0.4 ) { return a2+a1+attr+type; }
	else if( rand < 0.6 ) { return a1+attr+type; }
	else if( rand < 0.8 ) { return a2+attr+type; }
	else { return a1+a2+type; }
}

var randomWorldName = function(){
	var a1 = attr1[ Math.floor( Math.random() * attr1.length ) ];
	return a1;
}