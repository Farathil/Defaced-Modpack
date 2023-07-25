// priority: 110
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//                       

/**
 * @file Item Tag Additions for Valhelsia 5.
 * 
 * These are mostly for recipe input unification, but sometimes have other uses.
 * 
 * @see item_tags_remove.js
 * @copyright Valhelsia Inc 2022-2023
 */

/**
 * Item Tag Event Handler
 */
ServerEvents.tags('item', event => {

  // ----- Ores -----
  //event.add('forge:ores', [

  //]);

  event.add('forge:ores/silver', [
    'thermal:silver_ore',
    'thermal:deepslate_silver_ore',
	'immersiveengineering:ore_silver',
	'immersiveengineering:deepslate_ore_silver',
	'galosphere:silver_ore',
	'galosphere:deepslate_silver_ore',
  ]);

  // ----- Ingots -----
  event.add('forge:ingots', [
    'moreminecarts:silica_steel',
  ]);

  event.add('forge:ingots/silica_steel', [
    'moreminecarts:silica_steel',
  ]);

  // ----- Storage Blocks -----
  event.add('forge:storage_blocks', [
    'moreminecarts:silica_steel_block',
  ]);

  event.add('forge:storage_blocks/silica_steel', [
    'moreminecarts:silica_steel_block',
  ]);

  // -----Dusts -----
  event.add('forge:dusts', [
    'botania:pixie_dust',
    'waystones:warp_dust',
  ]);

  event.add('forge:dusts/pixie', [
    'botania:pixie_dust',
  ]);

  event.add('forge:dusts/warp', [
    'waystones:warp_dust',
  ]);

  // -----Paper -----
  event.add('forge:paper', [
    'minecraft:paper','farmersdelight:canvas',
  ]);
   
/*   // -----Moss -----
  event.add('forge:moss/block', [
    'minecraft:vines', 'minecraft:moss_block', 'minecraft:willow_vine', 'biomesoplenty:spanish_moss', 'regions_unexplored:spanish_moss',
  ]);    
  
  event.add('forge:moss/item', [
    'ecologics:surface_moss','minecraft:moss_carpet', 'quark:moss_paste',
  ]);
  
  // -----Vines-----
  event.add('forge:vines/item', [
    'biomesoplenty:willow_vine', 'hexerei:willow_vines', 'minecraft:weeping_vines', 'minecraft:twisting_vines', 'atmospheric:passion_vine',
  ]); */
  

  // ----- Hides -----
  event.add('forge:hide/ravager', [
    'alexs_armoury:ravager_hide','quark:ravager_hide'
  ]);  

  // ----- Sandstone -----
  event.add('forge:sandstone/colorless', [
    'quark:sandstone_bricks',
  ]);

  event.add('forge:sandstone/red', [
    'quark:red_sandstone_bricks',
  ]);

  event.add('forge:sandstone/arid', [
    'atmospheric:arid_sandstone',
    'atmospheric:smooth_arid_sandstone',
    'atmospheric:cut_arid_sandstone',
    'atmospheric:chiseled_arid_sandstone',
    'atmospheric:arid_sandstone_bricks',
  ]);

  event.add('forge:sandstone/red_arid', [
    'atmospheric:red_arid_sandstone',
    'atmospheric:smooth_red_arid_sandstone',
    'atmospheric:cut_red_arid_sandstone',
    'atmospheric:chiseled_red_arid_sandstone',
    'atmospheric:red_arid_sandstone_bricks',
  ]);

  event.add('forge:sandstone/orange', [
    'biomesoplenty:orange_sandstone',
    'biomesoplenty:smooth_orange_sandstone',
    'biomesoplenty:cut_orange_sandstone',
    'biomesoplenty:chiseled_orange_sandstone',
  ]);

  event.add('forge:sandstone/white', [
    'biomesoplenty:white_sandstone',
    'biomesoplenty:smooth_white_sandstone',
    'biomesoplenty:cut_white_sandstone',
    'biomesoplenty:chiseled_white_sandstone',
  ]);

  event.add('forge:sandstone/black', [
    'biomesoplenty:black_sandstone',
    'biomesoplenty:smooth_black_sandstone',
    'biomesoplenty:cut_black_sandstone',
    'biomesoplenty:chiseled_black_sandstone',
  ]);

  event.add('forge:sandstone/soul', [
    'quark:soul_sandstone',
    'quark:soul_sandstone_bricks',
    'quark:smooth_soul_sandstone',
    'quark:cut_soul_sandstone',
    'quark:chiseled_soul_sandstone',
  ]);
  
});