
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('background', 'assets/images/fondo.png');
        game.load.spritesheet('bob', 'assets/images/bob.png', 204, 213, 10);
        game.load.audio('sonido', 'assets/sounds/bob.mp3');
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        this.bob = game.add.sprite(-100, 540, 'bob');
        this.bob.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],1,true);
        this.bob.animations.play("walk");
        sonido = game.add.audio('sonido');

        sonido.play('', 0, 0.5, true);
        
    },
    update: function() {
        console.log("update");
        this.bob.x += 2;
        if (this.bob.x == 1200){this.bob = game.add.sprite(-100, 510, 'bob');this.bob.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],1,true);this.bob.animations.play("walk");}
    }
}

var game = new Phaser.Game(1200, 960, Phaser.CANVAS);
var sonido;
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");