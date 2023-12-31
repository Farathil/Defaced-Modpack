// priority: 10
//   ______      __                   _ 
//   |  _  \    / _|                 | |
//   | | | |___| |_ __ _  ___ ___  __| |
//   | | | / _ \  _/ _` |/ __/ _ \/ _` |
//   | |/ /  __/ || (_| | (_|  __/ (_| |
//   |___/ \___|_| \__,_|\___\___|\__,_| 
/**
 * @file Entity loot table injection / replacement.
 * @copyright Valhelsia Inc 2022-2023
 */

/**
 * Entity Loot Table Event Handler
 */
ServerEvents.entityLootTables(event => {
  // Add a chance for some mobs to drop additonal loot, as a bonus incentive to farm them.

  // Wraith
  event.modifyEntity('quark:wraith', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('mekanism:ingot_lead');
      pool.killedByPlayer();
      pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
    });
  });

  // Stray
  event.modifyEntity('minecraft:stray', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('immersiveengineering:ingot_silver');
      pool.killedByPlayer();
      pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
    });
  });

  // Husk
  event.modifyEntity('minecraft:husk', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('mekanism:ingot_tin');
      pool.killedByPlayer();
      pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
    });
  });

  // Frostbitten
  event.modifyEntity('rottencreatures:frostbitten', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('create:zinc_ingot');
      pool.killedByPlayer();
      pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
    });
  });

  // Burned
  event.modifyEntity('rottencreatures:burned', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('immersiveengineering:ingot_nickel');
      pool.killedByPlayer();
      pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
    });
  });

});