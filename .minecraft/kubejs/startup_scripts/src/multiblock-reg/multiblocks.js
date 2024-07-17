/* GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
	event
		.create("test_recipe_type")
		.category("steam")
		.setMaxIOSize(1, 1, 1, 1)
		.setSlotOverlay(false, false, GuiTextures.PROGRESS_BAR_BOILER_FUEL)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.COOLING);
});
GTCEuStartupEvents.registry("gtceu:machine", (event) => {
	event
		.create("test_generator", "multiblock")
		.rotationState(RotationState.NON_Y_AXIS)
		.appearanceBlock(GTBlocks.BRONZE_HULL)
		.recipeTypes(["test_recipe_type"])
		.pattern((definition) =>
			FactoryBlockPattern.start()
				.aisle("#AAA#", "#BBB#", "#BBB#", "#B#B#", "#####")
				.aisle("CAAAA", "BDEDB", "BDEDB", "BDBDB", "#B#B#")
				.aisle("AAAAA", "FEAEB", "BEAEB", "#BBB#", "#####")
				.aisle("AAAAA", "BDEDB", "BDEDB", "BDBDB", "#B#B#")
				.aisle("#GAH#", "#BBB#", "#BBB#", "#B#B#", "#####")
				.where("#", Predicates.blocks(Predicates.any()))
				.where("A", Predicates.blocks(GTBlocks.FIREBOX_BRONZE))
				.where("B", Predicates.blocks(GTBlocks.BRONZE_HULL))
				.where("C", Predicates.blocks(Predicates.abilities(PartAbility.IMPORT_FLUIDS)))
				.where("D", Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE))
				.where("E", Predicates.blocks(GTBlocks.CASING_COKE_BRICKS))
				.where("F", Predicates.blocks(Predicates.controller(Predicates.blocks(definition.get()))))
				.where("G", Predicates.blocks(Predicates.abilities(PartAbility.STEAM)))
				.where("H", Predicates.blocks(Predicates.abilities(PartAbility.EXPORT_FLUIDS)))
				.build()
		)
		.workableCasingRenderer("block/casings/solid/machine_casing_bronze_plated_bricks", "block/multiblock/test_generator");
}); */
