// import { useState } from "react";
// import Grid from "@mui/material/Grid";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Tooltip from "@mui/material/Tooltip";
// import Icon from "@mui/material/Icon";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDBadgeDot from "components/MDBadgeDot";
// import MDButton from "components/MDButton";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import DefaultStatisticsCard from "examples/Cards/StatisticsCards/DefaultStatisticsCard";
// import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
// import ChannelsChart from "layouts/dashboards/sales/components/ChannelsChart";
// import defaultLineChartData from "layouts/dashboards/sales/data/defaultLineChartData";
// import BaseLayout from "layouts/pages/account/components/BaseLayout/index";
// import ProductImage from "layouts/ecommerce/products/edit-product/components/ProductImage";
// import ProductInfo from "layouts/ecommerce/products/edit-product/components/ProductInfo";
// import Socials from "layouts/ecommerce/products/edit-product/components/Socials";
// import Pricing from "layouts/ecommerce/products/edit-product/components/Pricing";

// function WebHooksTimeline() {
//   const [salesDropdownValue, setSalesDropdownValue] = useState("6 May - 7 May");
//   const [customersDropdownValue, setCustomersDropdownValue] = useState("6 May - 7 May");
//   const [revenueDropdownValue, setRevenueDropdownValue] = useState("6 May - 7 May");
//   const [salesDropdown, setSalesDropdown] = useState(null);
//   const [customersDropdown, setCustomersDropdown] = useState(null);
//   const [revenueDropdown, setRevenueDropdown] = useState(null);
//   const openSalesDropdown = ({ currentTarget }) => setSalesDropdown(currentTarget);
//   const closeSalesDropdown = ({ currentTarget }) => {
//     setSalesDropdown(null);
//     setSalesDropdownValue(currentTarget.innerText || salesDropdownValue);
//   };
//   const openCustomersDropdown = ({ currentTarget }) => setCustomersDropdown(currentTarget);
//   const closeCustomersDropdown = ({ currentTarget }) => {
//     setCustomersDropdown(null);
//     setCustomersDropdownValue(currentTarget.innerText || salesDropdownValue);
//   };
//   const openRevenueDropdown = ({ currentTarget }) => setRevenueDropdown(currentTarget);
//   const closeRevenueDropdown = ({ currentTarget }) => {
//     setRevenueDropdown(null);
//     setRevenueDropdownValue(currentTarget.innerText || salesDropdownValue);
//   };
//   const renderMenu = (state, close) => (
//     <Menu
//       anchorEl={state}
//       transformOrigin={{ vertical: "top", horizontal: "center" }}
//       open={Boolean(state)}
//       onClose={close}
//       keepMounted
//       disableAutoFocusItem
//     >
//       <MenuItem onClick={close}>Last 7 days</MenuItem>
//       <MenuItem onClick={close}>Last week</MenuItem>
//       <MenuItem onClick={close}>Last 30 days</MenuItem>
//     </Menu>
//   );

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <Grid>
//         <BaseLayout />
//         <BaseLayout />
//       </Grid>
//       <DashboardLayout>
//         <MDBox my={3}>
//           <MDBox mb={6}>
//             <Grid container spacing={3} alignItems="center">
//               <Grid item xs={12} lg={6}>
//                 <MDTypography variant="h4" fontWeight="medium">
//                   Strategy Configuration
//                 </MDTypography>
//                 <MDBox mt={1} mb={2}>
//                   <MDTypography variant="body2" color="text">
//                     We’re constantly trying to express ourselves and actualize our dreams. If you
//                     have the opportunity to play.
//                   </MDTypography>
//                 </MDBox>
//               </Grid>
//               <Grid item xs={12} lg={6}>
//                 <MDBox display="flex" justifyContent="flex-end">
//                   <MDButton variant="gradient" color="info">
//                     save
//                   </MDButton>
//                 </MDBox>
//               </Grid>
//             </Grid>
//           </MDBox>
//           <Grid container spacing={3}>
//             <Grid item xs={12} lg={4}>
//               <ProductImage />
//             </Grid>
//             <Grid item xs={12} lg={8}>
//               <ProductInfo />
//             </Grid>
//             <Grid item xs={12} lg={4}>
//               <Socials />
//             </Grid>
//             <Grid item xs={12} lg={8}>
//               <Pricing />
//             </Grid>
//           </Grid>
//         </MDBox>
//       </DashboardLayout>
//       <DashboardLayout>
//         <MDBox my={3}>
//           <MDBox mb={6}>
//             <Grid container spacing={3} alignItems="center">
//               <Grid item xs={12} lg={6}>
//                 <MDTypography variant="h4" fontWeight="medium">
//                   Advanced Simulations Configuration
//                 </MDTypography>
//                 <MDBox mt={1} mb={2}>
//                   <MDTypography variant="body2" color="text">
//                     We’re constantly trying to express ourselves and actualize our dreams. If you
//                     have the opportunity to play.
//                   </MDTypography>
//                 </MDBox>
//               </Grid>
//               <Grid item xs={12} lg={6}>
//                 <MDBox display="flex" justifyContent="flex-end">
//                   <MDButton variant="gradient" color="info">
//                     save
//                   </MDButton>
//                 </MDBox>
//               </Grid>
//             </Grid>
//           </MDBox>
//           <Grid container spacing={3}>
//             <Grid item xs={12} lg={4}>
//               <ProductImage />
//             </Grid>
//             <Grid item xs={12} lg={8}>
//               <ProductInfo />
//             </Grid>
//             <Grid item xs={12} lg={4}>
//               <Socials />
//             </Grid>
//             <Grid item xs={12} lg={8}>
//               <Pricing />
//             </Grid>
//           </Grid>
//         </MDBox>
//       </DashboardLayout>
//       <MDTypography variant="h4" fontWeight="medium">
//         Result Section
//       </MDTypography>
//       <MDBox py={3}>
//         <MDBox mb={3}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={4}>
//               <DefaultStatisticsCard
//                 title="sales"
//                 count="$230,220"
//                 percentage={{
//                   color: "success",
//                   value: "+55%",
//                   label: "since last month",
//                 }}
//                 dropdown={{
//                   action: openSalesDropdown,
//                   menu: renderMenu(salesDropdown, closeSalesDropdown),
//                   value: salesDropdownValue,
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <DefaultStatisticsCard
//                 title="customers"
//                 count="3.200"
//                 percentage={{
//                   color: "success",
//                   value: "+12%",
//                   label: "since last month",
//                 }}
//                 dropdown={{
//                   action: openCustomersDropdown,
//                   menu: renderMenu(customersDropdown, closeCustomersDropdown),
//                   value: customersDropdownValue,
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <DefaultStatisticsCard
//                 title="avg. revenue"
//                 count="$1.200"
//                 percentage={{
//                   color: "secondary",
//                   value: "+$213",
//                   label: "since last month",
//                 }}
//                 dropdown={{
//                   action: openRevenueDropdown,
//                   menu: renderMenu(revenueDropdown, closeRevenueDropdown),
//                   value: revenueDropdownValue,
//                 }}
//               />
//             </Grid>
//           </Grid>
//         </MDBox>
//         <MDBox mb={3}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6} lg={4}>
//               <ChannelsChart />
//             </Grid>
//             <Grid item xs={12} sm={6} lg={8}>
//               <DefaultLineChart
//                 title="Revenue"
//                 description={
//                   <MDBox display="flex" justifyContent="space-between">
//                     <MDBox display="flex" ml={-1}>
//                       <MDBadgeDot color="info" size="sm" badgeContent="Facebook Ads" />
//                       <MDBadgeDot color="dark" size="sm" badgeContent="Google Ads" />
//                     </MDBox>
//                     <MDBox mt={-4} mr={-1} position="absolute" right="1.5rem">
//                       <Tooltip title="See which ads perform better" placement="left" arrow>
//                         <MDButton
//                           variant="outlined"
//                           color="secondary"
//                           size="small"
//                           circular
//                           iconOnly
//                         >
//                           <Icon>priority_high</Icon>
//                         </MDButton>
//                       </Tooltip>
//                     </MDBox>
//                   </MDBox>
//                 }
//                 chart={defaultLineChartData}
//               />
//             </Grid>
//           </Grid>
//         </MDBox>
//       </MDBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default WebHooksTimeline;

import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import TimelineList from "examples/Timeline/TimelineList";
import TimelineItem from "examples/Timeline/TimelineItem";

// Data
import timelineData from "layouts/dashboards/webhookstimeline/data/timelineData";

function WebHooksTimeline() {
  const renderTimelineItems = timelineData.map(
    ({ color, icon, title, dateTime, description, badges, lastItem }) => (
      <TimelineItem
        key={title + color}
        color={color}
        icon={icon}
        title={title}
        dateTime={dateTime}
        description={description}
        badges={badges}
        lastItem={lastItem}
      />
    )
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={1} mb={2}>
        <MDTypography variant="h4" fontWeight="medium">
          Timeline
        </MDTypography>
      </MDBox>
      <MDBox my={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <TimelineList title="Timeline with dotted line">{renderTimelineItems}</TimelineList>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TimelineList title="Timeline with dotted line" dark>
              {renderTimelineItems}
            </TimelineList>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default WebHooksTimeline;
