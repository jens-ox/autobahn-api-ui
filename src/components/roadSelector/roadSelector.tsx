import React, { useCallback, useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { autobahnApiClient } from "../../apis/autobahn/client";
import { Roads } from "../../apis/autobahn/generated";
import { JsonViewer } from "../jsonViewer/jsonViewer";

export type RoadSelectorProps = {
  setSelectedRoad: (road: string) => void;
  handleNext: () => void;
};

export function RoadSelector(props: RoadSelectorProps) {
  const { setSelectedRoad, handleNext } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [roads, setRoads] = useState<Roads>();
  const [selectedIndex, setSelectedIndex] = React.useState<number>();
  const [listViewTabIndex, setListViewTabIndex] = useState(0);

  const getRoads = useCallback(async () => {
    setIsLoading(true);

    try {
      const roads = await autobahnApiClient.listAutobahnen();
      setRoads(roads);
    } catch (error) {
      console.error("Error fetching roads", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getRoads();
  }, [getRoads]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Tabs
        value={listViewTabIndex}
        onChange={(_, index) => setListViewTabIndex(index)}
        aria-label="basic tabs example"
      >
        <Tab label="Resources" />
        <Tab label="Raw Response" />
      </Tabs>

      {listViewTabIndex === 0 && (
        <List sx={{ maxHeight: 300, overflow: "auto" }}>
          {roads?.roads?.map((road, index) => (
            <ListItemButton
              key={index}
              selected={selectedIndex === index}
              onClick={() => {
                setSelectedIndex(index);
                setSelectedRoad(road);
                handleNext();
              }}
            >
              <ListItemText primary={road} />
            </ListItemButton>
          ))}
        </List>
      )}

      {listViewTabIndex === 1 && <JsonViewer object={roads?.roads} />}
    </>
  );
}
