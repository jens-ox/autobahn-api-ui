import "@fontsource/courier-prime";
import Typography from "@mui/material/Typography";

type CodeTextProps = {
  text: string;
};

export function CodeText(props: CodeTextProps) {
  const { text } = props;

  return (
    <Typography
      style={{
        fontFamily: "Courier Prime",
      }}
    >
      {text}
    </Typography>
  );
}
