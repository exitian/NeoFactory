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

BlockEvents.placed("kubejs:clay_brick", (event) => {
	if (!event.block.down.blockState.solid) {
		event.block.popItem("kubejs:clay_brick");
		event.block.set("air");
	}
});

BlockEvents.blockEntityTick("kubejs:clay_brick", (event) => {
	let { block } = event;

	if (block.getCanSeeSky() && block.down.blockState.solid && event.cycle > 90) {
		block.getPlayersInRadius(8).forEach((player) => {
			player.runCommandSilent(`playsound minecraft:block.lava.pop ambient @p[distance=0..4] ${block.pos.x} ${block.pos.y} ${block.pos.z} 1 2`);
		});
		block.popItem("kubejs:dried_clay_brick");
		block.set("air");
	}
});
