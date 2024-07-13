ServerEvents.recipes((event) => {
	VOLTAGE_TIERS.forEach((vlt) => {
		event.remove({ id: `${GT}:shaped/${vlt}_assembler` });
		event
			.shaped(`${GT}:${vlt}_assembler`, ["aba", "cdc", "fef"], {
				a: `${GT}:${vlt}_robot_arm`,
				b: "crafter",
				c: `${GT}:${vlt}_conveyor_module`,
				d: `${GT}:${vlt}_machine_hull`,
				e: `${GT}:${CABLE_TIERS[vlt]}_single_cable`,
				f: `#${GT}:circuits/${vlt}`,
			})
			.id(`${GT}:shaped/${vlt}_assembler`);
	});
});

ServerEvents.recipes((event) => {
	event
		.shapeless("kubejs:mortar_paste", [
			"2x #c:dusts/gypsum",
			"#c:dusts/calcite",
			"gtceu:stone_dust",
			"water_bucket",
		])
		//.replaceIngredient("#c:buckets/water", "bucket")
		.id(`${NF}:shaped/mortar_paste`);
	event
		.shaped("2x bricks", ["aba", "bcb", "aba"], {
			a: "brick",
			b: "kubejs:mortar_paste",
			c: MLLT,
		})
		.damageIngredient("kubejs:mortar_paste", 1)
		.id(`${NF}:shaped/bricks_with_mortar_paste`);
});
