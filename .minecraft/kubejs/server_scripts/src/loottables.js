const {
	$ItemEnchantments,
} = require("packages/net/minecraft/world/item/enchantment/$ItemEnchantments");

PlayerEvents.inventoryChanged((event) => {
	if (event.player == null) return;

	if (event.item.isEnchanted) {
		console.log(event.item.enchantments.keySet().name);
	}

	event.player.sendInventoryUpdate();
});

let bannedEnchants = [
	"minecraft:efficiency",
	"minecraft:sweeping_edge",
	"minecraft:looting",
	"minecraft:quick_charge",
	"minecraft:silk_touch",
	"minecraft:soul_speed",
	"minecraft:breach",
	"minecraft:density",
	"minecraft:flame",
	"minecraft:fortune",
	"minecraft:aqua_affinity",
	"minecraft:multishot",
	"minecraft:channeling",
	"minecraft:loyalty",
	"toughasnails:water_cleansing",
	"minecraft:binding_curse",
	"minecraft:punch",
	"minecraft:power",
	"minecraft:projectile_protection",
	"minecraft:sharpness",
	"minecraft:frost_walker",
	"minecraft:fire_protection",
	"minecraft:impaling",
	"minecraft:luck_of_the_sea",
	"minecraft:riptide",
	"minecraft:mending",
	"minecraft:protection",
	"minecraft:respiration",
	"minecraft:piercing",
	"minecraft:feather_falling",
	"minecraft:swift_sneak",
	"minecraft:unbreaking",
	"minecraft:fire_aspect",
	"minecraft:lure",
	"minecraft:smite",
	"minecraft:knockback",
	"toughasnails:thermal_tuning",
	"minecraft:depth_strider",
	"minecraft:wind_burst",
	"minecraft:infinity",
	"minecraft:vanishing_curse",
	"minecraft:bane_of_arthropods",
	"minecraft:blast_protection",
	"minecraft:thorns",
];
