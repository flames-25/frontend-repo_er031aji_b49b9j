import { Banknote, CreditCard, PiggyBank } from "lucide-react";

const accounts = [
  { id: 1, name: "Chase Checking", type: "Checking", balance: 3540.23, icon: Banknote },
  { id: 2, name: "Amex Gold", type: "Credit Card", balance: -1240.12, icon: CreditCard },
  { id: 3, name: "Ally Savings", type: "Savings", balance: 18240.19, icon: PiggyBank },
];

export default function AccountsTable() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
      <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">Accounts</h3>
        <span className="text-xs text-slate-500">Linked: {accounts.length}</span>
      </div>
      <div className="divide-y divide-slate-200">
        {accounts.map((acc) => (
          <div key={acc.id} className="px-5 py-4 flex items-center justify-between hover:bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                <acc.icon className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">{acc.name}</p>
                <p className="text-xs text-slate-500">{acc.type}</p>
              </div>
            </div>
            <div className={`text-sm font-semibold ${acc.balance < 0 ? "text-rose-600" : "text-slate-900"}`}>
              {acc.balance < 0 ? "-" : ""}${Math.abs(acc.balance).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
