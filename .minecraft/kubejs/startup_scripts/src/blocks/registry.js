StartupEvents.registry("block", (event) => {
	event
		.create("compressed_crafting_table")
		.mapColor("wood")
		.tagBlock("")
		.woodSoundType()
		.requiresTool(true)
		.displayName({ translate: "kubejs.block.generic.compressed_crafting_table" });
});

// TODO: implement server ticking on block to pop it off once it's dried.

StartupEvents.registry("block", (event) => {
	event
		.create("clay_brick")
		.blockEntity((blockEntity) => {
			blockEntity.serverTicking();
			blockEntity.tickFrequency(20);
		})
		.gravelSoundType()
		.renderType("cutout")
		.fullBlock(false)
		.box(5, 0, 1, 11, 2, 15)
		.hardness(0.2)
		.item((item) => {
			item.maxStackSize(64).displayName({ translate: "kubejs.item.generic.clay_brick" });
		})
		.displayName({ translate: "kubejs.item.generic.clay_brick" });
});
