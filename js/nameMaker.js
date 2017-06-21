
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
	"風雨", "百花", "金光", "六道", "巨靈", "琉璃", "七寶", "瀟湘", "縹緲", "無痕",
	"無量", "勾魂", "離夢", "蒼穹", "昊天", "冥道", "絕淵", "破天", "十方", "威震",
];

var typeName = [
	"功", "圖", "咒", "錄", "訣", "譜", "典", "書", "經", "卷",
	"抄", "法", "術",
];

var itemName = [
	"譜", "琴", "畫", "卷", "蕭", "盒", "鏡", "扇", "瓶", "珠", 
	"劍", "刀", "鐘", "鼎", "印", "石", "如意", "玉", "旗", "杖", 
	"傘", "塔", "筆", "環", "鼓", "槍", "鐲", "輪", "壺", "尺",
];

var attrType = [
	"聖", "禁", "大", "秘", "真", "古", "絕", "神", "靈", "奇",
	"寶", "之", "無上", "神仙", "心", 
];



var randomSkillName = function(){
	var a1 = attr1[ Math.floor( Math.random() * attr1.length ) ];
	var a2 = attr2[ Math.floor( Math.random() * attr2.length ) ];
	var t = typeName[ Math.floor( Math.random() * typeName.length ) ];
	var a = attrType[ Math.floor( Math.random() * attrType.length ) ];

	var rand = Math.random();
	if( rand < 0.2 ){  return a1+a2+a+t; }
	else if( rand < 0.4 ) { return a2+a1+a+t; }
	else if( rand < 0.6 ) { return a1+a+t; }
	else if( rand < 0.8 ) { return a2+a+t; }
	else { return a1+a2+t; }
}

var randomItemName = function(){
	var a1 = attr1[ Math.floor( Math.random() * attr1.length ) ];
	var a2 = attr2[ Math.floor( Math.random() * attr2.length ) ];
	var a3 = attr2[ Math.floor( Math.random() * attr2.length ) ];
	var i = itemName[ Math.floor( Math.random() * itemName.length ) ];
	var a = attrType[ Math.floor( Math.random() * attrType.length ) ];

	var rand = Math.random();
	if( rand < 0.2 ){  return a1+a2+i; }
	else if( rand < 0.4 ) { return a2+a1+i; }
	else if( rand < 0.6 ) { return a1+"之"+i; }
	else if( rand < 0.8 ) { return a2+"之"+i; }
	else { return a3+a2+i; }
}

var randomWorldName = function(){
	var a1 = attr1[ Math.floor( Math.random() * attr1.length ) ];
	return a1;
}

var randomNewSkillLog = function(randName){
	var rand = Math.random();
	if( rand < 0.2 ){  return "不慎摔下山谷！大難不死，竟習得"+randName; }
	else if( rand < 0.4 ) { return "僥倖撿到隨身老爺爺！獲得"+randName+"傳承"; }
	else if( rand < 0.6 ) { return "偶遇千年大機緣！習得"+randName; }
	else if( rand < 0.8 ) { return "獲創世女神青睞，賞賜"+randName; }
	else { return "系統當機大放送，輕鬆學得"+randName; }
}

var randomNewItemLog = function(randName){
	var rand = Math.random();
	if( rand < 0.2 ){  return "潛入封印的門派禁地，尋得"+randName; }
	else if( rand < 0.4 ) { return "原來祖上身分非凡，在自家倉庫撿到"+randName; }
	else if( rand < 0.6 ) { return "前輩高人遇難，臨死前轉贈"+randName; }
	else if( rand < 0.8 ) { return "在二手拍賣市場撿漏，慧眼獨具買到"+randName; }
	else { return "隨身系統的拉霸機中大獎！獲得"+randName; }
}