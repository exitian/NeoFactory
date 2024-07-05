ServerEvents.recipes((event) => {
	event
		.shapeless("cookingforblockheads:cutting_board", [
			"foodtxf:cutting_board",
			"gtceu:stainless_steel_butchery_knife",
		])
		.id("cookingforblockheads:cutting_board");

	event
		.shaped("cookingforblockheads:black_oven", ["aaa", "aba", "aaa"], {
			a: "gtceu:stainless_steel_plate",
			b: "gtceu:mv_electric_furnace",
		})
		.id("cookingforblockheads:black_oven");

	event
		.shaped("cookingforblockheads:black_sink", ["   ", "aba", "cdc"], {
			a: "bucket",
			b: "ae2:sky_stone_tank",
			c: "terracotta",
			d: "gtceu:steel_normal_fluid_pipe",
		})
		.id("cookingforblockheads:black_sink");

	event
		.shaped("cookingforblockheads:toaster", ["aba", "cdc", "efe"], {
			a: "cookingforblockheads:heating_unit",
			b: "gtceu:stainless_steel_screw",
			c: "gtceu:stainless_steel_rod",
			d: SCRD,
			e: "gtceu:stainless_steel_plate",
			f: "gtceu:steel_spring",
		})
		.damageIngredient(SCRD, 2)
		.id("cookingforblockheads:toaster");

	event
		.shaped("cookingforblockheads:heating_unit", [" a ", "cbd", " a "], {
			a: "gtceu:stainless_steel_rod",
			b: "#gtceu:inductors",
			c: SCRD,
			d: WRNC,
		})
		.damageIngredient(SCRD, 2)
		.damageIngredient(WRNC, 2);
});
