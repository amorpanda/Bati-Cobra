menuGame = {
		create: function(){


			bg = game.add.image(0,0,"bg2");
			bg.scale.y = 3.5;
			bg.scale.x = 2.8;

			startButton = game.add.button(game.width/3,game.height/2, 'buttonplay', this.buttonPlay);
			startButton.scale.x= 1.5;
			startButton.scale.y = 1.5;

			aboutButton = game.add.button(game.width/1.9,game.height/1.2, 'buttonabout', this.about);
			aboutButton.anchor.set(0.6)
			aboutButton.scale.x=.7;
			aboutButton.scale.y = .7;

			headText=  game.add.text(game.width/2-280,game.height/3.1,"The Filipino Traditional Game",{ font: "23px Magneto",fill:'blue',align: "center"});
			headText.scale.x=1.5;
			headText.scale.y=1.5;
			titleText = game.add.text(game.width/3.5,game.height/2.5,"BATI-COBRA",{ font: "20px Goudy Stout",fill:'black',align: "center"});
			titleText.scale.x = 1.8;
			titleText.scale.y = 1.8;
			/*
			menuText = game.add.text(game.width/2-45,game.height/1.7,"MENU",{"fill":"black"});
			menuText.scale.x=1.2;
			menuText.scale.y = 1.2;
			
			playText = game.add.text(game.width/2.4,game.height/1.4,"Play Game",{"fill":"white"});
			playText.scale.x=.9;
			playText.scale.y = .9;
			
			aboutText = game.add.text(game.width/2.2,game.height/1.2,"About",{"fill":"white"});
			aboutText.scale.x=.9;
			aboutText.scale.y = .9;
*/
		},
		update: function(){

},

			buttonPlay:function(){

				game.state.start("playGame");
			},
		
		about: function(){
            about=game.add.image(0,0,"about2");
          	 about.scale.y = 1;
			 about.scale.x = 1;
		
			
            restartButton=game.add.button(0,5,"menu2",restartB,this);
            function restartB() {
           
            restartButton.destroy();
            game.state.start("menuGame");
            }

            },


                ins: function(){
            about=game.add.image(0,0,"ins");
            about.scale.set(3.2);
			

            restartButton=game.add.button(0,5,"menu2",restartB,this);
            function restartB() {
            restartButton.destroy();

            game.state.start("menuGame");

            }

            },



}




	
