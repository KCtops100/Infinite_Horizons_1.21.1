LootJS.modifiers(event => {
    // cobblestone drops gravel when broken by a hammer.
    event.addBlockModifier("minecraft:blocks/cobblestone")  // when breaking cobblestone...
        .matchTool('kubejs:stone_hammer')   // ...and when the player is using the stone hammer...
        .removeLoot("minecraft:cobblestone")    // ...remove the cobblestone drop...
        .addLoot(LootEntry.of("minecraft:gravel"))  // ...and replace it with gravel.
    // gravel drops sand when broken by a hammer.
    event.addBlockModifier("minecraft:blocks/gravel")   // when breaking gravel...
        .matchTool('kubejs:stone_hammer')   // ...and when the player is using the stone hammer...
        .removeLoot("minecraft:gravel") // ...remove the gravel drop...
        .addLoot(LootEntry.of("minecraft:sand"))    // ...and replace it with sand.
    // tuff drops tuff gravel when broken by a hammer.
    event.addBlockModifier("minecraft:blocks/tuff") // when breaking tuff...
        .matchTool('kubejs:stone_hammer')   // ...and when the player is using the stone hammer...
        .removeLoot("minecraft:tuff")   // ...remove the tuff drop...
        .addLoot(LootEntry.of("kubejs:tuff_gravel"))    // ...and replace it with tuff gravel.
    // cobbled deepslate drops deepslate gravel when broken by a hammer.
    event.addBlockModifier("minecraft:blocks/cobbled_deepslate")    // when breaking cobbled deepslate...
        .matchTool('kubejs:stone_hammer')   // ...and when the player is using the stone hammer...
        .removeLoot("minecraft:cobbled_deepslate")  // ...remove the cobbled deepslate drop...
        .addLoot(LootEntry.of("kubejs:deepslate_gravel"))   // ...and replace it with deepslate gravel.
})