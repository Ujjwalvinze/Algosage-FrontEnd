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

import { useState, useEffect } from "react";
import { Tooltip } from "@material-ui/core";
// import { IconButton, Tooltip } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
import { ConnectButton } from "@web3uikit/web3";
// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
// import MDTypography from "components/MDTypography";
import Switch from "@mui/material/Switch";

import { FaMoon, FaSun } from "react-icons/fa";

import MoonLoader from "react-spinners/MoonLoader";
// import { MdSun, MdMoon } from "react-icons/md";
import ReactSwitch from "react-switch";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
// import MDBadge from "components/MDBadge";
// Material Dashboard 2 PRO React examples
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";
import { useWeb3Contract, useMoralis } from "react-moralis";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarDesktopMenu,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
  setDarkMode,
} from "context";

function DashboardNavbar({ absolute, light, isMini }) {
  const { isWeb3Enabled } = useMoralis();
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);
  const [mode, setMode] = useState("light");
  const [hoverMessage, setHoverMessage] = useState("");

  const handleDisconnect = () => {
    // Implement your disconnect logic here
  };

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  // const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  const handleDarkMode = () => setDarkMode(dispatch, !darkMode);
  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" />
      <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });

  const handleIconMouseEnter = () => {
    setHoverMessage("Profile Section Coming Soon!");
  };

  const handleIconMouseLeave = () => {
    setHoverMessage("");
  };

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          {/* <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} /> */}
          <IconButton sx={navbarDesktopMenu} onClick={handleMiniSidenav} size="small" disableRipple>
            <Icon fontSize="medium" sx={iconsStyle}>
              {miniSidenav ? "menu_open" : "menu"}
            </Icon>
          </IconButton>
          <MDTypography variant="h1" fontWeight="medium">
            <img
              alt="..."
              src={require("../../../assets/images/Algosage_Image.png")}
              style={{ padding: "1px 1px 1px 1px", width: "90px", height: "90px"}}
              
            ></img>
          </MDTypography>
        </MDBox>
        {isMini ? null : (
          <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
            <MDBox ml={40}>
              {isWeb3Enabled ? (
                <MDTypography variant="h5" fontWeight="medium">
                  Account Balance :
                </MDTypography>
              ) : (
                <MDTypography variant="h6" fontWeight="medium">
                  Not Connected
                </MDTypography>
              )}
            </MDBox>
            <MDBox pr={1}>
              {isWeb3Enabled ? (
                <Tooltip title="Click to Disconnect">
                  <div >
                    <ConnectButton
                      moralisAuth={false}
                      style={{ 
                        size: "30px",
                        borderRadius: "15px",
                        boxShadow: "0px 0px 20px rgba(0, 128, 255, 0.5)",
                      }}
                    />
                  </div>
                </Tooltip>
              ) : (
                <ConnectButton
                  moralisAuth={false}
                  style={{
                    size: "30px",
                    borderRadius: "15px",
                    boxShadow: "0px 0px 20px rgba(0, 128, 255, 0.5)",
                  }}
                />
              )}
            </MDBox>
            <MDBox color={light ? "white" : "inherit"}>
              {/* <Link to="/authentication/sign-in/basic">
                <IconButton sx={navbarIconButton} disableRipple>
                  <Icon sx={iconsStyle} onClick={profileFunction}>
                    account_circle
                  </Icon>
                </IconButton>
              </Link> */}
              <Tooltip title="Profile Feature, Coming Soon!">
                <Link to="/authentication/sign-in/basic">
                  <IconButton disableRipple>
                    <Icon
                      sx={iconsStyle}
                      onMouseEnter={handleIconMouseEnter}
                      onMouseLeave={handleIconMouseLeave}
                    >
                      account_circle
                    </Icon>
                  </IconButton>
                </Link>
              </Tooltip>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon sx={iconsStyle} fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
              <ReactSwitch
                checked={darkMode}
                onChange={handleDarkMode}
                onColor="#1f283e"
                offColor="#C6D0E6"
                checkedIcon={<FaMoon size={21} color="#1ba3ff" />}
                uncheckedIcon={<FaSun size={20} color="#e3316f" />}
                width={45}
                height={24}
                handleDiameter={18}
                offHandleColor="#C6D0E6"
                onHandleColor="#1f283e"
                // style={{marginTop: "-1px"}}
                // activeBoxShadow="0px 0px 1px 2px rgba(0, 0, 0, 1)"
              />

              {renderMenu()}
            </MDBox>
          </MDBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
