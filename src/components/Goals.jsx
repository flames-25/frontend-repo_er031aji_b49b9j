import { Target, Plus, CalendarDays, CheckCircle2 } from "lucide-react";

const goals = [
  { id: 1, name: "Emergency Fund", target: 10000, saved: 6200, due: "2026-06-01" },
  { id: 2, name: "Hawaii Trip", target: 4500, saved: 1900, due: "2025-08-15" },
  { id: 3, name: "New Laptop", target: 2200, saved: 900, due: "2025-12-01" },
];

function GoalProgress({ saved, target }) {
  const pct = Math.min(100, Math.round((saved / target) * 100));
  return (
    <div className="w-full h-2 rounded-full bg-slate-100">
      <div className="h-2 rounded-full bg-indigo-600" style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function Goals() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Goals</h1>
          <p className="text-slate-600 text-sm mt-1">Set targets and watch your progress climb month by month.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm shadow hover:bg-indigo-700 transition">
          <Plus className="h-4 w-4" />
          New Goal
        </button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {goals.map((g) => {
          const pct = Math.round((g.saved / g.target) * 100);
          const remaining = Math.max(0, g.target - g.saved);
          const dueStr = new Date(g.due).toLocaleDateString();
          return (
            <div key={g.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-medium text-slate-900">{g.name}</h3>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">{pct}%</span>
              </div>

              <div className="mt-4 space-y-3">
                <GoalProgress saved={g.saved} target={g.target} />
                <div className="flex items-center justify-between text-sm text-slate-700">
                  <span>Saved ${g.saved.toLocaleString()} / ${g.target.toLocaleString()}</span>
                  <span className="inline-flex items-center gap-1 text-slate-600"><CalendarDays className="h-4 w-4" />{dueStr}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  {remaining === 0 ? (
                    <span className="inline-flex items-center gap-1 text-emerald-700"><CheckCircle2 className="h-4 w-4" />Completed</span>
                  ) : (
                    <span className="text-slate-600">Remaining ${remaining.toLocaleString()}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
