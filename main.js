var gameData = {
  gold: 5,
  goldPerSweep: 1,
  sweepUpgradeCost: 10,
  sweepLevel: 1,
  goldPerSlime: 10,
  slimeUpgradeCost: 100,
  slimeLevel: 1,
  goldPerBull: 60,
  bullUpgradeCost: 200,
  bullLevel: 1,
  
  auto: [],
  unlocked: []
};

function sweepFloors() {
  gameData.gold += gameData.goldPerSweep;
  document.getElementById("goldAcquired").innerHTML = gameData.gold + " Gold";
}

function upgradeSweep() {
  if (gameData.gold >= gameData.sweepUpgradeCost) {
    gameData.gold -= gameData.sweepUpgradeCost;
    gameData.goldPerSweep += 1;
    gameData.sweepUpgradeCost *= 2;
    gameData.sweepLevel += 1;
    document.getElementById("goldAcquired").innerHTML = gameData.gold + " Gold";
    document.getElementById("sweepUpgradeCost").innerHTML = "Upgrade Broom (Currently Level " + gameData.sweepLevel + ") Cost: " + gameData.sweepUpgradeCost + " Gold";
  }
}

function buyAutomaticSweep() {
  if (gameData.gold >= 1000 && !gameData.auto.contains("sweep")) {
    gameData.gold -= 1000;
    document.getElementById("goldAcquired").innerHTML = gameData.gold + " Gold";
    var btnauto = document.getElementById("autogold");
	btnauto.style.display = "none";
	gameData.auto.push("sweep")
  }
}

function unlockSlime() {
  if (gameData.gold >= 150 && !gameData.unlocked.contains("slime")) {
	gameData.gold -= 150;
	gameData.unlocked.push("slime")
    document.getElementById("goldAcquired").innerHTML = gameData.gold + " Gold";
    document.getElementById("unlockSlime").style.display = "none";
    document.getElementById("killSlimebtn").style.display = "inline";
    document.getElementById("slimeUpgradeCost").style.display = "inline";
    document.getElementById("autoslime").style.display = "inline";
    document.getElementById("story2").innerHTML = "You've swept other's filth for long enough. Now begins your epic journey. With your little gold, you purchase a brittle blade, and head out to the Outlands. Out there, cute little slimes blob happily around you, one of them is named Zuzu and is particulary affectionate with you... you draw your blade and destroy them, including little Zuzu. Your reward? A measley amount of XP and a few coins. However, you've lost your value as a person, if you even had any. Even so, a hero must begin somewhere.";
    document.getElementById("unlockSedgewick").style.display = "inline";
  }
}

function killSlime() {
  gameData.gold += gameData.goldPerSlime;
  document.getElementById("goldAcquired").innerHTML = gameData.gold + " Gold";
}

function upgradeSlime(){
  if (gameData.gold >= gameData.slimeUpgradeCost) {
    gameData.gold -= gameData.slimeUpgradeCost;
    gameData.goldPerSlime += 10;
    gameData.slimeUpgradeCost *= 2;
    gameData.slimeLevel += 1;
    document.getElementById("goldAcquired").innerHTML = gameData.gold + " Gold";
    document.getElementById("slimeUpgradeCost").innerHTML = "Upgrade Slime Killing (Currently Level " + gameData.slimeLevel + ") Cost: " + gameData.slimeUpgradeCost + " Gold";
  }
}

function buyAutomaticSlime() {
  if (gameData.gold >= 2000 && !gameData.auto.contains("slime")) {
    gameData.gold -= 2000;
    document.getElementById("goldAcquired").innerHTML = gameData.gold + " Gold";
    var btnauto = document.getElementById("autoslime");
	btnauto.style.display = "none";
	gameData.auto.push("slime");
  }
}

function unlockSedgewick() {
	if (gameData.gold >= 1000 && !gameData.unlocked.contains("bulls")) {
    gameData.gold -= 1000;
    document.getElementById("goldAcquired").innerHTML = gameData.gold + " Gold";
    document.getElementById("unlockSedgewick").style.display = "none";
    document.getElementById("killBullbtn").style.display = "inline";
    document.getElementById("bullUpgradeCost").style.display = "inline";
    document.getElementById("autobull").style.display = "inline";
    document.getElementById("story3").innerHTML = "You travel further through the Outlands, along Don's road. A monster here and there, you hone your lacklustre skills. Suddenly, a scaled bull rushes you and knocks you down. Before landing the killing blow on you, a man suddenly shoves a strong sword through the scaled bull's skull. Named Sedgewick, he is a handsome and charming, but down to earth warrior. Together, you epicly fight off a horde of lesser bulls... although Sedgewick does most of the work. ";
  }
}

