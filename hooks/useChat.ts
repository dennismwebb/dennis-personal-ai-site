"use client";

import { useState } from "react";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (text: string) => {
    // Add user message
    setMessages(prev => [...prev, { role: "user", content: text }]);

    // Add placeholder assistant message
    setMessages(prev => [...prev, { role: "assistant", content: "" }]);

    setIsLoading(true);

    const response = await fetch("http://localhost:5049/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    let fullText = "";

    while (true) {
      const { done, value } = await reader!.read();
      if (done) break;

      const chunk = decoder.decode(value);

      // Try to parse JSON chunks from backend
      try {
        const json = JSON.parse(chunk);
        if (json.reply) {
          fullText += json.reply;
        } else {
          fullText += chunk;
        }
      } catch {
        // Not JSON → append raw text
        fullText += chunk;
      }

      // Update last assistant message
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: fullText
        };
        return updated;
      });
    }

    setIsLoading(false);
  };

  return {
    messages,
    sendMessage,
    isLoading
  };
}
