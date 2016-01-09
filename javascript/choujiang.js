var data = ['iPhone6','iPhone6 Plus','iPhone6s','iPhone6s Plus','iPad','iTouch','MacBook Pro','10000RMB','Special Offer','Beautiful life','Nice family'];
var timer = null;
var flag = 0;

window.onload = function() {
	var play = document.getElementById("play");
	var stop = document.getElementById("stop");

	//开始抽奖
	play.onclick = playFn;
	//停止抽奖
	stop.onclick = stopFn;

	//键盘事件
	//keyup:按下松开  keydown:若一直按，则重复执行	keypress:按下键盘上的字符键
	//keyCode：获得键盘上按键的键码
	document.onkeyup = function(event) {
		event = event || window.event;
		if(event.keyCode==13) {
			if(flag==0) {
				playFn();
				flag = 1;
			}else {
				stopFn();
				flag = 0;
			}
		}
	}
}

//抽奖函数
function playFn() {
	var play = document.getElementById("play");
	var title = document.getElementById("title");
	clearInterval(timer);
	timer = setInterval(function() {
		var rdNumber = Math.floor(Math.random()*data.length);
		title.innerHTML = data[rdNumber];
	},50);
	play.style.background = "#999"; 
	//这里不能使用this，因为当使用键盘调用函数的时候this指向了document对象，不能对document对象设置background属性
	//如果这里单纯的使用鼠标点击的话，还是可以使用this的
}

//停止抽奖
function stopFn() {
	clearInterval(timer);
	var play = document.getElementById("play");
	play.style.background = "#036";
}