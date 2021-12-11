import { API_URL } from "../utils/constants";
import users from "./users.json";

import React from "react";

function auth() {
    users.map(item=>{
        console.log(item);
    })
  return (
    <div>
    </div>
  );
}

export default auth;
