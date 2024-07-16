ItemEvents.toolTierRegistry((event) => {
	event.add("flint", (tier) => {
		tier.speed = 0.5;
		tier.enchantmentValue = 0;
		tier.uses = 32;
	});
});

// normal items
StartupEvents.registry("item", (event) => {
	event.create("mortar_paste").maxStackSize(1).maxDamage(6).displayName({ translate: "kubejs.item.generic.mortar_paste" });

	event.create("sharpened_flint").maxStackSize(1).maxDamage(9).displayName({ translate: "kubejs.item.generic.sharpened_flint" });

	event.create("cut_grass").maxStackSize(16).displayName({ translate: "kubejs.item.generic.cut_grass" });

	event.create("grass_rope").maxStackSize(16).displayName({ translate: "kubejs.item.generic.grass_rope" });

	event.create("flint_hatchet", "axe").tier("flint").tag("minecraft:axes").displayName({ translate: "kubejs.item.tool.flint_hatchet" });

	/* 	BASIC_ITEMS.forEach((element) => {
		event
			.create(element)
			.maxStackSize(16)
			.displayName({ translate: `kubejs.item.${element}` });
	}); */
});

/* StartupEvents.registry("item", (event) => {
	event.create("token_micro_universe").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });

	//further intermediary
	event.create("token_galaxy").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_nebula").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });

	// what is available in a galaxy
	event.create("token_galaxy_center").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_solar_system").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_main_sequence_star").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_neutron_star").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_terrestrial_planet").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_gas_planet").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_ores").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_stone").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_fluids").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_planet_core").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
	event.create("token_").maxStackSize(64).displayName({ translate: "kubejs.item.tokens." });
});
 */
