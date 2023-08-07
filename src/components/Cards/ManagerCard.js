import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, CardActionArea, Grid, Paper, TextField } from "@mui/material";

const CardWrapper = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  // color: "#fff",
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
    top: -95,
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
    top: -140,
    right: -15,
    opacity: 0.5,
    // [theme.breakpoints.down("sm")]: {
    //   top: -155,
    //   right: -70,
    // },
  },
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBUttonClick = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  return (
    <CardWrapper sx={{ margin: 1 }}>
      {/* <CardHeader

        title="Monitor Not Working"
        subheader="Chanaka Rajapaksha, 0712775742"
        titleTypographyProps={{fontSize:16}}
        subheaderTypographyProps={{fontSize:10}}
        sx={{padding:1}}
      /> */}
      <CardContent sx={{ padding: 1 }}>
        <Box sx={{}}>
          <Grid container direction="row">
            <Box sx={{ display: "flex", zIndex: 999, width: "100%" }}>
              {/* <CardActionArea onClick={()=>{alert("a")}}> */}
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
              </Box>
              {/* </CardActionArea> */}
              <Box
                sx={{
                  display: "flex",
                  // bgcolor: "yellow",
                  flex: 0.3,
                  alignItems: "flex-end",
                  justifyContent: "center",
                  //marginTop:5
                }}
              >
                <IconButton
                  id="start_button"
                  sx={
                    {
                      // marginTop:3
                    }
                  }
                  onClick={handleBUttonClick}
                >
                  <PlayCircleFilledIcon
                    sx={{
                      // backgroundColor:'#FF735C',
                      color: "#FF735C",
                      fontSize: 50,
                      // marginTop:3
                    }}
                    //color="#FF735C"
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Box>
      </CardContent>
      <CardActions disableSpacing sx={{ padding: 0 }}>
        <Box sx={{ width: "100%", padding: 1 }}>
          <LinearProgress
            sx={{
              backgroundColor: "#ffc7be",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#FF735C",
                //transition: "none"
              },
              height: 5,
              borderRadius: 5,
            }}
            // variant="determinate"
            // value={'30'}
          />
        </Box>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto">
        <CardContent>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {},
              marginBottom: 2,
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                maxRows={4}
                sx={{ width: "100%" }}
              />
            </div>
          </Box>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography paragraph>Spend time:</Typography>
              <Paper
                // variant="outlined"
                square
                elevation={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                  width: "100%",
                  padding: 2,
                  borderRadius: 1,
                  backgroundColor: "#0d6efd",
                  color: "#fff",
                }}
              >
                <Typography sx={{ m: 0 }} paragraph>
                {formatTime(totalSeconds)}
                </Typography>
              </Paper>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography paragraph>Paused time:</Typography>
              <Paper
                // variant="outlined"
                square
                elevation={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                  width: "100%",
                  padding: 2,
                  borderRadius: 1,
                  backgroundColor: "#F6F696",
                  color: "#C5AC2F",
                }}
              >
                <Typography sx={{ m: 0 }} paragraph>
                  Spend time:
                </Typography>
              </Paper>
            </div>
          </div>
        </CardContent>
      </Collapse>
    </CardWrapper>
  );
}
