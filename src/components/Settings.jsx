import { User, Bell, Shield, Palette } from "lucide-react";

export default function Settings() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">Settings</h1>
        <p className="text-slate-600 mt-1">Manage your profile, preferences, notifications, and security.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <User className="h-5 w-5" />
            </div>
            <h2 className="font-medium text-slate-900">Profile</h2>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">First name</label>
                <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Alex" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Last name</label>
                <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Morgan" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="alex@mymail.com" />
            </div>
            <div className="pt-2">
              <button type="button" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm shadow hover:bg-slate-800">Save changes</button>
            </div>
          </form>
        </section>

        {/* Preferences */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Palette className="h-5 w-5" />
            </div>
            <h2 className="font-medium text-slate-900">Preferences</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">Theme</p>
                <p className="text-xs text-slate-600">Choose a display theme</p>
              </div>
              <select className="rounded-lg border border-slate-200 px-3 py-2 bg-white">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">Currency</p>
                <p className="text-xs text-slate-600">Primary currency for budgets</p>
              </div>
              <select className="rounded-lg border border-slate-200 px-3 py-2 bg-white">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Bell className="h-5 w-5" />
            </div>
            <h2 className="font-medium text-slate-900">Notifications</h2>
          </div>
          <div className="space-y-4">
            {[
              { label: "Budget limit alerts", desc: "Get notified when nearing limits" },
              { label: "New transaction summaries", desc: "Weekly summaries sent to your inbox" },
              { label: "Goal milestones", desc: "Celebrate progress automatically" },
            ].map((n) => (
              <label key={n.label} className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" defaultChecked />
                <div>
                  <p className="text-sm font-medium text-slate-900">{n.label}</p>
                  <p className="text-xs text-slate-600">{n.desc}</p>
                </div>
              </label>
            ))}
          </div>
        </section>

        {/* Security */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Shield className="h-5 w-5" />
            </div>
            <h2 className="font-medium text-slate-900">Security</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Change password</label>
              <div className="mt-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input type="password" placeholder="Current" className="rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <input type="password" placeholder="New" className="rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <input type="password" placeholder="Confirm" className="rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="pt-2">
                <button type="button" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm shadow hover:bg-indigo-700">Update password</button>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
              <div>
                <p className="text-sm font-medium text-slate-900">Two-factor authentication</p>
                <p className="text-xs text-slate-600">Add an extra layer of security</p>
              </div>
              <button type="button" className="rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">Configure</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
