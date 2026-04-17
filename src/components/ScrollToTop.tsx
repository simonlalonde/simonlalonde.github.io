import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component ensures that the window scrolls to the top
 * whenever the route changes. This is a standard UX pattern for 
 * React Single Page Applications (SPAs).
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top of the page on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // We use instant to avoid jarring smooth scrolls during navigation
    });
  }, [pathname]);

  return null;
}
