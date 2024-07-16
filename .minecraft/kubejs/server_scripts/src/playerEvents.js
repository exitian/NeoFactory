PlayerEvents.tick((event) => {
	if (event.server.getLevel("overworld").getTime() % 60 == 0) {
		//removes xp if somehow gotten
		if (event.player.totalExperience > 0) {
			event.player.setXp(0);
		}

		//removes enchanted items
		event.player.inventory.items.forEach((item) => {
			if (item.enchanted || item.id == "minecraft:enchanted_book") {
				item.count--;
				event.player.runCommandSilent('title @p actionbar "Enchantments are not allowed!"');
			}
		});

		//gives climate clemency
		let armorslots = ["feet", "chest", "head", "legs"];
		let boolSet = [];

		armorslots.forEach((element) => {
			boolSet.push(event.player.getItemBySlot(element).hasTag("gtceu:ppe_armor"));
		});

		if (boolSet[0] && boolSet[1] && boolSet[2] && boolSet[3]) {
			event.player.runCommandSilent("effect give @p toughasnails:climate_clemency 7 1 false");
		}
	}
});

PlayerEvents.loggedIn((event) => {
	if (event.player.stages.has("gamerules")) {
		return;
	} else {
		event.player.stages.add("gamerules");
		GAMERULES.forEach((gamerule) => {
			event.server.runCommandSilent(`gamerule ${gamerule}`);
			console.log(gamerule);
		});
	}
});

ItemEvents.rightClicked("wooden_axe", (event) => {
	event.player.runCommandSilent("fill ~8 ~8 ~8 ~-8 ~-8 ~-8 air replace #minecraft:base_stone_overworld");
	event.player.runCommandSilent("fill ~8 ~8 ~8 ~-8 ~-8 ~-8 air replace lava");
	event.player.runCommandSilent("fill ~8 ~8 ~8 ~-8 ~-8 ~-8 air replace water");
	event.player.runCommandSilent("fill ~8 ~8 ~8 ~-8 ~-8 ~-8 air replace #minecraft:overworld_carver_replaceables");
	event.player.runCommandSilent("fill ~8 ~8 ~8 ~-8 ~-8 ~-8 air replace #minecraft:sculk_replaceable");
	event.player.sendSystemMessage("Clearing nearby!");
});

let rTick = 0;
BlockEvents.rightClicked((event) => {
	const { player, block } = event;
	let plank;
	if (player.mainHandItem.hasTag("minecraft:axes") && player.mainHandItem != null && rTick === 0) {
		let path = block.item.idLocation.path;

		switch (path) {
			case "stripped_rubber_log":
				plank = "rubber_planks";
				break;
			case "stripped_acacia_log":
				plank = "acacia_planks";
				break;
			case "stripped_birch_log":
				plank = "birch_planks";
				break;
			case "stripped_cherry_log":
				plank = "cherry_planks";
				break;
			case "stripped_dark_oak_log":
				plank = "dark_oak_planks";
				break;
			case "stripped_jungle_log":
				plank = "jungle_planks";
				break;
			case "stripped_mangrove_log":
				plank = "mangrove_planks";
				break;
			case "stripped_oak_log":
				plank = "oak_planks";
				break;
			case "stripped_spruce_log":
				plank = "spruce_planks";
				break;
			case "stripped_crimson_stem":
				plank = "crimson_planks";
				break;
			case "stripped_warped_stem":
				plank = "warped_planks";
				break;
			default:
				return;
		}
		block.popItem(plank);
		block.popItem(plank);
		damageToolInHand("main_hand", player.mainHandItem, true, player, 1);
		event.player.addExhaustion(1.0);
		block.set("air");
		rTick++;
	} else {
		rTick = 0;
	}
});

BlockEvents.rightClicked("gravel", (event) => {
	let f = Math.random();
	if (event.player.mainHandItem.empty && event.player.offHandItem.empty) {
		event.player.swing();
		let pos = event.block.pos;
		event.player.runCommandSilent(`playsound minecraft:block.gravel.break block @p ${pos.x} ${pos.y} ${pos.z} 0.5 ${Math.random() + 1} 0.1`);
		if (f > 0.45 && f < 0.55) {
			event.block.popItem("flint");
			event.player.runCommandSilent(`playsound minecraft:block.gravel.break block @p ${pos.x} ${pos.y} ${pos.z} 0.7 0.75 0.1`);
			event.player.addExhaustion(3.0);
			event.block.set("air");
		}
	}
});

