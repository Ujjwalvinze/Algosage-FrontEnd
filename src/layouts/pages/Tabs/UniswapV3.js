import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function UniswapV3() {
  return (
    <MDBox>Uniswap V3</MDBox>
    // <DashboardLayout>
    //   <Grid item xs={12} md={6} lg={3}>
    //     <MDBox mb={1.5}>
    //       <ComplexStatisticsCard
    //         color="success"
    //         icon="store"
    //         title="Revenue"
    //         count="34k"
    //         percentage={{
    //           color: "success",
    //           amount: "+1%",
    //           label: "than yesterday",
    //         }}
    //       />
    //     </MDBox>
    //   </Grid>
    // </DashboardLayout>
  );
}

export default UniswapV3;
