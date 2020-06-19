
![GitHub package.json version](https://img.shields.io/github/package-json/v/blipn/pixel-sprite-generator-nodejs)
![David](https://img.shields.io/david/blipn/pixel-sprite-generator-nodejs)
[![License](https://img.shields.io/github/license/blipn/pixel-sprite-generator-nodejs)](https://raw.githubusercontent.com/blipn/pixel-sprite-generator-nodejs/master/LICENSE)
[![Build Status](https://travis-ci.org/blipn/pixel-sprite-generator-nodejs.svg?branch=master)](https://travis-ci.org/blipn/pixel-sprite-generator-nodejs)
![GitHub repo size](https://img.shields.io/github/repo-size/blipn/pixel-sprite-generator-nodejs)

# pixel-sprite-generator-nodejs
Create procedural 2D creatures in .png files.

Adaptation of this front javascript app for nodejs : https://github.com/zfedoran/pixel-sprite-generator

![alt text](https://raw.githubusercontent.com/blipn/pixel-sprite-generator-nodejs/master/doc/exemple.png)

--- 

```bash
npm install pixel-sprite-generator-nodejs
```
### /!\ Follow [theses instructions](https://github.com/Automattic/node-canvas) for the required Canvas module /!\
https://github.com/Automattic/node-canvas

---
Usage : 

```javascript
const pixelMaker = require('pixel-sprite-generator-nodejs')
const outputDirectory = './sprite/'

const sprite = pixelMaker.createCreature(outputDirectory, (name) => {
        console.log(`file ${outputDirectory}${name} created`)
    });

```
