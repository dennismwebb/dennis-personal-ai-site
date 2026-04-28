"use client";

import { useState } from "react";
import { useChat } from "../../hooks/useChat";

export default function ChatPage() {
  const { messages, loading, send } = useChat();
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    send(input);
    setInput("");
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dennis AI Assistant</h1>

      <div className="space-y-4 mb-6">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.role === "user"
                ? "bg-blue-600 text-white p-3 rounded-lg ml-auto max-w-[80%]"
                : "bg-gray-200 text-black p-3 rounded-lg mr-auto max-w-[80%]"
            }
          >
            {m.content}
          </div>
        ))}

        {loading && (
          <div className="bg-gray-200 text-black p-3 rounded-lg mr-auto max-w-[80%]">
            ...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Dennis anything"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}