function killBull() {
  gameData.gold += gameData.goldPerBull;
  document.getElementById("goldAcquired").innerHTML = gameData.gold + " Gold";
}

function upgradeBull(){
  if (gameData.gold >= gameData.bullUpgradeCost) {
    gameData.gold -= gameData.bullUpgradeCost;
    gameData.goldPerBull += 50;
    gameData.bullUpgradeCost *= 2;
    gameData.bullLevel += 1;
    document.getElementById("goldAcquired").innerHTML = gameData.gold + " Gold";
    document.getElementById("bullUpgradeCost").innerHTML = "Upgrade Bull Killing (Currently Level " + gameData.bullLevel + ") Cost: " + gameData.bullUpgradeCost + " Gold";
  }
}

function buyAutomaticBull() {
  if (gameData.gold >= 4000 && !gameData.auto.contains("bulls")) {
    gameData.gold -= 4000;
    document.getElementById("goldAcquired").innerHTML = gameData.gold + " Gold";
    var btnauto = document.getElementById("autobull");
	btnauto.style.display = "none";
	gameData.auto.push("bulls")
  }
}


var savegame = JSON.parse(localStorage.getItem("goldMinerSave"));
if (savegame !== null) {
  gameData = savegame;
  document.getElementById("goldAcquired").innerHTML = gameData.gold + " Gold";
  document.getElementById("sweepUpgradeCost").innerHTML = "Upgrade Broom (Currently Level " + gameData.sweepLevel + ") Cost: " + gameData.sweepUpgradeCost + " Gold";
  document.getElementById("slimeUpgradeCost").innerHTML = "Upgrade Slime Killing (Currently Level " + gameData.slimeLevel + ") Cost: " + gameData.slimeUpgradeCost + " Gold";
  document.getElementById("bullUpgradeCost").innerHTML = "Upgrade Bull Killing (Currently Level " + gameData.bullLevel + ") Cost: " + gameData.bullUpgradeCost + " Gold";

  if (gameData.unlocked.contains("slime")) {
	  document.getElementById("unlockSlime").style.display = "none";
	  document.getElementById("killSlimebtn").style.display = "inline";
	  document.getElementById("slimeUpgradeCost").style.display = "inline";
	  document.getElementById("autoslime").style.display = "inline";
      document.getElementById("story2").innerHTML = "You've swept other's filth for long enough. Now begins your epic journey. With your little gold, you purchase a brittle blade, and head out to the Outlands. Out there, cute little slimes blob happily around you, one of them is named Zuzu and is particulary affectionate with you... you draw your blade and destroy them, including little Zuzu. Your reward? A measley amount of XP and a few coins. However, you've lost your value as a person, if you even had any. Even so, a hero must begin somewhere.";
      document.getElementById("unlockSedgewick").style.display = "inline";
  }

  if (gameData.unlocked.contains("bulls")) {
	  document.getElementById("goldAcquired").innerHTML = gameData.gold + " Gold";
	  document.getElementById("unlockSedgewick").style.display = "none";
	  document.getElementById("killBullbtn").style.display = "inline";
	  document.getElementById("bullUpgradeCost").style.display = "inline";
      document.getElementById("autobull").style.display = "inline";
      document.getElementById("story3").innerHTML = "You travel further through the Outlands, along Don's road. A monster here and there, you hone your lacklustre skills. Suddenly, a scaled bull rushes you and knocks you down. Before landing the killing blow on you, a man suddenly shoves a strong sword through the scaled bull's skull. Named Sedgewick, he is a handsome and charming, but down to earth warrior. Together, you epicly fight off a horde of lesser bulls... although Sedgewick does most of the work. ";
  }

  if (gameData.auto.contains("sweep")) {
	  var btnauto = document.getElementById("autogold");
	  btnauto.style.display = "none";
  }

  if (gameData.auto.contains("slime")) {
	  var btnauto = document.getElementById("autoslime");
	  btnauto.style.display = "none";
  }

  if (gameData.auto.contains("bulls")) {
	  var btnauto = document.getElementById("autobull");
	  btnauto.style.display = "none";
  }
}

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('goldMinerSave', JSON.stringify(gameData));
}, 15000);

var mainGameLoop = window.setInterval(function () {
	if (gameData.auto.contains("sweep")) sweepFloors();
	if (gameData.auto.contains("slime")) killSlime();
	if (gameData.auto.contains("bulls")) killBull();
}, 1000);


