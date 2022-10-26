import Typography from "@mui/material/Typography";

type JsonViewerProps = {
  object: any;
};

export function JsonViewer(props: JsonViewerProps) {
  const { object } = props;

  return (
    <Typography style={{ fontFamily: "Courier Prime", whiteSpace: "pre-wrap" }}>
      {JSON.stringify(object, null, 4)}
    </Typography>
  );
}
