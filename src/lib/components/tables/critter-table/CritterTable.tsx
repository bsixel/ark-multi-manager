import { Creature } from "@/lib/types/Creature";
import { DataGrid, GridColumnVisibilityModel } from "@mui/x-data-grid";
import { critterColumns, defaultHiddenCritterCols } from "./critterTableMeta";
import { useContext, useState } from "react";
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
  } = useContext(HomeContext);
  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<GridColumnVisibilityModel>(
      Object.fromEntries(defaultHiddenCritterCols.map((c) => [c, false]))
    );

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
    }
  };

  return (
    <DataGrid
      getRowClassName={({ row }) => {
        if (row.uselessChild) {
          return "uselessChild";
        } else if (row.bestOfParents) {
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
        ".uselessChild": {
          bgcolor: "#854a57",
        },
        ".uselessChild:hover": {
          bgcolor: "#4f2931",
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
      columns={critterColumns}
      getRowId={(r: Creature) => r.dinoId}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 25,
          },
        },
      }}
      processRowUpdate={handleRowUpdate}
      onProcessRowUpdateError={(err) => console.log(err)}
      isCellEditable={(c) => c.field == "name"}
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
