playGame = {

		create: function(){
		        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		        game.world.width = window.screen.width;
		        game.world.height = window.screen.height;
		        width = window.screen.width;
		        height = window.screen.height;
		        game.scale.refresh();
				
				game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
				game.scale.forceLandscape = true;
				game.scale.pageAlignHorizontally = true;
				game.scale.pageAlignVertically = true;
				//game.scale.setScreenSize= true;
				game.add.sprite(0,0,"bg1");
				platform = game.add.sprite(0,599,"platform");
				platform.scale.x = 2;
  
				girl = game.add.sprite(400,300,"girl");
			    player = game.add.sprite(100,h/2,"mychar");
			    girl.scale.x=.2;
				girl.scale.y=.2;
				player.scale.x=.3;
				player.scale.y=.5;

			    player.animations.add('walk-right',[0,1,2,3],3,true);
			    player.animations.add('walk-left',[5,6,7,8],8, true);
								


				enemy = game.add.sprite(700,150,"enemy");
				enemy.scale.x=.3;
				enemy.scale.y=.5;
				game.physics.arcade.enable(enemy);
    			enemy.body.collideWorldBounds = true;
       			enemy.body.immovable = true;

       			enemy1 = game.add.sprite(0,50,"enemy1");
				enemy1.scale.x=.3;
				enemy1.scale.y=.5;
				game.physics.arcade.enable(enemy1);
    			enemy1.body.collideWorldBounds = true;
       			enemy1.body.immovable = true;


				timer=game.time.events.loop(Phaser.Timer.SECOND * 2,this.enemyMoveDown);

				timer=game.time.events.loop(Phaser.Timer.SECOND * 1,this.enemyMoveUp);


	
				timer=game.time.events.loop(Phaser.Timer.SECOND * 2,this.enemy1MoveDown);

				timer=game.time.events.loop(Phaser.Timer.SECOND * 1,this.enemy1MoveUp);





				labelScore = game.add.text(50, 20, 'Score:0', {font: '30px serif', fill: 'red'}); 
				labelhi = game.add.text(600, 20, "Hi-Score: " +this.getScore(),{font: '30px serif', fill: 'red'}); 
				gameOverText = game.add.text(w/2-100,h/2,"",{fill:'red'});
				button_Left = game.add.button(275,470,"btn2",this.goLeft);
				button_Right = game.add.button(420,470,"btn1",this.goRight);
			    button_Galaw = game.add.button(300,20,"btn-reset",this.playAgain);

				bgmusic = game.add.audio("bgmusic");
				bgmusic.loop = true;
				bgmusic.play()
				
				game.physics.arcade.enable(platform);
				platform.body.immovable=true;
				platform.scale.x = 2;
				platform.scale.y = .1;

				

	
				this.pauseButton = this.game.add.sprite(400,20, 'pauseButton');
				this.pauseButton.inputEnabled = true;
				this.pauseButton.fixedToCamera = true;
				this.pauseButton.events.onInputUp.add(function () {this.game.paused = true;},this);
				this.game.input.onDown.add(function () {if(this.game.paused)this.game.paused = false;},this); 
				
						
			    game.physics.arcade.enable(player);
				player.body.collideWorldBounds = true;
				player.checkWorldBounds = true;
				player.body.gravity.y = 10000;
				player.body.bounce.y=0.7;
//				player.anchor.set(1,1);


		game.physics.arcade.enable(girl);
		//girl.checkWorldBounds = true;

        girl.body.setCircle = 100;
        girl.body.gravity.x = 0;
        girl.body.gravity.y = 50;
        girl.body.bounce.x = 0.9;
        girl.body.bounce.y = 0.9;
        girl.body.collideWorldBounds = true;

//girl.body.gravity.y = 100;
				girl.checkWorldBounds = true;
				girl.body.bounce.setTo(1);
				girl.body.collideWorldBounds = true;
				girl.enableBody = true;
				girl.anchor.set(2);
				girl.body.velocity.set(200, -300);

				
				

				game.physics.enable(player, Phaser.Physics.ARCADE);
				
				//this.time (1000, 10);
		},
		

			 update:function() {
				game.physics.arcade.collide(girl,enemy1);
		 		game.physics.arcade.collide(enemy,girl);
				game.physics.arcade.collide(player,girl);
				game.physics.arcade.collide(player,platform);
		//		game.physics.arcade.overlap(girl,enemy, this.killGirl);
				game.physics.arcade.collide(platform, girl, this.killGirl);
				game.physics.arcade.collide(player, girl, this.bounceGirl);
					
			if(Math.round(girl.body.position.x) >= (game.height/1.5)){
            	enemy.body.position.y = Math.round(girl.body.position.y);
                enemy1.body.position.y = Math.round(girl.body.position.y);

        }

		

					
			
					
		
		},




enemyMoveDown:function () {
    
        enemy.body.velocity.y = -400;
        enemy.animations.play('down');

     },
enemyMoveUp:function () {
    
        enemy.body.velocity.y =400;
        enemy.animations.play('up');

     },

enemy1MoveDown:function () {
    
        enemy1.body.velocity.y = -400;
        enemy1.animations.play('down');

     },
enemy1MoveUp:function () {
    
        enemy1.body.velocity.y =400;
        enemy1.animations.play('up');

     },
		
		
killGirl:function (platform,enemy){
	girl.kill();
	
	//game._paused = true;
   gameOverText.text = "GAME OVER!\nYour Score: "+score;

	//game._paused= true;

		},

		
loopAudio: function(time){
		setInterval(function(){
				bgmusic.play();
			
			
		}, time);
       
      },


 saveScore:function(score){
    localStorage.setItem("gameData",score);
	},
	
	getScore:function(){
    return (localStorage.getItem("gameData") == null || localStorage.getItem("gameData") == "")?0:
    localStorage.getItem("gameData");

//var x = 0;
},
time:function  (time,duration){
	setInterval (function(){
	if(duration<=0){

    gameOverText.text = "GAME OVER!\nYour Score: "+score;

	game._paused= true;
	//killmychar();
	}
	else{
	duration--;
	timeText.text= "TIME: " +duration;
	}
	}, time)
	},

//var score=0;	
bounceGirl:function (mychar,girl){
    score = score + 5;
    labelScore.text = "Score: "+score;
	girl.body.bounce.set(1);

	
     //if(this.retrieve()<=score){
       //         this.saveScore(score);        
            //}
        },
		

goRight:function (){

        player.animations.play('walk-right');
        player.body.velocity.x = 400;

		button_Right.frame = 0;

    setTimeout(function(){
       button_Right.frame = 1;

    },100);


		
},

goLeft:function (){
        player.animations.play('walk-left');
        player.body.velocity.x = -400;
			
		button_Left.frame = 0;

    setTimeout(function(){
        button_Left.frame = 1;

    },100);

},
 saveScore:function(score){
            localStorage.setItem("saveScore",score);
        },  
        retrieve:function(){
            var data = localStorage.getItem("saveScore");
            if(data == null || data == ""){
                data = 0;
            }
            return data;
        },
playAgain:function (){

   
    window.location.href=window.location.href;


    button_Galaw.frame = 1;

    setTimeout(function(){
        button_Galaw.frame = 0;
         },100);
    }
}


