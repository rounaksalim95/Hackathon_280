import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header from "../src/views/Header/header";
import DashBoard from "../src/views/Container/DashBoard/DashBoard";

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b12a30",
    },
    secondary: {
      main: "#ff4400",
      contrastText: "#ffcc00",
    },
  },
});

function App() {
  const [country, setCountry] = useState("USA");
  const changeCountry = (ct) => {
    setCountry(ct);
  };
  return (
    <Router>
      <div className="AirlineApp">
        {/* <Header isLoggedIn={isLoggedIn} onIsLoggedIn={onIsLoggedIn} /> */}
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Header changeCountry={setCountry} />
          <Container fluid>
            <ThemeProvider theme={theme}>
              <Switch>
                <Route
                  path="/"
                  exact
                  component={() => <DashBoard country={country} />}
                />
                {/* <Route path='/home' exact component={() => <Home isLoggedIn={isLoggedIn} onIsLoggedIn={onIsLoggedIn} />} /> */}
              </Switch>
            </ThemeProvider>
          </Container>
        </Box>
      </div>
    </Router>
  );
}

export default App;
