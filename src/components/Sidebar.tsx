import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import { Home, Notifications, BarChart, Person } from "@mui/icons-material";
import React from "react";

export default function Sidebar() {
  return (
    <Drawer variant="permanent" sx={{ width: 80, flexShrink: 0 }}>
      <List  style={{marginTop:"60px"}}>
        {[Home, Notifications, BarChart, Person].map((Icon, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
