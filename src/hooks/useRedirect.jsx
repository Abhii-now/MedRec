import { useState } from "react";
export const useRedirect = () => {
  const [redirect, setRedirect] = useState(false);
  try {
    window.ethereum.on("accountsChanged", function (accounts) {
      setRedirect(true);
    });
  } catch (e) {
    
  }
  return [redirect, setRedirect];
};
