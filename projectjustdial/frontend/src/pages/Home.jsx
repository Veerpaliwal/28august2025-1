import React from "react";
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from "@mui/material";

function Home() {
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
    <>
      {/* Hero Section */}
      <Box sx={{ height: "100vh", position: "relative", bgcolor: "black", overflow: "hidden" }}>
        <img
          src="https://t3.ftcdn.net/jpg/10/64/98/18/360_F_1064981833_WuSebMmgimOcYxeKcKDxR6u4aaIRqln5.jpg"
          alt="unique beauty parlour"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            padding: "0 20px",
          }}
        >
          <Box sx={{ maxWidth: "50%", pl: 4 }}>
            <Typography variant="h6" sx={{ color: "#f9f9f6ff", mb: 2 }}>
              Passion • Reliability • Service
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
              LET YOUR HAIR DO THE TALKING
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "#f1f1ecff" }}>
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
        <Box
          component="img"
          src="https://thumbs.dreamstime.com/b/portrait-skincare-png-model-woman-isolated-transparent-background-beauty-cosmetics-face-portrait-skincare-277005787.jpg"
          alt="Beauty Model"
          sx={{ width: { xs: "100%", md: "40%" }, borderRadius: 2, boxShadow: 3, mb: { xs: 4, md: 0 } }}
        />

        <Box sx={{ ml: { md: 6 }, maxWidth: "600px" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "black" }}>
            TIME FOR A CHANGE?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "black" }}>
            At our salon, you’ll find a relaxing atmosphere and the expert touch of our stylists.
            We enhance your natural look and create a perfect style that matches your personality.
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: "#d4a373", color: "white", px: 4, py: 1.5 }}>
            BOOK NOW
          </Button>
        </Box>
      </Box>

      {/* Services Section */}
      <Box sx={{ bgcolor: "#000", py: 8, textAlign: "center" }}>
        <Typography variant="h6" sx={{ color: "#d4a373", mb: 1 }}>
          Our Service
        </Typography>
        <Typography variant="h4" sx={{ color: "#fff", mb: 6, fontWeight: "bold" }}>
          WHAT WE DO
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {services.slice(0, 5).map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={2.4}>
              <Card sx={{ position: "relative", height: 350, overflow: "hidden", width: 250 }}>
                <CardMedia component="img" image={service.img} alt={service.title} sx={{ height: "100%", width: "100%", objectFit: "cover" }} />
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
    </>
  );
}

export default Home;
