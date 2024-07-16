/*

Multiblock Helper 1.0!

Oneth: You can change "DEV_PLAYER" to your username or delete it. I'm sure you're smart.

Second: This is for GTCEu multiblocks. It's a helper not an entire maker.

Third: The output *will* contain escape characters.
I except you know how to do multicorsor or find-and-replace.

Fourth: It writes a file at your localtime. This is so you don't overwrite them.
It's not perfect. But it'll do.

Fifth: You can change the mainhand item if you want. I choose a stone axe.
Since I have worldedit installed.

How to use it:
Your BACK, BOTTOM, LEFT is at x: 0, y: 0, z: 0
You then go POSITIVE y for upwards. (height)
You go POSITIVE z for forwards (depth)
You go POSITIVE x for to the right (width)

DO NOT GO NEGATIVE. I couldn't be bothered.
Have fun!

Made by: 3x1t_5tyl3 aka. Andromeda
Stay cute. <3

*/

function sendMsg(event, data) {
	event.player.sendSystemMessage(data);
}

BlockEvents.broken((event) => {
	if (event.player.mainHandItem.id === "minecraft:stone_axe") {
		pos2 = { x: event.block.x, y: event.block.y, z: event.block.z };

		event.player.sendSystemMessage(
			Component.literal("Corner: ").append(
				Component.red(`x: ${pos2.x}, `).append(Component.green(`y: ${pos2.y}, `).append(Component.blue(`z: ${pos2.z}`)))
			)
		);
		event.cancel(true);
	}
});

var pos2;

ServerEvents.basicCommand("getBlocks", (event) => {
	if (event.player.isCreative() && event.player.username === DEV_PLAYER) {
		let blockid;
		let blockArray = [];
		let legend = {};
		let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#"; // Array of symbols

		// Index for accessing symbols array
		let symbolIndex = 0;

		// this errors. I don't care. It works.
		var depth = pos2.z + 1;
		var height = pos2.y + 1;
		var width = pos2.x + 1;

		for (let z = 0; z < depth; z++) {
			for (let y = 0; y < height; y++) {
				for (let x = 0; x < width; x++) {
					blockid = event.level.getBlock(x, y, z).id;

					if (!(blockid in legend)) {
						if (blockid === "minecraft:air") {
							legend[blockid] = symbols[26];
						} else {
							legend[blockid] = symbols[symbolIndex];
							symbolIndex = (symbolIndex + 1) % symbols.length;
						}
					}

					blockArray.push({ x: x, y: y, z: z, symbol: legend[blockid] });
				}
			}
		}

		// Create slices
		let slices = [];
		for (let z = 0; z < depth; z++) {
			let slice = [];
			for (let y = 0; y < height; y++) {
				let row = "";
				for (let x = 0; x < width; x++) {
					let block = blockArray.find((b) => b.x === x && b.y === y && b.z === z);
					row += block ? block.symbol : "?";
				}
				slice.push(row);
			}
			slices.push(slice);
		}

		let jsonContent = {};
		for (let z = 0; z < slices.length; z++) {
			let slice = slices[z];
			jsonContent[`${z}aisle:`] = `(${slice.map((row) => `"${row}"`).join(", ")})`;
		}
		for (let key in legend) {
			jsonContent[legend[key]] = key;
		}
		let filename = `kubejs/multiblockhelper-output-${Utils.getSystemTime()}.json`;
		JsonIO.write(filename, jsonContent);
		sendMsg(event, `Successfully written file: ${filename}`);
	}
});
