StartupEvents.registry("block", (event) => {
    event.create("agronomancer_workbench")
    .displayName("Agronomancer's Workbench")
    .hardness(0.6)
    .resistance(0.6)
    .woodSoundType()
    .requiresTool(false)
    .tagBlock("mineable/pickaxe")
    .texture('up', 'kubejs:block/agronomancer_workbench_top')
    .texture('down', 'kubejs:block/agronomancer_workbench_bottom')
    .texture('north', 'kubejs:block/agronomancer_workbench_side')
    .texture('south', 'kubejs:block/agronomancer_workbench_side')
    .texture('east', 'kubejs:block/agronomancer_workbench_side')
    .texture('west', 'kubejs:block/agronomancer_workbench_side');
    event.create("apiarist_workbench")
    .displayName("Apiarist's Workbench")
    .hardness(0.6)
    .resistance(0.6)
    .woodSoundType()
    .requiresTool(false)
    .tagBlock("mineable/axe")
    .texture('up', 'kubejs:block/apiarist_workbench_top')
    .texture('down', 'kubejs:block/apiarist_workbench_bottom')
    .texture('north', 'kubejs:block/apiarist_workbench_side')
    .texture('south', 'kubejs:block/apiarist_workbench_side')
    .texture('east', 'kubejs:block/apiarist_workbench_side')
    .texture('west', 'kubejs:block/apiarist_workbench_side');
    
})