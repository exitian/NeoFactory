/* function wireMi(event, input, output, minVlt) {} */

/* ServerEvents.recipes((event) => {
	event.recipes.gtceu
		.assembler("test")
		.itemInputs("64x minecraft:dirt", "32x minecraft:diamond")
		.inputFluids(Fluid.of("minecraft:lava", 1500))
		.itemOutputs("minecraft:stick")
		.duration(100)
		.EUt(30);
}); */

/* function resetItem(event, input, output) {
	event.shapeless(input, [output]);
}
 */

/* BlockEvents.rightClicked("oak_planks", (event) => {
	const { block, server } = event;

	server.players.forEach((player) => {
		let pPos = player.position();
		let bPos = block.getPos();

		let distance = distanceV3(
			pPos.x,
			pPos.y,
			pPos.z,
			bPos.x,
			bPos.y,
			bPos.z
		);

		if (distance < 3) {
			player.runCommandSilent(
				`effect give @p[distance=0..${3}] minecraft:haste 20 2 false`
			);
		}
	});
	block.level.runCommandSilent(
		`playsound minecraft:block.brewing_stand.brew block @p[distance=0..${3}] ${
			block.pos.x
		} ${block.pos.y} ${block.pos.z} 0.5 1.5`
	);

	block.set("air");
}); */
BlockEvents.randomTick("kubejs:clay_brick", (event) => {
	let { block } = event;
	if (Math.random() > 0 && block.canSeeSky() && block.down.blockState.solid) {
		block.popItem("minecraft:brick");
		block.set("air");
	}
});
