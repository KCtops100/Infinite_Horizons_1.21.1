StartupEvents.registry("block", (event) => {
    event.create("tuff_gravel")
    .displayName("Tuff Gravel")
    .hardness(0.6)
    .resistance(0.6)
    .gravelSoundType()
    .requiresTool(false)
    .tagBlock("mineable/shovel")
    event.create("deepslate_gravel")
    .displayName("Deepslate Gravel")
    .hardness(0.6)
    .resistance(0.6)
    .gravelSoundType()
    .requiresTool(false)
    .tagBlock("mineable/shovel")
})