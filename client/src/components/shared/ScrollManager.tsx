import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

export default function ScrollManager() {
  const [location] = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    if (prevLocation.current !== location) {
      prevLocation.current = location;

      if (!window.location.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}
