"use client";

import { useChat } from "@/hooks/useChat";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function Chat() {
  const { messages, sendMessage, isLoading } = useChat();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("message") as HTMLInputElement;
    const text = input.value.trim();
    if (!text) return;

    input.value = "";
    await sendMessage(text);
  };

  return (
    <div className="flex h-full">

      {/* LEFT COLUMN — Avatar */}
      <div className="hidden md:flex w-1/3 lg:w-1/4 items-start justify-center pt-10">
        <Image
          src="/avatars/waving.png"
          alt="Dennis avatar"
          width={260}
          height={260}
          className="rounded-full object-contain"
          priority
        />
      </div>

      {/* RIGHT COLUMN — Chat */}
      <div className="flex flex-col flex-1 relative bg-gradient-to-b from-white to-slate-50">

        {/* Scrollable messages */}
        <div className="flex-1 overflow-y-auto px-6 pb-32 pt-10 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`
                  max-w-[75%] p-4 rounded-2xl shadow
                  ${
                    msg.role === "user"
                      ? "bg-slate-900 text-white"
                      : "bg-white border border-slate-200 text-slate-900"
                  }
                `}
              >
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 text-slate-500 px-4 py-2 rounded-2xl shadow text-sm italic">
                Dennis is thinking…
              </div>
            </div>
          )}
        </div>

        {/* Static input bar */}
        <form
          onSubmit={handleSubmit}
          className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 flex gap-3"
        >
          <input
            type="text"
            name="message"
            placeholder="Ask Dennis anything..."
            className="
              flex-1 px-4 py-3 rounded-xl border border-slate-300
              focus:outline-none focus:ring-2 focus:ring-slate-500
              bg-white text-slate-900 placeholder-slate-400
            "
          />
          <button
            type="submit"
            className="
              px-6 py-3 rounded-xl text-white font-semibold
              bg-gradient-to-r from-indigo-600 to-violet-600
              shadow hover:shadow-md transition
            "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
