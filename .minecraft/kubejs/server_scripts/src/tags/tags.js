let ADDING_TAGS = [
	{ a: "accessories:gtceu_magnet", b: "gtceu:hv_item_magnet" },
	{ a: "accessories:gtceu_magnet", b: "gtceu:hv_item_magnet" },
	{ a: "accessories:gtceu_magnet", b: "gtceu:lv_item_magnet" },
	{ a: "accessories:charm", b: "curios:curio" },
	{ a: "accessories:face", b: "gtceu:face_mask" },
	{ a: "accessories:hand", b: "gtceu:rubber_gloves" },

	{ a: "c:iron_chests", b: "expandedstorage:iron_chest" },
	{ a: "c:gold_chests", b: "expandedstorage:gold_chest" },
	{ a: "c:diamond_chests", b: "expandedstorage:diamond_chest" },
	{ a: "c:obsidian_chests", b: "expandedstorage:obsidian_chest" },
	{ a: "c:netherite_chests", b: "expandedstorage:netherite_chest" },
	{ a: "c:tile_chests", b: "minecraft:chest" },
	{ a: "c:tile_chests", b: "expandedstorage:iron_chest" },
	{ a: "c:tile_chests", b: "expandedstorage:gold_chest" },
	{ a: "c:tile_chests", b: "expandedstorage:diamond_chest" },
	{ a: "c:tile_chests", b: "expandedstorage:obsidian_chest" },
	{ a: "c:tile_chests", b: "expandedstorage:netherite_chest" },
	{ a: "c:block_chests", b: "expandedstorage:old_wood_chest" },
	{ a: "c:block_chests", b: "expandedstorage:old_iron_chest" },
	{ a: "c:block_chests", b: "expandedstorage:old_gold_chest" },
	{ a: "c:block_chests", b: "expandedstorage:old_diamond_chest" },
	{ a: "c:block_chests", b: "expandedstorage:old_obsidian_chest" },
	{ a: "c:block_chests", b: "expandedstorage:old_netherite_chest" },
];

ServerEvents.tags("item", (event) => {
	ADDING_TAGS.forEach((element) => {
		event.add(element.a, element.b);
	});
});

ServerEvents.tags("worldgen/biome", (event) => {
	event.removeAll("ae2:has_meteorites");
});
