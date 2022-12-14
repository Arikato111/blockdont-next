import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    (async () => {
      let getT = getCookie("token");
      console.log(getT);
      if (getT) {
        await axios.post(location.origin + "/api/logout", {
          token: getT,
        });
        deleteCookie("token");
        location.href = "/login";
      }
    })();
  }, []);
  return "";
}
