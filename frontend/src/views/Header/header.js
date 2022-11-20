import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Logo } from "../../logo.svg";
import Badge from "@mui/material/Badge";
import { bindActionCreators } from "redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { userActionCreator } from "../../reduxutils/actions.js";

function Header(props) {
  const dispatch = useDispatch();
  const setCountry = bindActionCreators(userActionCreator.setCountry, dispatch);
  const country = useSelector((state) => state.userInfo.country);
  const setName = bindActionCreators(userActionCreator.setName, dispatch);
  const disableAnno = bindActionCreators(
    userActionCreator.disableAnno,
    dispatch
  );
  const disablePredict = bindActionCreators(
    userActionCreator.disablePredict,
    dispatch
  );
  const name = useSelector((state) => state.userInfo.name);
  const handleNameChange = (e) => {
    let val = e.target.value;
    setName(val);
    if (val == "Government Representive") {
      disablePredict(false);
      disableAnno(true);
    } else {
      disablePredict(true);
      disableAnno(false);
    }
  };
  return (
    <>
      <AppBar
        style={{ background: "#ffff" }}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar color="white">
          <Typography variant="h6" noWrap component="div">
            <Logo height="50px" width="50px" />
          </Typography>
          <Typography fontWeight="Bold" color="Black">
            Macro Economic & Food Security
          </Typography>
          &nbsp;
          <div className="row">
            <div className="col">
              <select
                name="Country"
                id="country-select"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              >
                <option value="India">INDIA</option>
                <option value="USA">USA</option>
                <option value="China">CHINA</option>
                <option value="Ecuador">ECUADOR</option>
              </select>
            </div>
            <div className="col">
              <select
                name="User"
                id="user-select"
                onChange={handleNameChange}
                value={name}
              >
                <option value="Government Representive">
                  Government Representive
                </option>
                <option value="Researcher">Researcher</option>
              </select>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
