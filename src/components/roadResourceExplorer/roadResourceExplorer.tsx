import { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import { ListView } from "./listView";
import { ItemView } from "./itemView";
import { CodeText } from "../codeElements/codeText";

interface Resource {
  identifier?: string;
  title?: string;
}

type RoadResourceExplorerProps = {
  roadId: string;
  listDisplayUrl: string;
  itemDisplayUrl: string;
  getList: (roadId: string) => Promise<Resource[] | undefined>;
  getDetail: (resourceId: string) => Promise<Resource | undefined>;
};

export function RoadResourceExplorer(props: RoadResourceExplorerProps) {
  const { roadId, listDisplayUrl, itemDisplayUrl, getDetail, getList } = props;

  const [selectedResourceId, setSelectedResourceId] = useState<string>();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} width="100%">
        <Grid xs={6}>
          <Typography>Fetch the list of resources for a road using</Typography>
          <CodeText text={listDisplayUrl} />

          <ListView
            roadId={roadId}
            setSelectedResourceId={setSelectedResourceId}
            getList={getList}
          />
        </Grid>
        <Grid xs={6}>
          <Typography>Select a resource to fetch it's details using</Typography>
          <CodeText text={itemDisplayUrl} />

          {selectedResourceId && (
            <ItemView resourceId={selectedResourceId} getDetail={getDetail} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
