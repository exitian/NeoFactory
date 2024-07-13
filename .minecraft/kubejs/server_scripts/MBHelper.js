/* var pos2 = { x: 4, y: 3, z: 4 };

var depth = pos2.z;
var height = pos2.y;
var width = pos2.x;

function sendMsg(event, data) {
	event.player.sendSystemMessage(data);
}

BlockEvents.broken((event) => {
	if (event.player.mainHandItem.id === "minecraft:stone_axe") {
		pos2.x = event.block.x;
		pos2.y = event.block.y;
		pos2.z = event.block.z;

		event.player.sendSystemMessage(
			Component.literal("Corner: ").append(
				Component.red(`x: ${pos2.x}, `).append(
					Component.green(`y: ${pos2.y}, `).append(
						Component.blue(`z: ${pos2.z}`)
					)
				)
			)
		);
		event.cancel(true);
	}
});

ServerEvents.basicCommand("getBlocks", (event) => {
	if (event.player.isCreative() && event.player.username === DEV_PLAYER) {
		let blockid;
		let legend = {};
		let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Array of symbols

		// Index for accessing symbols array
		let symbolIndex = 0;

		for (let z = 0; z < depth; z++) {
			for (let y = 0; y < height; y++) {
				for (let x = 0; x < width; x++) {
					blockid = event.level.getBlock(x, y, z);

					// Check if blockid already exists in legend
					if (!(blockid in legend)) {
						// Assign the next available symbol and increment symbolIndex
						legend[blockid] = symbols[symbolIndex];
						symbolIndex = (symbolIndex + 1) % symbols.length; // Wrap around if symbols run out
					}
				}
			}
		}

		// Print legend
		sendMsg(event, legend);
		for (let key in legend) {
			sendMsg(event, `${legend[key]} = "${key}"`);
		}
	}
});
 */
