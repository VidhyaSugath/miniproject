import React, { useCallback } from "react";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";


export const defaultDrawerWidth = 260;
const minDrawerWidth = 50;
const maxDrawerWidth = 1000;

const useStyles = makeStyles(theme => ({
  drawer: {
    flexShrink: 0
  },
 
  dragger: {
    width: "5px",
    cursor: "ew-resize",
    padding: "4px 0 0",
    borderTop: "1px solid #ddd",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#f4f7f9"
  }
}));

export default function CustomDrawer() {
  const classes = useStyles();
  const [drawerWidth, setDrawerWidth] = React.useState(defaultDrawerWidth);

  const handleMouseDown = e => {
    document.addEventListener("mouseup", handleMouseUp, true);
    document.addEventListener("mousemove", handleMouseMove, true);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mouseup", handleMouseUp, true);
    document.removeEventListener("mousemove", handleMouseMove, true);
  };

  const handleMouseMove = useCallback(e => {
    const newWidth = e.clientX - document.body.offsetLeft;
    if (newWidth > minDrawerWidth && newWidth < maxDrawerWidth) {
      setDrawerWidth(newWidth);
    }
  }, []);

  return (
    <Drawer
    anchor="left"
      className={classes.drawer}
      variant="permanent"
      PaperProps={{ style: { width: drawerWidth } }}
    >
      <div />
      <div onMouseDown={e => handleMouseDown(e)} className={classes.dragger} />
      <div className="buttons">
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      </div>
      <Divider />
    </Drawer>
  );
}
