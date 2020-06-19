# pixel-sprite-generator-nodejs
Create procedural 2D creatures in .png files.

Adaptation of this front javascript app for nodejs : https://github.com/zfedoran/pixel-sprite-generator

![alt text](https://raw.githubusercontent.com/blipn/pixel-sprite-generator-nodejs/master/exemple.png)

--- 

```bash
npm install pixel-sprite-generator-nodejs
```
### /!\ Follow [theses instructions](https://github.com/Automattic/node-canvas) for the required Canvas module /!\
https://github.com/Automattic/node-canvas

---
Usage : 

```javascript
const pixelMaker = require('pixel-sprite-generator-nodejs');

pixelMaker.createCreature(function (name, outputDirectory) {
    console.log(`file ${outputDirectory}${name} created`);
});

```
