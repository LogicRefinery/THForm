import { useEffect } from "react";

export const MswProvider = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("@/msw/browser");
    }
  }, []);

  return null;
};
