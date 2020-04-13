// (C) Maslov V.V 2020 Kaluga

var hbar = document.getElementById("hbar");
var vbar = document.getElementById("vbar");
var hbar2 = document.getElementById("hbar2");
var loop = false;
//var textdiv = document.getElementById("textDiv");
var textbtn = document.getElementById("textbtn");

var select1 = document.getElementById("select1");
var select2 = document.getElementById("select2");
var valpulse = document.getElementById("pulse");
var txtpulse = document.getElementById("txtpulse");
var txttime = document.getElementById("timeDiv");
var sound = document.getElementById("sound");

var hbar2text = document.getElementById("hbar2text");
var hbartext = document.getElementById("hbartext");
var vertext = document.getElementById("vertext");

var isSound=false;
var formula;

var pulse = 1*valpulse.value;
var pulsesec = 60/pulse; // ДЛительность 1 удара пульса

txttime.innerText = "00:00"
var session_time = 0; //Date.now()

var audio1 = new Audio('11.mp3');
var audio2 = new Audio('22.mp3');
var audio3 = new Audio('33.mp3');
var audio4 = new Audio('44.mp3');
//audio.play();



 setInterval(function (){ // time calculation
	 if (loop)
		 {
			session_time += 1000;
		 }
	 d = new Date();
d.setTime(session_time);
	 var mm = ""+d.getMinutes()
	 if (mm.length <2)
		 {
			 mm = "0"+mm
		 }
	 var ss = ""+ d.getSeconds()
	 if (ss.length < 2)
		 {
			 ss = "0"+ ss;
		 }
	 txttime.innerText = mm+":"+ss;
//console.log('timer '+ d.toTimeString());
	
	
},1000);

//textdiv.innerText = w['Нажмите Старт']
txtpulse.innerText = w['Пульс']
textbtn.innerText = w["Старт"];
//textdiv.innerText = w["Нажмите Старт"]

si1.forEach(addOptions)

function addOptions(it)
{
var option = document.createElement("option");
    option.value = it.name;
    option.text = it.text;
    select1.appendChild(option);
}
si2.forEach(addOptions2)

function addOptions2(it)
{
var option = document.createElement("option");
    option.value = it.name;
    option.text = it.text;
    select2.appendChild(option);
}

function changeSound()
{
	isSound = sound.checked;
}

getFormula();

function getFormula()
{
var i1 = select1.value;
var i2 = select2.value;
//console.log(i1,i2)
formula = li[select1.value][select2.value];
vertext.style.webkitAnimationDuration= ""+formula[0]*pulsesec*1000+"ms";
if (formula[1]==0) {
	hbar.parentElement.hidden = true;
}
else {hbar.parentElement.hidden = false;}

if (formula[3]==0) {
	hbar2.parentElement.hidden = true;
}
else {hbar2.parentElement.hidden = false;}

}

async function sleep(ms) {
	return new Promise((resolve,reject) => setTimeout(function(){resolve()}, ms))
  }

async function animationOld()
{

}

