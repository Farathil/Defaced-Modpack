// priority: 90
//   ______      __                   _ 
//   |  _  \    / _|                 | |
//   | | | |___| |_ __ _  ___ ___  __| |
//   | | | / _ \  _/ _` |/ __/ _ \/ _` |
//   | |/ /  __/ || (_| | (_|  __/ (_| |
//   |___/ \___|_| \__,_|\___\___|\__,_| 
/**
 * @file Recipe add / remove potion brewing for Valhelsia 5.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Potion Brewing Event Handler
 */
MoreJSEvents.registerPotionBrewing((event) => {

  event.addPotionBrewing("biomesoplenty:rose_quartz_shard", "minecraft:awkward", "cave_enhancements:reversal");
});
