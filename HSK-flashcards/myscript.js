var data = [{"pinyin": "pu4man3", "chinese": "&#38138;&#28385;", "english": ""},{"pinyin": "shui3wa1", "chinese": "&#27700;&#27964;", "english": ""},{"pinyin": "jin3jin", "chinese": "&#32039;&#32039;", "english": ""},{"pinyin": "yuan4qiang2", "chinese": "&#38498;&#22681;", "english": ""},{"pinyin": "yin4zhe", "chinese": "&#21360;&#30528;", "english": ""},{"pinyin": "pai2li4", "chinese": "&#25490;&#21015;", "english": ""},{"pinyin": "gui1ze2", "chinese": "&#35268;&#21017;", "english": ""},{"pinyin": "ling2luan4", "chinese": "&#20940;&#20081;", "english": ""},{"pinyin": "zeng1tian1", "chinese": "&#22686;&#28155;", "english": ""},{"pinyin": "chi2dao4", "chinese": "&#36831;&#21040;", "english": ""},{"pinyin": "yu3xue4", "chinese": "&#38632;&#38772;", "english": ""},{"pinyin": "yu2kuai4", "chinese": "&#24841;&#24555;", "english": ""},{"pinyin": "ping2zhan3", "chinese": "&#24179;&#23637;", "english": ""},{"pinyin": "yu4tie1", "chinese": "&#29096;&#24086;", "english": ""},{"pinyin": "shui3ni2dao4", "chinese": "&#27700;&#27877;&#36947;", "english": ""},{"pinyin": "liang4jing1jing1", "chinese": "&#20142;&#26230;&#26230;", "english": ""},{"pinyin": "zong1hong2se4", "chinese": "&#26837;&#32418;&#33394;", "english": ""},{"pinyin": "shi1lu4lu4", "chinese": "&#28287;&#28425;&#28425;", "english": ""}];
var i=0

function tryme() {
	i = Math.floor(Math.random() * data.length);
  document.getElementById("chinese").innerHTML=data[i]['chinese'];
  document.getElementById("english").innerHTML="reveal";
  document.getElementById("pinyin").innerHTML="reveal";	
}

function reveal(mydiv) {
	document.getElementById(mydiv).innerHTML=data[i][mydiv];
}
