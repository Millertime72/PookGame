// Pooks
pooks = [
  {"id": "common1", "src": "https://millertime72.github.io/PookGame/images/common/CommonChick.png"},
  {"id": "common2", "src": "https://millertime72.github.io/PookGame/images/common/CommonDog.png"},
  {"id": "common3", "src": "https://millertime72.github.io/PookGame/images/common/CommonPanda.png"},
  {"id": "rare1", "src": "https://millertime72.github.io/PookGame/images/rare/RareTurnipCat.png"},
  {"id": "rare2", "src": "https://millertime72.github.io/PookGame/images/rare/RarePig.png"},
  {"id": "rare3", "src": "https://millertime72.github.io/PookGame/images/rare/RareFrog.png"},
  {"id": "legendary1", "src": "https://millertime72.github.io/PookGame/images/legendary/LegendaryCarrotRabbit.png"},
  {"id": "legendary2", "src": "https://millertime72.github.io/PookGame/images/legendary/LegendarySheep.png"},
  {"id": "legendary3", "src": "https://millertime72.github.io/PookGame/images/legendary/LegendarySloth.png"}
];

// Code for cookies is taken from here:
// https://www.quirksmode.org/js/cookies.html

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name, "", -1);
}

// Start original code

function resetPooks() {
    let proceed = confirm("Are you sure you want to restart your collection?");
    
    if (proceed == true) {
        for (let i = 0; i < pooks.length; ++i) {
            const pook = pooks[i];

            createCookie(pook.src, "false", 7);
        } 
    }
}

function updatePooks() {
  for (let i = 0; i < pooks.length; ++i) {
      const pook = pooks[i];
      
      const unlocked = readCookie(pook.src);
      
      if (unlocked == "true") {
        document.getElementById(pook.id).src = pook.src;
      }
      else {
        document.getElementById(pook.id).src = "https://millertime72.github.io/PookGame/images/LockedPook.png";
      }
  }
}

updatePooks();