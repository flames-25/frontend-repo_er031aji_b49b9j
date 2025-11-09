import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import AccountsTable from "./components/AccountsTable";
import TransactionsList from "./components/TransactionsList";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">Overview</h1>
          <p className="text-slate-600 text-sm mt-1">
            Track your net worth, accounts, and spending in one clean dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <SummaryCards />
            <TransactionsList />
          </div>
          <div className="lg:col-span-1">
            <AccountsTable />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
