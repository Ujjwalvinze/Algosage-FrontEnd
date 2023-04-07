/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
// import Tooltip from "@mui/material/Tooltip";
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import DataTables2 from "layouts/applications/data-tables/index";
import DataTables2 from "layouts/applications/data-tables2/index";
import DataTables2_TopPools from "layouts/applications/data-tables2_TopPools/index";
// import BaseLayout from "layouts/pages/account/components/BaseLayout/index";
import BaseLayout2 from "layouts/pages/account/components/BaseLayout2/index";
import BaseLayout1 from "layouts/pages/account/components/BaseLayout1/index";
import BaseLayout3 from "layouts/pages/account/components/BaseLayout3/index";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import DataTable from "examples/Tables/DataTable";
import DefaultStatisticsCard from "examples/Cards/StatisticsCards/DefaultStatisticsCard";
import dataTableData from "layouts/ecommerce/products/product-page/data/dataTableData";
// import BookingCard from "examples/Cards/BookingCard";

// Anaytics dashboard components
// import SalesByCountry from "layouts/dashboards/analytics/components/SalesByCountry";

// Data
// import reportsBarChartData from "layouts/dashboards/analytics/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboards/analytics/data/reportsLineChartData";
import { Box, Card } from "@mui/material";
import { useEffect, useState } from "react";
import { item } from "examples/Sidenav/styles/sidenavItem";

const axios = require("axios");

async function getPoolsData() {
  const query = `
  {
    pools(first: 20, orderBy: totalValueLockedUSD, orderDirection: desc, skip: 4) {
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      totalValueLockedUSD
    }
  }
  `;

  const result = await axios({
    url: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",
    method: "post",
    data: {
      query: query,
    },
  });

  const pools = result.data.data.pools;
  // console.log(pools);

  let rowToUpdate = [];
  pools.forEach((item) => {
    rowToUpdate.push({
      token0: item.token0.symbol,
      token1: item.token1.symbol,
      TVL: item.totalValueLockedUSD,
    });
  });

  return rowToUpdate;
}

let toUpdate = true;

function Analytics() {
  const { sales } = reportsLineChartData;
  const [rows, setRows] = useState([]);
  const columns = [
    { Header: "Token 1", accessor: "token0", width: "20%" },
    { Header: "Token 2", accessor: "token1", width: "25%" },
    { Header: "TVL", accessor: "TVL" },
  ];

  async function handleUpdate() {
    const rowsFromGetPoolData = await getPoolsData();
    setRows(rowsFromGetPoolData);
  }

  if (toUpdate) {
    toUpdate = false;
    handleUpdate();
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mt={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="dark"
                  icon="weekend"
                  title="Protocols"
                  count={1}
                  percentage={{
                    color: "success",
                    amount: "+55%",
                    label: "than lask week",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon="leaderboard"
                  title="Vaults"
                  count="2,300"
                  percentage={{
                    color: "success",
                    amount: "+3%",
                    label: "than last month",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon="store"
                  title="Revenue"
                  count="34k"
                  percentage={{
                    color: "success",
                    amount: "+1%",
                    label: "than yesterday",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="primary"
                  icon="person_add"
                  title="Followers"
                  count="+91"
                  percentage={{
                    color: "success",
                    amount: "",
                    label: "Just updated",
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>

          {/* <Divider variant="fullWidth" color="primary" /> */}

          <MDBox mt={4} mb={3}>
            <MDBox ml="45%" mb={2}>
              <MDTypography variant="h3" fontWeight="medium">
                Your Positions
              </MDTypography>
            </MDBox>

            <Grid>
              <BaseLayout2 />
              <BaseLayout1 />
              <BaseLayout3 />
            </Grid>
          </MDBox>
          <Card style={{ backgroundColor: "#368BC1" }}>
            <Grid container>
              <Grid item xs={12} md={6} lg={8}>
                {" "}
                <MDBox>
                  <DataTables2 />
                </MDBox>
              </Grid>

              <Grid item xs={12} md={6} lg={4} mt={10} pr={5}>
                <MDBox mb={10}>
                  <MDBox mb={5} ml={2}>
                    <MDTypography variant="h3" fontWeight="medium">
                      Current Position Value
                    </MDTypography>
                  </MDBox>
                  {/* <ReportsLineChart
                    color="success"
                    title="daily sales"
                    description={
                      <>
                        (<strong>+15%</strong>) increase in today sales.
                      </>
                    }
                    date="updated 4 min ago"
                    chart={sales}
                  /> */}

                  <Grid item xs={12} sm={16}>
                    <DefaultStatisticsCard
                      title="sales"
                      count="$230,220"
                      percentage={{
                        color: "success",
                        value: "+55%",
                        label: "since last month",
                      }}
                    />
                  </Grid>
                </MDBox>
              </Grid>
            </Grid>
          </Card>

          {/* <Divider /> */}
          <MDBox mt={7} mb={3}>
            <MDBox ml="45%" mb={2}>
              <MDTypography variant="h3" fontWeight="medium">
                Top Pools
              </MDTypography>
            </MDBox>

            <Grid>
              <BaseLayout2 />
              <BaseLayout2 />
            </Grid>
          </MDBox>
          <Card style={{ backgroundColor: "#368BC1" }}>
            <Grid container>
              <Grid item xs={12} md={6} lg={8}>
                {" "}
                <MDBox>
                  {!toUpdate ? (
                    <DataTables2_TopPools data={{ columns, rows }} />
                  ) : (
                    <div>Loading...</div>
                  )}
                </MDBox>
              </Grid>

              <Grid item xs={12} md={6} lg={4} mt={10} pr={5}>
                <MDBox mb={10}>
                  <MDBox mb={5} ml={2}>
                    <MDTypography variant="h3" fontWeight="medium">
                      TVL Chart
                    </MDTypography>
                  </MDBox>
                  <ReportsLineChart
                    color="success"
                    title="daily sales"
                    description={
                      <>
                        (<strong>+15%</strong>) increase in today sales.
                      </>
                    }
                    date="updated 4 min ago"
                    chart={sales}
                  />
                </MDBox>
              </Grid>
            </Grid>
          </Card>

          <MDBox mt={7} mb={3}>
            <MDBox ml="42%" mb={2}>
              <MDTypography variant="h3" fontWeight="medium">
                Your Simulations
              </MDTypography>
            </MDBox>

            <Grid>
              <BaseLayout2 />
              <BaseLayout2 />
            </Grid>
          </MDBox>
          {/* </Grid> */}
        </MDBox>
      </MDBox>
      <MDBox mt={2} mb={2}>
        <DataTable
          table={dataTableData}
          entriesPerPage={false}
          showTotalEntries={false}
          isSorted={false}
        />
      </MDBox>

      <MDBox mt={7} mb={3}>
        <MDBox ml="45%" mb={2}>
          <MDTypography variant="h3" fontWeight="medium">
            Vault Monitor
          </MDTypography>
        </MDBox>

        <Grid>
          <BaseLayout2 />
          <BaseLayout2 />
        </Grid>
      </MDBox>
      <MDBox mt={6} mb={2}>
        <DataTable
          table={dataTableData}
          entriesPerPage={false}
          showTotalEntries={false}
          isSorted={false}
        />
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Analytics;
