import { useEffect, useRef, useState } from "react";
import { Bot, Send, User, Sparkles } from "lucide-react";

function MessageBubble({ role, content }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`flex max-w-[85%] sm:max-w-[70%] items-start gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
        <div className={`h-8 w-8 rounded-full shrink-0 flex items-center justify-center ${isUser ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700"}`}>
          {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
        </div>
        <div className={`rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm border ${isUser ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-slate-800 border-slate-200"}`}>
          {content}
        </div>
      </div>
    </div>
  );
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I’m your money copilot. Ask me about your overview, budgets, or goals and I’ll summarize or make suggestions.",
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const viewportRef = useRef(null);

  useEffect(() => {
    if (!viewportRef.current) return;
    viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
  }, [messages]);

  const respond = (text) => {
    const t = text.toLowerCase();
    if (t.includes("budget")) {
      return "You’ve spent $1,145 out of $1,480 across tracked budgets this month (77%). Groceries is trending high — consider lowering Dining by $50 and shifting it to Groceries.";
    }
    if (t.includes("goal") || t.includes("save")) {
      return "You’re 62% to your Emergency Fund and 42% to Hawaii. Setting an auto-transfer of $250 twice a month would put you on track for Hawaii by August.";
    }
    if (t.includes("overview") || t.includes("net worth") || t.includes("spend")) {
      return "Net worth is up 2.3% this month. Cash flow positive at +$3,240. Monthly spend is trending down 3.8% vs last month.";
    }
    if (t.includes("tip") || t.includes("suggest")) {
      return "Tip: Add category rules for subscriptions so they’re auto-tagged. This keeps your monthly forecast accurate without manual cleanup.";
    }
    return "I can help summarize Overview, suggest Budget tweaks, or plan Savings Goals. Try: ‘How are my budgets doing?’ or ‘Help me finish my Hawaii goal.’";
  };

  const onSend = () => {
    const trimmed = input.trim();
    if (!trimmed || sending) return;

    const next = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setSending(true);

    setTimeout(() => {
      const reply = respond(trimmed);
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
      setSending(false);
    }, 600);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">AI Chat</h1>
        <p className="text-slate-600 text-sm mt-1">Ask questions about your money — get summaries and actionable suggestions.</p>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col h-[70vh] max-h-[800px]">
        <div className="px-4 sm:px-6 py-3 border-b border-slate-200 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium text-slate-800">Money Copilot</span>
          <span className="ml-auto text-xs text-slate-500">Experimental</span>
        </div>

        <div ref={viewportRef} className="flex-1 overflow-y-auto px-3 sm:px-6 py-4 space-y-4 bg-slate-50">
          {messages.map((m, idx) => (
            <MessageBubble key={idx} role={m.role} content={m.content} />
          ))}
          {sending && (
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-slate-400 animate-pulse" />
              Thinking...
            </div>
          )}
        </div>

        <div className="p-3 sm:p-4 border-t border-slate-200 bg-white">
          <div className="flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              placeholder="Ask about budgets, goals, or your overview..."
              className="flex-1 resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent max-h-32"
            />
            <button
              onClick={onSend}
              disabled={sending || input.trim().length === 0}
              className="inline-flex items-center justify-center gap-2 h-10 px-3 rounded-lg bg-indigo-600 text-white text-sm shadow hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
              Send
            </button>
          </div>
          <div className="mt-2 text-[11px] text-slate-500">
            Press Enter to send • Shift+Enter for newline
          </div>
        </div>
      </section>
    </main>
  );
}
