import { ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import { appTheme } from "../themes/Theme";

function SkillHuntApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={appTheme}>
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default SkillHuntApp;
