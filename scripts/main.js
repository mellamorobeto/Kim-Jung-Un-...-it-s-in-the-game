var hidedBlock = document.querySelector(".hidedBlock");
var play = document.querySelector(".play");
var hide = 1;
var lives = 3;
var readyToloseLife = 0;
var hidePlus;
var score = 0;
var backgroundText = document.querySelector(".backgroundText");
var compteur = document.querySelector(".score");
var vie1 = document.querySelector(".vie1");
var vie2 = document.querySelector(".vie2");
var vie3 = document.querySelector(".vie3");
var alternativeTxt = document.querySelector(".alternativeTxt");
var hidingBlock = document.querySelector(".hidingBlock");
var container = document.querySelector(".container");
var bonus = document.querySelector(".bonus");
var bonusClicked = 0;
var life = document.querySelector(".life");
var lifeClicked = 0;
var scientist = document.querySelector(".scientist");
var modal = document.querySelector(".modal");
var bulle = document.querySelector(".bulle");
//////////////////////basics functions///////////////////////
function moove () {
	var top = hidedBlock.style.marginTop = Math.random() * (500 - 0) + 0;
	var left = hidedBlock.style.marginLeft = Math.random() * (750 - 0) + 0;
	modal.style.display="none";
	play.style.display="none";
	timeToLoseALife();
	backTxt();
	appearBonus();
	appearLife();
	changeOpponent();
	KimRespond();
	////
	if(top <= 300){
		hidedBlock.style.marginLeft = Math.random() * (750 - 300) + 300;
	}else if(left <= 300){
		hidedBlock.style.marginTop = Math.random() * (500 - 300) + 300;
	}
}
function back () {
	hidedBlock.style.marginTop = 0;
	hidedBlock.style.marginLeft = 0;
	hide = 1;
	if (score < 500){
	setTimeout(function () {
		moove();
	}, 2000);
	}else if(score >= 500 && score < 1500){
		setTimeout(function () {
		moove();
	}, 1000);
	}else if(score >= 1500 && score < 3500){
		setTimeout(function () {
		moove();
	}, 500);
	}else if(score >= 3500 && score < 5500){
		setTimeout(function () {
		moove();
	}, 400);
	}else if(score >= 5500 && score < 10000){
		setTimeout(function () {
		moove();
	}, 300);
	}
	verification();
	looseGame();
}
function verification () {
	if (hide == 1){
		clearTimeout(hidePlus);
	}else if(hide == 0){
		looseLife();
	}
}
function looseLife () {
	if(lives == 3){
		vie3.style.display = "none";
	}
	else if(lives == 2){
		vie2.style.display = "none";
	}
	else if(lives == 1){
		vie1.style.display = "none";
	}
	lives --;
	back();
}
function looseGame () {
	if(lives == 0){
	hidedBlock.style.display= "none";
	alternativeTxt.style.display = "block";
	alternativeTxt.innerHTML= "GAME\nOVER";
	}
}
function timeToLoseALife () {
	if(score < 1500){
		hidePlus = setTimeout(function () {
		hide = 0;
		verification();
	}, 2500);
	}else if(score >= 1500 && score < 3500){
		hidePlus = setTimeout(function () {
		hide = 0;
		verification();
	}, 1700);
	}else if(score >= 3500 && score < 5500){
		hidePlus = setTimeout(function () {
		hide = 0;
		verification();
	}, 1400);
	}else if(score >= 5500 && score < 8000){
		hidePlus = setTimeout(function () {
		hide = 0;
		verification();
	}, 1200);
	}else if(score >= 8000 && score < 9000){
		hidePlus = setTimeout(function () {
		hide = 0;
		verification();
	}, 1000);
	}else if(score >= 9000 && score < 10000){
		hidePlus = setTimeout(function () {
		hide = 0;
		verification();
	}, 800);
	}
}
/////////////////////////////////////////////////////////////
hidedBlock.addEventListener(//score
	"click",
	function () {
		score = score + 100;
		compteur.innerHTML = score;
		changeTheme();
	},
	false
);
function backTxt () {
	if (score == 400){
		setTimeout (function () {
			backgroundText.innerHTML="faster";
			backgroundText.style.display = "block";
			backgroundText.style.color="black";
			setTimeout (function () {
				backgroundText.style.display = "none";
			},500);
		},1000);
	}else if (score == 1400){
		setTimeout (function () {
			backgroundText.innerHTML="faster";
			backgroundText.style.display = "block";
			backgroundText.style.color="black";
			setTimeout (function () {
				backgroundText.style.display = "none";
			},500);
		},1000);
	}else if (score == 3400){
		setTimeout (function () {
			backgroundText.innerHTML="faster";
			backgroundText.style.display = "block";
			backgroundText.style.color="black";
			setTimeout (function () {
				backgroundText.style.display = "none";
			},500);
		},1000);
	}else if (score == 5400){
		setTimeout (function () {
			backgroundText.innerHTML="going insane";
			backgroundText.style.display = "block";
			backgroundText.style.color="black";
			setTimeout (function () {
				backgroundText.style.display = "none";
			},500);
		},1000);
	}
}//backtxt
function changeTheme () {
	if(score >= 5500){
		container.style.boxShadow = "1px 1px 100px red";
		hidingBlock.style.backgroundColor = "#ff3333";
	}
}
///////////////////bonus grow/////////////////////
function appearBonus () {
	var isAppear = Math.random() * (10 - 1) + 1;
	//console.log(isAppear);
	if(isAppear >= 9){
		bonus.style.display="block";
		bonus.style.marginLeft = Math.random() * (750 - 300) + 300;
		bonus.style.marginTop = Math.random() * (500 - 300) + 300;
	}
}
bonus.addEventListener('click', function(){
	bonus.style.display="none";
}, false);
function bonusF () {
	grow();
}
function grow() {
	hidedBlock.style.width = 150;
	hidedBlock.style.height = 150;
	scientist.style.width = 150;
	scientist.style.height = 150;
	bonusClicked = 1;
	backgroundText.innerHTML="grow";
	backgroundText.style.display="block";
	backgroundText.style.color="white";
	setTimeout (function () {
				backgroundText.style.display = "none";
			},500);
	setTimeout(function(){
		hidedBlock.style.width = 70;
		hidedBlock.style.height = 70;
		scientist.style.width = 70;
	scientist.style.height = 70;
	},7000);

}
////////////////////bonus life/////////////////////
function appearLife () {
	var isAppear2 = Math.random() * (10 - 1) + 1;
	//console.log(isAppear);
	if(isAppear2 >= 9){
		life.style.display="block";
		life.style.marginLeft = Math.random() * (750 - 300) + 300;
		life.style.marginTop = Math.random() * (500 - 300) + 300;
		if(lifeClicked == 0){
		setTimeout(function () {
			life.style.display="none";
		},4000);
		}else if(lifeClicked == 1){
			lifeClicked = 0;
		}
	}
}
life.addEventListener('click', function(){
	life.style.display="none";
}, false);
function lifeF () {
	winLife();
}
function winLife() {
	if(lives == 2){
		lives++;
		vie3.style.display="inline";
	}else if(lives == 1){
		lives ++;
		vie2.style.display="inline";
	}
	bonusClicked = 1;
	setTimeout (function () {
				backgroundText.style.display = "none";
			},500);
}
//////////////////following suror////////////////////////
var flw = document.querySelector("#flw");
$(document).click(function(){
	$("#flw").css("display", "block");
$(document).click(function(e){
    $("#flw").css({
		left:e.pageX - 40,
		top:e.pageY - 40,
	});
	function explode(){
  		flw.style.display="none";
}
setTimeout(explode, 200);
});
});
//////////////////scientist hit////////////////////
/*var flw = document.querySelector("#flw");
document.addEventListener('click',function(){
		flw.style.left = pageXOffset;
		flw.style.top = pageYOffset;
}, false);*/
var opponentImg = document.querySelector(".opponentImg");
function appearOpponent () {
	opponentImg.style.display="block";
	setTimeout(function(){
		opponentImg.style.marginTop='473px';
	},500);
}
function changeOpponent () {
	if(score==200){
		appearOpponent();
		setTimeout(function(){
			presidentJapan();
		},2500);
	}else if(score==3000){
		bulle.style.display="none";
		opponentImg.style.display="none";
		opponentImg.style.marginTop='-1000px';
		opponentImg.innerHTML="<img src=\'images/president%20france.png'>";
	}else if(score == 3500){
		appearOpponent();
		setTimeout(function(){
			presidentFrance();
		},2500);
	}else if(score==5000){
		bulle.style.display="none";
		opponentImg.style.display="none";
		opponentImg.style.marginTop='-1000px';
		opponentImg.innerHTML="<img src=\'images/president%20trump.png'>";
	}else if(score == 5500){
		appearOpponent();
		setTimeout(function(){
			presidentTrump();
		},2500);
	}
}

function presidentJapan(){
	bulle.style.display="block";
	bulle.innerHTML="Kim, we're neightbours, let's forget the old time";
}
function presidentFrance(){
	bulle.style.display="block";
	bulle.innerHTML="NATO, European Union and UNO summons you to stop your researches in weapon of mass destruction because you're violating human rights";
	bulle.style.height="180px";
	bulle.style.marginTop="300px";
}
function presidentTrump(){
	bulle.style.display="block";
	bulle.innerHTML="I am going to build a great wall around you're country so you can no longer threat THE HOLLY UNITED STATE OF AMERICA !!!";
	bulle.style.height="190px";
	bulle.style.marginTop="350px";
}

var kimTxt = document.querySelector(".kimTxt");
function KimRespond() {
	if (score == 2000){
		kimTxt.style.display="block";
		kimTxt.innerHTML="You should won the WW2, no more slavery b*tch!";
	}else if(score == 3100){
		kimTxt.style.display="none";
	}else if(score == 4000){
		kimTxt.style.display="block";
		kimTxt.innerHTML="Re-think you're human rights in your thief bank mummy fucker !";
		kimTxt.style.height="90";
	}else if(score == 5100){
		kimTxt.style.display="none";
	}
}
