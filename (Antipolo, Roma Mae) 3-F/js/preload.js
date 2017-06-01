preloadGame = {
	
	preload: function(){
				game.load.image('enemy', 'img/dead.png');
				game.load.image('enemy1', 'img/cat.png');

				game.load.image("bg1","img/bground.png");
				game.load.image("platform","img/platform3.png");
				game.load.image("girl","img/stick.png");
				game.load.spritesheet("mychar","img/catcher.png",200,240);
				game.load.spritesheet('btn-reset','img/playagain.png',100,100);
				game.load.spritesheet("btn2","img/rightarrow.png",100,100);
				game.load.spritesheet("btn1","img/leftarrow.png",100,100);
				game.load.spritesheet("pauseButton","img/pauseplay.png",100,100);
				game.load.image("buttonplay","img/play.png",800,800);
				game.load.audio('bgmusic','sounds/opening.ogg');
			    game.load.image('bg2','img/menu2.jpg');
			    game.load.image("buttonabout","img/about.png",800,800);
				game.load.image('about2','img/aboutpic.png');
				game.load.image("menu2","img/back3.png");

				
				},
	create: function(){
		game.state.start("playGame");
		game.state.start("menuGame");
		
		
	}
	
	
}