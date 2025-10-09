import * as React from "react";
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

const pages = ["HOME", "SERVICES", "CONTACT US"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [elevate, setElevate] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    const handleScroll = () => setElevate(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to get route path based on page name
  const getPath = (page) =>
    page === "HOME" ? "/" : page === "SERVICES" ? "/services" : "/contact";

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
          {/* Desktop Logo */}
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
            unique beauty parlour
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={getPath(page)}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
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
            unique beauty parlour
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={getPath(page)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  mx: 1.5,
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    width: 0,
                    height: 2,
                    left: 0,
                    bottom: -4,
                    bgcolor: "#d4a373",
                    transition: "0.3s",
                  },
                  "&:hover:after": { width: "100%" },
                }}
              >
                {page}
              </Button>
            ))}
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
