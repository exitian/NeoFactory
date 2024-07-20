const { $RandomTickCallbackJS } = require("packages/dev/latvian/mods/kubejs/block/$RandomTickCallbackJS");

StartupEvents.registry("block", (event) => {
	event.create("compressed_crafting_table").displayName({ translate: "kubejs.block.generic.compressed_crafting_table" });
	event
		.create("clay_brick")
		.item((item) => {
			item.maxStackSize(64).displayName({ translate: "kubejs.item.generic.dried_clay_brick" });
		})
		.randomTick((tick) => {
			tick.block;
			tick.level;
			tick.server;
			tick.random;
		})
		.displayName("clay brick");
});
