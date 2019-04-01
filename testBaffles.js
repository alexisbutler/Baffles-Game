var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var answer;
var $cell = [10][10];
var history = new ArrayList<String>();
var KeyboardEvent;
var $cellString = {" . "," . "," . "," / ", " \\ "};
var guessed = 0, total;
var ranNum;


var bafflesPlaced = function(){
	var total = 5;
	var placed = 0;

	while(placed < total){
		x = random(10);
		y = random(10);
		type = random(2) + 1;
		if($cell[x][y] == 0){
			$cell[x][y] = type;
			placed++;
		}
	}

	var choice = document.getElementById('yourOption');
	choice.innerHTML = "";
	while(true){
		drawScreen(false);
		choice = prompt("\n1.) Shoot 2.) Guess 3.) Quit: ");
		if (choice == 1) shoot();
		if (choice == 2) guess();
		if (choice == 3) break;
		

	}

}

var guess = function(){
	drawScreen(true);
	var type;
	var x = 0, y = 0;
	x.innerHTML = "";
	y.innerHTML = "";

	while(true){
		x = prompt("please enter coordinate (0-9): ");
		if (x >= 0 && x <= 9) break;
	}

	while(true){
		y = prompt("please enter coordinate (0-9): ");
		if (y >= 0 && y <= 9) break;
	}
	choice = prompt("Please enter type (/ or \\): ");
	int choice = type == '/' ? 1 : 2;
	if ($cell[x][y] == choice){
		alert("\nCorrect!");
		$cell[x][y] += 2;
		guessed++;
		alert("\nCorrect guesses: " + guessed);

		if (guessed == total){
			alert("\nYou found all of the baffles! Congratualtions!");
			exit();
		}
	}
	else alert("\nFalse!");

	var shoot= function(){
		prompt("\nEnter entry point: 0-39");
		var choice, x = 0, y = 0, xd = 0, yd = 0;

		while(true){
			if(choice >= 0 && choice <= 39) break;
			choice = prompt("Please enter a number from 0-39: ");
		}

		var side = choice / 10;
		var where = choice % 10;
		switch (side){
			case 0:
				y = -1;
				xd = 0;
				yd = 1;
				break;
			case 1:
				y = where; 
				x = 10;
				xd = -1;
				yd = 0;
			case 2:
				x = 9 - where;
				y = 10;
				xd = 0;
				yd = -1;
			case 3: 
				x = -1;
				y = 9 - where;
				xd = 1;
				yd = 0; 
		}

		var t;
		while(true){
			//move one
			x += xd;
			y += yd; 
			if (x == -1 || x == 10 || y == -1 || y ==10) break;
			//baffle: /
			if ($cell[x][y] == 1 || $cell[x][y] == 3){
				t = xd; 
				xd = -yd;
				yd = -t;

			}
			//baffle: /
			if ($cell[x][y] == 2 || cell[x][y] == 4){
				t = xd;
				xd = yd;
				yd = t;
			}

		};
		alert("Exit at" + exit + "\n");

	}

}

var drawScreen = function(Boolean guess){
	background = black;

	if (guess){
		for (int y = -1; y < 10; y++){
			for (int y = -1; y < 10; y++){
				stroke(0);
				strokeWeight(1);
				line(x, 0, x, height);
				line(0, y, width, y);
				if ( y == -1){
					if (x > -1){
						alert(" %d", x);
					}
					else
					alert(" ");
				} else if ( x == -1){
					if (y > -1) alert(" %d", y);
				} else
					draw(x,y);
			}
			startGame();
		}
	} else {
		for (int y = -1; y <= 10; y++){
			for (int x = -1; x <= 10; x++){
				stroke(0);
				strokeWeight(1);
				line(x, 0, x, height);
				line(0, y, width, y);
				print(draw (x,y));
			}
			for ( int h = y + 1; h < 100; h +=12){
				if (h < history.size()) print("\t" + history.get(h) + "\t");
			};
		}
	}
}

/*function setup() {
	createCanvas(400, 400);
}

function draw(x,y) {
	background(black);
	var empty = " ";
	//For (var BEGIN; END; INTERVAL){
	//DO SOMETHING }
	for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 10) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
}
*/