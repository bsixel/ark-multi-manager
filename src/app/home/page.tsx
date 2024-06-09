"use client";
import CritterCard from "@/lib/components/cards/CritterCard";
import CreatureListingTab from "@/lib/components/tabs/CreatureListingTab";
import GenealogyTab from "@/lib/components/tabs/GenealogyTab";
import useQuery from "@/lib/hooks/useQuery";
import {
  Creature,
  NeoCreatureRelation,
  SpeciesColorsMap,
} from "@/lib/types/Creature";
import {
  Button,
  Autocomplete,
  TextField,
  Card,
  CardContent,
  Stack,
  CardActions,
  Tooltip,
  LinearProgress,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ReactFlowProvider } from "reactflow";
import { Info, Star } from "@mui/icons-material";
import {
  BestOf,
  CLEAN_SPECIES,
  LOCAL_PREFIX,
  STAT_INDICES,
  STAT_NAME_VARIANTS,
} from "@/lib/utils/constants";
import StatChip from "@/lib/components/display/StatChip";
import { GlobalContext } from "@/lib/components/layout/appBarLayout";
import ColorChip from "@/lib/components/display/ColorChip";
import { DINO_COLORS } from "@/lib/utils/ColorMappings";

type MetadataDefinition = {
  bestStats: BestOf[];
  species: string[];
  maps: string[];
};

type CreatureFetchPayload = {
  creatures: Creature[];
  relations: NeoCreatureRelation[];
  speciesColors: SpeciesColorsMap;
};

type StatFilter = { [key in STAT_NAME_VARIANTS]?: number };
type ColorFilter = { [species: string]: { [index: number]: number } };

export const SomeMaxStar = (
  <Tooltip
    placement="right-start"
    title="This creature has one or more highest stat among its species"
  >
    <Star color="warning" />
  </Tooltip>
);

async function parseJsonFile(file) {
  console.log(file);
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) =>
      resolve(JSON.parse(event.target.result as string));
    fileReader.onerror = (error) => reject(error);
    fileReader.readAsText(file);
  }).catch((err) => {
    if (err == 500) {
      // TODO: Fix to actually do things
      console.error("rip site");
    }
  });
}

export type HomeContextDefinition = {
  loading: boolean;
  loadCreatures: () => Promise<void>;
  creatures: Creature[];
  filteredCreatures: Creature[];
  relations: NeoCreatureRelation[];
  selectedCreatures: GridRowSelectionModel;
  setSelectedCreatures: (sel) => void;
  selectedCreaturesData: Creature[];
  handleDinoUpload: (event) => void;
  species: string[];
  filterSpecies: string[];
  filterMap: string;
  speciesBestStats: BestOf[];
  statFilters: Record<string, StatFilter>;
  setStatFilters: (newFilters: Record<string, StatFilter>) => void;
  colorFilters: ColorFilter;
  setColorFilters: (newFilters: ColorFilter) => void;
};

export const HomeContext = createContext<HomeContextDefinition>(null);

