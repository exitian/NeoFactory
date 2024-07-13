BlockEvents.modification((event) => {
	event.modify("netherrack", (block) => {
		block.destroySpeed = 0.3;
		block.explosionResistance = 4;
	});
	event.modify("basalt", (block) => {
		block.destroySpeed = 0.3;
		block.explosionResistance = 4;
	});
	event.modify("granite", (block) => {
		block.destroySpeed = 0.7;
		block.explosionResistance = 3;
	});
});

