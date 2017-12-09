var send = document.getElementsByClassName('send')[0];
var area = document.getElementsByClassName('area')[0];
var warning = document.getElementsByClassName('warning')[0];
var msgBox = document.getElementById('msgBox');
var rightBox=document.getElementsByClassName('rightBox')[0];
var timer;
var nr=document.getElementsByClassName('nr')[0];
var face=document.getElementsByClassName('face')[0];
var BQ=document.getElementsByClassName('BQ')[0];
var j=0;
var talkMsg=document.getElementsByClassName('talkMsg')[0];
var slid=document.getElementsByClassName('slid_BQ')[0];
// 回车发送消息
area.onkeydown = function(e){
	if(e.keyCode == 13&&e.shiftKey==false){
		send.onclick();
		e.preventDefault();//阻止回车默认换行
	}
}

// 点击发送按钮发送消息
send.onclick = function(){
	if (area.value == '') {
		warning.style.display = 'block';
		clearTimeout(timer);
		timer = setTimeout(function(){
			warning.style.display = 'none';
		},1000)
	}else{
		var li = document.createElement('li');
		li.className = 'clearFix';
		li.innerHTML = '<p class="time">'+new Date().toLocaleString()+'</p><p class="content"><span class="conText">'+area.value+'</span><span class="myHead"></span></p>';
		msgBox.appendChild(li);
		li.scrollIntoView();//li滚动到视野范围之内
		area.value ='';
		area.focus();//获取光标（焦点）
	}
}
msgBox.oncontextmenu=function(e){
	e.preventDefault();
	rightBox.style.display='block';
	rightBox.style.left=e.clientX-talkMsg.offsetLeft+'px';
	rightBox.style.top=e.clientY-talkMsg.offsetTop+'px';
}
document.onclick=function(){
	rightBox.style.display='none';
}

face.onclick=function(){
	if(j==0){
		BQ.style.display="block";
		slid.style.display="none";
		j=1;
	}
	else{
		BQ.style.display="none";
		j=0;
	}
}
face.onmouseover=function(){
	if(BQ.style.display=="block"){
		slid.style.display="none";
	}
	else{
		slid.style.display="block";
	}
}
face.onmouseout=function(){
	slid.style.display="none";
}
for(var i=1;i<=132;i++)
{
	nr.innerHTML+='<img src="img/QQ/'+i+'.gif">';
}
for(var k=1;k<=13;k++)
{
	slid.innerHTML+='<img src="img/QQ/'+k+'.gif">';
}