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
				event.player.runCommandSilent(
					'title @p actionbar "Enchantments are not allowed!"'
				);
			}
		});

		//gives climate clemency
		let armorslots = ["feet", "chest", "head", "legs"];
		let boolSet = [];
        
		armorslots.forEach((element) => {
			boolSet.push(
				event.player.getItemBySlot(element).hasTag("gtceu:ppe_armor")
			);
		});
		if (boolSet[0] && boolSet[1] && boolSet[2] && boolSet[3]) {
			event.player.runCommandSilent(
				"effect give @p toughasnails:climate_clemency 7 1 false"
			);
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
	event.player.runCommandSilent(
		"fill ~8 ~8 ~8 ~-8 ~-8 ~-8 air replace #minecraft:base_stone_overworld"
	);
	event.player.runCommandSilent("fill ~8 ~8 ~8 ~-8 ~-8 ~-8 air replace lava");
	event.player.runCommandSilent(
		"fill ~8 ~8 ~8 ~-8 ~-8 ~-8 air replace water"
	);
	event.player.runCommandSilent(
		"fill ~8 ~8 ~8 ~-8 ~-8 ~-8 air replace #minecraft:overworld_carver_replaceables"
	);
	event.player.runCommandSilent(
		"fill ~8 ~8 ~8 ~-8 ~-8 ~-8 air replace #minecraft:sculk_replaceable"
	);
	event.player.sendSystemMessage("Clearing nearby!");
});
