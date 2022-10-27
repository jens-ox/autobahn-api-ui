import React, { useState } from "react";
import { useTheme } from "@mui/material";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";

import { About } from "../about/about";
import { RoadSelector } from "../roadSelector/roadSelector";
import { RoadExplorer } from "../roadExplorer/roadExplorer";
import { API_BASE_URL } from "../../apis/autobahn/constants";

export function ApiExplorer() {
  const [selectedRoad, setSelectedRoad] = useState<string>();
  const [activeStep, setActiveStep] = React.useState(0);

  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box sx={{ margin: theme.spacing(4) }}>
      <About />

      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
        <Step key={0}>
          <StepButton
            color="inherit"
            onClick={() => {
              setSelectedRoad(undefined);
              setActiveStep(0);
            }}
          >
            {!selectedRoad && "Fetch all roads"}
            {selectedRoad && `Selected road: ${selectedRoad}`}
          </StepButton>
          <StepContent>
            <Grid container spacing={2} width="100%">
              <Grid xs={6}>
                <Typography>
                  The road is the base resource for the Autobahn API. We can use
                  the base url directly to fetch all available roads. Select a
                  road to explore the API endpoints available for fetching data
                  related to a road.
                </Typography>

                <br />

                <Typography
                  style={{
                    fontFamily: "Courier Prime",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  HTTP GET: {API_BASE_URL}
                </Typography>

                <RoadSelector
                  {...{
                    setSelectedRoad,
                    handleNext,
                    roadId: selectedRoad,
                  }}
                />
              </Grid>
            </Grid>
          </StepContent>
        </Step>

        <Step key={1}>
          <StepLabel>Fetching resources related to a road</StepLabel>
          <StepContent>
            {selectedRoad && <RoadExplorer roadId={selectedRoad} />}
          </StepContent>
        </Step>
      </Stepper>
    </Box>
  );
}
