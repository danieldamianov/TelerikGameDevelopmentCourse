'use strict'
const game = new Phaser.Game(
    800,800,Phaser.AUTO,"",{preload,create,update}
)

function preload()
{
    game.load.spritesheet('pic','pictures\\pic.png',1024/4,768/4);
}
var pic;
function create()
{
    pic = game.add.sprite(0,0,'pic');
    var walk = pic.animations.add('walk');

    //  And this starts the animation playing by using its key ("walk")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    pic.animations.play('walk', 10, true);

}

function update()
{
    var sign = true;
    if(pic.x > game.width)
    {
        pic.x = -150;
    }
    pic.x += 2;
    
}