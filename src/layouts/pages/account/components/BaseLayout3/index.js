import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MDBox from "components/MDBox";
import breakpoints from "assets/theme/base/breakpoints";
import DashboardLayout2 from "examples/LayoutContainers/DashboardLayout2";
import YourPositions from "layouts/pages/Tabs/YourPositions";
import History from "layouts/pages/Tabs/History";
function BaseLayout({ stickyNavbar, children }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);

    handleTabsOrientation();

    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  // Define an array of components to render based on the selected tab
  const tabComponents = [
    <MessagesComponent />,
    <SocialComponent />,
    <NotificationsComponent />,
    <BackupComponent />,
    <MessagesComponent />,
    <SocialComponent />,
    <NotificationsComponent />,
    <BackupComponent />,
    <MessagesComponent />,
    <SocialComponent />,
  ];

  return (
    <MDBox mb={0.5}>
      <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
        <Tab
          label="Your Positions"
          sx={{
            backgroundColor: tabValue === 0 ? "#1AA3FF" : "transparent",
            color: tabValue === 0 ? "white" : "inherit",
          }}
        />
        <Tab
          label="Historical Positions"
          sx={{
            backgroundColor: tabValue === 1 ? "#1AA3FF" : "transparent",
            color: tabValue === 1 ? "white" : "inherit",
          }}
        />
        {/* <Tab
          label="Notifications"
          sx={{
            backgroundColor: tabValue === 2 ? "#1AA3FF" : "transparent",
            color: tabValue === 2 ? "white" : "inherit",
          }}
        />
        <Tab
          label="Backup"
          sx={{
            backgroundColor: tabValue === 3 ? "#1AA3FF" : "transparent",
            color: tabValue === 3 ? "white" : "inherit",
          }}
        />
        <Tab
          label="Messages"
          sx={{
            backgroundColor: tabValue === 4 ? "#1AA3FF" : "transparent",
            color: tabValue === 4 ? "white" : "inherit",
          }}
        />
        <Tab
          label="Social"
          sx={{
            backgroundColor: tabValue === 5 ? "#1AA3FF" : "transparent",
            color: tabValue === 5 ? "white" : "inherit",
          }}
        />
        <Tab
          label="Notifications"
          sx={{
            backgroundColor: tabValue === 6 ? "#1AA3FF" : "transparent",
            color: tabValue === 6 ? "white" : "inherit",
          }}
        />
        <Tab
          label="Messages"
          sx={{
            backgroundColor: tabValue === 8 ? "#1AA3FF" : "transparent",
            color: tabValue === 8 ? "white" : "inherit",
          }}
        />
        <Tab
          label="Social"
          sx={{
            backgroundColor: tabValue === 9 ? "#1AA3FF" : "transparent",
            color: tabValue === 9 ? "white" : "inherit",
          }}
        /> */}
      </Tabs>
      {/* Render the selected component based on the selected tab */}
      {tabComponents[tabValue]}
    </MDBox>
  );
}

// Define the MessagesComponent
function MessagesComponent() {
  return (
    <div>
      <YourPositions />
    </div>
  );
}

// Define the SocialComponent
function SocialComponent() {
  return (
    <div>
      <History />
    </div>
  );
}

// Define the NotificationsComponent
function NotificationsComponent() {
  return <div>Notifications Component</div>;
}

// Define the BackupComponent
function BackupComponent() {
  return <div>Backup Component</div>;
}

// Setting default values for the props of BaseLayout
BaseLayout.defaultProps = {
  stickyNavbar: false,
};

// Typechecking props for BaseLayout
BaseLayout.propTypes = {
  stickyNavbar: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
