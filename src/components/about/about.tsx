import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { API_BASE_URL } from "../../apis/autobahn/constants";
import { CodeText } from "../codeElements/codeText";

export function About() {
  const theme = useTheme();

  return (
    <Box sx={{ marginBottom: theme.spacing(2) }}>
      <Typography variant="body1">
        {"The Autobahn API is maintained by "}
        <Link href="https://www.autobahn.de/">Autobahn GmbH</Link>.
      </Typography>
      <br />
      <Typography variant="body1">
        {"Documentation for the Autobahn API is maintained by "}
        <Link href="https://bund.dev/">bundDEV</Link>
        {" and can be found "}
        <Link href="https://autobahn.api.bund.dev/">here</Link>.
      </Typography>
      <br />
      <Typography variant="body1">
        This tool is meant for exploring the API to see what kind of endpoints
        are available and what kind of data is returned. For a detailed look at
        the endpoints, including the request and response schemas, see the
        bundDEV <Link href="https://autobahn.api.bund.dev/">documentation</Link>
        .
      </Typography>
      <br />
      <Typography variant="body1">The base url for the API is</Typography>
      <br />
      <CodeText text={API_BASE_URL} />
    </Box>
  );
}
