

var hbar = document.getElementById("hbar");
var vbar = document.getElementById("vbar");
var hbar2 = document.getElementById("hbar2");
var loop = false;
var textdiv = document.getElementById("textDiv");
var textbtn = document.getElementById("textbtn");

var select1 = document.getElementById("select1");
var select2 = document.getElementById("select2");
var valpulse = document.getElementById("pulse");
var txtpulse = document.getElementById("txtpulse");

var formula;

var pulse = 1*valpulse.value;
var pulsesec = 60/pulse; // ДЛительность 1 удара пульса

textdiv.innerText = w['Нажмите Старт']
txtpulse.innerText = w['Пульс']
textbtn.innerText = w["Старт"];
textdiv.innerText = w["Нажмите Старт"]

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

getFormula();

function getFormula()
{
var i1 = select1.value;
var i2 = select2.value;
//console.log(i1,i2)
formula = li[select1.value][select2.value];

if (formula[1]==0) {
	hbar.parentElement.hidden = true;
}
else {hbar.parentElement.hidden = false;}

if (formula[3]==0) {
	hbar2.parentElement.hidden = true;
}
else {hbar2.parentElement.hidden = false;}

}

//var anim
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }

async function startAnimations()
{
	loop = true
while(loop)
	{
	//console.log("start...")
  //hbar.style.animation = "hmove 3s";
		if (!loop) break
		textdiv.innerText = w["Вдох"]
	var anim2 = vbar.animate([{ height: '20px', top:'280px'}, { height: '100%', top: '0px'}],formula[0]*pulsesec*1000)
	//await anim2.finished
	await sleep(formula[0]*pulsesec*1000);
	vbar.style.height = '100%'
	vbar.style.top = '0%'
	//console.log('finished 1')
	if (!loop) break
	if (formula[1]>0)
	{	
		textdiv.innerText = w["Пауза"]
	var anim = hbar.animate([{ width: '20px' }, { width: '300px' }],formula[1]*pulsesec*1000)
	//await anim.finished
	await sleep(formula[1]*pulsesec*1000);
	//hbar.style.width = '350px'
	//console.log('finished 2')
	}
if (!loop) break
				textdiv.innerText = w["Выдох"]

		var anim2 = vbar.animate([{ height: '100%', top: '0px' }, { height: '20px', top:'280px' }],formula[2]*pulsesec*1000)
	//await anim2.finished
	await sleep(formula[2]*pulsesec*1000);
		vbar.style.height = '20px'
		vbar.style.top = '280px'
	//console.log('finished 3')

	if (!loop) break
	if (formula[3]>0)
		{
		textdiv.innerText = w["Пауза"]
	//var anim = hbar.animate([{ width: '350px' }, { width: '20px' }],3000)
	var anim = hbar2.animate([{ width: '300px' }, { width: '0px' }],formula[3]*pulsesec*1000)
	//await anim.finished
		await sleep(formula[3]*pulsesec*1000);
		hbar2.style.width = '0%'
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
		textdiv.innerText = w["Нажмите Старт"]
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
