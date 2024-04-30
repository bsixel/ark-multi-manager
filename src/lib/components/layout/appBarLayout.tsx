"use client";

import {
  AppBar,
  IconButton,
  LinearProgress,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";
import { OwnershipInfo } from "@/lib/types/global";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LOCAL_PREFIX } from "@/lib/utils/constants";
import { DEFAULT_GET_OPTIONS } from "@/lib/utils/ApiHelper";
import { usePathname } from "next/navigation";
import SnackAlert from "../display/SnackAlert";
import { useRouter } from "next/navigation";

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

export default function AppBarLayout({
  children,
}: {
  children: Array<JSX.Element>;
}) {
  const router = useRouter();
  const [globalOwnershipId, setGlobalOwnershipId] = useState<string>("");
  const [loadingOwnershipInfo, setLoadingOwnershipInfo] =
    useState<boolean>(false);
  const [ownershipInfo, setOwnershipInfo] = useState<OwnershipInfo>({});
  const [currentTab, setCurrentTab] = useState<number>(0);
  const pathname = usePathname();
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    setGlobalOwnershipId(localStorage.getItem(`${LOCAL_PREFIX}ownershipId`));
  }, []);

  const loading = useMemo(() => {
    return loadingOwnershipInfo;
  }, [loadingOwnershipInfo]);

  useEffect(() => {
    if (ownershipInfo.id) {
      localStorage.setItem(`${LOCAL_PREFIX}ownershipId`, ownershipInfo.id);
    }
  }, [ownershipInfo?.id]);

  const makeSnack = useCallback((level, msg) => {
    // It doesn't haven't to be perfect this'll almost never happen twice in a row, calm down
    const newSnackId = `${Math.random()}`;
    const newSnack = {
      snackId: newSnackId,
      level,
      message: msg,
    };
    setSnacks((prevSnacks) => [
      ...prevSnacks,
      <SnackAlert key={newSnackId} snackOptions={newSnack} />,
    ]);
  }, []);

  useEffect(() => {
    if (
      globalOwnershipId != null &&
      globalOwnershipId != "null" &&
      globalOwnershipId != undefined &&
      globalOwnershipId != "undefined" &&
      globalOwnershipId != ""
    ) {
      setLoadingOwnershipInfo(true);
      fetch(`/api/ownership/${globalOwnershipId}`, DEFAULT_GET_OPTIONS)
        .then(async (resp) => {
          const loadedOwnershipInfo = await resp.json();
          setOwnershipInfo(loadedOwnershipInfo);
          router.push("home");
          makeSnack("success", "Successfully loaded tracking set!");
        })
        .catch((err) => {
          makeSnack("error", "Problem loading tracking set!");
          console.error("Problem loading tracking set:", err);
        })
        .finally(() => {
          setLoadingOwnershipInfo(false);
        });
    }
  }, [globalOwnershipId, makeSnack, router]);

  return (
    <>
      <GlobalContext.Provider
        value={{
          ownershipInfo,
          setGlobalOwnershipId,
          currentTab,
          makeSnack,
        }}
      >
        {snacks}
        <AppBar>
          <Toolbar>
            <Stack
              className="w-full"
              direction="row"
              justifyContent="space-between"
            >
              <Stack
                color="primary"
                direction="row"
                justifyContent="center"
                justifyItems="center"
                alignItems="center"
              >
                <IconButton
                  href="/"
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <HomeIcon />
                </IconButton>
                {ownershipInfo?.id && pathname.includes("home") ? (
                  <>
                    <Typography color="accent">
                      Welcome, {ownershipInfo.name}!
                    </Typography>
                    <Tabs
                      className="px-4"
                      value={currentTab}
                      onChange={(event, newTab) => setCurrentTab(newTab)}
                      aria-label="home page tabs"
                      sx={{
                        "& .MuiTab-textColorPrimary": {
                          color: "#EBC95B",
                        },
                        "& .MuiTab-root.Mui-selected": {
                          color: "#233058",
                        },
                      }}
                    >
                      <Tab
                        label="Creature Table"
                        tabIndex={0}
                        id="creature-table-tab"
                      />
                      <Tab label="Genealogy " tabIndex={1} id="genealogy-tab" />
                    </Tabs>
                  </>
                ) : null}
              </Stack>
              <Typography alignContent="center">
                {globalOwnershipId ? globalOwnershipId : null}
              </Typography>
            </Stack>
          </Toolbar>
          {loading ? <LinearProgress color="secondary" /> : null}
        </AppBar>
        {children}
      </GlobalContext.Provider>
    </>
  );
}
