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
