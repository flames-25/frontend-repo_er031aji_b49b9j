import { ArrowDownRight, ArrowUpRight, BadgeDollarSign } from "lucide-react";

const transactions = [
  { id: 1, merchant: "Whole Foods", category: "Groceries", amount: -86.45, date: "2025-11-02" },
  { id: 2, merchant: "Starbucks", category: "Dining", amount: -5.75, date: "2025-11-02" },
  { id: 3, merchant: "Payroll", category: "Income", amount: 2950.0, date: "2025-11-01" },
  { id: 4, merchant: "Lyft", category: "Transport", amount: -18.2, date: "2025-10-31" },
];

export default function TransactionsList() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
      <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">Recent Transactions</h3>
        <button className="text-xs text-indigo-600 hover:text-indigo-700">View all</button>
      </div>
      <ul className="divide-y divide-slate-200">
        {transactions.map((t) => (
          <li key={t.id} className="px-5 py-4 flex items-center justify-between hover:bg-slate-50">
            <div className="flex items-center gap-3">
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                t.amount < 0 ? "bg-rose-50 text-rose-600" : "bg-emerald-50 text-emerald-600"
              }`}>
                {t.amount < 0 ? (
                  <ArrowDownRight className="h-5 w-5" />
                ) : (
                  <ArrowUpRight className="h-5 w-5" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">{t.merchant}</p>
                <p className="text-xs text-slate-500">{t.category} • {new Date(t.date).toLocaleDateString()}</p>
              </div>
            </div>
            <div className={`text-sm font-semibold ${t.amount < 0 ? "text-rose-600" : "text-emerald-700"}`}>
              {t.amount < 0 ? "-" : "+"}${Math.abs(t.amount).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
      <div className="px-5 py-3 bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <BadgeDollarSign className="h-4 w-4" />
          Smart categorization enabled
        </div>
        <button className="text-xs text-slate-600 hover:text-slate-800">Manage rules</button>
      </div>
    </section>
  );
}
