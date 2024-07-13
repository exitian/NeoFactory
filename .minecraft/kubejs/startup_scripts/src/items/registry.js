ItemEvents.toolTierRegistry((event) => {
	event.add("flint", (tier) => {
		tier.speed = 0.5;
		tier.enchantmentValue = 0;
		tier.uses = 32;
	});
});

StartupEvents.registry("item", (event) => {
	event
		.create("mortar_paste")
		.maxStackSize(1)
		.maxDamage(6)
		.displayName({ translate: "kubejs.item.generic.mortar_paste" });

	event
		.create("sharpened_flint")
		.maxStackSize(1)
		.maxDamage(9)
		.displayName({ translate: "kubejs.item.generic.sharpened_flint" });

	event
		.create("cut_grass")
		.maxStackSize(16)
		.displayName({ translate: "kubejs.item.generic.cut_grass" });

	event
		.create("grass_rope")
		.maxStackSize(16)
		.displayName({ translate: "kubejs.item.generic.grass_rope" });

	event
		.create("flint_hatchet", "axe")
		.tier("flint")
		.tag("minecraft:axes")
		.displayName({ translate: "kubejs.item.tool.flint_hatchet" });

	/* 	BASIC_ITEMS.forEach((element) => {
		event
			.create(element)
			.maxStackSize(16)
			.displayName({ translate: `kubejs.item.${element}` });
	}); */
});
