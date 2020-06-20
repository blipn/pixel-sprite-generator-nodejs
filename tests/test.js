/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const expect = require('chai').expect
const chaiFiles = require('chai-files')
const file = chaiFiles.file
const pixel = require('../src/pixelMaker')

describe('Use pixel', function () {
  describe('Create bug png', function () {
    it('Create a bug and store it as a png', function () {
      const outputDirectory = './sprite/'
      pixel.createCreature(outputDirectory, (name) => {
        expect(file(`${outputDirectory}${name}`)).to.exist
      }, pixel.masks.bug)
    })
  })
  describe('Create random creature png', function () {
    it('Create a random creature and store it as a png', function () {
      const outputDirectory = './sprite/'
      pixel.createCreature(outputDirectory, (name) => {
        expect(file(`${outputDirectory}${name}`)).to.exist
      })
    })
  })
})
