const pixelMaker = require('./pixelMaker');

const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('img'));
app.get('/', function (req, res) {

    pixelMaker.createCreature();

    let imageDir = './img/';

    function getImages(imageDir, callback) {
        let fileType = '.png',
            files = [], i;
        fs.readdir(imageDir, function (err, list) {
            for(i=0; i<list.length; i++) {
                if(path.extname(list[i]) === fileType) {
                    files.push(list[i]); //store the file name into the array files
                }
            }
            callback(err, files);
        });
    }

    getImages(imageDir, function (err, files) {
        let imageLists = '<body>';
        for (let i=0; i<files.length; i++) {
            imageLists += '<img src="'+files[i]+'" alt="Avatar" style="image-rendering: pixelated; margin: 2px;" height="50" width="50">';
        }
        imageLists += '</body>';
        res.send(imageLists);
    });

});

app.listen(PORT, function () {
    console.log('App listening on port '+PORT+".");
});