ServerEvents.tags("item", (event) => {
	event.add("accessories:gtceu_magnet", "gtceu:hv_item_magnet");
	event.add("accessories:gtceu_magnet", "gtceu:lv_item_magnet");
	event.add("accessories:charm", "#curios:curio");
	event.add("accessories:face", "gtceu:face_mask");
	event.add("accessories:hand", "gtceu:rubber_gloves");
});

ServerEvents.tags("biome", (event) => {
	event.removeAll("ae2:has_meteorites");
});