async function startAnimations()
{
	loop = true
while(loop)
	{
	//console.log("start...")
  //hbar.style.animation = "hmove 3s";
  if (!loop) break
  if (select1.value == "Антивирус")
  {
	//textdiv.innerText = w["Вдох1"]
	vertext.innerText = w["Вдох1"]
  }
  else {
	  //textdiv.innerText = w["Вдох"]
	  vertext.innerText = w["Вдох"]
  }
vbar.style.webkitAnimationDuration= ""+formula[0]*pulsesec*1000+"ms";
vertext.style.webkitAnimationDuration = ""+formula[0]*pulsesec*1000+"ms";;
//vertext.style.webkitAnimationName="stop";

if (isSound) {audio1.play();}
vbar.style.webkitAnimationName="vertup";

if (vertext.style.webkitAnimationName=="textanim2") 
{
	vertext.style.webkitAnimation.animationOld; 
}
vertext.style.webkitAnimationName="textanim2";	
//var anim2 = vbar.animate([{ height: '20px', top:'280px'}, { height: '100%', top: '0px'}],formula[0]*pulsesec*1000)
//await anim2.finished
await sleep(formula[0]*pulsesec*1000);
  //await sleep(3*1000);
vbar.style.height = '100%'
vbar.style.top = '0%'
if (isSound) {audio1.pause();audio1.currentTime = 0;}	
  //console.log('finished 1')
if (!loop) break;
if (formula[1]>0)
{	
  //textdiv.innerText = w["Пауза"]
  hbartext.innerText = w["Пауза"]
hbar.style.webkitAnimationDuration=""+formula[1]*pulsesec*1000+"ms";
if (isSound) {audio2.play();}

hbartext.style.webkitAnimationDuration=hbar.style.webkitAnimationDuration;
hbartext.style.webkitAnimationName="textanim2";
hbar.style.webkitAnimationName="horright";

//var anim = hbar.animate([{ width: '20px' }, { width: '300px' }],formula[1]*pulsesec*1000)
//await anim.finished
await sleep(formula[1]*pulsesec*1000);
  //await sleep(3*1000);
  hbar.style.webkitAnimationName="stop";
  hbartext.style.webkitAnimationName="stop";
  if (isSound) {audio2.pause();audio2.currentTime = 0;}
//hbar.style.width = '350px'
//console.log('finished 2')
  //return;
}
if (!loop) break
if (select1.value == "Антивирус")
  {
	//textdiv.innerText = w["Выдох1"]
	vertext.innerText = w["Выдох1"]
  }
  else {
	  //textdiv.innerText = w["Выдох"]
	  vertext.innerText = w["Выдох"]
  }
vbar.style.webkitAnimationDuration=""+formula[2]*pulsesec*1000+"ms";
vertext.style.webkitAnimationDuration = ""+formula[2]*pulsesec*1000+"ms";
if (isSound) {audio3.play();}
vbar.style.webkitAnimationName="vertdown";
//vertext.style.webkitAnimationName="stop";
vertext.style.webkitAnimationName="textanim";	
  //var anim2 = vbar.animate([{ height: '100%', top: '0px' }, { height: '20px', top:'280px' }],formula[2]*pulsesec*1000)
//await anim2.finished
await sleep(formula[2]*pulsesec*1000);
  //await sleep(3*1000);
  vbar.style.height = '20px'
  vbar.style.top = '280px'
  vbar.style.webkitAnimationName="stop";
  vertext.style.webkitAnimationName="stop";
  if (isSound) {audio3.pause();audio3.currentTime = 0;}
  //return;
//console.log('finished 3')

////////////////////////////////////////////////////////
if (select1.value == "Антивирус")
{ // Начало повтора
		//console.log("start...")
  //hbar.style.animation = "hmove 3s";
  if (!loop) break
  //textdiv.innerText = w["Вдох2"]
  vertext.innerText = w["Вдох2"]
vbar.style.webkitAnimationDuration= ""+formula[0]*pulsesec*1000+"ms";
vertext.style.webkitAnimationDuration=""+formula[0]*pulsesec*1000+"ms"
if (isSound) {audio1.play();}
	
vbar.style.webkitAnimationName="vertup";
//vertext.style.webkitAnimationName="stop";
vertext.style.webkitAnimationName="textanim2";
//var anim2 = vbar.animate([{ height: '20px', top:'280px'}, { height: '100%', top: '0px'}],formula[0]*pulsesec*1000)
//await anim2.finished
await sleep(formula[0]*pulsesec*1000);
  //await sleep(3*1000);
vbar.style.height = '100%'
vbar.style.top = '0%'
vbar.style.webkitAnimationName="stop";
vertext.style.webkitAnimationName="stop";
if (isSound) {audio1.pause();audio1.currentTime = 0;}
  //console.log('finished 1')
if (!loop) break;
if (formula[1]>0)
{	
	if (select1.value == "Антивирус")
	{
	  //textdiv.innerText = w["Пауза1"]
	  hbartext.innerText = w["Пауза1"]
	}
	else {
		//textdiv.innerText = w["Пауза"]
		hbartext.innerText = w["Пауза"]
	}
hbar.style.webkitAnimationDuration=""+formula[1]*pulsesec*1000+"ms";
hbartext.style.webkitAnimationDuration=hbar.style.webkitAnimationDuration
if (isSound) {audio2.play();}
hbartext.style.webkitAnimationName="horright";
hbar.style.webkitAnimationName="horright";

await sleep(formula[1]*pulsesec*1000);
  //await sleep(3*1000);
  hbar.style.webkitAnimationName="stop";
  hbartext.style.webkitAnimationName="stop";
  if (isSound) {audio2.pause();audio2.currentTime = 0;}

}
if (!loop) break
if (select1.value == "Антивирус")
{
  //textdiv.innerText = w["Выдох1"]
  vertext.innerText = w["Выдох1"]
}
else {
	//textdiv.innerText = w["Выдох"]
	vertext.innerText = w["Выдох"]
}
vbar.style.webkitAnimationDuration=""+formula[2]*pulsesec*1000+"ms";
vertext.style.webkitAnimationDuration=""+formula[2]*pulsesec*1000+"ms";
//vertext.style.webkitAnimationName="stop";
if (isSound) {audio3.play();}

vbar.style.webkitAnimationName="vertdown";

vertext.style.webkitAnimationName="textanim";


  //var anim2 = vbar.animate([{ height: '100%', top: '0px' }, { height: '20px', top:'280px' }],formula[2]*pulsesec*1000)
//await anim2.finished
await sleep(formula[2]*pulsesec*1000);
  //await sleep(3*1000);
  //return;
//console.log('finished 3')
vbar.style.webkitAnimationName="stop";
vertext.style.webkitAnimationName="stop";
if (isSound) {audio3.pause();audio3.currentTime = 0;}

} // конец повтора
if (!loop) break
if (formula[3]>0)
  {
	if (select1.value == "Антивирус")
	{
	  //textdiv.innerText = w["Пауза1"]
	  hbar2text.innerText = w["Пауза1"]
	}
	else {
		//textdiv.innerText = w["Пауза"]
		hbar2text.innerText = w["Пауза"]
	}
	vbar.style.height = '1.5rem'
	vbar.style.top = 13-1.5+'rem'
  
	  hbar2.style.webkitAnimationDuration=""+formula[3]*pulsesec*1000+"ms";
	  if (isSound) {audio4.play();}
	  hbar2.style.webkitAnimationName="horleft";

	  hbar2text.style.webkitAnimationDuration=hbar2.style.webkitAnimationDuration;
	  hbar2text.style.webkitAnimationName="textanim";

  await sleep(formula[3]*pulsesec*1000);
	  //await sleep(3*1000);
	  hbar2.style.webkitAnimationName="stop";
	hbar2.style.width = '0%'
	hbar2text.style.webkitAnimationName="stop";
	if (isSound) {audio4.pause();audio4.currentTime = 0;}
  //console.log('finished 4')
  }	
	}
  //alert(result); // "РіРѕС‚РѕРІРѕ!"
}

function startButton()
{
	
	//alert("Click")
	console.log("click start")
	//document.getElementById("hbar").style.animation=""
	//document.getElementById("hbar").style.animation = "hmove 3s"; // alternate infinite";
	startAnimations()
}

function stopButton()
{
	loop = false
	
}



async function startStopButton()
{
	if(!loop)
		{
		textbtn.innerText = w["Стоп"];
		pulse = 1*valpulse.value;
		pulsesec = 60/pulse;
			startAnimations();
		}
	else
		{
		textbtn.innerText = w["Старт"];
		//textdiv.innerText = w["Нажмите Старт"]
			loop = false;
			
		}
	/*var anim2 = vbar.animate([{ height: '20px', top:'280px'}, { height: '100%', top: '0px'}],3000)
	//while (!anim2.finished) {}
	await sleep(3000);
	var anim = hbar.animate([{ width: '20px' }, { width: '300px' }],3000)
	//anim.finished
	//hbar.style.width = '350px'
	//console.log('finished 2')*/
}

function onChange1()
{
	getFormula();
	//alert(select1.value);
}

function onChange2()
{
	getFormula();
	//alert(select2.value);
}
