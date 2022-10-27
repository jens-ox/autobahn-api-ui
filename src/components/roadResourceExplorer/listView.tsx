import { useCallback, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { JsonViewer } from "../codeElements/jsonViewer";

interface Resource {
  identifier?: string;
  title?: string;
}

export type ListViewProps = {
  roadId: string;
  setSelectedResourceId: (resourceId?: string) => void;
  getList: (roadId: string) => Promise<Resource[] | undefined>;
};

export function ListView(props: ListViewProps) {
  const { roadId, setSelectedResourceId, getList } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [resources, setResources] = useState<Resource[]>();
  const [listViewTabIndex, setListViewTabIndex] = useState(0);
  const [selectedResourceIndex, setSelectedResourceIndex] = useState<number>();

  const getResources = useCallback(async () => {
    setIsLoading(true);

    try {
      const resources = await getList(roadId);
      setResources(resources);
    } catch (error) {
      console.error("Error fetching resources", error);
    } finally {
      setIsLoading(false);
    }
  }, [getList, roadId]);

  useEffect(() => {
    getResources();

    return () => {
      setResources(undefined);
      setSelectedResourceIndex(undefined);
      setSelectedResourceId(undefined);
      setListViewTabIndex(0);
    };
  }, [getResources, setSelectedResourceId]);

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
        <Tab label="Response" />
      </Tabs>

      <Box sx={{ maxHeight: 500, overflow: "auto" }}>
        {listViewTabIndex === 0 && (
          <List>
            {resources?.map((resource, index) => (
              <ListItemButton
                key={index}
                selected={selectedResourceIndex === index}
                onClick={() => {
                  setSelectedResourceIndex(index);
                  setSelectedResourceId(resource.identifier!);
                }}
              >
                <ListItemText primary={resource.title} />
              </ListItemButton>
            ))}
            {resources && resources.length > 0 && (
              <ListItemText primary={"No resources found."} />
            )}
          </List>
        )}

        {listViewTabIndex === 1 && <JsonViewer object={resources} />}
      </Box>
    </>
  );
}
