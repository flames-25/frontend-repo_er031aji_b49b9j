import { Home, Target, WalletCards } from "lucide-react";

export default function Tabs({ current, onChange }) {
  const items = [
    { key: "overview", label: "Overview", icon: Home },
    { key: "budgets", label: "Budgets", icon: WalletCards },
    { key: "goals", label: "Goals", icon: Target },
  ];

  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
      <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-xl p-1 border border-slate-200 shadow-sm overflow-x-auto">
        {items.map((it) => {
          const ActiveIcon = it.icon;
          const active = current === it.key;
          return (
            <button
              key={it.key}
              onClick={() => onChange(it.key)}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition whitespace-nowrap ${
                active ? "bg-indigo-600 text-white" : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <ActiveIcon className="h-4 w-4" />
              {it.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
