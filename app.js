const fs = require('fs');
const psg = require('./psg.js');
const resize = require('./resize.js');

var SPRITE_SCALE = 5;
var SPRITE_COUNT = 1;

var spaceship = new psg.Mask([
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 1,
    0, 0, 0, 0, 1,-1,
    0, 0, 0, 1, 1,-1,
    0, 0, 0, 1, 1,-1,
    0, 0, 1, 1, 1,-1,
    0, 1, 1, 1, 2, 2,
    0, 1, 1, 1, 2, 2,
    0, 1, 1, 1, 2, 2,
    0, 1, 1, 1, 1,-1,
    0, 0, 0, 1, 1, 1,
    0, 0, 0, 0, 0, 0
], 6, 12, true, false);


var creatures = new psg.Mask([
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 1,
    0, 2, 2, 1, 1,-1,
    0, 0, 1, 1, 1,-1,
    0, 0, 1, 1, 1,-1,
    0, 0, 1, 1, 1,-1,
    0, 1, 1, 1, 2, 2,
    0, 1, 2, 1, 2, 2,
    0, 1, 1, 1, 2, 2,
    0, 1, 1, 1, 1,-1,
    0, 0, 1, 1, 1, 1,
    0, 0, 0, 2, 0, 0
], 6, 12, true, false);

var i, sprite, div;

for (i = 0; i < SPRITE_COUNT; i++) {
    sprite = new psg.Sprite(creatures, {
        colored         : true
    });

    //fs.writeFile('./out.svg', (resize(sprite.canvas, SPRITE_SCALE)).toBuffer());
    //fs.writeFile('./out.svg', sprite.canvas.toBuffer());
    console.log("ccoool");

}
