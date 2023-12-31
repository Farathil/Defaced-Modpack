// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _       ____ 
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\     | ___|
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    |___ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   |____/
//

/**
 * @file Recipe additions for Botania's recipe types.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Botania Recipe Event Handler
 */
ServerEvents.recipes(event => {

  // Mana Infusion
  //event.recipes.botania.mana_infusion('output_here', 'input_here', 200);

  // Mana Infusion - Alchemy
  event.recipes.botania.mana_infusion('minecraft:kelp', 'minecraft:seagrass', 200, 'botania:alchemy_catalyst');
  event.recipes.botania.mana_infusion('minecraft:seagrass', 'minecraft:kelp', 200, 'botania:alchemy_catalyst');

  // Mana Infusion - Conjuration
  event.recipes.botania.mana_infusion('2x minecraft:crimson_roots', 'minecraft:crimson_roots', 800, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x minecraft:hanging_roots', 'minecraft:hanging_roots', 800, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x minecraft:nether_sprouts', 'minecraft:nether_sprouts', 800, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x minecraft:warped_roots', 'minecraft:warped_roots', 800, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x minecraft:small_dripleaf', 'minecraft:small_dripleaf', 1000, 'botania:conjuration_catalyst');

  event.recipes.botania.mana_infusion('2x biomesoplenty:barley', 'biomesoplenty:barley', 800, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x biomesoplenty:bush', 'biomesoplenty:bush', 800, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x biomesoplenty:cattail', 'biomesoplenty:cattail', 800, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x biomesoplenty:clover', 'biomesoplenty:clover', 800, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x biomesoplenty:dead_grass', 'biomesoplenty:dead_grass', 800, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x biomesoplenty:desert_grass', 'biomesoplenty:desert_grass', 800, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x biomesoplenty:dune_grass', 'biomesoplenty:dune_grass', 800, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x biomesoplenty:huge_clover_petal', 'biomesoplenty:huge_clover_petal', 1000, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x biomesoplenty:reed', 'biomesoplenty:reed', 800, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x biomesoplenty:sea_oats', 'biomesoplenty:sea_oats', 800, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x biomesoplenty:sprout', 'biomesoplenty:sprout', 800, 'botania:conjuration_catalyst');
  event.recipes.botania.mana_infusion('2x biomesoplenty:watergrass', 'biomesoplenty:watergrass', 800, 'botania:conjuration_catalyst');

  // Elven Trade
  // event.recipes.botania.elven_trade(['output_here'], 'input_here');

  // Brewing (Note: Needs a corresponding entry in a startup script too!)
  // event.recipes.botania.brew('kubejs:torrent', ['input_here']);

  // Petal Apothecary
  // event.recipes.botania.petal_apothecary('output_here', ['input_here']);

  // Runic Altar
  // event.recipes.botania.runic_altar('output_here', ['input_1', 'input_2'], 5000);

  // Terrestrial Agglomoration Plate
  // event.recipes.botania.terra_plate('output_here', ['input_1', 'input_2'], 5000000);

  // Orechid - Stone
  event.recipes.botania.orechid('create:zinc_ore', 'minecraft:stone', 7000);
  event.recipes.botania.orechid('immersiveengineering:ore_aluminum', 'minecraft:stone', 4000);
  event.recipes.botania.orechid('immersiveengineering:ore_nickel', 'minecraft:stone', 1500);
  event.recipes.botania.orechid('immersiveengineering:ore_silver', 'minecraft:stone', 3000);
  event.recipes.botania.orechid('mekanism:fluorite_ore', 'minecraft:stone', 5000);
  event.recipes.botania.orechid('mekanism:lead_ore', 'minecraft:stone', 2000);
  event.recipes.botania.orechid('mekanism:osmium_ore', 'minecraft:stone', 18000);
  event.recipes.botania.orechid('mekanism:tin_ore', 'minecraft:stone', 4000);
  event.recipes.botania.orechid('mekanism:uranium_ore', 'minecraft:stone', 1500);
  event.recipes.botania.orechid('sullysmod:jade_ore', 'minecraft:stone', 1000);

  // Orechid - Deepslate
  event.recipes.botania.orechid('create:deepslate_zinc_ore', 'minecraft:deepslate', 150);
  event.recipes.botania.orechid('immersiveengineering:deepslate_ore_aluminum', 'minecraft:deepslate', 75);
  event.recipes.botania.orechid('immersiveengineering:deepslate_ore_nickel', 'minecraft:deepslate', 100);
  event.recipes.botania.orechid('immersiveengineering:deepslate_ore_silver', 'minecraft:deepslate', 125);
  event.recipes.botania.orechid('mekanism:deepslate_fluorite_ore', 'minecraft:deepslate', 100);
  event.recipes.botania.orechid('mekanism:deepslate_lead_ore', 'minecraft:deepslate', 100);
  event.recipes.botania.orechid('mekanism:deepslate_osmium_ore', 'minecraft:deepslate', 180);
  event.recipes.botania.orechid('mekanism:deepslate_tin_ore', 'minecraft:deepslate', 150);
  event.recipes.botania.orechid('mekanism:deepslate_uranium_ore', 'minecraft:deepslate', 150);
  event.recipes.botania.orechid('sullysmod:deepslate_jade_ore', 'minecraft:deepslate', 50);
  

  // Orechid - Netherrack
  // event.recipes.botania.orechid_ignem('output_here', 'minecraft:netherrack', 1);

  // Orechid - Modded Stone

  // Marimorphosis
  // event.recipes.botania.marimorphosis('output_here', 'input_here', 1, ['plains'], 10);
});
