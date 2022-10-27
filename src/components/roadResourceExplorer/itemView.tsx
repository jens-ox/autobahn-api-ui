import { useCallback, useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { JsonViewer } from "../codeElements/jsonViewer";

interface Resource {
  identifier?: string;
  title?: string;
}

export type ItemViewProps = {
  resourceId: string;
  getDetail: (resourceId: string) => Promise<Resource | undefined>;
};

export function ItemView(props: ItemViewProps) {
  const { resourceId, getDetail } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [resource, setResource] = useState<Resource>();
  const [itemViewTabIndex, setItemViewTabIndex] = useState(0);

  const getResource = useCallback(async () => {
    setIsLoading(true);

    try {
      const resource = await getDetail(resourceId);
      setResource(resource);
    } catch (error) {
      console.error("Error fetching resource", error);
    } finally {
      setIsLoading(false);
    }
  }, [resourceId, getDetail]);

  useEffect(() => {
    getResource();

    return () => {
      setResource(undefined);
    };
  }, [getResource]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Tabs
        value={itemViewTabIndex}
        onChange={(_, index) => setItemViewTabIndex(index)}
        aria-label="basic tabs example"
      >
        <Tab label="Resource" />
      </Tabs>

      {itemViewTabIndex === 0 && <JsonViewer object={resource} />}
    </>
  );
}
