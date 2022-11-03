import { ApiExplorer } from "./components/apiExplorer/apiExplorer";
import { MenuBar } from "./components/menuBar/menuBar";
import CSSBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CSSBaseline />
      <MenuBar />
      <ApiExplorer />
    </>
  );
}

export default App;
