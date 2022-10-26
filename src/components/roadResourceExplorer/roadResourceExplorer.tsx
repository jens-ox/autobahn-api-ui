import { useState } from "react";

import "@fontsource/courier-prime";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import { ListView } from "./listView";
import { ItemView } from "./itemView";

interface Resource {
  identifier?: string;
  title?: string;
}

type RoadResourceExplorerProps = {
  roadId: string;
  getList: (roadId: string) => Promise<Resource[] | undefined>;
  getDetail: (resourceId: string) => Promise<Resource | undefined>;
};

export function RoadResourceExplorer(props: RoadResourceExplorerProps) {
  const { roadId, getDetail, getList } = props;

  const [selectedResourceId, setSelectedResourceId] = useState<string>();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <ListView {...{ roadId, setSelectedResourceId, getList }} />
        </Grid>
        <Grid xs={8}>
          {selectedResourceId && (
            <ItemView {...{ resourceId: selectedResourceId, getDetail }} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
