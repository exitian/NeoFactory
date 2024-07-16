const DEV_PLAYER = "3x1t_5tyl3";

PlayerEvents.chat((event) => {
	let message = event.getMessage();
	let player = event.getPlayer();

	if (message === "devmode" && player.username == DEV_PLAYER) {
		DEV_WORLD_COMMANDS.forEach((element) => {
			player.runCommand(element);
		});

		player.sendSystemMessage(
			"Done! Welcome back " +
				DEV_PLAYER +
				" enjoy development you beautiful bean <3"
		);
	}
});

PlayerEvents

const DEV_WORLD_COMMANDS = [
	"/gamerule doDaylightCycle false",
	"/gamerule doSeasonCycle false",
	"/gamerule doMobSpawning false",
	"/gamerule doWeatherCycle false",
	"/give @p gtceu:hsse_wrench 1",
	`/effect give ${DEV_PLAYER} toughasnails:climate_clemency infinite 1 false`,
	`/effect give ${DEV_PLAYER} minecraft:night_vision infinite 1 false`,
	"/time set midnight",
	"/season set mid_spring",
];
