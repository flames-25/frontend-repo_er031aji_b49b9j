import { useState } from "react";
import AuthHeader from "./components/AuthHeader";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import MarketingAside from "./components/MarketingAside";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Overview from "./components/Overview";
import Budgets from "./components/Budgets";
import Goals from "./components/Goals";
import Chatbot from "./components/Chatbot";
import Settings from "./components/Settings";

export default function App() {
  // App-level state
  const [mode, setMode] = useState("auth"); // 'auth' | 'app'
  const [authMode, setAuthMode] = useState("login"); // 'login' | 'signup'
  const [tab, setTab] = useState("overview");

  const onLoginSuccess = () => {
    setMode("app");
  };

  if (mode === "auth") {
    // Render auth layout
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="flex items-center">
              <div className="w-full">
                <AuthHeader />

                <div className="mt-8 rounded-2xl border bg-white/70 backdrop-blur shadow-sm p-6">
                  {authMode === "login" ? (
                    <LoginForm onSuccess={onLoginSuccess} />
                  ) : (
                    <SignupForm />
                  )}

                  <div className="mt-6 text-center text-sm text-muted-foreground">
                    {authMode === "login" ? (
                      <>
                        Don&apos;t have an account? {" "}
                        <button
                          className="text-indigo-600 hover:text-indigo-700 font-medium"
                          onClick={() => setAuthMode("signup")}
                        >
                          Create one
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account? {" "}
                        <button
                          className="text-indigo-600 hover:text-indigo-700 font-medium"
                          onClick={() => setAuthMode("login")}
                        >
                          Sign in
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-6 text-center text-xs text-gray-500">
                  By continuing you agree to our <button className="underline">Terms</button> and <button className="underline">Privacy Policy</button>.
                </div>
              </div>
            </div>

            <MarketingAside />
          </div>
        </div>
      </div>
    );
  }

  // App dashboard UI
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar onOpenChat={() => setTab("chat")} onOpenSettings={() => setTab("settings")} />
      <Tabs current={tab} onChange={setTab} />
      {tab === "overview" && <Overview />}
      {tab === "budgets" && <Budgets />}
      {tab === "goals" && <Goals />}
      {tab === "chat" && <Chatbot />}
      {tab === "settings" && <Settings />}
    </div>
  );
}
