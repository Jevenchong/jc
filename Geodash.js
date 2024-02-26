/*******************************************************/
// P5.play: Geodash
// geometry dash
// Written by jeven
/*******************************************************/
console.log("%c Geodash", "color: blue;");
const SCREEN_WIDTH = 400;
const SCREEN_HEIGHT = 200;
const PLAYER_HEIGHT = 25;
const PLAYER_WIDTH = 25;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
  cnv = new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  world.gravity.y=10;
  floor = new Sprite(SCREEN_WIDTH/2,SCREEN_HEIGHT , SCREEN_WIDTH, 4, 'k');
  player = new Sprite(PLAYER_WIDTH*1.2, SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'd');
  player.color = 'cyan';
  document.addEventListener("keydown", function(event) {
     
 if (event.code ==='Arrowup' & player.y >180) {
player.vel.y = -5;
 }
else if (event.code =='ArrowDown')
player.vel.y =10;
console.log("key pressed:")
});

document.addEventListener("keyup", function(event) {
   

if (event.code === 'ArrowUp') {
   player.vel.y = 0;
 }

else if (event.code === 'ArrowDown')
player.vel.y = 0;
});
}

 





/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background('lightGreen'); 
}

/*******************************************************/
//  END OF APP
/*******************************************************/
