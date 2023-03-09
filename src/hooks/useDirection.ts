import React, { useEffect } from "react";

function useDirection(dir: "rtl" | "ltr" | undefined = "ltr") {
  useEffect(() => {
    if (dir === "rtl") {
      document?.documentElement?.setAttribute("dir", "rtl");
    } else {
      document?.documentElement?.setAttribute("dir", "ltr");
    }
  }, [dir]);

  return;
}

export default useDirection;
