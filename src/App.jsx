import { useState } from "react";
import AuthHeader from "./components/AuthHeader";
import SocialButtons from "./components/SocialButtons";
import LoginForm from "./components/LoginForm";
import MarketingAside from "./components/MarketingAside";

export default function App() {
  const [showEmailForm, setShowEmailForm] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="flex items-center">
            <div className="w-full">
              <AuthHeader />

              <div className="mt-8 rounded-2xl border bg-white/70 backdrop-blur shadow-sm p-6">
                {showEmailForm ? (
                  <LoginForm />
                ) : (
                  <SocialButtons onEmail={() => setShowEmailForm(true)} />
                )}

                <div className="mt-6 text-center text-sm text-muted-foreground">
                  Don&apos;t have an account? <button className="text-indigo-600 hover:text-indigo-700 font-medium">Create one</button>
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
