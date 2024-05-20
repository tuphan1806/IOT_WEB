import React, { useEffect, useState } from "react";
import axios from "axios";
import PaginationTable from "./components/dataComponents/PaginationTable";
import "./styles/ActionHistory.css"

function ActionHistory() {
  return (
    <div className="container">
      <PaginationTable
        endpoint={"get_action_history"}
        headers={["ID", "Device", "Action", "Time"]}
      />
    </div>
  );
}

export default ActionHistory;
