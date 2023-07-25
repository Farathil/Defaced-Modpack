// priority: 10
//   ______      __                   _ 
//   |  _  \    / _|                 | |
//   | | | |___| |_ __ _  ___ ___  __| |
//   | | | / _ \  _/ _` |/ __/ _ \/ _` |
//   | |/ /  __/ || (_| | (_|  __/ (_| |
//   |___/ \___|_| \__,_|\___\___|\__,_|

/**
 * @file Alloying recipes for Valhelsia 5.
 * 
 * Includes a function to add alloying recipes to multiple mods at the same time.
 * Also replaces some existing alloying recipes in order to unify them between mods.
 * 
 * @copyright Valhelsia Inc 2022
 */

/**
 * Alloying Recipe Event Handler
 */
ServerEvents.recipes(event => {

  /**
   * Creates an alloy recipe for multiple mods.
   * If the inputs parameter has exactly two ingredients then the recipe will be added to all supported mods,
   * and if it has more than two then it will only be added to Create (which supports a greater number of ingredients).
   * 
   * @param {(string|Item)} output The resulting output alloy item(s).
   * @param {(string[]|Ingredient[])} inputs An array of ingredients to use as inputs. Must have at least two ingredients.
   */
  const alloy = (output, inputs) => {
    // Create
    event.recipes.createMixing(output, inputs).heated();
    // TODO: Consider adding a flag to switch between unheated, heated, superheated mixing recipes.
    //       For now, heated is a sensible default for most alloying.

    // Immersive Engineering & Mekanism
    if (inputs.length == 2) {
      event.recipes.immersiveengineeringAlloy(output, inputs[0], inputs[1]);

      // Note: The combiner is the closest thing in Mekanism to an alloy kiln, as it
      // takes two inputs and merges them into one output, consuming power to do so.
      // This also makes up for the potential removal of the default recipes of the combiner in the future.
      // Temporarily disable Mekanism Combiner recipe additions too.
      //event.recipes.mekanismCombining(output, inputs[0], inputs[1]);
    }
  };

  // Remove unused alloying recipes.
  // Note: Only remove recipes here if they're being replaced immediately afterwards in this script.
  // For removal of alloying recipes with no replacement, use remove.js instead.
  [
    'create:mixing/brass_ingot',
    'immersiveengineering:alloysmelter/brass',
    'immersiveengineering:alloysmelter/bronze',
    'immersiveengineering:alloysmelter/constantan',
    'immersiveengineering:alloysmelter/electrum',
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Minecraft
  alloy('minecraft:netherite_ingot', ['4x minecraft:netherite_scrap', '4x #forge:ingots/gold']);

  // Create
  alloy('2x create:brass_ingot', ['#forge:ingots/copper', '#forge:ingots/zinc']);
  // TODO: Look through Create mixing recipes - there's plenty more that should be removed and moved here
  //       in order to add compatibility with other alloying methods.
  
  // Immersive Engineering
  alloy('2x immersiveengineering:ingot_constantan', ['#forge:ingots/copper', '#forge:ingots/nickel']);
  alloy('2x immersiveengineering:ingot_constantan', ['#forge:dusts/copper', '#forge:dusts/nickel']);
  alloy('2x immersiveengineering:ingot_electrum', ['#forge:ingots/gold', '#forge:ingots/silver']);
  alloy('2x immersiveengineering:ingot_electrum', ['#forge:dusts/gold', '#forge:dusts/silver']);

  // Mekanism
  alloy('4x mekanism:ingot_bronze', ['3x #forge:ingots/copper', '#forge:ingots/tin']);
  alloy('4x mekanism:ingot_bronze', ['3x #forge:dusts/copper', '#forge:dusts/tin']);
  alloy('mekanism:dust_refined_obsidian', ['#forge:dusts/obsidian', '#forge:dusts/diamond']);
  alloy('mekanism:alloy_infused', ['#forge:ingots/iron', '#forge:dusts/redstone']);
  alloy('mekanism:alloy_reinforced', ['#forge:alloys/advanced', '2x #forge:dusts/diamond']);
  alloy('mekanism:alloy_atomic', ['#forge:alloys/elite', '4x #forge:dusts/refined_obsidian']);

  // More Minecarts
  alloy('moreminecarts:silica_steel', ['#forge:ingots/steel', '#forge:gems/quartz']);
  alloy('moreminecarts:silica_steel', ['#forge:dusts/steel', '#forge:gems/quartz']);

});