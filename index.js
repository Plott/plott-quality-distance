var rssiQuality = require('plott-rssi-quality');

/**
 * Converts quality of RSSI signal strength to distance.
 *
 * @module plott/qualityDistance
 * @category helper
 * @param {Integer} m dBm RSSI dBm
 * @param {Number} p maximum coverage of signal
 * @return {Number} distance
 * @example
 * var distance = plott.qualityDistance(-75, 400);
 *
 * //=distance
 */
var isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
           isFinite(value) &&
           Math.floor(value) === value;
};

module.exports = function (m, p) {
  if (!isInteger(p)) throw new Error ('Maximum coverage of signal must be an integer');
  m = rssiQuality(m);
  return p * (1 - m);
};
