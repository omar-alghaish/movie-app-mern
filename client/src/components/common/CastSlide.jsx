import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbConfigs from "../../api/configs/tmdb.configs";
import uiConfigs from "../../configs/ui.configs";
import { routesGen } from "../../routes/router";

const CastSlide = ({ casts }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        "& .swiper-slide": {
          width: { xs: "50%", md: "25%", lg: "20.5%" },
          color: "primary.contrastText",
        },
      }}
    >
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        grabCursor={true}
        style={{ width: "100%", height: "max-content" }}
      >
        {casts.map((cast, index) => (
          <SwiperSlide key={index}>
            <Link to={routesGen.person(cast.id)}>
              <Box
                sx={{
                  paddingTop: "120%",
                  color: "text.primary",
                  ...uiConfigs.style.backgroundImage(
                    tmdbConfigs.posterPath(cast.profile_path)
                  ),
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "max-content",
                    bottom: 0,
                    padding: "10px",
                    backgroundColor: `${
                      theme.palette.mode === "dark"
                        ? "rgba(0,0,0,0.6)"
                        : "rgba(255, 255, 255, .6)"
                    }`,
                  }}
                >
                  <Typography
                    sx={{
                      ...uiConfigs.style.typoLines(1, "left"),
                      color: "text.primary",
                    }}
                  >
                    {cast.name}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CastSlide;
