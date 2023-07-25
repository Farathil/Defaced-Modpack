// priority: 10
//   ______      __                   _ 
//   |  _  \    / _|                 | |
//   | | | |___| |_ __ _  ___ ___  __| |
//   | | | / _ \  _/ _` |/ __/ _ \/ _` |
//   | |/ /  __/ || (_| | (_|  __/ (_| |
//   |___/ \___|_| \__,_|\___\___|\__,_|

/**
 * @file Shapeless recipe additions for Valhelsia 5.
 * @copyright Valhelsia Inc 2022-2023
 * @see shaped.js
 */

/**
 * Shapeless Recipe Event Handler
 */
ServerEvents.recipes(event => {
  // Biomes 'o' Plenty
  event.shapeless('2x biomesoplenty:orange_sand', ['minecraft:sand', 'minecraft:red_sand']);
  event.shapeless('biomesoplenty:rooted_sand', ['minecraft:sand', 'minecraft:hanging_roots']);
  event.shapeless('regions_unexplored:prismoss_sprout', ['biomesoplenty:rainbow_birch_leaves', 'minecraft:moss_carpet']);
  event.shapeless('3x regions_unexplored:prismoss_sprout', ['biomesoplenty:rainbow_birch_leaves', 'minecraft:moss_block']);

  // Ecologics
  event.shapeless('4x ecologics:surface_moss', 'minecraft:moss_block');  

  // Farmer's Delight
  event.shapeless('farmersdelight:organic_compost', [
    'minecraft:dirt', 
    'farmersdelight:straw',
    'farmersdelight:straw',
    'minecraft:bone_meal',
    'minecraft:bone_meal',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood'
  ]);
  
  // Philips Ruins
  event.shapeless('2x philipsruins:broken_bone', 'minecraft:bone');
	
  event.shapeless('4x philipsruins:sculk_bone_meal', [
	'minecraft:sculk_vein', 
	'minecraft:bone_meal',
	'minecraft:bone_meal',
	'minecraft:bone_meal',
	'minecraft:bone_meal'
   ]);

  event.shapeless('9x philipsruins:sculk_bone_meal', 'philipsruins:sculk_bone_block');
	
  event.shapeless('philipsruins:sculk_bone', ['philipsruins:sculk_bone_meal','philipsruins:sculk_bone_meal','philipsruins:sculk_bone_meal']);


  event.shapeless('4x philipsruins:bone_chunk_block', ['philipsruins:broken_bone','philipsruins:broken_bone','philipsruins:broken_bone', 'philipsruins:broken_bone']);

    event.shapeless('4x philipsruins:frozen_prismarine_shard', [
	'minecraft:ice', 
	'minecraft:prismarine_shard',
	'minecraft:prismarine_shard',
	'minecraft:prismarine_shard',
	'minecraft:prismarine_shard'
   ]);
   
  event.shapeless('4x philipsruins:frozen_prismarine_crystals', [
	'minecraft:ice', 
	'minecraft:prismarine_crystals',
	'minecraft:prismarine_crystals',
	'minecraft:prismarine_crystals',
	'minecraft:prismarine_crystals'
   ]);
   
  event.shapeless('4x philipsruins:frozen_prismarine_crystals', [
	'minecraft:ice', 
	'minecraft:prismarine_crystals',
	'minecraft:prismarine_crystals',
	'minecraft:prismarine_crystals',
	'minecraft:prismarine_crystals'
   ]);
   
    event.shapeless('4x philipsruins:dark_brick', [
	'supplementaries:ash', 
	'minecraft:deepslate_bricks',
	'minecraft:deepslate_bricks',
	'minecraft:deepslate_bricks',
	'minecraft:deepslate_bricks'
   ]);   

    event.shapeless('4x philipsruins:dark_brick', [
	'supplementaries:ash', 
	'minecraft:deepslate_bricks',
	'minecraft:deepslate_bricks',
	'minecraft:deepslate_bricks',
	'minecraft:deepslate_bricks'
   ]);      
   
    event.shapeless('philipsruins:mossy_dark_brick', [
	'philipsruins:dark_brick', 
	'minecraft:vine',
   ]);      
   
    event.shapeless('philipsruins:mossy_dark_brick', [
	'philipsruins:dark_brick',
	'minecraft:moss_block',
   ]);     
   
    event.shapeless('philipsruins:mossy_dark_brick', [
	'philipsruins:dark_brick', 
	'biomesoplenty:willow_vine',
   ]);     

  // Regions Unexplored
    event.shapeless('7x regions_unexplored:prismaglass', [
   'quark:red_corundum_cluster',
   'quark:orange_corundum_cluster',
   'quark:yellow_corundum_cluster',
   'quark:green_corundum_cluster',
   'quark:blue_corundum_cluster',
   'quark:indigo_corundum_cluster',
   'quark:violet_corundum_cluster',
   'minecraft:glass'
   ]);

   event.shapeless('7x regions_unexplored:prismarite_cluster', [
      'quark:red_corundum_cluster',
      'quark:orange_corundum_cluster',
      'quark:yellow_corundum_cluster',
      'quark:green_corundum_cluster',
      'quark:blue_corundum_cluster',
      'quark:indigo_corundum_cluster',
      'quark:violet_corundum_cluster'
   ]);

   event.shapeless('1x regions_unexplored:large_prismarite_cluster', [
      'regions_unexplored:prismarite_cluster',
      'regions_unexplored:prismarite_cluster'
   ]);

   event.shapeless('1x regions_unexplored:hanging_prismarite', [
      'regions_unexplored:large_prismarite_cluster',
      'regions_unexplored:large_prismarite_cluster'
   ]);

   });