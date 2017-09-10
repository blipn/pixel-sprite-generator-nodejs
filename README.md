# pixel-sprite-generator-nodejs
Create procedural 2D creatures in .png files.

Adaptation of this front javascript app for nodejs : https://github.com/zfedoran/pixel-sprite-generator

--- 

```bash
npm install pixel-sprite-generator-nodejs
```
### /!\ Follow [theses instructions](https://github.com/Automattic/node-canvas) for the Canvas module required /!\
https://github.com/Automattic/node-canvas

---
Usage : 

```javascript
const pixelMaker = require('./pixel-sprite-generator-nodejs');

pixelMaker.createCreature(function (name) {
    console.log("file "+name+" created in the module img/ folder");
});

```