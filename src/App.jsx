import { useState } from "react";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Overview from "./components/Overview";
import Budgets from "./components/Budgets";
import Goals from "./components/Goals";

function App() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Tabs current={tab} onChange={setTab} />

      {tab === "overview" && <Overview />}
      {tab === "budgets" && <Budgets />}
      {tab === "goals" && <Goals />}
    </div>
  );
}

export default App;
