import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  let location = useLocation();
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>
          WRONG ENDPOINT BUCKO, NO MATCH FOR <code>{location.pathname}</code>
        </h1>
      </div>
    </div>
  );
}

export default NotFound;
