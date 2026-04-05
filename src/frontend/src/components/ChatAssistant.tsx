import { useEffect, useRef, useState } from "react";
import { useSubmitChatMessage } from "../hooks/useQueries";

interface Message {
  id: number;
  role: "assistant" | "user";
  text: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    role: "assistant",
    text: "Looking for the perfect sound experience?",
  },
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (/price|cost|how much|₹|rupee/.test(lower)) {
    return "The SONO Pro is priced at ₹89,900. We offer 0% EMI options through our partners — HDFC, ICICI, and Axis Bank.";
  }
  if (/feature|anc|noise|cancel|battery|audio|sound|spatial/.test(lower)) {
    return "SONO Pro features hybrid Active Noise Cancellation, 60-hour battery life, Hi-Res Audio certification, and HRTF-personalized Spatial Audio technology.";
  }
  if (/ship|deliver|delivery|express/.test(lower)) {
    return "We offer free express shipping across India. Your SONO Pro will arrive in 2–4 business days, in our signature matte black packaging.";
  }
  if (/design|material|build|aluminum|leather|titanium|weight/.test(lower)) {
    return "Crafted from aerospace-grade 6061-T6 aluminum, full-grain nappa leather cushions, and titanium-reinforced headband — every detail is considered. It weighs just 245g.";
  }
  if (/color|colour|finish/.test(lower)) {
    return "SONO Pro is available in Midnight Black, Phantom White, and a limited-edition Deep Red. The Midnight Black is our most popular.";
  }
  if (/warranty|return|refund/.test(lower)) {
    return "Every SONO Pro comes with a 2-year international warranty. We also offer a 30-day no-questions-asked return policy.";
  }
  if (/bluetooth|connect|pair|multipoint/.test(lower)) {
    return "SONO Pro uses Bluetooth 5.4 with multipoint connection — stay connected to 3 devices simultaneously with zero re-pairing.";
  }
  if (/hello|hi|hey/.test(lower)) {
    return "Hello. I'm the SONO Concierge. I'm here to help you find your perfect sound experience. What would you like to know?";
  }
  return "I'd love to help you find your perfect sound experience. Feel free to ask about our models, features, pricing, or shipping.";
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const submitMutation = useSubmitChatMessage();

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [open]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) return;

    const userMsg: Message = { id: Date.now(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    scrollToBottom();

    submitMutation.mutate(text);

    setTimeout(() => {
      const response = getResponse(text);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "assistant", text: response },
      ]);
      scrollToBottom();
    }, 700);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      data-ocid="chat.panel"
    >
      {/* Chat panel */}
      {open && (
        <div
          className="chat-panel rounded-2xl overflow-hidden"
          style={{ width: "320px" }}
          data-ocid="chat.dialog"
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center justify-between"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "#cc0000",
                  boxShadow: "0 0 6px rgba(204,0,0,0.9)",
                }}
              />
              <span
                className="text-[#ededed] uppercase tracking-[0.16em]"
                style={{ fontSize: "10px", fontWeight: 400 }}
              >
                SONO Concierge
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-[#9a9a9a] hover:text-[#ededed] transition-colors"
              aria-label="Close chat"
              data-ocid="chat.close_button"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <title>Close</title>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            className="px-4 py-4 overflow-y-auto"
            style={{ height: "240px" }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-3 flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  style={{
                    maxWidth: "85%",
                    padding: "8px 12px",
                    borderRadius:
                      msg.role === "user"
                        ? "12px 12px 2px 12px"
                        : "12px 12px 12px 2px",
                    background:
                      msg.role === "user"
                        ? "rgba(180,0,0,0.5)"
                        : "rgba(255,255,255,0.05)",
                    border:
                      msg.role === "user"
                        ? "1px solid rgba(204,0,0,0.3)"
                        : "1px solid rgba(255,255,255,0.06)",
                    fontSize: "11px",
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: msg.role === "user" ? "#ededed" : "#c8c8c8",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            className="px-4 pb-4 pt-2"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div
              className="flex items-center gap-2 rounded-xl px-3 py-2"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about SONO..."
                className="flex-1 bg-transparent text-[#ededed] placeholder-[#555] outline-none"
                style={{ fontSize: "11px", fontWeight: 300 }}
                data-ocid="chat.input"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="text-[#cc0000] disabled:text-[#444] transition-colors"
                aria-label="Send message"
                data-ocid="chat.submit_button"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <title>Send</title>
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative flex items-center gap-2.5 rounded-full pl-4 pr-5 py-3 transition-all duration-300"
        style={{
          background: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: open
            ? "0 0 20px rgba(204,0,0,0.3), 0 8px 30px rgba(0,0,0,0.7)"
            : "0 0 12px rgba(204,0,0,0.15), 0 8px 30px rgba(0,0,0,0.6)",
        }}
        aria-label="Open SONO Concierge"
        data-ocid="chat.open_modal_button"
      >
        <div className="relative" style={{ width: "8px", height: "8px" }}>
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: "#cc0000",
              boxShadow: "0 0 8px rgba(204,0,0,1), 0 0 16px rgba(204,0,0,0.5)",
            }}
          />
        </div>
        <span
          className="text-[#ededed] uppercase tracking-[0.16em]"
          style={{ fontSize: "9px", fontWeight: 400 }}
        >
          SONO Concierge
        </span>
      </button>
    </div>
  );
}
