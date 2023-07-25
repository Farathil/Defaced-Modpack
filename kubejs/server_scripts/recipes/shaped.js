// priority: 10
//   ______      __                   _ 
//   |  _  \    / _|                 | |
//   | | | |___| |_ __ _  ___ ___  __| |
//   | | | / _ \  _/ _` |/ __/ _ \/ _` |
//   | |/ /  __/ || (_| | (_|  __/ (_| |
//   |___/ \___|_| \__,_|\___\___|\__,_|

/**
 * @file Shaped recipe additions for Defaced.
 * 
 * Contains several convenience functions for frequently used shapes.
 * 
 * @see shapeless.js
 * 
 * @copyright Valhelsia Inc 2022-2023
 */

/**
 * Shaped Recipe Event Handler
 */
ServerEvents.recipes(event => {

  // Convenience Functions:
  const shaped2x2 = (output, input) => {event.shaped(output, ['AA', 'AA'], {A: input})};
  const shaped3x3 = (output, input) => {event.shaped(output, ['AAA', 'AAA', 'AAA'], {A: input})};
  const donut = (output, input) => {event.shaped(output, ['AAA', 'A A', 'AAA'], {A: input})};
  const wrapped = (output, core, wrap) => {event.shaped(output, ['AAA', 'ABA', 'AAA'], {A: wrap, B: core})};
  const plusWrapped = (output, core, wrap) => {event.shaped(output, [' A ', 'ABA', ' A '], {A: wrap, B: core})};
  const barrel = (output, plank, slab) => {event.shaped(output, ['ABA', 'A A', 'ABA'], {A: plank, B: slab})};
  const slab = (output, input) => {event.shaped(Item.of(output, 6), ['AAA'], {A: input})};
  const vslab = (output, input) => {event.shaped(Item.of(output, 3), ['A', 'A', 'A'], {A: input})};

  // Eccentric Tome
  plusWrapped(Item.of('eccentrictome:tome', ECCENTRIC_TOME_NBT), 'minecraft:book', '#forge:bookshelves');

  // Minecraft
  shaped3x3('minecraft:cobweb', 'minecraft:string');

  event.shaped('minecraft:dispenser', [
    'AAA',
    'ABA',
    'ACA'
  ], {
    A: '#forge:cobblestone',
    B: 'minecraft:crossbow',
    C: 'minecraft:redstone'
  });

  event.shaped('minecraft:chainmail_helmet', [
    'AAA',
    'A A'
  ], {
    A: 'minecraft:chain'
  });

  event.shaped('minecraft:chainmail_chestplate', [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:chain'
  });

  event.shaped('minecraft:chainmail_leggings', [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  });

  event.shaped('minecraft:chainmail_boots', [
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  });

  event.shaped('minecraft:bundle', [
    'SCS',
    'C C',
    'CCC'
  ], {
    S: '#forge:string',
    C: 'farmersdelight:canvas'
  });

  event.shaped('minecraft:bookshelf', [
    'AAA',
    'BBB',
    'AAA'
  ], {
    A: '#minecraft:planks',
    B: 'minecraft:book'
  });
  
  event.shaped('4x minecraft:ladder', [
    'A A',
    'ABA',
    'A A'
  ], {
    A: '#forge:rods/wooden',
    B: '#minecraft:planks'
  });

  event.shaped('minecraft:chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: '#minecraft:planks'
  });

  // Ars Nouveau

  // Decorative Blocks
  event.shaped('2x decorative_blocks:chain', [
    'A',
    'B',
    'A'
  ], {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:iron_nugget'
  });

  event.shaped('4x decorative_blocks:rocky_dirt', [
    'AB',
    'BA'
  ], {
    A: 'minecraft:dirt',
    B: '#forge:cobblestone'
  });

  // Ecologics
  shaped2x2('minecraft:moss_block', 'ecologics:surface_moss');

  // Farmer's Delight
  shaped3x3('farmersdelight:organic_compost', 'minecolonies:compost');
  shaped2x2('farmersdelight:canvas', 'supplementaries:flax');

  // Immersive Engineering
  shaped3x3('immersiveengineering:storage_silver', '#forge:ingots/silver');
  shaped3x3('immersiveengineering:storage_steel', '#forge:ingots/steel');

  // Sophisticated Backpacks
  event.shaped('sophisticatedbackpacks:backpack', [
    'ACA',
    'BDB',
    'BBB'
  ], {
    A: '#forge:string',
    B: '#forge:leather',
    C: 'quark:ravager_hide',
    D: '#forge:chests/wooden'
  });

  // Supplementaries
  event.shaped('supplementaries:quiver', [
    'L L',
    'LSL',
    ' L '
  ], {
    S: '#forge:string',
    L: '#forge:leather'
  });

  // Waystones
  event.shaped('waystones:warp_scroll', [
    'NWN',
    'NEN',
    'PPP'
  ], {
    N: '#forge:nuggets/gold',
    W: '#forge:dusts/warp',
    E: '#forge:ender_pearls',
    P: '#forge:paper'
  }).id('waystones:warp_scroll');

  event.shaped('waystones:warp_stone', [
    'WPW',
    'PEP',
    'WPW'
  ], {
    W: '#forge:dusts/warp',
    P: '#forge:ender_pearls',
    E: '#forge:gems/emerald'
  }).id('valhelsia:warp_stone');

	// Philips Ruins
  event.shaped('4x philipsruins:bone_bricks', [
    'BC',
    'CB'
  ], {
    C: 'philipsruins:broken_bone',
    B: 'minecraft:bone',
  });

  //Quark
  plusWrapped(Item.of('16x regions_unexplored:prismaglass'), 'minecraft:glass', 'regions_unexplored:prismarite_cluster');
  plusWrapped(Item.of('32x regions_unexplored:prismaglass'), 'minecraft:glass', 'regions_unexplored:large_prismarite_cluster');
  
  //Biomes O' Plenty
  plusWrapped(Item.of(''), 'minecraft:biomesoplenty:rainbow_birch_sapling', 'regions_unexplored:large_prismarite_cluster');
  
});

