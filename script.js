var rndRarity
var rndIndex 

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function unlockPook(pook_src) {
  createCookie(pook_src, "true", 7);
}

function openPack(){
  document.getElementById("btnOpenPack").disabled = true
  document.getElementById("picPack").src="https://millertime72.github.io/PookGame/images/PookPackOpened.png";
  rndRarity = Math.floor(Math.random() * 101);
  if (rndRarity < 80) {//Common
    document.getElementById("txtRarityPulled").innerText = "Common";
    rndIndex = Math.floor(Math.random() * 3) + 1;
    if (rndIndex == 1){
      document.getElementById("txtPookPulled").innerText = "Chick";
      document.getElementById("picPookPulled").src = "https://millertime72.github.io/PookGame/images/common/CommonChick.png";
    }else if (rndIndex==2){
      document.getElementById("txtPookPulled").innerText = "Dog";
      document.getElementById("picPookPulled").src = "https://millertime72.github.io/PookGame/images/common/CommonDog.png";
    } else if (rndIndex==3){
      document.getElementById("txtPookPulled").innerText = "Panda";
      document.getElementById("picPookPulled").src = "https://millertime72.github.io/PookGame/images/common/CommonPanda.png";
    }
  } else if (rndRarity > 95){//Legendary
      document.getElementById("txtRarityPulled").innerText = "Legendary";
      Math.floor(Math.random() * 3) + 1;
    if (rndIndex==1){
      document.getElementById("txtPookPulled").innerText = "Carrot Rabbit";
      document.getElementById("picPookPulled").src = "https://millertime72.github.io/PookGame/images/legendary/LegendaryCarrotRabbit.png";
    }else if (rndIndex==2){
      document.getElementById("txtPookPulled").innerText = "Sheep";
      document.getElementById("picPookPulled").src = "https://millertime72.github.io/PookGame/images/legendary/LegendarySheep.png";
    }else if (rndIndex==3){
      document.getElementById("txtPookPulled").innerText = "Sloth";
      document.getElementById("picPookPulled").src = "https://millertime72.github.io/PookGame/images/legendary/LegendarySloth.png";
    }
  }else{//Rare
    document.getElementById("txtRarityPulled").innerText = "Rare";
    rndIndex = Math.floor(Math.random() * 3) + 1;
    if (rndIndex==1){
      document.getElementById("txtPookPulled").innerText = "Turnip Cat";
      document.getElementById("picPookPulled").src = "https://millertime72.github.io/PookGame/images/rare/RareTurnipCat.png";
    }else if (rndIndex==2){
      document.getElementById("txtPookPulled").innerText = "Pig";
      document.getElementById("picPookPulled").src = "https://millertime72.github.io/PookGame/images/rare/RarePig.png";
    } else if (rndIndex==3){
     document.getElementById("txtPookPulled").innerText = "Frog";
     document.getElementById("picPookPulled").src = "https://millertime72.github.io/PookGame/images/rare/RareFrog.png";
    }
  }
    unlockPook(document.getElementById("picPookPulled").src);
}