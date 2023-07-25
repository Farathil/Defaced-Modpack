// priority: 9002
//   ______      __                   _ 
//   |  _  \    / _|                 | |
//   | | | |___| |_ __ _  ___ ___  __| |
//   | | | / _ \  _/ _` |/ __/ _ \/ _` |
//   | |/ /  __/ || (_| | (_|  __/ (_| |
//   |___/ \___|_| \__,_|\___\___|\__,_|

/**
 * @file Functions that have general purpose use throughout other server scripts.
 * @copyright Valhelsia Inc 2022
 */

/**
 * Checks if a string can be parsed as a number.
 * 
 * @param {string} str The input string to check.
 * @returns True for strings that can be parsed as floats (except NaN), false otherwise.
 */
function isNumeric(str) {
  // Although we expect a string here, it's robust enough to return false for non-strings rather than break.
  if (typeof str != 'string') {
    return false;
  }

  return !isNaN(str) && !isNaN(parseFloat(str));
}