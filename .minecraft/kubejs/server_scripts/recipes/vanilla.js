// Bulk add wood recipes
ServerEvents.recipes((event) => {
	let modid;
	let outputid;
	WOODTYPES.forEach((element) => {
		if (element == "rubber") {
			modid = "gtceu";
		} else {
			modid = VANILLA_ID;
		}
		outputid = `3x ${modid}:${element}_fence`;
		event
			.shaped(outputid, ["ada", "cbc", "aba"], {
				a: "gtceu:long_wood_rod",
				b: `minecraft:${element}_planks`,
				c: "gtceu:wood_bolt",
				d: MLLT,
			})
			.damageIngredient(MLLT, 2)
			.id(`neofactory:${element}_fence`);
	});

	WOODTYPES.forEach((element) => {
		if (element == "rubber") {
			modid = "gtceu";
		} else {
			modid = VANILLA_ID;
		}
		outputid = `2x ${modid}:${element}_trapdoor`;
		event
			.shaped(outputid, [" ab", "cdc", "  b"], {
				a: "gtceu:long_wood_rod",
				b: `minecraft:${element}_planks`,
				c: "gtceu:wood_bolt",
				d: SAWS,
			})
			.damageIngredient(SAWS, 2)
			.id(`neofactory:${element}_trapdoor_gregified`);
	});
});

// Single recipes
ServerEvents.recipes((event) => {
	event.shaped("crafter", ["aba", "bcd", "efe"], {
		a: "crafting_table",
		b: "gtceu:red_alloy_plate",
		c: "#gtceu:circuits/lv",
		d: "dropper",
		e: "gtceu:iron_screw",
		f: "gtceu:cupronickel_spring",
	});
	event.shaped("crafting_table", ["ab", "cc"], {
		a: "flint",
		b: KNVE,
		c: "#minecraft:logs",
	});
});

ServerEvents.tags("biome", (event) => {
	event.removeAll("ae2:has_meteorites");
});
