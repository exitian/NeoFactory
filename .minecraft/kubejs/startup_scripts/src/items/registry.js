ItemEvents.toolTierRegistry((event) => {
	event.add("flint", (tier) => {
		tier.speed = 0.5;
		tier.enchantmentValue = 0;
		tier.uses = 32;
	});
});

const CIRCUITS_REGISTRY = [
	{ path: "uhv_t1_circuit", tag: "gtceu:circuits/uhv", stack: 64 },
	{ path: "uev_t1_circuit", tag: "gtceu:circuits/uev", stack: 64 },
	{ path: "uiv_t1_circuit", tag: "gtceu:circuits/uiv", stack: 64 },
	{ path: "uxv_t1_circuit", tag: "gtceu:circuits/uxv", stack: 64 },
	{ path: "opv_t1_circuit", tag: "gtceu:circuits/opv", stack: 64 },
	{ path: "max_t1_circuit", tag: "gtceu:circuits/max", stack: 64 },
];

const BASIC_ITEMS_REGISTRY = [
	//base items
	{ path: "cut_grass", stack: 16, dmg: 0 },
	{ path: "grass_rope", stack: 16, dmg: 0 },
	{ path: "dried_clay_brick", stack: 16, dmg: 0 },
	// tokens
	{ path: "token_micro_universe", stack: 64, dmg: 0 },
	{ path: "token_universe", stack: 64, dmg: 0 },
	{ path: "token_galaxy_cluster", stack: 64, dmg: 0 },
	{ path: "token_galaxy", stack: 64, dmg: 0 },
	{ path: "token_star_system", stack: 64, dmg: 0 },
	{ path: "token_star", stack: 64, dmg: 0 },
	{ path: "token_planet", stack: 64, dmg: 0 },
	{ path: "token_moon", stack: 64, dmg: 0 },
	{ path: "token_asteroid", stack: 64, dmg: 0 },
	{ path: "token_comet", stack: 64, dmg: 0 },
	{ path: "token_black_hole", stack: 64, dmg: 0 },
	{ path: "token_nebula", stack: 64, dmg: 0 },
	{ path: "token_galactic_cloud", stack: 64, dmg: 0 },
	{ path: "token_galactic_waste", stack: 64, dmg: 0 },
];

StartupEvents.registry("item", (event) => {
	CIRCUITS_REGISTRY.forEach((element) => {
		event
			.create(element.path)
			.maxStackSize(element.stack)
			.tag(element.tag)
			.displayName({ translate: "kubejs.item.generic." + element.path });
	});

	BASIC_ITEMS_REGISTRY.forEach((element) => {
		if (element.dmg === 0 || element.dmg === null) {
			event
				.create(element.path)
				.maxStackSize(element.stack)
				.displayName({ translate: "kubejs.item.generic." + element.path });
		} else {
			event
				.create(element.path)
				.maxStackSize(1)
				.maxDamage(element.dmg)
				.displayName({ translate: "kubejs.item.generic." + element.path });
		}
	});

	event.create("mortar_paste").maxStackSize(1).maxDamage(6).displayName({ translate: "kubejs.item.generic.mortar_paste" });
	event.create("sharpened_flint").maxStackSize(1).maxDamage(9).displayName({ translate: "kubejs.item.generic.sharpened_flint" });
	event.create("flint_hatchet", "axe").tier("flint").tag("minecraft:axes").displayName({ translate: "kubejs.item.generic.flint_hatchet" });
});

StartupEvents.registry("item", (event) => {});
