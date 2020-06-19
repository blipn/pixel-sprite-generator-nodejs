const psg = require('../src/psg')
const masks = require('./masks')

/**
 * Crée une image de créature
 */
exports.createCreature = function (outputDirectory = './sprite/', callback) {
  return new psg.Sprite(
    masks.bug,
    { colored: true },
    outputDirectory,
    callback
  )
}
