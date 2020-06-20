const psg = require('../src/psg')
const masks = require('./masks')

exports.masks = masks

/**
 * Crée une image de créature
 */
exports.createCreature = function (outputDirectory = './sprite/', callback, mask) {
  return new psg.Sprite(
    mask || masks.masks[Math.floor(Math.random() * masks.masks.length)],
    { colored: true },
    outputDirectory,
    callback
  )
}