export default function Home() {
  const { ownershipInfo, currentTab, makeSnack } = useContext(GlobalContext);

  const [selectedCreatures, setSelectedCreatures] =
    useState<GridRowSelectionModel>([]);
  const [filterSpecies, setFilterSpecies] = useState([]);
  const [filterMap, setFilterMap] = useState(null);
  const [statFilters, setStatFilters] = useState({});
  const [colorFilters, setColorFilters] = useState<ColorFilter>({});
  const [uploadInProgress, setUploadInProgress] = useState<boolean>(false);

  // Load some stored defaults

  const {
    queryResult: { creatures, relations, speciesColors },
    exec: loadCreatures,
    isLoading: loadingCreatures,
  } = useQuery<CreatureFetchPayload>({
    url: `/api/creatures/${ownershipInfo.id}`,
    defaultValue: { creatures: [], relations: [], speciesColors: {} },
  });

  const {
    queryResult: { species, bestStats: speciesBestStats, maps: maps },
    exec: loadMetadata,
    isLoading: loadingMeta,
  } = useQuery<MetadataDefinition>({
    url: `/api/metadata/${ownershipInfo.id}`,
    defaultValue: {
      species: [],
      maps: [],
      bestStats: [],
    },
  });

  // Include an option for "all maps"
  const filterMapOptions = useMemo(() => {
    const mappedLoadedMaps = maps.map((map) => {
      return {
        label: map,
        id: map,
      };
    });
    mappedLoadedMaps.push({ label: "All Maps", id: null });
    return mappedLoadedMaps;
  }, [maps]);

  const optionableSpecies = useMemo(() => {
    return species.map((s) => s);
  }, [species]);

  useEffect(() => {
    let locallyStoredFilterMap = localStorage.getItem(
      `${LOCAL_PREFIX}filterMap`
    );
    // Null stores as stringified so, this silliness
    if (locallyStoredFilterMap == "null") {
      locallyStoredFilterMap = null;
    }
    const locallyStoredFilterMapAsOption = filterMapOptions.find(
      (m) => m.id == locallyStoredFilterMap
    );
    setFilterMap(locallyStoredFilterMapAsOption || filterMapOptions[0]);
  }, [maps, filterMapOptions]);

  const selectedCreaturesData = useMemo(() => {
    return creatures
      .filter((c) => selectedCreatures.includes(c.dinoId))
      .sort((a, b) =>
        a.species > b.species ? 1 : b.species > a.species ? -1 : 0
      );
  }, [creatures, selectedCreatures]);

  const filteredCreatures = useMemo(() => {
    return creatures.filter((creature) => {
      if (filterSpecies.length && !filterSpecies.includes(creature.species)) {
        return false;
      }
      if (filterMap?.id && filterMap.id != creature.map) {
        return false;
      }
      for (const statName of Object.values(STAT_INDICES)) {
        if (
          statFilters[creature.species]?.[statName] &&
          creature[`wild${statName}`] != statFilters[creature.species][statName]
        ) {
          return false;
        }
      }
      for (let index = 0; index < creature.colors.length; index++) {
        const creatureColor = creature.colors[index];
        const filterColor = colorFilters[creature.species]?.[index];
        if (filterColor && creatureColor != filterColor) {
          return false;
        }
      }
      return true;
    });
  }, [creatures, filterSpecies, filterMap, statFilters, colorFilters]);

  const handleDinoUpload = async (event) => {
    const dinos = [];
    if (!event?.target?.files?.length) return;
    for (const file of event.target.files) {
      dinos.push(await parseJsonFile(file));
    }

    console.log(event);
    setUploadInProgress(true);
    fetch("/api/updateDino", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dinos,
        ownershipId: ownershipInfo.id,
        map: filterMap.id,
      }),
    })
      .then(() => {
        loadCreatures();
        loadMetadata();
        makeSnack(
          "success",
          `Successfully uploaded ${dinos.length} creatures!`
        );
        event.target.files = null;
      })
      .catch((err) => {
        makeSnack("error", "Error uploading creatures!");
        console.error(err);
      })
      .finally(() => {
        setUploadInProgress(false);
      });
  };

  const loading = useMemo(() => {
    return loadingCreatures || loadingMeta || uploadInProgress;
  }, [loadingCreatures, loadingMeta, uploadInProgress]);

  const maxLevelForSpecies = useCallback(
    (selectedSpecies: string) => {
      const mapSelector = filterMap.id || "allMaps";
      const wildMax = Object.values(STAT_INDICES)
        .filter((s) => s != "Torpor")
        .reduce((sum, s) => {
          return (sum +=
            speciesBestStats[selectedSpecies][mapSelector][`wild${s}`]);
        }, 1);

      const mutatedMax = Object.values(STAT_INDICES)
        .filter((s) => s != "Torpor")
        .reduce((sum, s) => {
          return (sum +=
            speciesBestStats[selectedSpecies][mapSelector][`mutated${s}`]);
        }, 1);

      return `${wildMax} | ${wildMax + mutatedMax}`;
    },
    [speciesBestStats, filterMap]
  );

  return ownershipInfo?.id && ownershipInfo?.name ? (
    <HomeContext.Provider
      value={{
        loading,
        loadCreatures,
        creatures,
        filteredCreatures,
        relations,
        selectedCreatures,
        setSelectedCreatures,
        selectedCreaturesData,
        handleDinoUpload,
        species,
        filterSpecies,
        filterMap,
        speciesBestStats,
        statFilters,
        setStatFilters,
        colorFilters,
        setColorFilters,
      }}
    >
      <ReactFlowProvider>
        <Stack spacing={4} className="pt-20 px-4">
          <Card className="pt-2 mx-2 w-full">
            <CardActions
              sx={{
                padding: 0,
              }}
            >
              <Stack>
                <Stack spacing={2} direction={"row"} alignItems={"center"}>
                  <input
                    accept="*.json"
                    style={{ display: "none" }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={handleDinoUpload}
                  />
                  <label
                    htmlFor="raised-button-file"
                    className="text-center w-fit"
                    style={{
                      marginLeft: "8px",
                    }}
                  >
                    <Button
                      variant="contained"
                      component="span"
                      disabled={!filterMap?.id}
                    >
                      Add a creature
                    </Button>
                  </label>
                  <Button
                    variant="contained"
                    component="span"
                    onClick={() => {
                      loadCreatures();
                      loadMetadata();
                    }}
                  >
                    Refresh
                  </Button>
                  <Autocomplete
                    onChange={(e, value) => setFilterSpecies(value)}
                    value={filterSpecies}
                    disablePortal
                    multiple
                    id="combo-box-species"
                    options={optionableSpecies}
                    sx={{ width: 300 }}
                    getOptionLabel={(opt) => CLEAN_SPECIES(opt)}
                    renderInput={(params) => {
                      const { ...safeParams } = params;
                      delete safeParams["key"];
                      return (
                        <TextField
                          {...safeParams}
                          key="species-textfield"
                          label="Species..."
                        />
                      );
                    }}
                  />
                  <Autocomplete
                    onChange={(e, value) => {
                      setFilterMap(value);
                      localStorage.setItem(
                        `${LOCAL_PREFIX}filterMap`,
                        value.id
                      );
                    }}
                    isOptionEqualToValue={(option, value) => {
                      return option == value || option.id == value.id;
                    }}
                    value={filterMap}
                    disableClearable
                    disablePortal
                    id="combo-box-maps"
                    options={filterMapOptions}
                    sx={{ width: 300 }}
                    renderInput={(params) => {
                      const { ...safeParams } = params;
                      delete safeParams["key"];
                      return (
                        <TextField
                          {...safeParams}
                          key="map-textfield"
                          label="Map..."
                        />
                      );
                    }}
                  />
                </Stack>
                {loading ? (
                  <LinearProgress
                    className="ml-4 my-4 w-full"
                    color="secondary"
                  />
                ) : null}
              </Stack>
            </CardActions>
            <CardContent
              sx={{
                padding: "16px 0 16px",
              }}
            >
              {filterSpecies.length ? (
                <Box
                  padding={2}
                  mx={1}
                  mb={2}
                  sx={{
                    backgroundColor: "#3c4373",
                  }}
                >
                  <Info color="warning" /> Stats and colors for filtered
                  species:
                  <Stack direction="column" className="mt-2" spacing={2}>
                    {filterSpecies.map((selectedSpecies: string) => (
                      <div key={`filtered_${selectedSpecies}_bests`}>
                        {CLEAN_SPECIES(selectedSpecies)}{" "}
                        {`(max ${maxLevelForSpecies(selectedSpecies)})`}:
                        <Stack className="mt-2" direction="row" spacing={2}>
                          {Object.values(STAT_INDICES).map((stat) => (
                            <StatChip
                              key={`${filterSpecies}_${stat}`}
                              isSummary
                              canFilter
                              creature={
                                speciesBestStats[selectedSpecies][
                                  filterMap?.id || "allMaps"
                                ]
                              }
                              stat={stat}
                            />
                          ))}
                        </Stack>
                        <Stack className="mt-2" direction="row" spacing={2}>
                          {[0, 1, 2, 3, 4, 5].map((idx) => {
                            return (
                              <Select
                                className="w-full"
                                key={`color-filter-${selectedSpecies}-${idx}`}
                                labelId={`label-color-filter-${selectedSpecies}-${idx}`}
                                id={`color-filter-${selectedSpecies}-${idx}`}
                                value={`${colorFilters?.[selectedSpecies]?.[idx] || 0}`}
                                label="Age"
                                onChange={(event: SelectChangeEvent) => {
                                  const newColorFilters = {};
                                  species.forEach((colorFilterSpeciesEntry) => {
                                    if (
                                      colorFilterSpeciesEntry != selectedSpecies
                                    ) {
                                      newColorFilters[colorFilterSpeciesEntry] =
                                        colorFilters[colorFilterSpeciesEntry];
                                    } else {
                                      const temp = {
                                        ...colorFilters[
                                          colorFilterSpeciesEntry
                                        ],
                                      };
                                      temp[idx] = parseInt(event.target.value);
                                      newColorFilters[colorFilterSpeciesEntry] =
                                        temp;
                                    }
                                  });
                                  setColorFilters(newColorFilters);
                                }}
                              >
                                {speciesColors[selectedSpecies][idx].map(
                                  (speciesRegionColorOption) => {
                                    const itemLabel =
                                      DINO_COLORS[speciesRegionColorOption]
                                        ?.name || "Empty Region";
                                    return (
                                      <MenuItem
                                        key={`species-region-color-option-${idx}-${speciesRegionColorOption}`}
                                        value={`${speciesRegionColorOption}`}
                                        className="flex space-x-2"
                                      >
                                        <Stack direction="row">
                                          <ColorChip
                                            key={`color-chip-${selectedSpecies}-${idx}-chip`}
                                            mini
                                            hexTooltip
                                            color={speciesRegionColorOption}
                                          />
                                          <Typography
                                            className="pt-1 pl-2"
                                            fontSize={12}
                                          >
                                            {itemLabel}
                                          </Typography>
                                        </Stack>
                                      </MenuItem>
                                    );
                                  }
                                )}
                              </Select>
                            );
                          })}
                        </Stack>
                      </div>
                    ))}
                  </Stack>
                </Box>
              ) : null}
              <div className="px-2 pb-4">
                <Grid container xs={12} rowSpacing={2} columnSpacing={2}>
                  {selectedCreaturesData.map((d) => (
                    <Grid key={`selected-dino-${d.dinoId}`}>
                      <CritterCard creature={d} />
                    </Grid>
                  ))}
                </Grid>
              </div>
              <div hidden={currentTab !== 0} className="w-full h-full px-2">
                <CreatureListingTab />
              </div>
              {currentTab === 1 ? <GenealogyTab /> : null}
            </CardContent>
          </Card>
        </Stack>
      </ReactFlowProvider>
    </HomeContext.Provider>
  ) : null;
}
