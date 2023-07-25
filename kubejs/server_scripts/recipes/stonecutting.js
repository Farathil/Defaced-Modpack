// priority: 10
//   ______      __                   _ 
//   |  _  \    / _|                 | |
//   | | | |___| |_ __ _  ___ ___  __| |
//   | | | / _ \  _/ _` |/ __/ _ \/ _` |
//   | |/ /  __/ || (_| | (_|  __/ (_| |
//   |___/ \___|_| \__,_|\___\___|\__,_|

/**
 * @file Stonecutter recipe additions for Valhelsia 5.
 * Includes functions for frequently used recipe templates.
 * 
 * @copyright Valhelsia Inc 2022-2023
 */

/**
 * Stonecutting Recipe Event Handler
 */
ServerEvents.recipes(event => {

  /**
   * Creates multiple stonecutting recipes to convert items between each other.
   * Typically used to convert between equivalent stones from different mods.
   * 
   * @example scConvert(['create:limestone', 'quark:limestone']);
   * 
   * @param {(string[]|Item[])} items An array of items (or item IDs), usually types of raw stone.
   */
  const scConvert = (items) => {
    if (!Array.isArray(items)) {
      console.error('scConvert requires an array as input.');
      return;
    }

    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items.length; j++) {
        if (i != j) {
          event.stonecutting(items[i], items[j]);
        }
      }
    }
  };

  // Conversion between stone of the same type.

	// Philips Ruins
	//scConvert(['minecraft:boneblock', '4x philipsruins:bonebricks']);

});
