import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import { Grid, Card, CardMedia, CardContent } from '@mui/material';

const pages = ['HOME', 'SERVICES', 'CONTACT US'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PersonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            unique beauty parlour
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#d4a373', color: 'white', width: '100%' }}
                >
                  BOOK NOW
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <PersonIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'white' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            unique beauty parlour
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', mx: 1 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Book Now Button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#d4a373', color: 'white', px: 2 }}
            >
              BOOK NOW
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function App() {
  const services = [
    {
      title: "HAIR EXTENSION",
      img: "https://www.youbeautylounge.com/uploads/images/_article/hair-extensions-article.webp",
    },
    {
      title: "EYELASH EXTENSION",
      img: "https://charmlash.com/wp-content/uploads/2023/07/122224564_375782766800323_4181425100806826705_n-scaled-1-734x734.jpg.webp",
    },
    {
      title: "SEMI PERMANENT EYEBROW",
      img: "https://images.squarespace-cdn.com/content/v1/62695fd3d9b2bd4b35cb58eb/05a89d1b-a452-4f5f-9329-9420e863c65c/image0%2810%29.jpg",
    },
    {
      title: "MAKEUP ART",
      img: "https://images.stockcake.com/public/a/1/3/a133ca12-dfe5-4f8f-ad9e-9472ad7ebb59_large/vibrant-makeup-portrait-stockcake.jpg",
    },
    {
      title: "BRIDAL/WEDDING SERVICES",
      img: "https://www.changingfaces.net/wp-content/uploads/2024/05/Kim-55.jpg",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <header>
        <ResponsiveAppBar />
      </header>
      <main>
        {/* Hero Section */}
        <Box
          sx={{
            height: '100vh',
            position: 'relative',
            bgcolor: 'black',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://t3.ftcdn.net/jpg/10/64/98/18/360_F_1064981833_WuSebMmgimOcYxeKcKDxR6u4aaIRqln5.jpg"
            alt="unique beauty parlour"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.7,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: 'white',
              padding: '0 20px',
            }}
          >
            <Box sx={{ maxWidth: '50%', pl: 4 }}>
              <Typography variant="h6" sx={{ color: '#f9f9f6ff', mb: 2 }}>
                Passion • Reliability • Service
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                LET YOUR HAIR DO THE TALKING
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#f1f1ecff' }}>
                Barrie's Top Choice. Your Hair And Beauty Destination.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* About Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            py: 8,
            px: { xs: 2, md: 6 },
            bgcolor: "white",
          }}
        >
          {/* Left Side Image */}
          <Box
            component="img"
            src="https://thumbs.dreamstime.com/b/portrait-skincare-png-model-woman-isolated-transparent-background-beauty-cosmetics-face-portrait-skincare-277005787.jpg"
            alt="Beauty Model"
            sx={{
              width: { xs: "100%", md: "40%" },
              borderRadius: 2,
              boxShadow: 3,
              mb: { xs: 4, md: 0 },
            }}
          />

          {/* Right Side Text */}
          <Box sx={{ ml: { md: 6 }, maxWidth: "600px" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, color: "black" }}
            >
              TIME FOR A CHANGE?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "black" }}>
              At our salon, you’ll find a relaxing atmosphere and the expert touch of our
              stylists. We enhance your natural look and create a perfect style that matches
              your personality.
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#d4a373", color: "white", px: 4, py: 1.5 }}
            >
              BOOK NOW
            </Button>
          </Box>
        </Box>

        {/* Our Services Section */}
<Box sx={{ bgcolor: "#000", py: 8, textAlign: "center" }}>
  <Typography variant="h6" sx={{ color: "#d4a373", mb: 1 }}>
    Our Service
  </Typography>
  <Typography variant="h4" sx={{ color: "#fff", mb: 6, fontWeight: "bold" }}>
    WHAT WE DO
  </Typography>

  {/* Cards (only first 5 shown) */}
  <Grid container spacing={3} justifyContent="center">
    {services.slice(0, 5).map((service, index) => (
      <Grid item key={index} xs={12} sm={6} md={4} lg={2.4}>
        <Card sx={{ position: "relative", height: 350, overflow: "hidden", width:250 }}>
          <CardMedia
            component="img"
            image={service.img}
            alt={service.title}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover", // sab same size me rahenge
            }}
          />
          <CardContent
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              bgcolor: "rgba(0,0,0,0.8)",
              color: "#fff",
              p: 1,
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {service.title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>

  {/* Learn More Button */}
  <Button
    variant="contained"
    sx={{
      mt: 6,
      bgcolor: "#d4a373",
      color: "#000",
      fontWeight: "bold",
      px: 4,
      "&:hover": { bgcolor: "#b5835a" },
    }}
  >
    LEARN MORE
  </Button>
</Box>

      </main>

      <footer style={{ textAlign: "center", padding: "20px", background: "#111", color: "white" }}>
        © 2025 Unique Beauty Parlour. All Rights Reserved.
      </footer>
    </React.Fragment>
  );
}

export default App;