BlockEvents.broken((event) => {
	const { player, block } = event;
	let mhitem;
	if (block.hasTag("minecraft:logs") && !player.mainHandItem.hasTag("minecraft:axes") && !player.isCreative()) {
		event.player.runCommandSilent(`/title @p subtitle {"text":"You need an axe!","color":"red"}`);
		event.player.runCommandSilent(`/title @p title ""`);
		event.cancel(true);
		return;
	}

	if (block.hasTag("minecraft:leaves") && player.mainHandItem.id == "kubejs:sharpened_flint") {
		mhitem = player.getItemInHand("main_hand");
		damageToolInHand("main_hand", mhitem, true, player, 1);
		if (Math.random() < 0.2) {
			event.block.popItem("stick");
		}
		return;
	}

	if ((block.id == "minecraft:tall_grass" || block.id == "minecraft:short_grass") && player.mainHandItem.id == "gtceu:flint_knife") {
		mhitem = player.getItemInHand("main_hand");
		damageToolInHand("main_hand", mhitem, true, player, 1);
		if (Math.random() < 0.1) {
			event.block.popItem("kubejs:cut_grass");
		}
		player.sendSystemMessage("yeet");
	}
});

let lTick = 0;
BlockEvents.leftClicked((event) => {
	const { block, player, item } = event;

	if (block.id == "minecraft:stone" && lTick == 0 && player.mainHandItem.id == "minecraft:flint") {
		item.setCount(item.getCount() - 1);
		player.give("kubejs:sharpened_flint");
		lTick++;
	} else {
		lTick = 0;
	}
});

function sendMsg(event, data) {
	event.player.sendSystemMessage(data);
}

var l2Tick = 0;

BlockEvents.leftClicked((event) => {
	if (event.player.mainHandItem.hasTag("minecraft:axes") && l2Tick === 0 && event.block.hasTag("minecraft:logs")) {
		let patternArray = [];

		const expre = /minecraft:(\w+?)_/;
		let woodType = event.block.item.id.match(expre);

		if (woodType == null) {
			return;
		}

		let pattern1 = [
			`minecraft:${woodType[1]}_planks`,
			`minecraft:${woodType[1]}_log`,
			`minecraft:${woodType[1]}_planks`,
			`minecraft:${woodType[1]}_log`,
			`minecraft:${woodType[1]}_log`,
			`minecraft:${woodType[1]}_log`,
			`minecraft:${woodType[1]}_planks`,
			`minecraft:${woodType[1]}_log`,
			`minecraft:${woodType[1]}_planks`,
		];

		const pattern2 = [
			`minecraft:${woodType[1]}_log`,
			`minecraft:${woodType[1]}_planks`,
			`minecraft:${woodType[1]}_log`,
			`minecraft:${woodType[1]}_planks`,
			`minecraft:${woodType[1]}_log`,
			`minecraft:${woodType[1]}_planks`,
			`minecraft:${woodType[1]}_log`,
			`minecraft:${woodType[1]}_planks`,
			`minecraft:${woodType[1]}_log`,
		];

		let pos = {
			x: event.block.pos.x,
			y: event.block.pos.y,
			z: event.block.pos.z,
		};

		let range = 1;

		for (let dz = -range; dz <= range; dz++) {
			for (let dx = -range; dx <= range; dx++) {
				let blockX = pos.x + dx;
				let blockY = pos.y;
				let blockZ = pos.z + dz;
				patternArray.push(event.level.getBlock(blockX, blockY, blockZ).id);
			}
		}

		if (arraysEqual(patternArray, pattern1) || arraysEqual(patternArray, pattern2)) {
			event.block.popItem("crafting_table");
			for (let dz = -range; dz <= range; dz++) {
				for (let dx = -range; dx <= range; dx++) {
					let blockX = pos.x + dx;
					let blockY = pos.y;
					let blockZ = pos.z + dz;

					event.level.getBlock(blockX, blockY, blockZ).set("air");
				}
			}
		}
		l2Tick++;
	} else {
		l2Tick = 0;
	}
});

function arraysEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}

/**
 *
 * @param {String} hand "main_hand" or "off_hand".
 * @param {ItemStack} tool ItemStack of the tool that should break.
 * @param {boolean} playSound should it play a sound?
 * @param {Player} player The player.
 * @param {integer} damageAmount the amount of damage it should apply.
 */
function damageToolInHand(hand, tool, playSound, player, damageAmount) {
	tool.setDamageValue(tool.damageValue + damageAmount);
	if (tool.getDamageValue() == tool.getMaxDamage()) {
		player.setItemInHand(hand, "air");
		if (playSound) player.runCommandSilent("playsound minecraft:item.shield.break player @p ~ ~ ~ 2 2");
	}
}
