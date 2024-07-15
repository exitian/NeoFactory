// Updated assembler
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

// Crafting table
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

ServerEvents.recipes((event) => {
	let air_scrubber = event.recipes.gtceu.air_scrubber;
	let alloy_blast_smelter = event.recipes.gtceu.alloy_blast_smelter;
	let alloy_smelter = event.recipes.gtceu.alloy_smelter;
	let arc_furnace = event.recipes.gtceu.arc_furnace;
	let assembler = event.recipes.gtceu.assembler;
	let assembly_line = event.recipes.gtceu.assembly_line;
	let autoclave = event.recipes.gtceu.autoclave;
	let bender = event.recipes.gtceu.bender;
	let brewery = event.recipes.gtceu.brewery;
	let canner = event.recipes.gtceu.canner;
	let centrifuge = event.recipes.gtceu.centrifuge;
	let chemical_bath = event.recipes.gtceu.chemical_bath;
	let chemical_reactor = event.recipes.gtceu.chemical_reactor;
	let circuit_assembler = event.recipes.gtceu.circuit_assembler;
	let coke_oven = event.recipes.gtceu.coke_oven;
	let combustion_generator = event.recipes.gtceu.combustion_generator;
	let compressor = event.recipes.gtceu.compressor;
	let cracker = event.recipes.gtceu.cracker;
	let cutter = event.recipes.gtceu.cutter;
	let distillation_tower = event.recipes.gtceu.distillation_tower;
	let distillery = event.recipes.gtceu.distillery;
	let electric_blast_furnace = event.recipes.gtceu.electric_blast_furnace;
	let electric_furnace = event.recipes.gtceu.electric_furnace;
	let electrolyzer = event.recipes.gtceu.electrolyzer;
	let electromagnetic_separator =
		event.recipes.gtceu.electromagnetic_separator;
	let evaporation = event.recipes.gtceu.evaporation;
	let extractor = event.recipes.gtceu.extractor;
	let extruder = event.recipes.gtceu.extruder;
	let fermenter = event.recipes.gtceu.fermenter;
	let fluid_heater = event.recipes.gtceu.fluid_heater;
	let fluid_solidifier = event.recipes.gtceu.fluid_solidifier;
	let forge_hammer = event.recipes.gtceu.forge_hammer;
	let forming_press = event.recipes.gtceu.forming_press;
	let fusion_reactor = event.recipes.gtceu.fusion_reactor;
	let gas_collector = event.recipes.gtceu.gas_collector;
	let gas_turbine = event.recipes.gtceu.gas_turbine;
	let implosion_compressor = event.recipes.gtceu.implosion_compressor;
	let large_boiler = event.recipes.gtceu.large_boiler;
	let large_chemical_reactor = event.recipes.gtceu.large_chemical_reactor;
	let laser_engraver = event.recipes.gtceu.laser_engraver;
	let lathe = event.recipes.gtceu.lathe;
	let macerator = event.recipes.gtceu.macerator;
	let mixer = event.recipes.gtceu.mixer;
	let ore_washer = event.recipes.gtceu.ore_washer;
	let packer = event.recipes.gtceu.packer;
	let plasma_generator = event.recipes.gtceu.plasma_generator;
	let polarizer = event.recipes.gtceu.polarizer;
	let primitive_blast_furnace = event.recipes.gtceu.primitive_blast_furnace;
	let pyrolyse_oven = event.recipes.gtceu.pyrolyse_oven;
	let research_station = event.recipes.gtceu.research_station;
	let rock_breaker = event.recipes.gtceu.rock_breaker;
	let scanner = event.recipes.gtceu.scanner;
	let sifter = event.recipes.gtceu.sifter;
	let steam_boiler = event.recipes.gtceu.steam_boiler;
	let steam_turbine = event.recipes.gtceu.steam_turbine;
	let thermal_centrifuge = event.recipes.gtceu.thermal_centrifuge;
	let vacuum_freezer = event.recipes.gtceu.vacuum_freezer;
	let wiremill = event.recipes.gtceu.wiremill;

	assembler(`${GT}:assembler/crafting_table_single`)
		.inputItems("8x oak_planks")
		.outputItems("crafting_table")
		.EUt(16)
		.duration(2 * TICK)
		.durationIsTotalCWU(true);

	assembler(`${GT}:assembler/crafting_table_octo`)
		.inputItems([
			"64x oak_planks",
			"64x oak_planks",
			"64x oak_planks",
			"64x oak_planks",
		])
		.outputItems("64x crafting_table")
		.EUt(8192)
		.duration(2 * TICK)
		.durationIsTotalCWU(true);
});
const SIMPLE_ASS_REC = {
	recipe: { id: "test", eut: 32, input: ["oak_planks"], durationS: 2 },
};
