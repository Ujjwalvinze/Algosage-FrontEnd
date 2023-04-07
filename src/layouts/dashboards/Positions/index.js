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
// import Tooltip from "@mui/material/Tooltip";
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTables2 from "layouts/applications/data-tables2/index";
import BaseLayout2 from "layouts/pages/account/components/BaseLayout2/index";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import DataTable from "examples/Tables/DataTable";
import dataTableData from "layouts/ecommerce/products/product-page/data/dataTableData";

import reportsLineChartData from "layouts/dashboards/analytics/data/reportsLineChartData";

function Positions() {
  const { sales } = reportsLineChartData;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid>
        <BaseLayout2 />
        <BaseLayout2 />
      </Grid>
      <MDBox py={3}>
        <MDBox mt={1.5}>
          <Grid container spacing={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={7}>
                {" "}
                <MDBox mb={10}>
                  <DataTables2 />
                </MDBox>
              </Grid>

              <Grid item xs={12} md={6} lg={4} mt={10}>
                <MDBox mb={10}>
                  <MDBox mb={5} ml={2}>
                    <MDTypography variant="h5" fontWeight="medium">
                      Current Position Value
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
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}
export default Positions;
