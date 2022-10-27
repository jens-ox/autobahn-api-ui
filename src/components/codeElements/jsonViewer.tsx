import "@fontsource/courier-prime";
import Typography from "@mui/material/Typography";

type JsonViewerProps = {
  object: any;
};

export function JsonViewer(props: JsonViewerProps) {
  const { object } = props;

  return (
    <Typography
      sx={{
        fontFamily: "Courier Prime",
        whiteSpace: "pre",
        maxHeight: 500,
        overflow: "auto",
      }}
    >
      {JSON.stringify(object, null, 2)}
    </Typography>
  );
}
