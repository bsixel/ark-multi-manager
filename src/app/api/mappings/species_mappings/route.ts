import { NextResponse } from "next/server";

// Run through https://jsonformatter.curiousconcept.com/# if we want quoted properties which apparently some places complain about
export const creatureMappings = [
  {
    label: "Aberrant Achatina",
    primalName: "Achatina_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Achatina/Achatina_Character_BP_Aberrant.Achatina_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Anglerfish",
    primalName: "Angler_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Anglerfish/Angler_Character_BP_Aberrant.Angler_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Ankylosaurus",
    primalName: "Ankylo_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Ankylo/Ankylo_Character_BP_Aberrant.Ankylo_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Araneo",
    primalName: "SpiderS_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Spider-Small/SpiderS_Character_BP_Aberrant.SpiderS_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Arthropluera",
    primalName: "Arthro_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Arthropluera/Arthro_Character_BP_Aberrant.Arthro_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Baryonyx",
    primalName: "Baryonyx_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Baryonyx/Baryonyx_Character_BP_Aberrant.Baryonyx_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Beelzebufo",
    primalName: "Toad_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Toad/Toad_Character_BP_Aberrant.Toad_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Carbonemys",
    primalName: "Turtle_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Turtle/Turtle_Character_BP_Aberrant.Turtle_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Carnotaurus",
    primalName: "Carno_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Carno/Carno_Character_BP_Aberrant.Carno_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Cnidaria",
    primalName: "Cnidaria_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Cnidaria/Cnidaria_Character_BP_Aberrant.Cnidaria_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Coelacanth",
    primalName: "Coel_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Coelacanth/Coel_Character_BP_Aberrant.Coel_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Dimetrodon",
    primalName: "Dimetro_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dimetrodon/Dimetro_Character_BP_Aberrant.Dimetro_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Dimorphodon",
    primalName: "Dimorph_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dimorphodon/Dimorph_Character_BP_Aberrant.Dimorph_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Diplocaulus",
    primalName: "Diplocaulus_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Diplocaulus/Diplocaulus_Character_BP_Aberrant.Diplocaulus_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Diplodocus",
    primalName: "Diplodocus_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Diplodocus/Diplodocus_Character_BP_Aberrant.Diplodocus_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Direbear",
    primalName: "Direbear_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Direbear/Direbear_Character_BP_Aberrant.Direbear_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Dodo",
    primalName: "Dodo_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dodo/Dodo_Character_BP_Aberrant.Dodo_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Doedicurus",
    primalName: "Doed_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Doedicurus/Doed_Character_BP_Aberrant.Doed_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Dung Beetle",
    primalName: "DungBeetle_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/DungBeetle/DungBeetle_Character_BP_Aberrant.DungBeetle_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Electrophorus",
    primalName: "Eel_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Eel/Eel_Character_BP_Aberrant.Eel_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Equus",
    primalName: "Equus_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Equus/Equus_Character_BP_Aberrant.Equus_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Gigantopithecus",
    primalName: "Bigfoot_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Bigfoot/Bigfoot_Character_BP_Aberrant.Bigfoot_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Iguanodon",
    primalName: "Iguanodon_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Iguanodon/Iguanodon_Character_BP_Aberrant.Iguanodon_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Lystrosaurus",
    primalName: "Lystro_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Lystrosaurus/Lystro_Character_BP_Aberrant.Lystro_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Manta",
    primalName: "Manta_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Manta/Manta_Character_BP_Aberrant.Manta_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Megalania",
    primalName: "Megalania_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Megalania/Megalania_Character_BP_Aberrant.Megalania_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Megalosaurus",
    primalName: "Megalosaurus_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Megalosaurus/Megalosaurus_Character_BP_Aberrant.Megalosaurus_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Meganeura",
    primalName: "Dragonfly_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dragonfly/Dragonfly_Character_BP_Aberrant.Dragonfly_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Moschops",
    primalName: "Moschops_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Moschops/Moschops_Character_BP_Aberrant.Moschops_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Otter",
    primalName: "Otter_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Otter/Otter_Character_BP_Aberrant.Otter_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Ovis",
    primalName: "Sheep_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Sheep/Sheep_Character_BP_Aberrant.Sheep_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Paraceratherium",
    primalName: "Paracer_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Paraceratherium/Paracer_Character_BP_Aberrant.Paracer_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Parasaur",
    primalName: "Para_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Para/Para_Character_BP_Aberrant.Para_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Piranha",
    primalName: "Piranha_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Piranha/Piranha_Character_BP_Aberrant.Piranha_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Pulmonoscorpius",
    primalName: "Scorpion_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Scorpion/Scorpion_Character_BP_Aberrant.Scorpion_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Purlovia",
    primalName: "Purlovia_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Purlovia/Purlovia_Character_BP_Aberrant.Purlovia_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Raptor",
    primalName: "Raptor_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Raptor/Raptor_Character_BP_Aberrant.Raptor_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Salmon",
    primalName: "Salmon_Character_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Salmon/Salmon_Character_Aberrant.Salmon_Character_Aberrant'",
  },
  {
    label: "Aberrant Sarco",
    primalName: "Sarco_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Sarco/Sarco_Character_BP_Aberrant.Sarco_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Spino",
    primalName: "Spino_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Spino/Spino_Character_BP_Aberrant.Spino_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Stegosaurus",
    primalName: "Stego_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Stego/Stego_Character_BP_Aberrant.Stego_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Titanoboa",
    primalName: "BoaFrill_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/BoaFrill/BoaFrill_Character_BP_Aberrant.BoaFrill_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Triceratops",
    primalName: "Trike_Character_BP_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Trike/Trike_Character_BP_Aberrant.Trike_Character_BP_Aberrant'",
  },
  {
    label: "Aberrant Trilobite",
    primalName: "Trilobite_Character_Aberrant_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Trilobite/Trilobite_Character_Aberrant.Trilobite_Character_Aberrant'",
  },
  {
    label: "Achatina",
    primalName: "Achatina_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Achatina/Achatina_Character_BP.Achatina_Character_BP'",
  },
  {
    label: "Allosaurus",
    primalName: "Allo_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Allosaurus/Allo_Character_BP.Allo_Character_BP'",
  },
  {
    label: "Alpha Basilisk",
    primalName: "MegaBasilisk_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/Basilisk/MegaBasilisk_Character_BP.MegaBasilisk_Character_BP'",
  },
  {
    label: "Alpha Blood Crystal Wyvern",
    primalName: "CrystalWyvern_Character_BP_Mega_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/CrystalWyvern/CrystalWyvern_Character_BP_Mega.CrystalWyvern_Character_BP_Mega'",
  },
  {
    label: "Alpha Crystal Wyvern Queen",
    primalName: "CrystalWyvern_Character_BP_Boss_Hard_C",
    blueprintPath:
      "Blueprint'/Game/Mods/CrystalIsles/Assets/Dinos/CIBoss/CrystalWyvern_Character_BP_Boss_Hard.CrystalWyvern_Character_BP_Boss_Hard'",
  },
  {
    label: "Alpha Dragon",
    primalName: "Dragon_Character_BP_Boss_Hard_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dragon/Dragon_Character_BP_Boss_Hard.Dragon_Character_BP_Boss_Hard'",
  },
  {
    label: "Alpha Karkinos",
    primalName: "MegaCrab_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/Crab/MegaCrab_Character_BP.MegaCrab_Character_BP'",
  },
  {
    label: "Alpha King Titan",
    primalName: "KingKaiju_Character_BP_Alpha_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/KingKaiju/KingKaiju_Character_BP_Alpha.KingKaiju_Character_BP_Alpha'",
  },
  {
    label: "Alpha Manticore",
    primalName: "Manticore_Character_BP_Hard_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Manticore/Manticore_Character_BP_Hard.Manticore_Character_BP_Hard'",
  },
  {
    label: "Alpha Surface Reaper King",
    primalName: "MegaXenomorph_Character_BP_Male_Surface_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/Nameless/MegaXenomorph_Character_BP_Male_Surface.MegaXenomorph_Character_BP_Male_Surface'",
  },
  {
    label: "Amargasaurus",
    primalName: "Amargasaurus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/LostIsland/Dinos/Amargasaurus/Amargasaurus_Character_BP.Amargasaurus_Character_BP'",
  },
  {
    label: "Ammonite",
    primalName: "Ammonite_Character_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Ammonite/Ammonite_Character.Ammonite_Character'",
  },
  {
    label: "Anglerfish",
    primalName: "Angler_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Anglerfish/Angler_Character_BP.Angler_Character_BP'",
  },
  {
    label: "Ankylosaurus",
    primalName: "Ankylo_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Ankylo/Ankylo_Character_BP.Ankylo_Character_BP'",
  },
  {
    label: "Araneo",
    primalName: "SpiderS_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Spider-Small/SpiderS_Character_BP.SpiderS_Character_BP'",
  },
  {
    label: "Archaeopteryx",
    primalName: "Archa_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Archaeopteryx/Archa_Character_BP.Archa_Character_BP'",
  },
  {
    label: "Argentavis",
    primalName: "Argent_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Argentavis/Argent_Character_BP.Argent_Character_BP'",
  },
  {
    label: "Arthropluera",
    primalName: "Arthro_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Arthropluera/Arthro_Character_BP.Arthro_Character_BP'",
  },
  {
    label: "Astrocetus",
    primalName: "SpaceWhale_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/SpaceWhale/SpaceWhale_Character_BP.SpaceWhale_Character_BP'",
  },
  {
    label: "Astrodelphis",
    primalName: "SpaceDolphin_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis2/Dinos/SpaceDolphin/SpaceDolphin_Character_BP.SpaceDolphin_Character_BP'",
  },
  {
    label: "Baryonyx",
    primalName: "Baryonyx_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Baryonyx/Baryonyx_Character_BP.Baryonyx_Character_BP'",
  },
  {
    label: "Basilisk",
    primalName: "Basilisk_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/Basilisk/Basilisk_Character_BP.Basilisk_Character_BP'",
  },
  {
    label: "Basilisk Ghost",
    primalName: "Ghost_Basilisk_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/Basilisk/Ghost_Basilisk_Character_BP.Ghost_Basilisk_Character_BP'",
  },
  {
    label: "Basilosaurus",
    primalName: "Basilosaurus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Basilosaurus/Basilosaurus_Character_BP.Basilosaurus_Character_BP'",
  },
  {
    label: "Beelzebufo",
    primalName: "Toad_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Toad/Toad_Character_BP.Toad_Character_BP'",
  },
  {
    label: "Beta Crystal Wyvern Queen",
    primalName: "CrystalWyvern_Character_BP_Boss_Medium_C",
    blueprintPath:
      "Blueprint'/Game/Mods/CrystalIsles/Assets/Dinos/CIBoss/CrystalWyvern_Character_BP_Boss_Medium.CrystalWyvern_Character_BP_Boss_Medium'",
  },
  {
    label: "Beta Dragon",
    primalName: "Dragon_Character_BP_Boss_Medium_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dragon/Dragon_Character_BP_Boss_Medium.Dragon_Character_BP_Boss_Medium'",
  },
  {
    label: "Beta King Titan",
    primalName: "KingKaiju_Character_BP_Beta_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/KingKaiju/KingKaiju_Character_BP_Beta.KingKaiju_Character_BP_Beta'",
  },
  {
    label: "Beta Manticore",
    primalName: "Manticore_Character_BP_Medium_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Manticore/Manticore_Character_BP_Medium.Manticore_Character_BP_Medium'",
  },
  {
    label: "Bloodstalker",
    primalName: "BogSpider_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BogSpider/BogSpider_Character_BP.BogSpider_Character_BP'",
  },
  {
    label: "Bone Fire Wyvern",
    primalName: "Bone_MegaWyvern_Character_BP_Fire_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Wyvern/Bone_MegaWyvern_Character_BP_Fire.Bone_MegaWyvern_Character_BP_Fire'",
  },
  {
    label: "Brontosaurus",
    primalName: "Sauropod_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Sauropod/Sauropod_Character_BP.Sauropod_Character_BP'",
  },
  {
    label: "Broodmother Lysrix",
    primalName: "SpiderL_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Spider-Large/SpiderL_Character_BP.SpiderL_Character_BP'",
  },
  {
    label: "Bulbdog",
    primalName: "LanternPug_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/LanternPug/LanternPug_Character_BP.LanternPug_Character_BP'",
  },
  {
    label: "Bulbdog Ghost",
    primalName: "Ghost_LanternPug_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/LanternPug/Ghost_LanternPug_Character_BP.Ghost_LanternPug_Character_BP'",
  },
  {
    label: "Carbonemys",
    primalName: "Turtle_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Turtle/Turtle_Character_BP.Turtle_Character_BP'",
  },
  {
    label: "Carcharodontosaurus",
    primalName: "Carcha_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Carcharodontosaurus/Carcha_Character_BP.Carcha_Character_BP'",
  },
  {
    label: "Carnotaurus",
    primalName: "Carno_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Carno/Carno_Character_BP.Carno_Character_BP'",
  },
  {
    label: "Castoroides",
    primalName: "Beaver_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Beaver/Beaver_Character_BP.Beaver_Character_BP'",
  },
  {
    label: "Chalicotherium",
    primalName: "Chalico_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Chalicotherium/Chalico_Character_BP.Chalico_Character_BP'",
  },
  {
    label: "Chalk Golem",
    primalName: "ChalkGolem_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Mods/Valguero/Assets/Dinos/RockGolem/ChalkGolem/ChalkGolem_Character_BP.ChalkGolem_Character_BP'",
  },
  {
    label: "Ceratosaurus",
    primalName: "Ceratosaurus_Character_BP_ASA_C",
    blueprintPath:
      "Blueprint'/Game/ASA/Dinos/Ceratosaurus/Dinos/Ceratosaurus_Character_BP_ASA.Ceratosaurus_Character_BP_ASA'",
  },
  {
    label: "Cnidaria",
    primalName: "Cnidaria_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Cnidaria/Cnidaria_Character_BP.Cnidaria_Character_BP'",
  },
  {
    label: "Coelacanth",
    primalName: "Coel_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Coelacanth/Coel_Character_BP.Coel_Character_BP'",
  },
  {
    label: "Compy",
    primalName: "Compy_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Compy/Compy_Character_BP.Compy_Character_BP'",
  },
  {
    label: "Corrupted Arthropluera",
    primalName: "Arthro_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Arthropluera/Arthro_Character_BP_Corrupt.Arthro_Character_BP_Corrupt'",
  },
  {
    label: "Corrupted Carnotaurus",
    primalName: "Carno_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Carno/Carno_Character_BP_Corrupt.Carno_Character_BP_Corrupt'",
  },
  {
    label: "Corrupted Chalicotherium",
    primalName: "Chalico_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Chalicotherium/Chalico_Character_BP_Corrupt.Chalico_Character_BP_Corrupt'",
  },
  {
    label: "Corrupted Dilophosaur",
    primalName: "Dilo_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Dilo/Dilo_Character_BP_Corrupt.Dilo_Character_BP_Corrupt'",
  },
  {
    label: "Corrupted Dimorphodon",
    primalName: "Dimorph_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Dimorphodon/Dimorph_Character_BP_Corrupt.Dimorph_Character_BP_Corrupt'",
  },
  {
    label: "Corrupted Giganotosaurus",
    primalName: "Gigant_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Giganotosaurus/Gigant_Character_BP_Corrupt.Gigant_Character_BP_Corrupt'",
  },
  {
    label: "Corrupted Paraceratherium",
    primalName: "Paracer_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Paraceratherium/Paracer_Character_BP_Corrupt.Paracer_Character_BP_Corrupt'",
  },
  {
    label: "Corrupted Pteranodon",
    primalName: "Ptero_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Ptero/Ptero_Character_BP_Corrupt.Ptero_Character_BP_Corrupt'",
  },
  {
    label: "Corrupted Raptor",
    primalName: "Raptor_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Raptor/Raptor_Character_BP_Corrupt.Raptor_Character_BP_Corrupt'",
  },
  {
    label: "Corrupted Reaper King",
    primalName: "Xenomorph_Character_BP_Male_Tamed_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Nameless/Xenomorph_Character_BP_Male_Tamed_Corrupt.Xenomorph_Character_BP_Male_Tamed_Corrupt'",
  },
  {
    label: "Corrupted Rex",
    primalName: "Rex_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Rex/Rex_Character_BP_Corrupt.Rex_Character_BP_Corrupt'",
  },
  {
    label: "Corrupted Rock Drake",
    primalName: "RockDrake_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/RockDrake/RockDrake_Character_BP_Corrupt.RockDrake_Character_BP_Corrupt'",
  },
  {
    label: "Corrupted Spino",
    primalName: "Spino_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Spino/Spino_Character_BP_Corrupt.Spino_Character_BP_Corrupt'",
  },
  {
    label: "Corrupted Stegosaurus",
    primalName: "Stego_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Stego/Stego_Character_BP_Corrupt.Stego_Character_BP_Corrupt'",
  },
  {
    label: "Corrupted Triceratops",
    primalName: "Trike_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Trike/Trike_Character_BP_Corrupt.Trike_Character_BP_Corrupt'",
  },
  {
    label: "Corrupted Wyvern",
    primalName: "Wyvern_Character_BP_Fire_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Wyvern/Wyvern_Character_BP_Fire_Corrupt.Wyvern_Character_BP_Fire_Corrupt'",
  },
  {
    label: "Crystal Wyvern (Blood)",
    primalName: "CrystalWyvern_Character_BP_Blood_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/CrystalWyvern/CrystalWyvern_Character_BP_Blood.CrystalWyvern_Character_BP_Blood'",
  },
  {
    label: "Crystal Wyvern (Ember)",
    primalName: "CrystalWyvern_Character_BP_Ember_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/CrystalWyvern/CrystalWyvern_Character_BP_Ember.CrystalWyvern_Character_BP_Ember'",
  },
  {
    label: "Crystal Wyvern (Tropical)",
    primalName: "CrystalWyvern_Character_BP_WS_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/CrystalWyvern/CrystalWyvern_Character_BP_WS.CrystalWyvern_Character_BP_WS'",
  },
  {
    label: "Daeodon",
    primalName: "Daeodon_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Daeodon/Daeodon_Character_BP.Daeodon_Character_BP'",
  },
  {
    label: "Deathworm",
    primalName: "Deathworm_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/DeathWorm/DeathWorm_Character_BP.DeathWorm_Character_BP'",
  },
  {
    label: "Defense Unit",
    primalName: "Defender_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Tank/Defender_Character_BP.Defender_Character_BP'",
  },
  {
    label: "Deinonychus",
    primalName: "Deinonychus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Raptor/Uberraptor/Deinonychus_Character_BP.Deinonychus_Character_BP'",
  },
  {
    label: "Deinosuchus",
    primalName: "DeinosuchusASA_Character_BP",
    blueprintPath:
      "Blueprint'/Game/ASA/Dinos/Deinosuchus/DeinosuchusASA_Character_BP.DeinosuchusASA_Character_BP_C'",
  },
  {
    label: "Desert Titan",
    primalName: "DesertKaiju_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/DesertKaiju/DesertKaiju_Character_BP.DesertKaiju_Character_BP'",
  },
  {
    label: "Desert Titan Flock",
    primalName: "DesertKaiju_FirstFlockChar_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/DesertKaiju/DesertKaiju_FirstFlockChar_BP.DesertKaiju_FirstFlockChar_BP'",
  },
  {
    label: "Dilophosaur",
    primalName: "Dilo_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dilo/Dilo_Character_BP.Dilo_Character_BP'",
  },
  {
    label: "Dimetrodon",
    primalName: "Dimetro_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dimetrodon/Dimetro_Character_BP.Dimetro_Character_BP'",
  },
  {
    label: "Dimorphodon",
    primalName: "Dimorph_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dimorphodon/Dimorph_Character_BP.Dimorph_Character_BP'",
  },
  {
    label: "Dinopithecus",
    primalName: "Dinopithecus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/LostIsland/Dinos/Dinopithecus/Dinopithecus_Character_BP.Dinopithecus_Character_BP'",
  },
  {
    label: "Dinopithecus King (Alpha)",
    primalName: "BossDinopithecus_Character_BP_Hard_C",
    blueprintPath:
      "Blueprint'/Game/LostIsland/Boss/BossDinopithecus_Character_BP_Hard.BossDinopithecus_Character_BP_Hard'",
  },
  {
    label: "Dinopithecus King (Beta)",
    primalName: "BossDinopithecus_Character_BP_Medium_C",
    blueprintPath:
      "Blueprint'/Game/LostIsland/Boss/BossDinopithecus_Character_BP_Medium.BossDinopithecus_Character_BP_Medium'",
  },
  {
    label: "Dinopithecus King (Gamma)",
    primalName: "BossDinopithecus_Character_BP_Easy_C",
    blueprintPath:
      "Blueprint'/Game/LostIsland/Boss/BossDinopithecus_Character_BP_Easy.BossDinopithecus_Character_BP_Easy'",
  },
  {
    label: "Diplocaulus",
    primalName: "Diplocaulus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Diplocaulus/Diplocaulus_Character_BP.Diplocaulus_Character_BP'",
  },
  {
    label: "Diplodocus",
    primalName: "Diplodocus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Diplodocus/Diplodocus_Character_BP.Diplodocus_Character_BP'",
  },
  {
    label: "Direbear",
    primalName: "Direbear_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Direbear/Direbear_Character_BP.Direbear_Character_BP'",
  },
  {
    label: "Direwolf",
    primalName: "Direwolf_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Direwolf/Direwolf_Character_BP.Direwolf_Character_BP'",
  },
  {
    label: "Direwolf Ghost",
    primalName: "Ghost_Direwolf_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Direwolf/Ghost_Direwolf_Character_BP.Ghost_Direwolf_Character_BP'",
  },
  {
    label: "Diseased Leech",
    primalName: "Leech_Character_Diseased_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Leech/Leech_Character_Diseased.Leech_Character_Diseased'",
  },
  {
    label: "Dodo",
    primalName: "Dodo_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dodo/Dodo_Character_BP.Dodo_Character_BP'",
  },
  {
    label: "Dodo Wyvern",
    primalName: "DodoWyvern_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/DodoWyvern/DodoWyvern_Character_BP.DodoWyvern_Character_BP'",
  },
  {
    label: "DodoRex",
    primalName: "DodoRex_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/DodoRex/DodoRex_Character_BP.DodoRex_Character_BP'",
  },
  {
    label: "Doedicurus",
    primalName: "Doed_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Doedicurus/Doed_Character_BP.Doed_Character_BP'",
  },
  {
    label: "Dung Beetle",
    primalName: "DungBeetle_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/DungBeetle/DungBeetle_Character_BP.DungBeetle_Character_BP'",
  },
  {
    label: "Dunkleosteus",
    primalName: "Dunkle_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dunkleosteus/Dunkle_Character_BP.Dunkle_Character_BP'",
  },
  {
    label: "Electrophorus",
    primalName: "Eel_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Eel/Eel_Character_BP.Eel_Character_BP'",
  },
  {
    label: "Enforcer",
    primalName: "Enforcer_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Enforcer/Enforcer_Character_BP.Enforcer_Character_BP'",
  },
  {
    label: "Enraged Corrupted Rex",
    primalName: "MegaRex_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Rex/MegaRex_Character_BP_Corrupt.MegaRex_Character_BP_Corrupt'",
  },
  {
    label: "Enraged Triceratops",
    primalName: "MegaTrike_Character_BP_Corrupt_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Corrupt/Trike/MegaTrike_Character_BP_Corrupt.MegaTrike_Character_BP_Corrupt'",
  },
  {
    label: "Equus",
    primalName: "Equus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Equus/Equus_Character_BP.Equus_Character_BP'",
  },
  {
    label: "Eurypterid",
    primalName: "Euryp_Character_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Eurypterid/Euryp_Character.Euryp_Character'",
  },
  {
    label: "Fasolasuchus",
    primalName: "Fasola_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ASA/Dinos/Fasolasuchus/Fasola_Character_BP.Fasola_Character_BP'",
  },
  {
    label: "Featherlight",
    primalName: "LanternBird_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/LanternBird/LanternBird_Character_BP.LanternBird_Character_BP'",
  },
  {
    label: "Ferox (Large)",
    primalName: "Shapeshifter_Small_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/Shapeshifter/Shapeshifter_Small/Shapeshifter_Small_Character_BP.Shapeshifter_Small_Character_BP'",
  },
  {
    label: "Ferox (Small)",
    primalName: "Shapeshifter_Small_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/Shapeshifter/Shapeshifter_Small/Shapeshifter_Small_Character_BP.Shapeshifter_Small_Character_BP'",
  },
  {
    label: "Fire Wyvern",
    primalName: "Wyvern_Character_BP_Fire_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Wyvern/Wyvern_Character_BP_Fire.Wyvern_Character_BP_Fire'",
  },
  {
    label: "Flying Titanomyrma",
    primalName: "FlyingAnt_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Ant/FlyingAnt_Character_BP.FlyingAnt_Character_BP'",
  },
  {
    label: "Forest Titan",
    primalName: "ForestKaiju_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/ForestKaiju/ForestKaiju_Character_BP.ForestKaiju_Character_BP'",
  },
  {
    label: "Forest Wyvern",
    primalName: "Wyvern_Character_BP_Fire_Minion_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/ForestKaiju/Minion/Wyvern_Character_BP_Fire_Minion.Wyvern_Character_BP_Fire_Minion'",
  },
  {
    label: "Gacha",
    primalName: "Gacha_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Gacha/Gacha_Character_BP.Gacha_Character_BP'",
  },
  {
    label: "Gacha Claus",
    primalName: "Gacha_Claus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Gacha/Gacha_Claus_Character_BP.Gacha_Claus_Character_BP'",
  },
  {
    label: "Gallimimus",
    primalName: "Galli_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Gallimimus/Galli_Character_BP.Galli_Character_BP'",
  },
  {
    label: "Gamma Crystal Wyvern Queen",
    primalName: "CrystalWyvern_Character_BP_Boss_Easy_C",
    blueprintPath:
      "Blueprint'/Game/Mods/CrystalIsles/Assets/Dinos/CIBoss/CrystalWyvern_Character_BP_Boss_Easy.CrystalWyvern_Character_BP_Boss_Easy'",
  },
  {
    label: "Gamma Dragon",
    primalName: "Dragon_Character_BP_Boss_Easy_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dragon/Dragon_Character_BP_Boss_Easy.Dragon_Character_BP_Boss_Easy'",
  },
  {
    label: "Gamma King Titan",
    primalName: "KingKaiju_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/KingKaiju/KingKaiju_Character_BP.KingKaiju_Character_BP'",
  },
  {
    label: "Gamma Manticore",
    primalName: "Manticore_Character_BP_Easy_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Manticore/Manticore_Character_BP_Easy.Manticore_Character_BP_Easy'",
  },
  {
    label: "Gasbags",
    primalName: "GasBags_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/GasBag/GasBags_Character_BP.GasBags_Character_BP'",
  },
  {
    label: "Giant Bee",
    primalName: "Bee_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Bee/Bee_Character_BP.Bee_Character_BP'",
  },
  {
    label: "Giant Worker Bee",
    primalName: "HoneyBee_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Mods/CrystalIsles/Assets/Dinos/HoneyBee/HoneyBee_Character_BP.HoneyBee_Character_BP'",
  },
  {
    label: "Giganotosaurus",
    primalName: "Gigant_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Giganotosaurus/Gigant_Character_BP.Gigant_Character_BP'",
  },
  {
    label: "Gigantopithecus",
    primalName: "Bigfoot_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Bigfoot/Bigfoot_Character_BP.Bigfoot_Character_BP'",
  },
  {
    label: "Gigantoraptor",
    primalName: "Gigantoraptor_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ASA/Dinos/Gigantoraptor/Gigantoraptor_Character_BP.Gigantoraptor_Character_BP'",
  },
  {
    label: "Glowbug",
    primalName: "Lightbug_Character_BaseBP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/Lightbug/Lightbug_Character_BaseBP.Lightbug_Character_BaseBP'",
  },
  {
    label: "Glowtail",
    primalName: "LanternLizard_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/LanternLizard/LanternLizard_Character_BP.LanternLizard_Character_BP'",
  },
  {
    label: "Griffin",
    primalName: "Griffin_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Griffin/Griffin_Character_BP.Griffin_Character_BP'",
  },
  {
    label: "Hesperornis",
    primalName: "Hesperornis_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Hesperornis/Hesperornis_Character_BP.Hesperornis_Character_BP'",
  },
  {
    label: "Hyaenodon",
    primalName: "Hyaenodon_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Hyaenodon/Hyaenodon_Character_BP.Hyaenodon_Character_BP'",
  },
  {
    label: "Ice Golem",
    primalName: "IceGolem_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/IceGolem/IceGolem_Character_BP.IceGolem_Character_BP'",
  },
  {
    label: "Ice Titan",
    primalName: "IceKaiju_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/IceKaiju/IceKaiju_Character_BP.IceKaiju_Character_BP'",
  },
  {
    label: "Ice Wyvern",
    primalName: "Ragnarok_Wyvern_Override_Ice_C",
    blueprintPath:
      "Blueprint'/Game/Mods/Ragnarok/Custom_Assets/Dinos/Wyvern/Ice_Wyvern/Ragnarok_Wyvern_Override_Ice.Ragnarok_Wyvern_Override_Ice'",
  },
  {
    label: "Ichthyornis",
    primalName: "Ichthyornis_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Ichthyornis/Ichthyornis_Character_BP.Ichthyornis_Character_BP'",
  },
  {
    label: "Ichthyosaurus",
    primalName: "Dolphin_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dolphin/Dolphin_Character_BP.Dolphin_Character_BP'",
  },
  {
    label: "Iguanodon",
    primalName: "Iguanodon_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Iguanodon/Iguanodon_Character_BP.Iguanodon_Character_BP'",
  },
  {
    label: "Insect Swarm",
    primalName: "InsectSwarmChar_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/Swarms/InsectSwarmChar_BP.InsectSwarmChar_BP'",
  },
  {
    label: "Jerboa",
    primalName: "Jerboa_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Jerboa/Jerboa_Character_BP.Jerboa_Character_BP'",
  },
  {
    label: "Jug Bug",
    primalName: "Jugbug_Character_BaseBP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Jugbug/JugBug_Character_BaseBP.JugBug_Character_BaseBP'",
  },
  {
    label: "Kairuku",
    primalName: "Kairuku_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Kairuku/Kairuku_Character_BP.Kairuku_Character_BP'",
  },
  {
    label: "Kaprosuchus",
    primalName: "Kaprosuchus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Kaprosuchus/Kaprosuchus_Character_BP.Kaprosuchus_Character_BP'",
  },
  {
    label: "Karkinos",
    primalName: "Crab_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/Crab/Crab_Character_BP.Crab_Character_BP'",
  },
  {
    label: "Kentrosaurus",
    primalName: "Kentro_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Kentrosaurus/Kentro_Character_BP.Kentro_Character_BP'",
  },
  {
    label: "Lamprey",
    primalName: "Lamprey_Character_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/Lamprey/Lamprey_Character.Lamprey_Character'",
  },
  {
    label: "Leech",
    primalName: "Leech_Character_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Leech/Leech_Character.Leech_Character'",
  },
  {
    label: "Leedsichthys",
    primalName: "Leedsichthys_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Leedsichthys/Leedsichthys_Character_BP.Leedsichthys_Character_BP'",
  },
  {
    label: "Lightning Wyvern",
    primalName: "Wyvern_Character_BP_Lightning_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Wyvern/Wyvern_Character_BP_Lightning.Wyvern_Character_BP_Lightning'",
  },
  {
    label: "Liopleurodon",
    primalName: "Liopleurodon_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Liopleurodon/Liopleurodon_Character_BP.Liopleurodon_Character_BP'",
  },
  {
    label: "Lymantria",
    primalName: "Moth_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Moth/Moth_Character_BP.Moth_Character_BP'",
  },
  {
    label: "Lystrosaurus",
    primalName: "Lystro_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Lystrosaurus/Lystro_Character_BP.Lystro_Character_BP'",
  },
  {
    label: "Maewing",
    primalName: "MilkGlider_character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis2/Dinos/MilkGlider/MilkGlider_Character_BP.MilkGlider_Character_BP'",
  },
  {
    label: "Magmasaur",
    primalName: "Cherufe_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/Cherufe/Cherufe_Character_BP.Cherufe_Character_BP'",
  },
  {
    label: "Mammoth",
    primalName: "Mammoth_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Mammoth/Mammoth_Character_BP.Mammoth_Character_BP'",
  },
  {
    label: "Managarmr",
    primalName: "IceJumper_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/IceJumper/IceJumper_Character_BP.IceJumper_Character_BP'",
  },
  {
    label: "Manta",
    primalName: "Manta_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Manta/Manta_Character_BP.Manta_Character_BP'",
  },
  {
    label: "Mantis",
    primalName: "Mantis_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Mantis/Mantis_Character_BP.Mantis_Character_BP'",
  },
  {
    label: "Mantis Ghost",
    primalName: "Ghost_Mantis_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Mantis/Ghost_Mantis_Character_BP.Ghost_Mantis_Character_BP'",
  },
  {
    label: "Mega Mek",
    primalName: "MegaMek_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Mek/MegaMek_Character_BP.MegaMek_Character_BP'",
  },
  {
    label: "Megachelon",
    primalName: "GiantTurtle_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/GiantTurtle/GiantTurtle_Character_BP.GiantTurtle_Character_BP'",
  },
  {
    label: "Megalania",
    primalName: "Megalania_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Megalania/Megalania_Character_BP.Megalania_Character_BP'",
  },
  {
    label: "Megaloceros",
    primalName: "Stag_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Stag/Stag_Character_BP.Stag_Character_BP'",
  },
  {
    label: "Megalodon",
    primalName: "Megalodon_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Megalodon/Megalodon_Character_BP.Megalodon_Character_BP'",
  },
  {
    label: "Megalosaurus",
    primalName: "Megalosaurus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Megalosaurus/Megalosaurus_Character_BP.Megalosaurus_Character_BP'",
  },
  {
    label: "Meganeura",
    primalName: "Dragonfly_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dragonfly/Dragonfly_Character_BP.Dragonfly_Character_BP'",
  },
  {
    label: "Megapithecus",
    primalName: "Gorilla_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Gorilla/Gorilla_Character_BP.Gorilla_Character_BP'",
  },
  {
    label: "Megatherium",
    primalName: "Megatherium_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Megatherium/Megatherium_Character_BP.Megatherium_Character_BP'",
  },
  {
    label: "Mek",
    primalName: "Mek_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Mek/Mek_Character_BP.Mek_Character_BP'",
  },
  {
    label: "Mesopithecus",
    primalName: "Monkey_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Monkey/Monkey_Character_BP.Monkey_Character_BP'",
  },
  {
    label: "Microbe Swarm",
    primalName: "MicrobeSwarmChar_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/Swarms/MicrobeSwarmChar_BP.MicrobeSwarmChar_BP'",
  },
  {
    label: "Microraptor",
    primalName: "Microraptor_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Microraptor/Microraptor_Character_BP.Microraptor_Character_BP'",
  },
  {
    label: "Morellatops",
    primalName: "camelsaurus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Camelsaurus/camelsaurus_Character_BP.camelsaurus_Character_BP'",
  },
  {
    label: "Mosasaurus",
    primalName: "Mosa_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Mosasaurus/Mosa_Character_BP.Mosa_Character_BP'",
  },
  {
    label: "Moschops",
    primalName: "Moschops_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Moschops/Moschops_Character_BP.Moschops_Character_BP'",
  },
  {
    label: "Nameless",
    primalName: "ChupaCabra_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/ChupaCabra/ChupaCabra_Character_BP.ChupaCabra_Character_BP'",
  },
  {
    label: "Noglin",
    primalName: "BrainSlug_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis2/Dinos/BrainSlug/BrainSlug_Character_BP.BrainSlug_Character_BP'",
  },
  {
    label: "Oasisaur",
    primalName: "Oasisaur_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Packs/Frontier/Dinos/Oasisaur/Oasisaur_Character_BP.Oasisaur_Character_BP'",
  },
  {
    label: "Oil Jug Bug",
    primalName: "Jugbug_Oil_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Jugbug/Jugbug_Oil_Character_BP.Jugbug_Oil_Character_BP'",
  },
  {
    label: "Onychonycteris",
    primalName: "Bat_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Bat/Bat_Character_BP.Bat_Character_BP'",
  },
  {
    label: "Otter",
    primalName: "Otter_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Otter/Otter_Character_BP.Otter_Character_BP'",
  },
  {
    label: "Oviraptor",
    primalName: "Oviraptor_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Oviraptor/Oviraptor_Character_BP.Oviraptor_Character_BP'",
  },
  {
    label: "Ovis",
    primalName: "Sheep_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Sheep/Sheep_Character_BP.Sheep_Character_BP'",
  },
  {
    label: "Pachy",
    primalName: "Pachy_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Pachy/Pachy_Character_BP.Pachy_Character_BP'",
  },
  {
    label: "Pachyrhinosaurus",
    primalName: "Pachyrhino_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Pachyrhinosaurus/Pachyrhino_Character_BP.Pachyrhino_Character_BP'",
  },
  {
    label: "Paraceratherium",
    primalName: "Paracer_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Paraceratherium/Paracer_Character_BP.Paracer_Character_BP'",
  },
  {
    label: "Parasaurolophus",
    primalName: "Para_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Para/Para_Character_BP.Para_Character_BP'",
  },
  {
    label: "Pegomastax",
    primalName: "Pegomastax_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Pegomastax/Pegomastax_Character_BP.Pegomastax_Character_BP'",
  },
  {
    label: "Pelagornis",
    primalName: "Pela_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Pelagornis/Pela_Character_BP.Pela_Character_BP'",
  },
  {
    label: "Phiomia",
    primalName: "Phiomia_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Phiomia/Phiomia_Character_BP.Phiomia_Character_BP'",
  },
  {
    label: "Phoenix",
    primalName: "Phoenix_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Phoenix/Phoenix_Character_BP.Phoenix_Character_BP'",
  },
  {
    label: "Piranha",
    primalName: "Piranha_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Piranha/Piranha_Character_BP.Piranha_Character_BP'",
  },
  {
    label: "Plesiosaur",
    primalName: "Plesiosaur_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Plesiosaur/Plesiosaur_Character_BP.Plesiosaur_Character_BP'",
  },
  {
    label: "Poison Wyvern",
    primalName: "Wyvern_Character_BP_Poison_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Wyvern/Wyvern_Character_BP_Poison.Wyvern_Character_BP_Poison'",
  },
  {
    label: "Procoptodon",
    primalName: "Procoptodon_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Procoptodon/Procoptodon_Character_BP.Procoptodon_Character_BP'",
  },
  {
    label: "Pteranodon",
    primalName: "Ptero_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Ptero/Ptero_Character_BP.Ptero_Character_BP'",
  },
  {
    label: "Pulmonoscorpius",
    primalName: "Scorpion_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Scorpion/Scorpion_Character_BP.Scorpion_Character_BP'",
  },
  {
    label: "Purlovia",
    primalName: "Purlovia_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Purlovia/Purlovia_Character_BP.Purlovia_Character_BP'",
  },
  {
    label: "Pyromane",
    primalName: "FireLion_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ASA/Dinos/FireLion/FireLion_Character_BP.FireLion_Character_BP'",
  },
  {
    label: "Queen Bee",
    primalName: "Bee_Queen_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Bee/Bee_Queen_Character_BP.Bee_Queen_Character_BP'",
  },
  {
    label: "Quetzalcoatlus",
    primalName: "Quetz_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Quetzalcoatlus/Quetz_Character_BP.Quetz_Character_BP'",
  },
  {
    label: "Raptor",
    primalName: "Raptor_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Raptor/Raptor_Character_BP.Raptor_Character_BP'",
  },
  {
    label: "Ravager",
    primalName: "CaveWolf_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/CaveWolf/CaveWolf_Character_BP.CaveWolf_Character_BP'",
  },
  {
    label: "Reaper King",
    primalName: "Xenomorph_Character_BP_Male_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/Nameless/Xenomorph_Character_BP_Male.Xenomorph_Character_BP_Male'",
  },
  {
    label: "Reaper King (Tamed)",
    primalName: "Xenomorph_Character_BP_Male_Tamed_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/Nameless/Xenomorph_Character_BP_Male_Tamed.Xenomorph_Character_BP_Male_Tamed'",
  },
  {
    label: "Reaper Queen",
    primalName: "Xenomorph_Character_BP_Female_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/Nameless/Xenomorph_Character_BP_Female.Xenomorph_Character_BP_Female'",
  },
  {
    label: "Rex",
    primalName: "Rex_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Rex/Rex_Character_BP.Rex_Character_BP'",
  },
  {
    label: "Rex Ghost",
    primalName: "Ghost_Rex_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Rex/Ghost_Rex_Character_BP.Ghost_Rex_Character_BP'",
  },
  {
    label: "Rhyniognatha",
    primalName: "Rhynio_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Rhyniognatha/Rhynio_Character_BP.Rhynio_Character_BP'",
  },
  {
    label: "Rock Drake",
    primalName: "RockDrake_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/RockDrake/RockDrake_Character_BP.RockDrake_Character_BP'",
  },
  {
    label: "Rock Elemental",
    primalName: "RockGolem_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/RockGolem/RockGolem_Character_BP.RockGolem_Character_BP'",
  },
  {
    label: "Rockwell",
    primalName: "Rockwell_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Boss/Rockwell/Rockwell_Character_BP.Rockwell_Character_BP'",
  },
  {
    label: "Rockwell (Alpha)",
    primalName: "Rockwell_Character_BP_Hard_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Boss/Rockwell/Rockwell_Character_BP_Hard.Rockwell_Character_BP_Hard'",
  },
  {
    label: "Rockwell (Beta)",
    primalName: "Rockwell_Character_BP_Medium_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Boss/Rockwell/Rockwell_Character_BP_Medium.Rockwell_Character_BP_Medium'",
  },
  {
    label: "Rockwell (Gamma)",
    primalName: "Rockwell_Character_BP_Easy_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Boss/Rockwell/Rockwell_Character_BP_Easy.Rockwell_Character_BP_Easy'",
  },
  {
    label: "Rockwell Tentacle",
    primalName: "RockwellTentacle_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Boss/RockwellTentacle/RockwellTentacle_Character_BP.RockwellTentacle_Character_BP'",
  },
  {
    label: "Rockwell Tentacle (Alpha)",
    primalName: "RockwellTentacle_Character_BP_Alpha_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Boss/RockwellTentacle/RockwellTentacle_Character_BP_Alpha.RockwellTentacle_Character_BP_Alpha'",
  },
  {
    label: "Rockwell Tentacle (Beta)",
    primalName: "RockwellTentacle_Character_BP_Beta_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Boss/RockwellTentacle/RockwellTentacle_Character_BP_Beta.RockwellTentacle_Character_BP_Beta'",
  },
  {
    label: "Rockwell Tentacle (Gamma)",
    primalName: "RockwellTentacle_Character_BP_Gamma_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Boss/RockwellTentacle/RockwellTentacle_Character_BP_Gamma.RockwellTentacle_Character_BP_Gamma'",
  },
  {
    label: "Roll Rat",
    primalName: "MoleRat_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/MoleRat/MoleRat_Character_BP.MoleRat_Character_BP'",
  },
  {
    label: "Rubble Golem",
    primalName: "RubbleGolem_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/RockGolem/RubbleGolem_Character_BP.RubbleGolem_Character_BP'",
  },
  {
    label: "Sabertooth",
    primalName: "Saber_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Saber/Saber_Character_BP.Saber_Character_BP'",
  },
  {
    label: "Sabertooth Salmon",
    primalName: "Salmon_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Salmon/Salmon_Character_BP.Salmon_Character_BP'",
  },
  {
    label: "Sarco",
    primalName: "Sarco_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Sarco/Sarco_Character_BP.Sarco_Character_BP'",
  },
  {
    label: "Scout",
    primalName: "Scout_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Scout/Scout_Character_BP.Scout_Character_BP'",
  },
  {
    label: "Seeker",
    primalName: "Pteroteuthis_Char_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/Pteroteuthis/Pteroteuthis_Char_BP.Pteroteuthis_Char_BP'",
  },
  {
    label: "Shadowmane",
    primalName: "LionFishLion_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis2/Dinos/LionfishLion/LionfishLion_Character_BP.LionfishLion_Character_BP'",
  },
  {
    label: "Shastasaurus",
    primalName: "Shastasaurus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ASA/Dinos/Shastasaurus/Shastasaurus_Character_BP.Shastasaurus_Character_BP'",
  },
  {
    label: "Shinehorn",
    primalName: "LanternGoat_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/LanternGoat/LanternGoat_Character_BP.LanternGoat_Character_BP'",
  },
  {
    label: "Sinomacrops",
    primalName: "Sinomacrops_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/LostIsland/Dinos/Sinomacrops/Sinomacrops_Character_BP.Sinomacrops_Character_BP'",
  },
  {
    label: "Skeletal Bronto",
    primalName: "Bone_Sauropod_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Sauropod/Bone_Sauropod_Character_BP.Bone_Sauropod_Character_BP'",
  },
  {
    label: "Skeletal Carnotaurus",
    primalName: "Bone_MegaCarno_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Carno/Bone_MegaCarno_Character_BP.Bone_MegaCarno_Character_B'",
  },
  {
    label: "Skeletal Giganotosaurus",
    primalName: "Bone_Gigant_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Giganotosaurus/Bone_Gigant_Character_BP.Bone_Gigant_Character_BP'",
  },
  {
    label: "Skeletal Jerboa",
    primalName: "Bone_Jerboa_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Jerboa/Bone_Jerboa_Character_BP.Bone_Jerboa_Character_BP'",
  },
  {
    label: "Skeletal Quetzal",
    primalName: "Bone_Quetz_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Quetzalcoatlus/Bone_Quetz_Character_BP.Bone_Quetz_Character_BP'",
  },
  {
    label: "Skeletal Raptor",
    primalName: "Bone_MegaRaptor_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Raptor/Bone_MegaRaptor_Character_BP.Bone_MegaRaptor_Character_BP'",
  },
  {
    label: "Skeletal Rex",
    primalName: "Bone_MegaRex_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Rex/Bone_MegaRex_Character_BP.Bone_MegaRex_Character_BP'",
  },
  {
    label: "Skeletal Stego",
    primalName: "Bone_Stego_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Stego/Bone_Stego_Character_BP'",
  },
  {
    label: "Skeletal Trike",
    primalName: "Bone_Trike_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Trike/Bone_Trike_Character_BP'",
  },
  {
    label: "Snow Owl",
    primalName: "Owl_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Owl/Owl_Character_BP.Owl_Character_BP'",
  },
  {
    label: "Snow Owl Ghost",
    primalName: "Ghost_Owl_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Owl/Ghost_Owl_Character_BP.Ghost_Owl_Character_BP'",
  },
  {
    label: "Spino",
    primalName: "Spino_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Spino/Spino_Character_BP.Spino_Character_BP'",
  },
  {
    label: "Stegosaurus",
    primalName: "Stego_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Stego/Stego_Character_BP.Stego_Character_BP'",
  },
  {
    label: "Stryder",
    primalName: "TekStrider_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis2/Dinos/TekStrider/TekStrider_Character_BP.TekStrider_Character_BP'",
  },
  {
    label: "Summoner",
    primalName: "Summoner_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis2/Dinos/Summoner/Summoner_Character_BP.Summoner_Character_BP'",
  },
  {
    label: "Super Turkey",
    primalName: "Turkey_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dodo/Turkey_Character_BP.Turkey_Character_BP'",
  },
  {
    label: "Surface Reaper King Ghost",
    primalName: "Ghost_Xenomorph_Character_BP_Male_Surface_C",
    blueprintPath:
      "Blueprint'/Game/Aberration/Dinos/Nameless/Ghost_Xenomorph_Character_BP_Male_Surface.Ghost_Xenomorph_Character_BP_Male_Surface'",
  },
  {
    label: "Tapejara",
    primalName: "Tapejara_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Tapejara/Tapejara_Character_BP.Tapejara_Character_BP'",
  },
  {
    label: "Tek Giganotosaurus",
    primalName: "BionicGigant_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Giganotosaurus/BionicGigant_Character_BP.BionicGigant_Character_BP'",
  },
  {
    label: "Tek Parasaur",
    primalName: "BionicPara_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Para/BionicPara_Character_BP.BionicPara_Character_BP'",
  },
  {
    label: "Tek Quetzal",
    primalName: "BionicQuetz_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Quetzalcoatlus/BionicQuetz_Character_BP.BionicQuetz_Character_BP'",
  },
  {
    label: "Tek Raptor",
    primalName: "BionicRaptor_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Raptor/BionicRaptor_Character_BP.BionicRaptor_Character_BP'",
  },
  {
    label: "Tek Rex",
    primalName: "BionicRex_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Rex/BionicRex_Character_BP.BionicRex_Character_BP'",
  },
  {
    label: "Tek Stego",
    primalName: "BionicStego_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Stego/BionicStego_Character_BP.BionicStego_Character_BP'",
  },
  {
    label: "Tek Triceratops",
    primalName: "BionicTrike_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Trike/BionicTrike_Character_BP.BionicTrike_Character_BP'",
  },
  {
    label: "Tek Wyvern",
    primalName: "TekWyvern_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis2/Dinos/TekWyvern/TekWyvern_Character_BP.TekWyvern_Character_BP'",
  },
  {
    label: "Terror Bird",
    primalName: "TerrorBird_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/TerrorBird/TerrorBird_Character_BP.TerrorBird_Character_BP'",
  },
  {
    label: "Therizinosaur",
    primalName: "Therizino_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Therizinosaurus/Therizino_Character_BP.Therizino_Character_BP'",
  },
  {
    label: "Thorny Dragon",
    primalName: "SpineyLizard_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/SpineyLizard/SpineyLizard_Character_BP.SpineyLizard_Character_BP'",
  },
  {
    label: "Thylacoleo",
    primalName: "Thylacoleo_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Thylacoleo/Thylacoleo_Character_BP.Thylacoleo_Character_BP'",
  },
  {
    label: "Titanoboa",
    primalName: "BoaFrill_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/BoaFrill/BoaFrill_Character_BP.BoaFrill_Character_BP'",
  },
  {
    label: "Titanomyrma",
    primalName: "Ant_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Ant/Ant_Character_BP.Ant_Character_BP'",
  },
  {
    label: "Titanosaur",
    primalName: "Titanosaur_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/titanosaur/Titanosaur_Character_BP.Titanosaur_Character_BP'",
  },
  {
    label: "Triceratops",
    primalName: "Trike_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Trike/Trike_Character_BP.Trike_Character_BP'",
  },
  {
    label: "Trilobite",
    primalName: "Trilobite_Character_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Trilobite/Trilobite_Character.Trilobite_Character'",
  },
  {
    label: "Troodon",
    primalName: "Troodon_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Troodon/Troodon_Character_BP.Troodon_Character_BP'",
  },
  {
    label: "Tropeognathus",
    primalName: "Tropeognathus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Tropeognathus/Tropeognathus_Character_BP.Tropeognathus_Character_BP'",
  },
  {
    label: "Turkey",
    primalName: "TurkeyBase_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dodo/TurkeyBase_Character_BP.TurkeyBase_Character_BP'",
  },
  {
    label: "Tusoteuthis",
    primalName: "Tusoteuthis_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Tusoteuthis/Tusoteuthis_Character_BP.Tusoteuthis_Character_BP'",
  },
  {
    label: "Unicorn",
    primalName: "Equus_Character_BP_Unicorn_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Equus/Equus_Character_BP_Unicorn.Equus_Character_BP_Unicorn'",
  },
  {
    label: "Velonasaur",
    primalName: "Spindles_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Extinction/Dinos/Spindles/Spindles_Character_BP.Spindles_Character_BP'",
  },
  {
    label: "Vulture",
    primalName: "Vulture_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Vulture/Vulture_Character_BP.Vulture_Character_BP'",
  },
  {
    label: "Water Jug Bug",
    primalName: "Jugbug_Water_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Jugbug/Jugbug_Water_Character_BP.Jugbug_Water_Character_BP'",
  },
  {
    label: "Woolly Rhino",
    primalName: "Rhino_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/WoollyRhino/Rhino_Character_BP.Rhino_Character_BP'",
  },
  {
    label: "Wyvern",
    primalName: "Wyvern_Character_BP_Base_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Wyvern/Wyvern_Character_BP_Base.Wyvern_Character_BP_Base'",
  },
  {
    label: "X-Allosaurus",
    primalName: "Volcano_Allo_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Volcano_Allosaurus/Volcano_Allo_Character_BP.Volcano_Allo_Character_BP'",
  },
  {
    label: "X-Ankylosaurus",
    primalName: "Volcano_Ankylo_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Volcano_Ankylosaurus/Volcano_Ankylo_Character_BP.Volcano_Ankylo_Character_BP'",
  },
  {
    label: "X-Argentavis",
    primalName: "Snow_Argent_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Snow_Argentavis/Snow_Argent_Character_BP.Snow_Argent_Character_BP'",
  },
  {
    label: "X-Basilosaurus",
    primalName: "Ocean_Basilosaurus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Ocean_Basilosaurus/Ocean_Basilosaurus_Character_BP.Ocean_Basilosaurus_Character_BP'",
  },
  {
    label: "X-Dunkleosteus",
    primalName: "Ocean_Dunkle_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Ocean_Dunkleosteus/Ocean_Dunkle_Character_BP.Ocean_Dunkle_Character_BP'",
  },
  {
    label: "X-Ichthyosaurus",
    primalName: "Ocean_Dolphin_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Ocean_Dolphin/Ocean_Dolphin_Character_BP.Ocean_Dolphin_Character_BP'",
  },
  {
    label: "X-Megalodon",
    primalName: "Ocean_Megalodon_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Ocean_Megalodon/Ocean_Megalodon_Character_BP.Ocean_Megalodon_Character_BP'",
  },
  {
    label: "X-Mosasaurus",
    primalName: "Ocean_Mosa_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Ocean_Mosasaurus/Ocean_Mosa_Character_BP.Ocean_Mosa_Character_BP'",
  },
  {
    label: "X-Otter",
    primalName: "Snow_Otter_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Snow_Otter/Snow_Otter_Character_BP.Snow_Otter_Character_BP'",
  },
  {
    label: "X-Paraceratherium",
    primalName: "Bog_Paracer_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/BogParaceratherium/Bog_Paracer_Character_BP.Bog_Paracer_Character_BP'",
  },
  {
    label: "X-Parasaur",
    primalName: "Bog_Para_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/BogPara/Bog_Para_Character_BP.Bog_Para_Character_BP'",
  },
  {
    label: "X-Raptor",
    primalName: "Bog_Raptor_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Bog_Raptor/Bog_Raptor_Character_BP.Bog_Raptor_Character_BP'",
  },
  {
    label: "X-Rex",
    primalName: "Volcano_Rex_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Volcano_Rex/Volcano_Rex_Character_BP.Volcano_Rex_Character_BP'",
  },
  {
    label: "X-Rock Elemental",
    primalName: "Volcano_Golem_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Lava_Golem/Volcano_Golem_Character_BP.Volcano_Golem_Character_BP'",
  },
  {
    label: "X-Sabertooth",
    primalName: "Snow_Saber_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Snow_Saber/Snow_Saber_Character_BP.Snow_Saber_Character_BP'",
  },
  {
    label: "X-Sabertooth Salmon",
    primalName: "Lunar_Salmon_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Lunar_Salmon/Lunar_Salmon_Character_BP.Lunar_Salmon_Character_BP'",
  },
  {
    label: "X-Spino",
    primalName: "Bog_Spino_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Bog_Spino/Bog_Spino_Character_BP.Bog_Spino_Character_BP'",
  },
  {
    label: "X-Tapejara",
    primalName: "Bog_Tapejara_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Bog_Tapejara/Bog_Tapejara_Character_BP.Bog_Tapejara_Character_BP'",
  },
  {
    label: "X-Triceratops",
    primalName: "Volcano_Trike_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Volcano_Trike/Volcano_Trike_Character_BP.Volcano_Trike_Character_BP'",
  },
  {
    label: "X-Woolly Rhino",
    primalName: "Snow_Rhino_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Snow_WoollyRhino/Snow_Rhino_Character_BP.Snow_Rhino_Character_BP'",
  },
  {
    label: "X-Yutyrannus",
    primalName: "Snow_Yutyrannus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/Genesis/Dinos/BiomeVariants/Snow_Yutyrannus/Snow_Yutyrannus_Character_BP.Snow_Yutyrannus_Character_BP'",
  },
  {
    label: "Yeti",
    primalName: "Yeti_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Bigfoot/Yeti_Character_BP.Yeti_Character_BP'",
  },
  {
    label: "Yutyrannus",
    primalName: "Yutyrannus_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Yutyrannus/Yutyrannus_Character_BP.Yutyrannus_Character_BP'",
  },
  {
    label: "Zombie Fire Wyvern",
    primalName: "Wyvern_Character_BP_ZombieFire_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Wyvern/Wyvern_Character_BP_ZombieFire.Wyvern_Character_BP_ZombieFire'",
  },
  {
    label: "Zombie Lightning Wyvern",
    primalName: "Wyvern_Character_BP_ZombieLightning_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Wyvern/Wyvern_Character_BP_ZombieLightning.Wyvern_Character_BP_ZombieLightning'",
  },
  {
    label: "Zombie Poison Wyvern",
    primalName: "Wyvern_Character_BP_ZombiePoison_C",
    blueprintPath:
      "Blueprint'/Game/ScorchedEarth/Dinos/Wyvern/Wyvern_Character_BP_ZombiePoison.Wyvern_Character_BP_ZombiePoison'",
  },
  {
    label: "Zomdodo",
    primalName: "ZombieDodo_Character_BP_C",
    blueprintPath:
      "Blueprint'/Game/PrimalEarth/Dinos/Dodo/ZombieDodo_Character_BP.ZombieDodo_Character_BP'",
  },
];

// OLD DO NOT USE JUST FOR REFERENCE TODO: Shouldn't be needed anymore but rewrite just in case
// export const FIX_SPECIES_MAPPINGS_QUERY = `
//   MATCH (bestOf:BestOf)
//   WITH bestOf,
//   COLLECT {
//     MATCH (species:Species)
//     WITH species, bestOf, apoc.text.sorensenDiceSimilarity(bestOf.species, species.label) AS similarity
//     MATCH (species) WHERE similarity > 0.5 RETURN species ORDER BY similarity DESC
//   } AS possibleSpecies
//   WITH bestOf, head(possibleSpecies) AS chosenSpecies
//   MERGE (bestOf)-[mo:MEMBER_OF]->(chosenSpecies)
//   RETURN bestOf, mo, chosenSpecies
// `;

export async function GET() {
  return NextResponse.json(creatureMappings, { status: 201 });
}
