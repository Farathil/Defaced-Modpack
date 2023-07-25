// priority: 5
//   ______      __                   _ 
//   |  _  \    / _|                 | |
//   | | | |___| |_ __ _  ___ ___  __| |
//   | | | / _ \  _/ _` |/ __/ _ \/ _` |
//   | |/ /  __/ || (_| | (_|  __/ (_| |
//   |___/ \___|_| \__,_|\___\___|\__,_|                     

/**
 * @file First Start Script - Handles the first time a player joins a world (whether single- or multiplayer).
 * 
 * This includes things like introductory chat messages + links, starting items, and anything else that needs 
 * to be set just once the first time a player connects.
 * 
 * @copyright Valhelsia Inc 2022
 */

/**
 * Player Login Event Handler
 */
PlayerEvents.loggedIn(event => {
  if (!event.player.stages.has('first_start')) {
    event.player.stages.add('first_start');

    event.player.tell(Text.translate('Welcome to Defaced Modpack'));
    event.player.tell(Text.translate('valhelsia.chat.discord_link').blue().underlined().click('https://discord.com/invite/rdfQuaM'));
    event.player.give(Item.of('eccentrictome:tome', ECCENTRIC_TOME_NBT));
  }

  // Note: If added to in the future, creating multiple stages would allow players updating the pack to receive any new
  // "first start" items / settings / whatever.
  // eg. instead of 'first_start', use 'first_start_v2', 'first_start_v3' to allow versioning the first start script.
});