// priority: 100

const VERBOSE = false;
const GT = "gtceu";
const NF = "neofactory";
const TICK = 20;

const WOODTYPES = [
	"rubber",
	"acacia",
	"birch",
	"cherry",
	"dark_oak",
	"jungle",
	"mangrove",
	"oak",
	"spruce",
	"crimson",
	"warped",
	"bamboo",
];

const NON_HURTING_BOOCK = ["minecraft:dirt", "minecraft:dirt_path"];

// excludes ulv and max
const VOLTAGE_TIERS = ["lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv"];

const CRCTS = {
	lv: "#gtceu:circuits/lv",
	mv: "#gtceu:circuits/mv",
	hv: "#gtceu:circuits/hv",
	ev: "#gtceu:circuits/ev",
	iv: "#gtceu:circuits/iv",
	luv: "#gtceu:circuits/luv",
	zpm: "#gtceu:circuits/zpm",
	uv: "#gtceu:circuits/uv",
	uhv: "#gtceu:circuits/uhv",
};

const CABLE_TIERS = {
	lv: "tin",
	mv: "copper",
	hv: "gold",
	ev: "aluminium",
	iv: "platinum",
	luv: "niobium_titanium",
	zpm: "vanadium_gallium",
	uv: "yttrium_barium_cuprate",
	uhv: "europium",
};

const MATERIAL_TIERS = {
	lv: "wrought_iron",
	mv: "steel",
	hv: "aluminum",
	ev: "stainless_steel",
	iv: "titanium",
	luv: "tungsten_steel",
	zpm: "naquadah_alloy",
	uv: "darmstadtium",
	uhv: "neutronium",
};

const VANILLA_ID = "minecraft";

// Sorted ascending
const REMOVE_BY_ID = [
	"ae2:decorative/quartz_glass",
	"ae2:network/crafting/molecular_assembler",
	"ae2:tools/certus_quartz_wrench",
	"ae2:tools/nether_quartz_wrench",
	"block_variants:dispenser",
	"block_variants:dropper",
	"block_variants:furnace",
	"cookingforblockheads:cabinet",
	"cookingforblockheads:connector",
	"cookingforblockheads:cooking_table",
	"cookingforblockheads:counter",
	"cookingforblockheads:cutting_board",
	"cookingforblockheads:heating_unit",
	"cookingforblockheads:milk_jar",
	"cookingforblockheads:sink",
	"cookingforblockheads:toaster",
	"cookingforblockheads:white_fridge",
	"cookingforblockheads:white_kitchen_floor",
	"cookingforblockheads:white_oven",
	"foodtxf:stone_knife_recipe",
	"foodtxf:wooden_knife_recipe",
	"gtceu:arc_furnace/arc_enchanting_table",
	"gtceu:assembler/crafting_table",
	"gtceu:macerator/macerate_enchanting_table",
	"gtceu:shaped/brick_from_water",
	"gtceu:shaped/crafting_table",
	"gtceu:shaped/enchanting_table",
	"gtceu:shaped/rubber_fence",
	"minecraft:copper_bulb",
	"minecraft:copper_door",
	"minecraft:copper_ingot_from_waxed_copper_block",
	"minecraft:copper_ingot",
	"minecraft:crafter",
	"minecraft:waxed_copper_bulb",
	"minecraft:waxed_copper_door_from_honeycomb",
];

const REMOVE_BY_REGEX = [
	/minecraft:(\w+trapdoor)(\w+)?/,
	/utilitarian:utility\/\w+/,
];

const REMOVE_BY_MOD = ["bigger_ae2"];

// Enforce gamerules
const GAMERULES = [
	"announceAdvancements false",
	"doTraderSpawning false",
	"waterSourceConversion false",
	"mobExplosionDropDecay false",
	"tntExplosionDropDecay false",
	"playersSleepingPercentage 1",
	"reducedDebugInfo true",
];

// Gregtech defined items to make it faster
const CRBR = "#c:tools/crowbars";
const FILE = "#c:tools/files";
const HMMR = "#c:tools/hammers";
const KNVE = "#c:tools/knives";
const MLLT = "#c:tools/mallets";
const MRTR = "#c:tools/mortars";
const SAWS = "#c:tools/saws";
const SCRD = "#c:tools/screwdrivers";
const WRCT = "#c:tools/wire_cutters";
const WRNC = "#c:tools/wrench";

const HOT_ARMOR = [
	"gtceu:hazmat_boots",
	"gtceu:hazmat_leggings",
	"gtceu:hazmat_headpiece",
	"gtceu:hazmat_chestpiece",
];

const COOL_ARMOR = [];

const CLIMATE_CLEMENCY = [];
