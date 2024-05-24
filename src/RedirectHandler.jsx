import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import redirects from "./redirects.json";

const RedirectHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1); // Remove the leading '/'
    console.log(path);
    console.log(redirects[path]);

    const redirectTo = redirects[path];

    if (redirectTo) {
      window.location.href = redirectTo; // Redirect to the external link
    }
    // If no match is found, do nothing and let the router render the original path
  }, [location]);

  return null;
};

export default RedirectHandler;
