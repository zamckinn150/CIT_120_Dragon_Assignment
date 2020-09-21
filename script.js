var PHp = document.body.querySelector(".Playerhealth");
var PDmg = document.body.querySelector(".PlayerDamage");
var DDmg = document.body.querySelector(".DragonDamage");
var DHp = document.body.querySelector(".Dragonhealth");

var PHp = 5;

var DHp = 10; 

while(DHp>0 || PHp>0){
  var PDmg= prompt("How Many Hits will you take? 1-5");
  if(isNaN(PDmg)){
   document.body.querySelector(".stop").innerHTML = "Please enter a number"
   break;
  }
var PDmg = Math.floor(Math.random() * PDmg) + 1;
var DDmg = Math.floor(Math.random() * 2 ) + 1;

PHp = PHp - DDmg;
DHp = DHp - PDmg;
 
if(0>=DHp);{
document.body.querySelector(".stop").innerHTML = "You Beat the Dragon, Victory"
}

if(0>=PHp);{
 document.body.querySelector(".stop").innerHTML = "Another Hero Slain, Defeat"
}
}

document.body.querySelector(".Playerhealth").innerHTML = PHp;

document.body.querySelector(".Dragonhealth").innerHTML = DHp;