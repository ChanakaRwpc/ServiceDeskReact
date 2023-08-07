import React, { useEffect } from "react";
import ResponsiveAppBar from "../../components/AppBar/ResponsiveAppBar";
import MapCards from "../../components/Cards/MapCards";
import EarningCard from "../../components/Cards/EarningCard";
import { Box, Grid } from "@mui/material";
import EngineeringCard from "../../components/Cards/EngineeringCard";
import { GetMyTickets } from "../../action/Ticket";
import { useDispatch, useSelector } from "react-redux";
function EngineerHome() {
  const { ticketData } = useSelector((state) => state.ticket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetMyTickets());
    // Get the meta[name="theme-color"] element
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    // Check if the element exists and the browser supports CSS variables (CSS Custom Properties)
    if (metaThemeColor && window.CSS && CSS.supports('color', 'var(--fake-var)')) {
      // Define your gradient using CSS variables
      const gradient = 'linear-gradient(to right, var(--start-color), var(--end-color))';

      // Apply the gradient CSS class to the body element or any other container element
      document.body.classList.add('gradient-theme');

      // Update the "content" attribute of the meta tag with the gradient value
      metaThemeColor.setAttribute('content', gradient);
    } else {
      // Fallback for browsers that don't support CSS variables or other gradient-related issues
      metaThemeColor.setAttribute('content', '#fff');
    }
  }, []);

  return (
    // <div  style={{backgroundColor:'red'}}>
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        //bgcolor: "#F8F9FA",
      }}
    >
      <Grid item xs={12}>
        <ResponsiveAppBar></ResponsiveAppBar>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          //bgcolor: "#fff1ef",
        }}
      >
        <Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            {ticketData.map((item, index) => (
              <EngineeringCard
                key={index}
                ticketData={item}
                //onlyvisibity={false}
              ></EngineeringCard>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // </div>
  );
}

export default EngineerHome;
