/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


/*
const $board = $('#board');
const ROWS = 10;
const COLS = 10;

function createBoard(rows, cols) {
  $board.empty();
  for (let i = 0; i < rows; i++) {
    const $row = $('<div>').addClass('row');
    for (let j = 0; j < cols; j++) {
      const $col = $('<div>')
        .addClass('col hidden')
        .attr('data-row', i)
        .attr('data-col', j);
      if (Math.random() < 0.1) {
        $col.addClass('baffle');
      }
      $row.append($col);
    }
    $board.append($row);
  }
}

function restart() {
  createBoard(ROWS, COLS);
}

function gameOver(isWin) {
  let message = null;
  let icon = null;
  if (isWin) {
    message = 'FOUND BAFFLE!';

  } else {
    message = 'SORRY. BETTER LUCK NEXT TIME.';

  }
  $('.col.baffle').append(
    $('<i>').addClass(icon)
  );
  $('.col:not(.baffle)')
    .html(function() {
      const $cell = $(this);
      const count = getBaffleCount(
        $cell.data('row'),
        $cell.data('col'),
      );
      return count === 0 ? '' : count;
    })
  $('.col.hidden').removeClass('hidden');
  setTimeout(function() {
    alert(message);
    restart();
  }, 1000);
}

function reveal(oi, oj) {
  const seen = {};

  function helper(i, j) {
    if (i >= ROWS || j >= COLS || i < 0 || j < 0) return;
    const key = `${i} ${j}`
    if (seen[key]) return;
    const $cell =
      $(`.col.hidden[data-row=${i}][data-col=${j}]`);
    const mineCount = getBaffleCount(i, j);
    if (
      !$cell.hasClass('hidden') ||
      $cell.hasClass('baffle')
    ) {
      return;
    }

    $cell.removeClass('hidden');

    if (baffleCount) {
      $cell.text(baffleCount);
      return;
    }
    
    for (let di = -1; di <= 1; di++) {
      for (let dj = -1; dj <= 1; dj++) {
        helper(i + di, j + dj);
      }      
    }
  }

  helper(oi, oj);
}

function getBaffleCount(i, j) {
  let count = 0;
  for (let di = -1; di <= 1; di++) {
    for (let dj = -1; dj <= 1; dj++) {
      const ni = i + di;
      const nj = j + dj;
      if (ni >= ROWS || nj >= COLS || nj < 0 || ni < 0) continue;
      const $cell =
        $(`.col.hidden[data-row=${ni}][data-col=${nj}]`);
      if ($cell.hasClass('baffle')) count++;
    }      
  }
  return count;
}

$board.on('click', '.col.hidden', function() {
  const $cell = $(this);
  const row = $cell.data('row');
  const col = $cell.data('col');
  
  if ($cell.hasClass('baffle')) {
    gameOver(false);
  } else {
    reveal(row, col);
    const isGameOver = $('.col.hidden').length === $('.col.baffle').length
    if (isGameOver) gameOver(true);
  }
})

restart();*/




function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(51);
	//For (var BEGIN; END; INTERVAL){
	//DO SOMETHING }
	for (var x = 0; x < width; x += width / 10) {
        const $width = $('<div>').addClass('width');
		for (var y = 0; y < height; y += height / 10) {
            const $height = $('<div>')
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
            line(0, y, width, y);
            if (Math.random() < 0.1) {
            $col.addClass('baffle');
            }
		}
	}
}

function restart(){
    createCanvas(400, 400);
}















/*var baffle_array= [/,\];
var baffle_values = [];
var baffles_ids = [];
var baffles_flipped = 0;

//adds shuffle method to array objects
Array.prototype.baffles_baffles_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoard(){
    baffles_flipped = 0;
    var output = '';
    baffle_array.baffles_baffles_shuffle();
    for(var i = 0; i < baffle_array.length; i++){
        output += 'div < id= "baffle_'+i+'" onclick="memoryFlipBaffle(this, \''+baffle_array[i]+'\')"></div>';
    }
    document.getElementById('baffles_board').innerHTML = output;
}*/