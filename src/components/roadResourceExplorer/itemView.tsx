import { useCallback, useEffect, useState } from "react";

import "@fontsource/courier-prime";
import CircularProgress from "@mui/material/CircularProgress";

import { JsonViewer } from "../jsonViewer/jsonViewer";

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

  return <JsonViewer object={resource} />;
}
