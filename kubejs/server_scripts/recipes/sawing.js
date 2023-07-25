// priority: 10
//   ______      __                   _ 
//   |  _  \    / _|                 | |
//   | | | |___| |_ __ _  ___ ___  __| |
//   | | | / _ \  _/ _` |/ __/ _ \/ _` |
//   | |/ /  __/ || (_| | (_|  __/ (_| |
//   |___/ \___|_| \__,_|\___\___|\__,_|

/**
 * @file Sawing recipes for Valhelsia 5.
 * 
 * Includes a function to add sawing recipes to multiple mods at the same time.
 * Also replaces some existing sawing recipes in order to unify them between mods.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Sawing Recipe Event Handler
 */
ServerEvents.recipes(event => {

  /**
   * Creates a sawing recipe for multiple mods.
   * @param {(string|Item)} output The resulting item(s).
   * @param {(string|Ingredient)} input A single ingredient to saw.
   */
  const saw = (output, input) => {
    event.recipes.immersiveengineeringSawmill(output, input);

    // TODO: Expand this to allow secondary outputs and stripping.
    // For future reference:
    // event.recipes.immersiveengineeringSawmill(output, input, [secondaries]) // Secondary output format: {stripping: true, output: 'item:id'}
    // event.recipes.immersiveengineeringSawmill(output, input, [secondaries], stripped)

    // TODO: Add other mods.
  };

  // Remove unused sawing recipes.
  // Note: Only remove recipes here if they're being replaced immediately afterwards in this script.
  // For removal of sawing recipes with no replacement, use remove.js instead.
  [
    // TODO: Remove unused sawing recipes here.
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // TODO: Add sawing recipes here.
  //       To start with, look at existing IE sawmill recipes and add any missing mods.
});