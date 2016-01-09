var data = ['iPhone6','iPhone6 Plus','iPhone6s','iPhone6s Plus','iPad','iTouch','MacBook Pro','10000RMB','Special Offer','Beautiful life','Nice family'];
var timer = null;
var flag = 0;

window.onload = function() {
	var play = document.getElementById("play");
	var stop = document.getElementById("stop");

	//��ʼ�齱
	play.onclick = playFn;
	//ֹͣ�齱
	stop.onclick = stopFn;

	//�����¼�
	//keyup:�����ɿ�  keydown:��һֱ�������ظ�ִ��	keypress:���¼����ϵ��ַ���
	//keyCode����ü����ϰ����ļ���
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

//�齱����
function playFn() {
	var play = document.getElementById("play");
	var title = document.getElementById("title");
	clearInterval(timer);
	timer = setInterval(function() {
		var rdNumber = Math.floor(Math.random()*data.length);
		title.innerHTML = data[rdNumber];
	},50);
	play.style.background = "#999"; 
	//���ﲻ��ʹ��this����Ϊ��ʹ�ü��̵��ú�����ʱ��thisָ����document���󣬲��ܶ�document��������background����
	//������ﵥ����ʹ��������Ļ������ǿ���ʹ��this��
}

//ֹͣ�齱
function stopFn() {
	clearInterval(timer);
	var play = document.getElementById("play");
	play.style.background = "#036";
}