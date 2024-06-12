"use client";

import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { OwnershipInfo } from "@/lib/types/global";
import { createContext } from "react";

export type GlobalContextDefinition = {
  ownershipInfo: OwnershipInfo;
  setGlobalOwnershipId: (id: string) => void;
  currentTab: number;
  makeSnack: (level: string, msg: string) => void;
};

export const GlobalContext = createContext<GlobalContextDefinition>({
  ownershipInfo: null,
  setGlobalOwnershipId: null,
  currentTab: 0,
  makeSnack: () => {},
});

export default function FooterLayout() {
  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Typography margin={2}>
            Issues / Bug Reports
            <IconButton
              href="https://github.com/bsixel/ark-multi-manager/issues"
              target="_blank"
              rel="noreferrer"
              size="large"
              edge="start"
              color="inherit"
              aria-label="github issues"
              sx={{ mx: 0.25 }}
            >
              <GitHub />
            </IconButton>
          </Typography>
          <Typography color="accent">
            <Link
              href="https://www.curseforge.com/ark-survival-ascended/mods/ark-smart-breeding-export-gun"
              target="_blank"
              rel="noreferrer"
            >
              Export Gun
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
