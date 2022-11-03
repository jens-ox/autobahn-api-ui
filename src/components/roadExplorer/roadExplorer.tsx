import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

import { roadResources } from "./constants";
import { RoadResourceExplorer } from "../roadResourceExplorer/roadResourceExplorer";

type RoadExplorerProps = {
  roadId?: string;
};

export function RoadExplorer(props: RoadExplorerProps) {
  const { roadId } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Grid container spacing={2} width="100%">
        <Grid xs={2}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={selectedIndex}
            onChange={(_, value) => setSelectedIndex(value)}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            {roadResources.map((resource, index) => (
              <Tab key={index} label={resource.label} />
            ))}
          </Tabs>
        </Grid>
        <Grid xs={10}>
          <RoadResourceExplorer
            {...{
              roadId: roadId!,
              ...roadResources[selectedIndex].componentProps,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
