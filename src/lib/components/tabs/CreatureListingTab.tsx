import CritterTable from "../tables/critter-table/CritterTable";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function CreatureListingTab() {
  return (
    <Grid xs={12}>
      <CritterTable />
    </Grid>
  );
}
