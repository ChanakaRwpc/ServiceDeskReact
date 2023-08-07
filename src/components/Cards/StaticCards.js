import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import axios from "axios";

export default function StaticCards() {
  return (
    <div>
      <Card
        sx={{
          width: 100,
          height: 100,
          borderRadius: "10%",
          backgroundColor: "#7a7e9a",
        }}
      >
        <CardActionArea className="d-flex justify-content-center align-items-center">
          <QrCodeScannerIcon
            style={{ width: "100%", height: "100%", color: "#fff" }}
          />
        </CardActionArea>
      </Card>
      <Typography variant="subtitle1" align="center">
        Scan
      </Typography>
    </div>
  );
}
