import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const mainPages = ["HOME", "CONTACT US"];
const servicePages = [
  "HAIR EXTENSION",
  "EYELASH EXTENSION",
  "SEMI-PERMANENT EYEBROW",
  "MAKEUP ART",
  "BRIDAL SERVICES",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const [elevate, setElevate] = React.useState(false);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenServicesMenu = (event) => setAnchorElServices(event.currentTarget);
  const handleCloseServicesMenu = () => setAnchorElServices(null);

  React.useEffect(() => {
    const handleScroll = () => setElevate(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Convert page name to route path
  const getPath = (page) => {
    switch (page) {
      case "HOME": return "/";
      case "CONTACT US": return "/contact";
      case "HAIR EXTENSION": return "/hair-extension";
      case "EYELASH EXTENSION": return "/eyelash-extension";
      case "SEMI-PERMANENT EYEBROW": return "/semi-permanent-eyebrow";
      case "MAKEUP ART": return "/makeup-art";
      case "BRIDAL SERVICES": return "/bridal-services";
      default: return "/";
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        boxShadow: elevate ? "0 4px 15px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <PersonIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "white" }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecoration: "none",
              background: "linear-gradient(45deg, #d4a373, #f4e1c1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Unique Beauty Parlour
          </Typography>

          {/* Mobile Menu Button */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {[...mainPages, ...servicePages].map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={getPath(page)}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(45deg, #d4a373, #f4e1c1)",
                    color: "white",
                    width: "100%",
                  }}
                >
                  BOOK NOW
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <PersonIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "white" }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecoration: "none",
              background: "linear-gradient(45deg, #d4a373, #f4e1c1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Unique Beauty Parlour
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {mainPages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={getPath(page)}
                sx={{ my: 2, color: "white", mx: 1.5 }}
              >
                {page}
              </Button>
            ))}

            {/* Services Dropdown */}
            <Box sx={{ position: "relative" }}>
              <Button
                onClick={handleOpenServicesMenu}
                sx={{ my: 2, color: "white", mx: 1.5 }}
                endIcon={<ArrowDropDownIcon />}
              >
                SERVICES
              </Button>
              <Menu
                anchorEl={anchorElServices}
                open={Boolean(anchorElServices)}
                onClose={handleCloseServicesMenu}
                sx={{ mt: "8px" }}
              >
                {servicePages.map((service) => (
                  <MenuItem
                    key={service}
                    onClick={handleCloseServicesMenu}
                    component={Link}
                    to={getPath(service)}
                  >
                    {service}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          {/* Book Now Button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #d4a373, #f4e1c1)",
                color: "#000",
                px: 3,
                py: 1,
                fontWeight: "bold",
                "&:hover": { background: "linear-gradient(45deg, #b5835a, #f4e1c1)" },
              }}
            >
              BOOK NOW
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
