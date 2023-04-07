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
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardLayout2 from "examples/LayoutContainers/DashboardLayout2";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
// import dataTableData from "layouts/applications/data-tables/data/dataTableData";

function DataTables({ data }) {
  return (
    <DashboardLayout2>
      {/* <DashboardNavbar /> */}
      <MDBox pt={6} pb={3}>
        <MDBox mb={3}>
          <Card>
            <MDBox p={3} lineHeight={1}>
              <MDTypography variant="h3" fontWeight="medium">
                Top Pools on Uniswap V3
              </MDTypography>
              {/* <MDTypography variant="button" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </MDTypography> */}
            </MDBox>
            <DataTable table={data} />
          </Card>
        </MDBox>
        {/* <Card>
          <MDBox p={3} lineHeight={1}>
            <MDTypography variant="h5" fontWeight="medium">
              Datatable Search
            </MDTypography>
            <MDTypography variant="button" color="text">
              A lightweight, extendable, dependency-free javascript HTML table plugin.
            </MDTypography>
          </MDBox>
          <DataTable table={dataTableData} canSearch />
        </Card> */}
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout2>
  );
}

export default DataTables;
