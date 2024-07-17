ServerEvents.recipes((event) => {
	event.shapeless("kubejs:flint_hatchet", ["kubejs:grass_rope", "kubejs:sharpened_flint", "minecraft:stick"]).id(`${NF}:flint_hatchet`);
	event.shapeless("kubejs:grass_rope", ["kubejs:cut_grass", "kubejs:cut_grass", "kubejs:cut_grass", "kubejs:cut_grass"]).id(`${NF}:grass_rope`);
});
