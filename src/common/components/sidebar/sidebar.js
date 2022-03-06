import React from "react";
import {
  useStyles,
  SideBarTitle,
  SideBarListItems,
  SideBarListContent,
} from "./sidebarStyle";

const SideBar = ({ contents, handleClick, active }) => {
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
              active={active}
              onClick={() => handleClick(contents[item].id)}
            >
              <SideBarListContent
                className={index === 0 ? classes.defaultActive : ""}
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
