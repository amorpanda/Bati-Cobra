bootGame = {
	
	create: function(){
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		keyboard = game.input.keyboard.createCursorKeys();
		//game.world.setBounds(0,0,bounds,0);
		game.state.start('preloadGame');
	}
}