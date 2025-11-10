import { Wallet, Search, Plus, Settings, MessageCircle } from "lucide-react";

export default function Navbar({ onOpenChat, onOpenSettings }) {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
            <Wallet className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-900 text-lg tracking-tight">Monarch Money</span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search transactions, accounts..."
              className="pl-10 pr-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm w-72"
            />
          </div>
          <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm shadow hover:bg-indigo-700 transition">
            <Plus className="h-4 w-4" />
            Add Transaction
          </button>
          <button onClick={onOpenChat} className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50">
            <MessageCircle className="h-4 w-4 text-slate-600" />
          </button>
          <button onClick={onOpenSettings} className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50">
            <Settings className="h-4 w-4 text-slate-600" />
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={onOpenChat} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-slate-700">
            <MessageCircle className="h-4 w-4" /> Chat
          </button>
          <button onClick={onOpenSettings} className="p-2 rounded-lg border border-slate-200 text-slate-700">
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
