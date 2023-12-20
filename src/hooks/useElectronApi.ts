// ********************************************************
// don't use this if you can use util/isElectron.ts instead
// ********************************************************

import { useEffect, useState } from "react";

function useElectronApi() {
  const [isApiAccessible, setIsApiAccessible] = useState(false);

  useEffect(() => {
    setIsApiAccessible(window.api !== undefined);
  }, []);

  return isApiAccessible;
}

export default useElectronApi;
