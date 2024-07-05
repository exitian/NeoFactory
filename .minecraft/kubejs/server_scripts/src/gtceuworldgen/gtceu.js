// requires: gtceu
/*
const $WorldGenLayers = require("packages/com/gregtechceu/gtceu/api/worldgen/$WorldGenLayers");
("minecraft:lapis_ore");
const $DikeVeinGenerator = require("packages/com/gregtechceu/gtceu/api/worldgen/generator/veins/$DikeVeinGenerator");
const $LayeredVeinGenerator = require("packages/com/gregtechceu/gtceu/api/worldgen/generator/veins/$LayeredVeinGenerator");
const $VeinedVeinGenerator = require("packages/com/gregtechceu/gtceu/api/worldgen/generator/veins/$VeinedVeinGenerator");

function wglStringObj(string) {
	switch (string) {
		case "deepslate":
			return $WorldGenLayers.DEEPSLATE;
		case "stone":
			return $WorldGenLayers.STONE;
		case "endstone":
			return $WorldGenLayers.ENDSTONE;
		case "netherrack":
			return $WorldGenLayers.NETHERRACK;
	}
}

 Buggy disabled for now. I'll worry later.
GTCEuServerEvents.oreVeins((event) => {
	event.modifyAll((veinid, vein) => {
		console.log("Modifying => => " + veinid);
		let veinGen = vein.veinGenerator();
		let currIter;
		veinid = (veinid + "").substring(6);

		vein.biomes("#c:is_overworld");
		vein.dimensions("minecraft:overworld");

		if (veinGen instanceof $DikeVeinGenerator) {
			vein = veinGen.copy();
			currIter = GT_ORES_DIKE[veinid];

			console.log(veinid);

			vein.weight(currIter.weight)
				.density(currIter.density)
				.layer(wglStringObj(currIter.layer))
				.heightRangeUniform(
					currIter.heightRangeU[0],
					currIter.heightRangeU[1]
				);
			console.log("veined!");
		} else if (veinGen instanceof $LayeredVeinGenerator) {
			vein = veinGen.copy();
			currIter = GT_ORES_LAYER[veinid];

			console.log("diked!");
		} else if (veinGen instanceof $VeinedVeinGenerator) {
			vein = veinGen.copy();
			currIter = GT_ORES_VEIN[veinid];

			console.log("layered!");
		}
	});
});
 */
