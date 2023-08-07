import PropTypes from "prop-types";
import { useState } from "react";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import { Avatar, Box, Grid, Menu, MenuItem, Typography,CardActionArea } from "@mui/material";
// import { Box, CardActionArea, Grid, Stack } from "@mui/material";
// project imports
import MainCard from "../ui-component/cards/MainCard";
import SkeletonEarningCard from "../ui-component/cards/Skeleton/EarningCard";
import IconButton from "@mui/material/IconButton";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LinearProgress from "@mui/material/LinearProgress";

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: "#fff",
  color: "#fff",
  overflow: "hidden",
  position: "relative",
  marginRight: 10,
  marginLeft: 10,
  //width:'100%',
  "&:after": {
    content: '""',
    position: "absolute",
    width: 150,
    height: 150,
     // background: "#63C6A3",
   // background: "#3A46BA",
    background: "#FF735C",
    borderRadius: "50%",
    top: -80,
    right: -90,
    // [theme.breakpoints.down("sm")]: {
    //   top: -105,
    //   right: -140,
    // },
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 200,
    height: 180,
    background: "#FF735C",
    borderRadius: "50%",
    top: -130,
    right: -15,
    opacity: 0.5,
    // [theme.breakpoints.down("sm")]: {
    //   top: -155,
    //   right: -70,
    // },
  },
}));

const EarningCard = ({ isLoading }) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper>
        
          <Box sx={{}}>
            <Grid container direction="row">
              <Box sx={{ display: "flex", zIndex: 999, width: "100%" }}>
              <CardActionArea onClick={()=>{alert("a")}}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: 1,
                    // bgcolor: "red",
                  }}
                >
                  <div>
                    <Typography
                      color="black"
                      sx={{
                        fontSize: 16,
                        fontWeight: 600,
                        fontFamily: "Segoe UI Symbol",
                        //  backgroundColor:'red'
                      }}
                    >
                      Monitor Not Working
                    </Typography>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Typography
                      color="black"
                      sx={{
                        fontSize: 10,
                        fontWeight: 600,
                        fontFamily: "Segoe UI Symbol",
                        color: "#FF735C",
                        //  backgroundColor:'red'
                      }}
                    >
                      Chanaka Rajapaksha
                    </Typography>
                    <Typography
                      color="black"
                      sx={{
                        fontSize: 10,
                        fontWeight: 600,
                        marginLeft: 2,
                        fontFamily: "Segoe UI Symbol",
                        color: "#FF735C",
                      }}
                    >
                      0712775742
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: 10,
                      //backgroundColor: "green",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      color="black"
                      sx={{
                        fontSize: 12,
                        fontWeight: 600,
                        fontFamily: "Segoe UI Symbol",
                        wordWrap: "break-word", // or overflowWrap: "break-word"
                      }}
                    >
                      Ticket Id: 000012121545
                    </Typography>
                    <Typography
                      color="black"
                      sx={{
                        fontSize: 12,
                        fontWeight: 300,
                        fontFamily: "Segoe UI Symbol",
                        wordWrap: "break-word", // or overflowWrap: "break-word"
                      }}
                    >
                      Scheduled: 10:30 PM, 25 May 2023
                    </Typography>
                  </div>

                  {/* <div>
                    <Typography
                      color="black"
                      sx={{
                        fontSize: 12,
                        fontWeight: 300,
                        fontFamily:'Segoe UI Symbol',
                        //  backgroundColor:'red'
                      }}
                    >
                      Chanaka Rajapaksha
                    </Typography>
                     <LinearProgress />
                  </div> */}
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      sx={{
                        backgroundColor: "#ffc7be",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#FF735C",
                        },
                        height: 5,
                        borderRadius: 5,
                      }}
                    />
                  </Box>
                </Box>
                </CardActionArea>
                <Box
                  sx={{
                    display: "flex",
                    //  bgcolor: "yellow",
                    flex: 0.3,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconButton>
                    <PlayCircleFilledIcon
                      sx={{
                        // backgroundColor:'#FF735C',
                        color: "#FF735C",
                        fontSize: 50,
                      }}
                      //color="#FF735C"
                    />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Box>
          
        </CardWrapper>
      )}
    </>
  );
};

EarningCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default EarningCard;
