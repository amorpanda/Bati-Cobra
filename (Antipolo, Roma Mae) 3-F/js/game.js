var w = 800, h= 600;
var game = new Phaser.Game(w, h, Phaser.CANVAS, '');
var player, keyboard;
//var bounds = 15000;
var player, keyboard, score= 0,  labelhi, scoreInterval ,score , retrieveBest, scoreText, bounceGirl,gameOverText,  bestText, best, button_Right, button_Galaw,button_Left, playAgain, goLeft, goRight, playpause;

game.state.add('bootGame',bootGame);
game.state.add('preloadGame',preloadGame);
game.state.add('menuGame',menuGame);
game.state.add('playGame',playGame);

game.state.start('bootGame');			