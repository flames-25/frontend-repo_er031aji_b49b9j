import { PieChart, Plus, TrendingDown } from "lucide-react";

const budgets = [
  { id: 1, name: "Groceries", amount: 600, spent: 420, color: "bg-emerald-500" },
  { id: 2, name: "Dining", amount: 300, spent: 220, color: "bg-indigo-500" },
  { id: 3, name: "Transport", amount: 180, spent: 140, color: "bg-amber-500" },
  { id: 4, name: "Shopping", amount: 400, spent: 365, color: "bg-rose-500" },
];

function ProgressBar({ spent, amount, color }) {
  const pct = Math.min(100, Math.round((spent / amount) * 100));
  return (
    <div className="w-full h-2 rounded-full bg-slate-100">
      <div
        className={`h-2 rounded-full ${color}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function Budgets() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Budgets</h1>
          <p className="text-slate-600 text-sm mt-1">Stay on track with monthly spending limits by category.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm shadow hover:bg-indigo-700 transition">
          <Plus className="h-4 w-4" />
          New Budget
        </button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {budgets.map((b) => {
          const remaining = Math.max(0, b.amount - b.spent);
          const pct = Math.round((b.spent / b.amount) * 100);
          const over = b.spent > b.amount;
          return (
            <div key={b.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-9 w-9 rounded-lg ${b.color} text-white flex items-center justify-center`}>
                    <PieChart className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-medium text-slate-900">{b.name}</h3>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${over ? "bg-rose-50 text-rose-700" : "bg-emerald-50 text-emerald-700"}`}>
                  {over ? "Over" : `${pct}%`}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <ProgressBar spent={b.spent} amount={b.amount} color={b.color} />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Spent ${b.spent.toLocaleString()} / ${b.amount.toLocaleString()}</span>
                  <span className={`${over ? "text-rose-600" : "text-slate-700"}`}>
                    {over ? (
                      <span className="inline-flex items-center gap-1"><TrendingDown className="h-4 w-4" />Over by ${Math.abs(remaining).toLocaleString()}</span>
                    ) : (
                      <span>Left ${remaining.toLocaleString()}</span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
