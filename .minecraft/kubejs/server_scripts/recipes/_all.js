// Generally any loops that are agnostic to any mod

// Bulk remove by array
ServerEvents.recipes((event) => {
	REMOVE_BY_ID.forEach((element) => {
		event.remove({ id: element });
	});

	REMOVE_BY_REGEX.forEach((element) => {
		event.forEachRecipe({ id: element }, (recipe) => {
			event.remove({ id: recipe.getId() });
		});
	});
});
