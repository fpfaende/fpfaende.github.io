var data = [{"pinyin": "pu4man3", "chinese": "铺满", "english": ""},{"pinyin": "shui3wa1", "chinese": "水洼", "english": ""},{"pinyin": "jin3jin", "chinese": "紧紧", "english": ""},{"pinyin": "yuan4qiang2", "chinese": "院墙", "english": ""},{"pinyin": "yin4zhe", "chinese": "印着", "english": ""},{"pinyin": "pai2li4", "chinese": "排列", "english": ""},{"pinyin": "gui1ze2", "chinese": "规则", "english": ""},{"pinyin": "ling2luan4", "chinese": "凌乱", "english": ""},{"pinyin": "zeng1tian1", "chinese": "增添", "english": ""},{"pinyin": "chi2dao4", "chinese": "迟到", "english": ""},{"pinyin": "yu3xue4", "chinese": "雨靴", "english": ""},{"pinyin": "yu2kuai4", "chinese": "愉快", "english": ""},{"pinyin": "ping2zhan3", "chinese": "平展", "english": ""},{"pinyin": "yu4tie1", "chinese": "熨帖", "english": ""},{"pinyin": "shui3ni2dao4", "chinese": "水泥道", "english": ""},{"pinyin": "liang4jing1jing1", "chinese": "亮晶晶", "english": ""},{"pinyin": "zong1hong2se4", "chinese": "棕红色", "english": ""},{"pinyin": "shi1lu4lu4", "chinese": "湿漉漉", "english": ""}]；

var i=0

function tryme() {
	i = Math.floor(Math.random() * data.length);
  document.getElementById("chinese").innerHTML=data[i]['chinese'];
  //document.getElementById("english").innerHTML="reveal";
  document.getElementById("pinyin").innerHTML="reveal";	
}

function reveal(mydiv) {
	document.getElementById(mydiv).innerHTML=data[i][mydiv];
}
