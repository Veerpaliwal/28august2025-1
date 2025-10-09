import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const services = [
    {
    icon:"✂️",
    title: "CUT/COLOUR/STYLE",
    description:
      "Craving a refresh? We have some of the most passionate hairdressing talents in Barrie and we are ready to help you find that new look. From haircuts to the latest in hair colour techniques, weather balayage, highlights, lowlights, babylights, or ombre, we can help you discover a new style that is unique and will make you feel beautiful every day.",
  },
  {
    icon: "💇‍♀️",
    title: "HAIR EXTENSIONS",
    description:
      "Looking for an extra boost of volume? Select from a wide range of human hair extension options, including weaves, fusions, tape-in and clip-in extensions. Our stylists will help you decide which one is right for you.",
    },
    {
        icon: "👁️",
        title: "EYELASH EXTENSION",
        description:
            "Ready to ditch your mascara and have luscious lashes 24/7? Our lash technicians will provide you with the most natural looking lashes for your features. Weather you’re looking for a classic to enhance your natural lashes, volume or mega volume lashes to achieve dramatic and voluminous looks, or hybrid, a combination of classic and volume lashes, prepare to be dazzled and have the hottest lash extensions in Barrie.",
    },
    {
    icon: "🖌️",
    title: "SEMI-PERMANENT EYEBROW",
        description:
           "Semi-permanent eyebrows are one of the best ways to cut down the time it takes to do your daily beauty routine. An amazing, beautiful solution for those who draw on their eyebrows every day. Our salon in Barrie offers powder brow and ombre brow as well as threading services to shape the brows of your dreams.",
    },
     {
    icon: "💄",
    title: "MAKEUP",
        description:
           "Our highly experienced award-winning editorial and theatrical makeup artist is here to help you shine on your special day. Whether you’re preparing for a wedding, special event, or a photoshoot, we offer a wide range of makeup services from the natural look to full glam, dedicated to helping you look as good as you feel.",
    },
      {
    icon: "👰",
    title: "BRIDAL",
        description:
           "Your big day is a big deal to us. We offer special occasion styling and makeup services for weddings, evening events that require a bit more glamour than your everyday beauty. Our wedding services include options for the bride and the bridal party, with hair and makeup experts in our high-end salon in Barrie, but don’t worry—we can also come to you! Allow us to take some stress off your plate with our on-site and off-site bridal party beauty services.",
  },
];

function Services() {
  return (
    <div>
      {/* Header Box at the very top */}
      <div
        style={{
          width: "100%",
          height: "200px",
          background: "linear-gradient(90deg, #d4a373, #f4e1c1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#100707ff",
        }}
      >
        SERVICES
      </div>

      {/* Content Area below header */}
      <div
        style={{
          padding: "40px 20px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor: "#111",
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              width: 350,
              backgroundColor: "#f4e1c1",
              borderRadius: 3,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              p: 2,
              "&:hover": { boxShadow: 6 },
            }}
          >
            <Box sx={{ fontSize: 60, mb: 2 }}>{service.icon}</Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {service.title}
            </Typography>
            <Typography variant="body2">{service.description}</Typography>
          </Box>
        ))}
      </div>
    </div>
  );
}

export default Services;
