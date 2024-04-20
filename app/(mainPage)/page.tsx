import { CssBaseline, Grid } from "@mui/material";
import Header from "../_Components/Header/Header";
import Sidebar from "../_Components/Sidebar/Sidebar";
import Map from "../_Components/Map/Map";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}
