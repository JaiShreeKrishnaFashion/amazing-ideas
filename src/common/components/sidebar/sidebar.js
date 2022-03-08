import React from "react";
import {
  useStyles,
  SideBarTitle,
  SideBarListItems,
  SideBarListContent,
} from "./sidebarStyle";

const SideBar = ({ contents, handleClick, active }) => {
  console.log("active", active);
  const classes = useStyles();
  return (
    <div className={classes.sidebarMain}>
      <div className={classes.main}>
        <SideBarTitle />
        {contents &&
          Object.keys(contents).length > 0 &&
          Object.keys(contents).map((item, index) => (
            <SideBarListItems
              key={index}
              onClick={(isActive) => handleClick(contents[item].id, isActive)}
            >
              <SideBarListContent
                active={active}
                className={({ isActive }) =>
                  isActive ? classes.active : classes.inActive
                }
              >
                {contents[item].name}
              </SideBarListContent>
            </SideBarListItems>
          ))}
      </div>
    </div>
  );
};

export default SideBar;
