import { Creature } from "@/lib/types/Creature";
import { DataGrid, GridColumnVisibilityModel } from "@mui/x-data-grid";
import { critterColumns, defaultHiddenCritterCols } from "./critterTableMeta";
import { useContext, useMemo, useState } from "react";
import { HomeContext } from "@/app/home/page";
import { DEFAULT_POST_OPTIONS } from "@/lib/utils/ApiHelper";
import { GlobalContext } from "../../layout/appBarLayout";

export default function CritterTable() {
  const { ownershipInfo } = useContext(GlobalContext);

  const {
    loading,
    filteredCreatures,
    selectedCreatures,
    setSelectedCreatures,
    maps,
  } = useContext(HomeContext);
  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<GridColumnVisibilityModel>(defaultHiddenCritterCols());

  const handleRowUpdate = async (updatedCreature, ogCreature) => {
    if (updatedCreature.name != ogCreature.name) {
      const resp = await fetch("/api/updateDino/name", {
        ...DEFAULT_POST_OPTIONS,
        body: JSON.stringify({
          ownershipId: ownershipInfo.id,
          newName: updatedCreature.name,
          dinoId: ogCreature.dinoId,
        }),
      });
      const newCreatureResp = await resp.json();
      console.log(`Updated ${ogCreature.dinoId} to`, newCreatureResp[0]);
      return newCreatureResp[0];
    } else if (updatedCreature.map != ogCreature.map) {
      if (updatedCreature.map) {
        const resp = await fetch("/api/updateDino/map", {
          ...DEFAULT_POST_OPTIONS,
          body: JSON.stringify({
            ownershipId: ownershipInfo.id,
            newMap: updatedCreature.map,
            dinoId: ogCreature.dinoId,
          }),
        });
        const newCreatureResp = await resp.json();
        console.log(`Updated ${ogCreature.dinoId} to`, newCreatureResp[0]);
        return newCreatureResp[0];
      } else {
        updatedCreature.map = ogCreature.map;
        return updatedCreature;
      }
    }
  };

  const critterColumnsToUse = useMemo(() => {
    return critterColumns(
      maps.filter((m) => !!m.id).map((m) => ({ ...m, key: m.id, value: m.id }))
    );
  }, [maps]);

  return (
    <DataGrid
      getRowClassName={({ row }) => {
        if (row.bestOfParents) {
          return "bestOfParents";
        }
      }}
      sx={{
        boxShadow: 2,
        border: 2,
        borderColor: "primary.light",
        "& .MuiCheckbox-root": {
          color: "text.secondary",
        },
        "& .MuiCheckbox-root.Mui-checked": {
          color: "text.secondary",
        },
        "& .MuiDataGrid-cell:hover": {
          color: "primary.main",
        },
        "& .MuiDataGrid-columnHeaderRow": {
          backgroundColor: "#233058",
          color: "white",
          fontWeight: "bold",
        },
        "& .MuiDataGrid-columnHeader": {
          backgroundColor: "#233058",
          color: "white",
          fontWeight: "bold",
        },
        "& .MuiDataGrid-filler": {
          backgroundColor: "#233058",
          color: "white",
          fontWeight: "bold",
        },
        "& .MuiDataGrid-scrollbarFiller": {
          backgroundColor: "#233058",
          color: "white",
          fontWeight: "bold",
        },
        ".bestOfParents": {
          bgcolor: "#6ca379",
        },
        ".bestOfParents:hover": {
          bgcolor: "#426e4c",
        },
      }}
      loading={loading}
      rows={filteredCreatures}
      columns={critterColumnsToUse}
      getRowId={(r: Creature) => r?.dinoId || -1}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 25,
          },
        },
      }}
      processRowUpdate={handleRowUpdate}
      onProcessRowUpdateError={(err) => console.log(err)}
      isCellEditable={(c) => ["name", "map"].includes(c.field)}
      pageSizeOptions={[5, 10, 25, 50, 100]}
      checkboxSelection
      disableDensitySelector={false}
      disableRowSelectionOnClick
      rowSelectionModel={selectedCreatures}
      onRowSelectionModelChange={setSelectedCreatures}
      columnVisibilityModel={columnVisibilityModel}
      onColumnVisibilityModelChange={(newModel) =>
        setColumnVisibilityModel(newModel)
      }
    />
  );
}
