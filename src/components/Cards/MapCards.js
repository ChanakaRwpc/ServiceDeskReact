import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import Box from "@mui/material/Box";
import { CardActionArea, CardActions } from "@mui/material";
import axios from "axios";

export default function MapCards() {
  const mediaPlayerButtonStyles = () => ({
    width: 46,
    height: 46,
    borderRadius: 8,
    minWidth: 46,
    minHeight: 46,
    //mr: 1,
  });
  return (
    <>
      <Box
        sx={{
          // backgroundColor: "red",
          flexGrow: 1,
          display: { xs: "flex", md: "flex" },
          paddingLeft: 2,
          paddingRight: 2,
          marginBottom: 1,
          marginTop: 1,
        }}
        maxWidth="xl"
        alignItems="center"
        justify="center"
      >
        <Card sx={{ width: "100%", borderRadius: 2 }}>
          {/* <Box p={1} position="relative"  >
            <Typography variant="h5" color="black" fontWeight="medium">
              Some Kind Of Blues
            </Typography>
            <Typography variant="button" color="black" fontWeight="regular">
              Deftones
            </Typography>
            <Box display="flex" mt={2} pt={1}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Button
                  variant="outlined"
                  size="large"
                  circular
                  iconOnly
                  sx={mediaPlayerButtonStyles}
                >
                  <PlayCircleFilledWhiteOutlinedIcon></PlayCircleFilledWhiteOutlinedIcon>
                </Button>
              </Box>
            </Box>
          </Box> */}
          <Grid container spacing={1} sx={{ backgroundColor: "white" }}>
            <Grid xs={10}>
              <Box p={2} position="relative">
                {/* <Box display="flex" mt={2} pt={1}> */}
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="h5" color="black" fontWeight="medium">
                    Some Kind Of Blues
                  </Typography>
                  <Typography
                    variant="button"
                    color="black"
                    fontWeight="regular"
                  >
                    Deftones
                  </Typography>
                </Box>
                {/* </Box> */}
              </Box>
            </Grid>
            <Grid
              xs={2}
              sx={{ backgroundColor: "white" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box p={2}>
                <Button
                  variant="outlined"
                  size="large"
                  circular
                  iconOnly
                  sx={mediaPlayerButtonStyles}
                >
                  <PlayCircleFilledWhiteOutlinedIcon></PlayCircleFilledWhiteOutlinedIcon>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
