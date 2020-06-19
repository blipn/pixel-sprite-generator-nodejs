const expect = require('chai').expect;
const chaiFiles = require('chai-files');
const file = chaiFiles.file;
const pixel = require('../src/pixelMaker');

describe('Use pixel', function () {
  describe('Create png', function () {
    it('Create a creature and store it as a png', function () {
		const outputDirectory = './sprite/'
		pixel.createCreature(outputDirectory, (name) => {
			expect(file(`${outputDirectory}${name}`)).to.exist;
		});
    });
  });
});
