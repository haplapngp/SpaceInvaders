$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;
	var screen;
	var status;
	var shoot;
	var speeds;
	var Enemy = new Array();
	var Enemyx = new Array();
	var Enemyy = new Array();
	var path;
	var playerx;
	var stage;
	var laserx = new Array();
	var lasery = new Array();
	var vely;
	var Alien1 = new Image();
	var Alien2 = new Image();
	var Alien3 = new Image();
	var Ex, Ey;
	var score;
	var EnemyLy, EnemyLx, EnemyShoot;
	
	
	
	//use functions to draw, and a for loop to make them
	
	
	
	
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{

	Alien1.src = 'space invaders alien 1.png'
	Alien2.src = 'space invaders alien 2.png'
	Alien3.src = 'space invaders alien 3.png'
		
		//to have a title screen
		screen = 1;
		startx = w/2 - 90;
		starty = 250;
		startw = 150;
		starth = 75;
		
		playerx = 260;
		
		score = 0;
		lasery = 460;
		vely = 15;
		Enemy = 10;
		/*Enemyx[0] =50;
		Enemyx[1] = 90;
		Enemyx[2] = 130;
		Enemyx[3] = 170;
		Enemyx[4] = 210;
 		Enemyx[5] = 250;
		Enemyx[6] = 290;
		Enemyx[7] = 330;
		Enemyx[8] = 370;
		Enemyx[9] = 410
	

		Enemyy[0] = 30;
		Enemyy[1] = 80;
		Enemyy[2] = 130;
		Enemyy[3] = 180;
		*/
		
		mA(50,-300000);
		mA(50, 40);
		mA(90, 40);
		mA(130, 40);
		mA(170, 40);
		mA(210, 40);
		mA(250, 40);
		mA(290, 40);
		mA(330, 40);
		mA(370, 40);
		mA(410, 40);
		
		
		mA(50,90);
		mA(90, 90);
		mA(130, 90);
		mA(170, 90);
		mA(210, 90);
		mA(250, 90);
		mA(290, 90);
		mA(330, 90);
		mA(370, 90);
		mA(410, 90);
		
		mA(50,140);
		mA(90, 140);
		mA(130, 140);
		mA(170, 140);
		mA(210, 140);
		mA(250, 140);
		mA(290, 140);
		mA(330, 140);
		mA(370, 140);
		mA(410, 140);
		
		mA(50,190);
		mA(90, 190);
		mA(130, 190);
		mA(170, 190);
		mA(210, 190);
		mA(250, 190);
		mA(290, 190);
		mA(330, 190);
		mA(370, 190);
		mA(410, 190);
		
		stage = 1;
		path = -0.25;
		EnemyShoot = false;

	status = 0;

	
	shoot == false;
	//////////
	///STATE VARIABLES
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	//to move the player left and right
addEventListener("keydown", function(event) {
    if (event.keyCode == 37){
	playerx -= 5;
	}else if(event.keyCode == 39){
	playerx += 5;
	}
});
	

	
	//press space to shoot
	addEventListener("keydown", function(event) {
	if(event.keyCode == 32){
	shoot = true;
	EnemyShoot = true;
	}else (shoot = false && EnemyShoot == false)
	});
	addEventListener("keyup", function(event) {
	if(event.keyCode == 32){
	shoot = true;
	EnemyShoot = true;
	}});
	
	

function Minigame(){
//speeds up the paint when you push a button
//second part may not be necessary
	addEventListener("keydown", function(event) {
if (event.keyCode == 80){
	game_loop = setInterval(paint,30);
	}else{
	game_loop = setInterval(paint, 60);
	}
});

}


	
	function mA(x,y){
			Enemyx.push (x);
			Enemyy.push (y);
	}

	
	function Laser(){
	//to make the laser appear from the middle of the player
			laserx = playerx + 33;
	
				if(shoot == true){

					ctx.fillStyle = 'white';
					ctx.fillRect(laserx, lasery, 5, 10);
					lasery -=  vely;
				}
				if(lasery <= 0){
					shoot = false;
				}
				if(lasery <=  0 && shoot == false){
						lasery = 460;
						lasery  -= 0;
				}
	}
		
	
	
	function Hit(){
			for(var i = 0; i < Enemyx.length; i ++){
				if(laserx > Enemyx[i] && laserx < Enemyx[i] + 30 && lasery > Enemyy[i] && lasery < Enemyy[i] + 30){
					Enemyx.splice(i, 1);
					Enemyy.splice(i, 1);
					shoot = false;
					lasery = 460;
					lasery += 0;
					score += 100;
				}
			}
		}
	

	
	//good except if speeds up when near the end of going right
	function Pathing(){
			//to make the aliens move and go right and bounce

			if(Enemyx[0] <= w - 400){
					Enemyx[0] += path;
					Enemyx[1]	+= path;
					Enemyx[2] += path;
					Enemyx[3] += path;
					Enemyx[4] += path;
					Enemyx[5] += path;
					Enemyx[6] += path;
					Enemyx[7] += path;
					Enemyx[8] += path;
					Enemyx[9] += path;
					Enemyx[10] += path;
					Enemyx[11] += path;
					Enemyx[12] += path;
					Enemyx[13] += path;
					Enemyx[14] += path;
					Enemyx[15] += path;
					Enemyx[16] += path;
					Enemyx[17] += path;
					Enemyx[18] += path;
					Enemyx[19] += path;
					Enemyx[20] += path;
					Enemyx[21] += path;
					Enemyx[22] += path;
					Enemyx[23] += path;
					Enemyx[24] += path;
					Enemyx[25] += path;
					Enemyx[26] += path;
					Enemyx[27] += path;
					Enemyx[28] += path;
					Enemyx[29] += path;
					Enemyx[30] += path;
					Enemyx[31] += path;
					Enemyx[32] += path;
					Enemyx[33] += path;
					Enemyx[34] += path;
					Enemyx[35] += path;
					Enemyx[36] += path;
					Enemyx[37] += path;
					Enemyx[38] += path;
					Enemyx[39] += path;
					Enemyx[40] += path;

				}else if(Enemyx[0] >= w - 400){
					path *= -1;

					Enemyy[0] += 40;
					Enemyy[1] += 40;
					Enemyy[2] += 40;
					Enemyy[3] += 40;
					Enemyy[4] += 40;
					Enemyy[5] += 40;
					Enemyy[6] += 40;
					Enemyy[7] += 40;
					Enemyy[8] += 40;
					Enemyy[9] += 40;
					Enemyy[10] += 40;
					Enemyy[11] += 40;
					Enemyy[12] += 40;
					Enemyy[13] += 40;
					Enemyy[14] += 40;
					Enemyy[15] += 40;
					Enemyy[16] += 40;
					Enemyy[17] += 40;
					Enemyy[18] += 40;
					Enemyy[19] += 40;
					Enemyy[20] += 40;
					Enemyy[21] += 40;
					Enemyy[22] += 40;
					Enemyy[23] += 40;
					Enemyy[24] += 40;
					Enemyy[25] += 40;
					Enemyy[26] += 40;
					Enemyy[27] += 40;
					Enemyy[28] += 40;
					Enemyy[29] += 40;
					Enemyy[30] += 40;
					Enemyy[31] += 40;
					Enemyy[32] += 40;
					Enemyy[33] += 40;
					Enemyy[34] += 40;
					Enemyy[35] += 40;
					Enemyy[36] += 40;
					Enemyy[37] += 40;
					Enemyy[38] += 40;
					Enemyy[39] += 40;
					Enemyy[40] += 40;

					stage += 1;
		
				}
		//to make the aliens move and go left and bounce
				if(Enemyx[0] >= 200){
					Enemyx[0] += path;
				}else if(Enemyx[0] <= 50){
					path *= -1;
					Enemyx[0] += path;
				}
			}
			
	// a random number generator function i can call on for the next function
function getRandomInt(){
return Math.round((Math.random() * 6) + 1);

}


	//a function to make the aliens fire at random times		
	//WIP
function Invasion(){
 
 EnemyLx = Enemyx[22];
 EnemyLy = Enemyy[22];

 
 

 
 
			if(EnemyShoot == true){
					ctx.fillStyle = 'red';
					ctx.fillRect(EnemyLx + 13, EnemyLy + 13 , 5, 10);
					EnemyLy +=  15;
				}
				if(EnemyLy >= 460){
					EnemyShoot = false;
				}
				if(EnemyLy >=  460 && EnemyShoot == false){
						EnemyLy = 300000;
						EnemyLy  -= 0;
				}
 
 
}			
			
			
			
	
	//to speed up the aliens when the get lower
	//WIP
	function Stage(){
	if((Enemyy.length - 1) >= 310){
	ctx.fillStyle='red';
	ctx.fillText("You Lose", 150, 300)
	}
			/*if(Enemyy[1] == 30){
				path = 0.25
			}else if(Enemyy[1] == 70){
				path = 0.35
			}else if(Enemyy[1] == 110){
				path = 0.45
			}else if(Enemyy[1] == 150){
				path = 0.55
			}else if(Enemyy[1] == 190){
				path = 0.60
			}else if(Enemyy[1] == 230){
				path = 0.65
			}else if(Enemyy[1] == 270){
				path = 0.70
			}

*/


	}
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	
	//FOR THE ALIENS MAKE THEM IN COLUMNS SO YOU CAN GET RID OF 1 EXACT ALIEN 
	//ALSO MAKE STAGES SO THAT AT A DIFFERENT STAGE THE ALIENS ARE AT A DIFFERENT Y SO YOU LOSE WHEN THEY REACH STAGE 6 EX
	//USE .SPLICE TO GET RID OF THE EXACT ALIEN
	function paint()
	{
		if(screen == 1){
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0,w,h);
		
		ctx.fillStyle='black';
		ctx.fillText("SPACE INVADERS", w/2 - 80, 100)

		ctx.fillRect(startx, starty, startw, starth);
		ctx.fillStyle='white'
		ctx.fillRect(w/2 - 85, 254, 139, 67);
		ctx.fillStyle='black'
		ctx.font='12pt arial';
		ctx.fillText("PRESS TO PLAY", w/2 - 80, 290, 139, 67)
		ctx.fillText("Every Enemy is worth 100 points", 150, 430);
		ctx.fillText("Move using the arrow keys, and press SPACE to fire", 150, 450);

		

}

		
		
		
		
		if(screen == 2){
		ctx.fillStyle = 'black';
		ctx.fillRect(0,0, w, h);	
		
		ctx.font='12pt arial';
		ctx.fillStyle='white';
		ctx.fillText("Score:  "+ score, 400, 20);
		ctx.fillText(getRandomInt() , 50, 50);
		ctx.fillText(Enemyy.length -1, 50, 100);


//the actual line to draw the aliens
			for(var i = 0; i < Enemyx.length; i++){
				ctx.drawImage(Alien1, Enemyx[i] , Enemyy[i], 30, 30);
				ctx.drawImage(Alien1, Enemyx[i] , Enemyy[i], 30, 30);
				ctx.drawImage(Alien2, Enemyx[i] , Enemyy[i], 30, 30);
				ctx.drawImage(Alien3, Enemyx[i] , Enemyy[i], 30, 30);
			}
		

	
	Laser();
	Stage();




//the aliens move slowly if you remove the for loop	
	for (var i = 0; i < 10; i ++){

		/*ctx.drawImage(Alien3, Enemyx[0] + 40 *i, Enemyy[0] , 30, 30);
	
		ctx.drawImage(Alien2, Enemyx[0] + 40 *i, Enemyy[1] , 30, 30);
		
		ctx.drawImage(Alien1,Enemyx[0] + 40 *i, Enemyy[2] , 30, 30);
		
		ctx.drawImage(Alien1,Enemyx[0] + 40 *i, Enemyy[3] , 30, 30);
		
		
		//First row of aliens
		ctx.drawImage(Alien3, Enemyx[0], Enemyy[0], 50, 50);
		ctx.drawImage(Alien3, Enemyx[1], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[2], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[3], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[4], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[5], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[6], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[7], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[8], Enemyy[0], 30, 30);
		ctx.drawImage(Alien3, Enemyx[9], Enemyy[0], 30, 30);
		
		//Second row of aliens
		ctx.drawImage(Alien2, Enemyx[1], Enemyy[1], 30, 30);
		
		//Second bottom row of aliens
		ctx.drawImage(Alien1, Enemyx[1], Enemyy[2], 30, 30);
		
		//Bottom row of aliens
		ctx.drawImage(Alien1, Enemyx[1], Enemyy[3], 30, 30);
		
		*/
		
		



	//calling the functions to work in the paint
	//cant use the laser here because then it produces a giant line of lasers. maybe a power up
		Pathing();
		Hit();
		
		

		

		
		
/*
	
*/
	}
		ctx.fillStyle = 'green';
		ctx.fillRect(playerx, 460, 75, 20);
		ctx.fillRect(playerx + 32.5, 442, 10, 50);
		
	}
		

		//a more fast paced high pressure minigame
		/*if(shoot == true){
screen = 4;
}
	if(screen == 4){
	ctx.fillStyle='red';
	ctx.fillRect(0,0,w,h);

	
	for(var i = 0; i < Enemyx.length; i++){
				ctx.drawImage(Alien1, Enemyx[i] , Enemyy[i], 30, 30);
				ctx.drawImage(Alien1, Enemyx[i] , Enemyy[i], 30, 30);
				ctx.drawImage(Alien2, Enemyx[i] , Enemyy[i], 30, 30);
				ctx.drawImage(Alien3, Enemyx[i] , Enemyy[i], 30, 30);
			}
	
	Pathing();
Hit();
Minigame();
Laser();

		ctx.fillStyle = 'green';
		ctx.fillRect(playerx, 460, 75, 20);
		ctx.fillRect(playerx + 32.5, 442, 10, 50);

}	*/
		
		
		
		
		
		speeds += 5;
		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	/*if(Enemyy[0] == 80 && Enemyy[1] == 130 && Enemyy[2] == 180 && Enemyy[3] == 230 ){
		Stage();
		}*/
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	





	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
					if(mx > startx && mx < startx + startw && my > starty && my < starty + starth){
	screen = 2;
}
	      
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
		
	}, false);




})