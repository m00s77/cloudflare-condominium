import React from "react";
import ResidentsTable from "./components/ResidentsTable";

export default function App() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Cloudflare Condominium</h1>
      <ResidentsTable />
    </div>
  );
}
