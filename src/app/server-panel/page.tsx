import { GlobalContext } from "@/lib/components/layout/appBarLayout";
import { createContext, useContext } from "react";

export type ServerPanelContextDefinition = {
  test: boolean;
};

export const ServerPanelContext =
  createContext<ServerPanelContextDefinition>(null);

export default function ServerPanelHome() {
  const {
    ownershipInfo,
    currentTab,
    makeSnack,
    uploadInProgress,
    setUploadInProgress,
    metadataQuery: {
      queryResult: { species, bestStats: speciesBestStats, maps: backendMaps },
      exec: loadMetadata,
      isLoading: loadingMeta,
      error: metadataError,
      transactionId: metadataTransactionId,
    },
  } = useContext(GlobalContext);

  return ownershipInfo?.id && ownershipInfo?.name ? (
    <ServerPanelContext.Provider
      value={{ test: false }}
    ></ServerPanelContext.Provider>
  ) : null;
}
