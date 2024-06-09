import { NextResponse } from "next/server";
// Run through https://jsonformatter.curiousconcept.com/# if we want quoted properties which apparently some places complain about
export const resourceMappings = [
  {
    label: "Absorbent Substrate",
    primalName: "PrimalItemResource_SubstrateAbsorbent_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_SubstrateAbsorbent.PrimalItemResource_SubstrateAbsorbent'",
  },
  {
    label: "Achatina Paste",
    primalName: "PrimalItemResource_SnailPaste_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Achatina/PrimalItemResource_SnailPaste.PrimalItemResource_SnailPaste'",
  },
  {
    label: "Ambergris",
    primalName: "PrimalItemResource_Ambergris_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/SpaceWhale/PrimalItemResource_Ambergris.PrimalItemResource_Ambergris'",
  },
  {
    label: "Ammonite Bile",
    primalName: "PrimalItemResource_AmmoniteBlood_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_AmmoniteBlood.PrimalItemResource_AmmoniteBlood'",
  },
  {
    label: "AnglerGel",
    primalName: "PrimalItemResource_AnglerGel_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_AnglerGel.PrimalItemResource_AnglerGel'",
  },
  {
    label: "Black Pearl",
    primalName: "PrimalItemResource_BlackPearl_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_BlackPearl.PrimalItemResource_BlackPearl'",
  },
  {
    label: "Blue Crystalized Sap",
    primalName: "PrimalItemResource_BlueSap_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/CoreBlueprints/Resources/PrimalItemResource_BlueSap.PrimalItemResource_BlueSap'",
  },
  {
    label: "Blue Gem",
    primalName: "PrimalItemResource_Gem_BioLum_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/CoreBlueprints/Resources/PrimalItemResource_Gem_BioLum.PrimalItemResource_Gem_BioLum'",
  },
  {
    label: "Blood Pack",
    primalName: "PrimalItemConsumable_BloodPack_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Consumables/PrimalItemConsumable_BloodPack.PrimalItemConsumable_BloodPack'",
  },
  {
    label: "Cementing Paste",
    primalName: "PrimalItemResource_ChitinPaste_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_ChitinPaste.PrimalItemResource_ChitinPaste'",
  },
  {
    label: "Charcoal",
    primalName: "PrimalItemResource_Charcoal_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Charcoal.PrimalItemResource_Charcoal'",
  },
  {
    label: "Charge Battery",
    primalName: "PrimalItem_ChargeBattery_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/WeaponGlowStickCharge/PrimalItem_ChargeBattery.PrimalItem_ChargeBattery'",
  },
  {
    label: "Chitin or Keratin",
    primalName: "PrimalItemResource_ChitinOrKeratin_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_ChitinOrKeratin.PrimalItemResource_ChitinOrKeratin'",
  },
  {
    label: "Chitin",
    primalName: "PrimalItemResource_Chitin_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Chitin.PrimalItemResource_Chitin'",
  },
  {
    label: "Clay",
    primalName: "PrimalItemResource_Clay_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/CoreBlueprints/Resources/PrimalItemResource_Clay.PrimalItemResource_Clay'",
  },
  {
    label: "Condensed Gas",
    primalName: "PrimalItemResource_CondensedGas_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/CoreBlueprints/Resources/PrimalItemResource_CondensedGas.PrimalItemResource_CondensedGas'",
  },
  {
    label: "Congealed Gas Ball",
    primalName: "PrimalItemResource_Gas_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/CoreBlueprints/Resources/PrimalItemResource_Gas.PrimalItemResource_Gas'",
  },
  {
    label: "Corrupted Nodule",
    primalName: "PrimalItemResource_CorruptedPolymer_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/CoreBlueprints/Resources/PrimalItemResource_CorruptedPolymer.PrimalItemResource_CorruptedPolymer'",
  },
  {
    label: "Crafted Element Dust",
    primalName: "PrimalItemResource_ElementDustFromShards_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/CoreBlueprints/Resources/PrimalItemResource_ElementDustFromShards.PrimalItemResource_ElementDustFromShards'",
  },
  {
    label: "Crystal",
    primalName: "PrimalItemResource_Crystal_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Crystal.PrimalItemResource_Crystal'",
  },
  {
    label: "Deathworm Horn",
    primalName: "PrimalItemResource_KeratinSpike_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Deathworm/PrimalItemResource_KeratinSpike.PrimalItemResource_KeratinSpike'",
  },
  {
    label: "Dermis",
    primalName: "PrimalItem_TaxidermyDermis_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/CoreBlueprints/Items/PrimalItem_TaxidermyDermis.PrimalItem_TaxidermyDermis'",
  },
  {
    label: "Dinosaur Bone",
    primalName: "PrimalItemResource_ARKBone_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_ARKBone.PrimalItemResource_ARKBone'",
  },
  {
    label: "Electronics",
    primalName: "PrimalItemResource_Electronics_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Electronics.PrimalItemResource_Electronics'",
  },
  {
    label: "Element",
    primalName: "PrimalItemResource_Element_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Element.PrimalItemResource_Element'",
  },
  {
    label: "Element Dust",
    primalName: "PrimalItemResource_ElementDust_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/CoreBlueprints/Resources/PrimalItemResource_ElementDust.PrimalItemResource_ElementDust'",
  },
  {
    label: "Element Ore",
    primalName: "PrimalItemResource_ElementOre_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/CoreBlueprints/Resources/PrimalItemResource_ElementOre.PrimalItemResource_ElementOre'",
  },
  {
    label: "Element Shard",
    primalName: "PrimalItemResource_ElementShard_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_ElementShard.PrimalItemResource_ElementShard'",
  },
  {
    label: "Fertilizer",
    primalName: "PrimalItemConsumable_Fertilizer_Compost_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Consumables/PrimalItemConsumable_Fertilizer_Compost.PrimalItemConsumable_Fertilizer_Compost'",
  },
  {
    label: "Fiber",
    primalName: "PrimalItemResource_Fibers_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Fibers.PrimalItemResource_Fibers'",
  },
  {
    label: "Flint",
    primalName: "PrimalItemResource_Flint_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Flint.PrimalItemResource_Flint'",
  },
  {
    label: "Fragmented Green Gem",
    primalName: "PrimalItemResource_FracturedGem_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/CoreBlueprints/Resources/PrimalItemResource_FracturedGem.PrimalItemResource_FracturedGem'",
  },
  {
    label: "Fungal Wood",
    primalName: "PrimalItemResource_FungalWood_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/CoreBlueprints/Resources/PrimalItemResource_FungalWood.PrimalItemResource_FungalWood'",
  },
  {
    label: "Corrupted Wood",
    primalName: "PrimalItemResource_CorruptedWood_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/CoreBlueprints/Resources/PrimalItemResource_CorruptedWood.PrimalItemResource_CorruptedWood'",
  },
  {
    label: "Gasoline",
    primalName: "PrimalItemResource_Gasoline_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Gasoline.PrimalItemResource_Gasoline'",
  },
  {
    label: "Golden Nugget",
    primalName: "PrimalItemResource_GoldenNugget_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Missions/Retrieve/RetrieveItems/GoldenNugget/PrimalItemResource_GoldenNugget.PrimalItemResource_GoldenNugget'",
  },
  {
    label: "Green Gem",
    primalName: "PrimalItemResource_Gem_Fertile_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/CoreBlueprints/Resources/PrimalItemResource_Gem_Fertile.PrimalItemResource_Gem_Fertile'",
  },
  {
    label: "Gunpowder",
    primalName: "PrimalItemResource_Gunpowder_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Gunpowder.PrimalItemResource_Gunpowder'",
  },
  {
    label: "Hide",
    primalName: "PrimalItemResource_Hide_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Hide.PrimalItemResource_Hide'",
  },
  {
    label: "High Quality Pollen",
    primalName: "PrimalItemResource_HighQualityPollen_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Missions/Retrieve/RetrieveItems/HighQualityPollen/PrimalItemResource_HighQualityPollen.PrimalItemResource_HighQualityPollen'",
  },
  {
    label: "Human Hair",
    primalName: "PrimalItemResource_Hair_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Hair.PrimalItemResource_Hair'",
  },
  {
    label: "Keratin",
    primalName: "PrimalItemResource_Keratin_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Keratin.PrimalItemResource_Keratin'",
  },
  {
    label: "Leech Blood",
    primalName: "PrimalItemResource_LeechBlood_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_LeechBlood.PrimalItemResource_LeechBlood'",
  },
  {
    label: "Leech Blood or Horns",
    primalName: "PrimalItemResourceGeneric_Curing_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResourceGeneric_Curing.PrimalItemResourceGeneric_Curing'",
  },
  {
    label: "Metal Ingot",
    primalName: "PrimalItemResource_MetalIngot_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_MetalIngot.PrimalItemResource_MetalIngot'",
  },
  {
    label: "Metal",
    primalName: "PrimalItemResource_Metal_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Metal.PrimalItemResource_Metal'",
  },
  {
    label: "Mutagel",
    primalName: "PrimalItemConsumable_Mutagel_C",
    blueprintPath:
      "Blueprint'/Game/Genesis2/CoreBlueprints/Environment/Mutagen/PrimalItemConsumable_Mutagel.PrimalItemConsumable_Mutagel'",
  },
  {
    label: "Mutagen",
    primalName: "PrimalItemConsumable_Mutagen_C",
    blueprintPath:
      "Blueprint'/Game/Genesis2/CoreBlueprints/Environment/Mutagen/PrimalItemConsumable_Mutagen.PrimalItemConsumable_Mutagen'",
  },
  {
    label: "Narcotic",
    primalName: "PrimalItemConsumable_Narcotic_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Consumables/PrimalItemConsumable_Narcotic.PrimalItemConsumable_Narcotic'",
  },
  {
    label: "Obsidian",
    primalName: "PrimalItemResource_Obsidian_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Obsidian.PrimalItemResource_Obsidian'",
  },
  {
    label: "Oil",
    primalName: "PrimalItemResource_Oil_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Oil.PrimalItemResource_Oil'",
  },
  {
    label: "Oil (Tusoteuthis)",
    primalName: "PrimalItemResource_SquidOil_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Tusoteuthis/PrimalItemResource_SquidOil.PrimalItemResource_SquidOil'",
  },
  {
    label: "Organic Polymer",
    primalName: "PrimalItemResource_Polymer_Organic_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Polymer_Organic.PrimalItemResource_Polymer_Organic'",
  },
  {
    label: "Pelt",
    primalName: "PrimalItemResource_Pelt_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Pelt.PrimalItemResource_Pelt'",
  },
  {
    label: "Pelt, Hair, or Wool",
    primalName: "PrimalItemResource_PeltOrHair_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_PeltOrHair.PrimalItemResource_PeltOrHair'",
  },
  {
    label: "Polymer",
    primalName: "PrimalItemResource_Polymer_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Polymer.PrimalItemResource_Polymer'",
  },
  {
    label: "Primal Crystal",
    primalName: "PrimalItemResource_Crystal_IslesPrimal_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/CrystalWyvern/CrystalResources/Primal/PrimalItemResource_Crystal_IslesPrimal.PrimalItemResource_Crystal_IslesPrimal'",
  },
  {
    label: "Preserving Salt",
    primalName: "PrimalItemResource_PreservingSalt_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/CoreBlueprints/Resources/PrimalItemResource_PreservingSalt.PrimalItemResource_PreservingSalt'",
  },
  {
    label: "Propellant",
    primalName: "PrimalItemResource_Propellant_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/CoreBlueprints/Resources/PrimalItemResource_Propellant.PrimalItemResource_Propellant'",
  },
  {
    label: "Rare Flower",
    primalName: "PrimalItemResource_RareFlower_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_RareFlower.PrimalItemResource_RareFlower'",
  },
  {
    label: "Rare Mushroom",
    primalName: "PrimalItemResource_RareMushroom_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_RareMushroom.PrimalItemResource_RareMushroom'",
  },
  {
    label: "Raw Salt",
    primalName: "PrimalItemResource_RawSalt_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/CoreBlueprints/Resources/PrimalItemResource_RawSalt.PrimalItemResource_RawSalt'",
  },
  {
    label: "Re-Fertilizer",
    primalName: "PrimalItemConsumableMiracleGro_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Consumables/BaseBPs/PrimalItemConsumableMiracleGro.PrimalItemConsumableMiracleGro'",
  },
  {
    label: "Red Crystalized Sap",
    primalName: "PrimalItemResource_RedSap_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/CoreBlueprints/Resources/PrimalItemResource_RedSap.PrimalItemResource_RedSap'",
  },
  {
    label: "Red Gem",
    primalName: "PrimalItemResource_Gem_Element_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/CoreBlueprints/Resources/PrimalItemResource_Gem_Element.PrimalItemResource_Gem_Element'",
  },
  {
    label: "Sand",
    primalName: "PrimalItemResource_Sand_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/CoreBlueprints/Resources/PrimalItemResource_Sand.PrimalItemResource_Sand'",
  },
  {
    label: "Sap",
    primalName: "PrimalItemResource_Sap_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Sap.PrimalItemResource_Sap'",
  },
  {
    label: "Scrap Metal",
    primalName: "PrimalItemResource_ScrapMetal_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/CoreBlueprints/Resources/PrimalItemResource_ScrapMetal.PrimalItemResource_ScrapMetal'",
  },
  {
    label: "Scrap Metal Ingot",
    primalName: "PrimalItemResource_ScrapMetalIngot_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/CoreBlueprints/Resources/PrimalItemResource_ScrapMetalIngot.PrimalItemResource_ScrapMetalIngot'",
  },
  {
    label: "Shell Fragment",
    primalName: "PrimalItemResource_TurtleShell_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/CoreBlueprints/Resources/PrimalItemResource_TurtleShell.PrimalItemResource_TurtleShell'",
  },
  {
    label: "Silica Pearls",
    primalName: "PrimalItemResource_Silicon_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Silicon.PrimalItemResource_Silicon'",
  },
  {
    label: "Silicate",
    primalName: "PrimalItemResource_Silicate_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/CoreBlueprints/Resources/PrimalItemResource_Silicate.PrimalItemResource_Silicate'",
  },
  {
    label: "Silk",
    primalName: "PrimalItemResource_Silk_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/CoreBlueprints/Resources/PrimalItemResource_Silk.PrimalItemResource_Silk'",
  },
  {
    label: "Sparkpowder",
    primalName: "PrimalItemResource_Sparkpowder_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Sparkpowder.PrimalItemResource_Sparkpowder'",
  },
  {
    label: "Stimulant",
    primalName: "PrimalItemConsumable_Stimulant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Consumables/PrimalItemConsumable_Stimulant.PrimalItemConsumable_Stimulant'",
  },
  {
    label: "Stone",
    primalName: "PrimalItemResource_Stone_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Stone.PrimalItemResource_Stone'",
  },
  {
    label: "Sulfur",
    primalName: "PrimalItemResource_Sulfur_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/CoreBlueprints/Resources/PrimalItemResource_Sulfur.PrimalItemResource_Sulfur'",
  },
  {
    label: "Thatch",
    primalName: "PrimalItemResource_Thatch_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Thatch.PrimalItemResource_Thatch'",
  },
  {
    label: "Unstable Element",
    primalName: "PrimalItemResource_ElementRefined_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/CoreBlueprints/Resources/PrimalItemResource_ElementRefined.PrimalItemResource_ElementRefined'",
  },
  {
    label: "Unstable Element Shard",
    primalName: "PrimalItemResource_ShardRefined_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/CoreBlueprints/Resources/PrimalItemResource_ShardRefined.PrimalItemResource_ShardRefined'",
  },
  {
    label: "Wood",
    primalName: "PrimalItemResource_Wood_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Wood.PrimalItemResource_Wood'",
  },
  {
    label: "Wool",
    primalName: "PrimalItemResource_Wool_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Wool.PrimalItemResource_Wool'",
  },
  {
    label: "Honey",
    primalName: "PrimalItemConsumable_Honey_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Consumables/PrimalItemConsumable_Honey.PrimalItemConsumable_Honey'",
  },
  {
    label: "Woolly Rhino Horn",
    primalName: "PrimalItemResource_Horn_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Resources/PrimalItemResource_Horn.PrimalItemResource_Horn'",
  },
  {
    label: "Wyvern Milk",
    primalName: "PrimalItemResource_Horn_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Consumables/BaseBPs/PrimalItemConsumable_WyvernMilk.PrimalItemConsumable_WyvernMilk'",
  },
];

export async function GET() {
  return NextResponse.json(resourceMappings, { status: 201 });
}
