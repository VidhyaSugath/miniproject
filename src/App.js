import './App.css';
import Modal from '../src/Components/Modal';
import Typography from "@mui/material/Typography";
import CustomLeft from "./Components/DrawerLeft";
import CustomRight from "./Components/DrawerRight";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

function App() {

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: 100,

    },
    content: {
      flexGrow: 1,
      padding: 10,
    },
  }));
  
  const theme = createTheme();
  const classes = useStyles()
  return (
    <>
      <div className='header'>
      </div>
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            <Modal />
          </Typography>
        </Toolbar>
      </AppBar>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CustomLeft />
          <CustomRight />
        </div>
      </ThemeProvider>
    </>
  );
}
export default App;
