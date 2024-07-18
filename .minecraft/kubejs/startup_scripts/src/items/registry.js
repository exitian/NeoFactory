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
	event.create("flint_hatchet", "axe").tier("flint").tag("minecraft:axes").displayName({ translate: "kubejs.item.generic.flint_hatchet" });

	event.create("cut_grass").maxStackSize(16).displayName({ translate: "kubejs.item.generic.cut_grass" });
	event.create("grass_rope").maxStackSize(16).displayName({ translate: "kubejs.item.generic.grass_rope" });
});

StartupEvents.registry("item", (event) => {
	event.create("token_micro_universe").maxStackSize(64).displayName({ translate: "kubejs.item.tokens.micro_universe" });
	event.create("token_universe").maxStackSize(64).displayName({ translate: "kubejs.item.tokens.universe" });
	event.create("token_galaxy_cluster").maxStackSize(64).displayName({ translate: "kubejs.item.tokens.galaxy_cluster" });
	event.create("token_galaxy").maxStackSize(64).displayName({ translate: "kubejs.item.tokens.galaxy" });
	event.create("token_star_system").maxStackSize(64).displayName({ translate: "kubejs.item.tokens.star_system" });
	event.create("token_star").maxStackSize(64).displayName({ translate: "kubejs.item.tokens.star" });
	event.create("token_planet").maxStackSize(64).displayName({ translate: "kubejs.item.tokens.planet" });
	event.create("token_moon").maxStackSize(64).displayName({ translate: "kubejs.item.tokens.moon" });
	event.create("token_asteroid").maxStackSize(64).displayName({ translate: "kubejs.item.tokens.asteroid" });
	event.create("token_comet").maxStackSize(64).displayName({ translate: "kubejs.item.tokens.comet" });
	event.create("token_black_hole").maxStackSize(64).displayName({ translate: "kubejs.item.tokens.black_hole" });
	event.create("token_nebula").maxStackSize(64).displayName({ translate: "kubejs.item.tokens.nebula" });
	event.create("token_galactic_cloud").maxStackSize(64).displayName({ translate: "kubejs.item.tokens.galactic_cloud" });
	event.create("token_galactic_waste").maxStackSize(64).displayName({ translate: "kubejs.item.tokens.galactic_waste" });
});
