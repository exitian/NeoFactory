// priority: 0
// Important to load this first to remove an entire mod's recipes

ServerEvents.recipes((event) => {
	REMOVE_BY_MOD.forEach((element) => {
		event.remove({
			mod: element,
		});
	});
});
